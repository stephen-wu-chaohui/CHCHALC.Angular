import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import * as _ from 'lodash';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { EditingService } from '../editing.service';
import { Story } from 'src/app/data/api-data';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent implements OnInit {

  formChanges = new FormGroup({
    image: new FormControl(''),
    title: new FormGroup({
      chinese: new FormControl(''),
      english: new FormControl('')
    }),
    subtitle: new FormGroup({
      chinese: new FormControl(''),
      english: new FormControl('')
    }),
    description: new FormGroup({
      chinese: new FormControl(''),
      english: new FormControl('')
    }),
    address: new FormGroup({
      chinese: new FormControl(''),
      english: new FormControl('')
    }),
    start: new FormControl(''),
    minutes: new FormControl(''),
    reference: new FormGroup({
      chinese: new FormControl(''),
      english: new FormControl('')
    }),
  });
  deleted = false;
  localUrl = '';

  show = false;
  story: Story;
  fileSelected: File;

  confirmingClose = false;
  confirmingHide = false;
  confirmingRecover = false;

  constructor(private storage: AngularFireStorage,
              public data: ChchalcDataService,
              private editingService: EditingService) {
    editingService.register(this);
  }

  ngOnInit(): void {
  }

  async edit(story: Story): Promise<boolean> {
    this.story = story;
    this.fillContent(story);
    this.fileSelected = null;
    this.openDialog();
    return false;
  }

  async OnClickSaveChanges() {
    this.confirmingClose = false;
    this.confirmingHide = false;
    this.confirmingRecover = false;

    // .... upload image from localURL to changed.image
    this.uploadImage().then(result => {
      console.log('uploadImage', result);
      const newRevision = this.acceptChanges();
      this.editingService.save(newRevision).then(
        res => {
          if (res) {
            this.closeDialog();
          }
        });
    });
  }

  private async uploadImage() {
    const orgfile = this.fileSelected;
    if (!this.fileSelected) {
      return true;
    }
    const ref = this.storage.ref(`LIBRARY/${orgfile.lastModified}-${orgfile.name}`);
    ref.put(orgfile).then( () => {
      ref.getDownloadURL().subscribe(path =>
        this.localUrl = path
      );
    });
  }

  private openDialog() {
    this.show = true;
  }

  private closeDialog() {
    this.show = false;
  }

  OnClickClose() {
    this.confirmingClose = !this.confirmingClose;
    if (!this.confirmingClose) {
      this.closeDialog();
    }
  }

  OnClickCancelClose() {
    this.confirmingClose = false;
    this.confirmingHide = false;
    this.confirmingRecover = false;
  }

  OnClickHide() {
    this.confirmingHide = !this.confirmingHide;
    if (!this.confirmingHide) {
      this.deleted = true;
    }
  }

  OnClickCancelHide() {
    this.confirmingClose = false;
    this.confirmingHide = false;
    this.confirmingRecover = false;
  }

  OnClickRecover() {
    this.confirmingRecover = !this.confirmingRecover;
    if (!this.confirmingRecover) {
      this.deleted = false;
    }
  }

  OnClickCancelRecover() {
    this.confirmingClose = false;
    this.confirmingHide = false;
    this.confirmingRecover = false;
  }


  handleUpload(event) {
    if (!(event.target.files && event.target.files[0])) {
      return;
    }
    this.fileSelected = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (ev: any) => {
      this.localUrl = ev.target.result;
    };
    reader.readAsDataURL(this.fileSelected);
  }

  private fillContent(story: Story) {
    this.story = story;
    this.deleted = story.deleted;
    this.localUrl = story.image;
    this.formChanges.patchValue({
      story: story.image,
      start: story.start,
      title: story.title || { english: '', chinese: ''},
      subtitle: story.subtitle || { english: '', chinese: ''},
      description: story.description || { english: '', chinese: ''},
      address: story.address || { english: '', chinese: ''},
      minutes: story.minutes,
      reference: story.reference || { english: '', chinese: ''}
    });
  }

  private acceptChanges(): Story {
    console.warn(this.formChanges.value);

    const newRevision = _.merge({...this.story}, this.formChanges.value);
    newRevision.deleted = this.deleted;
    if (this.localUrl) {
      newRevision.image = this.localUrl;
    }
    return newRevision;
  }
}
