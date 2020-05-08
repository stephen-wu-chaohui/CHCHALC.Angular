import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Story } from 'src/app/data/api-data';
import { FormGroup, FormControl } from '@angular/forms';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Language } from 'src/app/data/settings.service';
import { v4 as uuidv4 } from 'uuid';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.css']
})
export class StoryEditComponent {
  @Input() item: Story;
  @Input() groupName: string;
  @Output() itemCreated = new EventEmitter();

  formChanged = false;
  message: string;
  pictureFiles: File[];

  formChanges = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
    pdf: new FormControl(''),
    pictures: new FormControl(''),
  });
  uploadPicturesMessage: string;

  constructor(public data: ChchalcDataService, private storage: AngularFireStorage, private router: Router) {
    if (!this.item) {
      this.item = this.newStory();
    }
  }

  patchValue() {
    this.formChanges.patchValue({
      title: this.data.tr(this.item.title),
      text: this.data.tr(this.item.description),
    });
  }

  applyChanges(language: Language) {
    const v = this.formChanges.value;

    switch (language) {
      case 'chinese':
        this.item.title.chinese = v.title;
        this.item.description.chinese = v.text;
        break;
      case 'english':
        this.item.title.english = v.title;
        this.item.description.english = v.text;
        break;
    }
  }

  setDirty() {
    this.formChanged = false;
    this.formChanged = true;
  }

  doItemCreated($event) {
		console.log('doItemCreated($event)', $event);
		if (this.itemCreated) {
			this.itemCreated.emit($event);
		}
    this.item = this.newStory();
    this.patchValue();
  }

  newStory(): Story {
		const newItem = new Story();
		newItem.id = uuidv4();
    newItem.title = { chinese: '新的故事', english: 'New Story'};
    newItem.description = {
        chinese: '你们要去、使万民作我的门徒、奉父子圣灵的名、给他们施洗',
        english: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
    };
    return newItem;
  }

  onFileChanged(files: File[]) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const pdf = files[0];
    const ref = this.storage.ref(`${this.groupName}/${this.item.id}.pdf`);
    ref.put(pdf).then(() => {
      ref.getDownloadURL().subscribe(path => {
        this.item.pdfPath = path;
        this.message = 'PDF file is uploaded.';
      });
    });
  }


  onPicturesChanged(files: File[]) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    this.pictureFiles = files;
    this.item.pictures = new Array(files.length) ;
    Array.from(files).forEach((file, index) => {
      const ref = this.storage.ref(`${this.groupName}/${this.item.id}-${file.name}`);
      ref.put(file).then(() => {
        ref.getDownloadURL().subscribe(path => {
          this.item.pictures[index] = path;
          this.uploadPicturesMessage = `${index+1}/${files.length} files uploaded.`;
        });
      });
    });
  }


  imageClicked() {
    // if (this.item.pdfPath) {
    //   window.open(this.item.pdfPath);
    // }
    this.router.navigate([`/${this.groupName}`, this.item.id]);
  }
}
