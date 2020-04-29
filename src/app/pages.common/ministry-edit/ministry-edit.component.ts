import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Ministry } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { DataClientService } from 'src/app/data/data-client.service';
import { AngularFireStorage } from '@angular/fire/storage';
import * as _ from 'lodash';
import * as moment from 'moment';
import { SettingsService, Language } from 'src/app/data/settings.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ministry-edit',
  templateUrl: './ministry-edit.component.html',
  styleUrls: ['./ministry-edit.component.css']
})
export class MinistryEditComponent implements OnInit {
  @Input() item: Ministry = null;

  formChanges = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  image: any;
  isDirty = false;
  message = '';
  file: File;

  confirmClicked = false;
  cancelClicked = false;

  constructor(public data: ChchalcDataService,
              public settings: SettingsService,
              private dbapi: DataClientService,
              private storage: AngularFireStorage
  ) {
    if (!this.item) {
      this.item = this.newMinistry();
    }
  }

  onImageClick() {
  }


  ngOnInit() {
    this.image = this.item.image;
    this.patchValue();
    this.settings.languageChanging.subscribe(language => {
      this.applyChanges(language);
    });
    this.settings.languageChanged.subscribe(() => {
      this.patchValue();
    });
  }

  patchValue() {
    this.formChanges.patchValue({
      title: this.data.tr(this.item.title),
      text: this.data.tr(this.item.text),
    });
  }

  setDirty(flag = true) {
    this.isDirty = flag;
  }

  onClickHide() {
    this.item.deleted = !this.item.deleted;
    this.setDirty();
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
      this.file = files[0];
      this.setDirty();
    };
  }

  OnSave() {
    if (!this.isDirty) {
      return;
    }
    if (!this.file) {
      this.saveItem();
    }
    const ref = this.storage.ref(`Ministries/${moment().format()}`);
    ref.put(this.file).then(() => {
      ref.getDownloadURL().subscribe(path => {
        this.item.image = path;
        this.saveItem();
      });
    });
  }

  applyChanges(language: Language) {
    const v = this.formChanges.value;

    switch (language) {
      case 'chinese':
        this.item.title.chinese = v.title;
        this.item.text.chinese = v.text;
        break;
      case 'english':
        this.item.title.english = v.title;
        this.item.text.english = v.text;
        break;
    }
  }

  saveItem() {
    this.applyChanges(this.settings.language);
    this.dbapi.upsert('Ministries', this.item).subscribe(
      next => {
        if (!this.item.id) {
          this.data.Ministries.unshift(next);
          this.file = null;
          this.image = null;
          this.item = this.newMinistry();
          this.patchValue();
        }
        this.setDirty(false);
      });
  }

  newMinistry(): Ministry {
    const newItem = new Ministry();
    newItem.deleted = false;
    newItem.title = { chinese: '新的事工', english: 'New Ministry'};
    newItem.text = {
        chinese: '你们要去、使万民作我的门徒、奉父子圣灵的名、给他们施洗',
        english: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
    };
    return newItem;
  }
}
