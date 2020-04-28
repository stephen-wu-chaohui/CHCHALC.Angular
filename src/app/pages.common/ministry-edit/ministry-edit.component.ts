import { Component, OnInit, Input } from '@angular/core';
import { Ministry } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { DataClientService } from 'src/app/data/data-client.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as _ from 'lodash';
import * as moment from 'moment';
import { SettingsService } from 'src/app/data/settings.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ministry-edit',
  templateUrl: './ministry-edit.component.html',
  styleUrls: ['./ministry-edit.component.css']
})
export class MinistryEditComponent implements OnInit {
  @Input() item: Ministry;

  formChanges = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  image: any;
  isDirty = false;
  message = '';



  constructor(public data: ChchalcDataService,
              public settings: SettingsService,
              private dbapi: DataClientService,
              private storage: AngularFireStorage) {}

  ngOnInit() {
    this.image = this.item.image;
  }

  setDirty(flag = true) {
    this.isDirty = flag;
  }

  onClickHide() {
    this.item.deleted = !this.item.deleted;
  }

  OnChangeImage(files: File[]) {
    if (files.length === 0) {
      return;
    }
    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.image = reader.result;
      this.setDirty();
    };
  }

  OnSave() {
    if (!this.isDirty) {
      return;
    }
    if (this.image === this.item.image) {
      this.saveItem();
    }
    const ref = this.storage.ref(`Ministries/${moment().format()}`);
    ref.put(this.image).then(() => {
      ref.getDownloadURL().subscribe(path => {
        this.item.image = path;
        this.saveItem();
      });
    });
  }

  saveItem() {
    if (!this.item.id) {
      this.data.Ministries.unshift(this.item);
    }
    // switch(this.settings.language) {
    //   case 'chinese':
    //     this.item.title.chinese =
    // }

    console.log(this.item);
    this.dbapi.upsert('Ministries', this.item).subscribe(
      next => {
        _.merge(this.item, next);
        this.setDirty(false);
      });
  }
}
