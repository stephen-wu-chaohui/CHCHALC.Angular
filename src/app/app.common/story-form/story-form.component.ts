import { Component, OnInit, ElementRef } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { EditingService } from '../editing.service';
import { Story } from 'src/app/data/api-data';

@Component({
  selector: 'app-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.css']
})
export class StoryFormComponent {
  show = false;
  story: Story;
  changed: any = {};
  localUrl = '';

  confirmingClose = false;
  confirmingHide = false;
  confirmingRecover = false;

  constructor(public data: ChchalcDataService, private editingService: EditingService) {
    editingService.register(this);
  }

  async edit(story: Story): Promise<boolean> {
    this.story = story;
    this.changed = { deleted: this.story.deleted };
    // ... fill fields on dialog
    this.localUrl = this.data.path(story.image);
    this.openDialog();
    return false;
  }

  OnClickSaveChanges() {
    this.confirmingClose = false;
    this.confirmingHide = false;
    this.confirmingRecover = false;
    this.editingService.save(this.changed).subscribe(successful => {
      if (successful) {
        this.closeDialog();
      }
    });
  }

  openDialog() {
    this.show = true;
  }

  closeDialog() {
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
      this.changed.deleted = true;
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
      this.changed.deleted = false;
    }
  }

  OnClickCancelRecover() {
    this.confirmingClose = false;
    this.confirmingHide = false;
    this.confirmingRecover = false;
  }


  handleUpload(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (ev: any) => {
          this.localUrl = ev.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
  }
}
}
