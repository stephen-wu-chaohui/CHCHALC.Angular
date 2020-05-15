import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { WEntity, WSection } from '../services/types';
import { SettingsService, Language } from 'src/app/data/settings.service';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { DataClientService } from 'src/app/data/data-client.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-entity-edit',
  templateUrl: './entity-edit.component.html',
  styleUrls: ['./entity-edit.component.scss']
})
export class EntityEditComponent implements OnInit {
  @Input() entity: WEntity;
  @Input() section: WSection;
  @Input() collectionPath: string;
  @Output() routeTo = new EventEmitter();

  image: any;
  isDirty = false;
  isNew = true;
  message = '';
  file: File;
  isSaving = false;

  formChanges = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    subTitle: new FormControl(''),
    text: new FormControl(''),
    description: new FormControl(''),
    reference: new FormControl(''),
});

  patchValue() {
    this.formChanges.patchValue({
      name: this.data.tr(this.entity.name),
      title: this.data.tr(this.entity.title),
      subTitle: this.data.tr(this.entity.subTitle),
      text: this.data.tr(this.entity.text),
      description: this.data.tr(this.entity.description),
      reference: this.data.tr(this.entity.reference),
    });
  }

  applyChanges(language: Language) {
    const v = this.formChanges.value;
    if (!this.entity.name) {
      this.entity.name = { english: '', chinese: ''};
    }
    if (!this.entity.title) {
      this.entity.title = { english: '', chinese: ''};
    }
    if (!this.entity.subTitle) {
      this.entity.subTitle = { english: '', chinese: ''};
    }
    if (!this.entity.text) {
      this.entity.text = { english: '', chinese: ''};
    }
    if (!this.entity.description) {
      this.entity.description = { english: '', chinese: ''};
    }
    if (!this.entity.reference) {
      this.entity.reference = { english: '', chinese: ''};
    }
    switch (language) {
      case 'chinese':
        this.entity.name.chinese = v.name;
        this.entity.title.chinese = v.title;
        this.entity.subTitle.chinese = v.subTitle;
        this.entity.text.chinese = v.text;
        this.entity.description.chinese = v.description;
        this.entity.reference.chinese = v.reference;
        break;
      case 'english':
        this.entity.name.english = v.name;
        this.entity.title.english = v.title;
        this.entity.subTitle.english = v.subTitle;
        this.entity.text.english = v.text;
        this.entity.description.english = v.description;
        this.entity.reference.english = v.reference;
        break;
    }
  }

  constructor(public data: ChchalcDataService,
              public settings: SettingsService,
              private dbapi: DataClientService,
              private storage: AngularFireStorage
  ) {}

  imageClick() {
    if (this.section.action === 'Link') {
      console.log('Link clicked: ', this.entity.link || this.entity.videoURL);
      window.open(this.entity.link || this.entity.videoURL, '_blank');
    } else if (this.section.action === 'Route' && this.section.entityTemplate) {
      console.log('Link clicked: ', this.section.entitySource + '/' + this.entity.id);
      this.routeTo.emit({ entity: this.entity, template: this.section.entityTemplate });
    }
  }

  ngOnInit() {
    this.isNew = !this.entity;
    if (this.isNew) {
      this.entity = new WEntity(this.collectionPath);
    }
    this.image = this.entity.image;
    this.message = '';
    this.file = null;
    this.isDirty = false;

    this.patchValue();
    this.settings.languageChanging.subscribe(language => {
      this.applyChanges(language);
    });
    this.settings.languageChanged.subscribe(() => {
      this.patchValue();
    });
  }

  setDirty(flag = true) {
    this.isDirty = flag;
  }

  onClickHide() {
    this.entity.deleted = !this.entity.deleted;
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
    this.isSaving = false;
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.image = reader.result;
      console.log('this.image: ', this.image.width, this.image.height);
      this.file = files[0];
      this.setDirty();
    };
  }

  onLoad(evt) {
    if (evt && evt.target) {
      const width = evt.target.naturalWidth;
      const height = evt.target.naturalHeight;
      const portrait = height > width ? true : false;
      // console.log(width, height, 'portrait: ', portrait);
    }
  }

  onSave() {
    if (!this.isDirty) {
      return;
    }
    if (this.file) {
      this.isSaving = true;
      const ref = this.storage.ref(`${this.collectionPath}/${this.entity.id}-${this.file.name}`);
      ref.put(this.file).then(() => {
        ref.getDownloadURL().subscribe(path => {
          this.entity.image = path;
          this.saveItem();
        });
      });
    } else {
      this.saveItem();
    }
  }


  saveItem() {
    this.applyChanges(this.settings.language);
    console.log('saveItem(entity):', this.collectionPath, this.entity)
    this.dbapi.upsert(this.collectionPath, this.entity).then(
      () => {
        this.setDirty(false);
        if (this.isNew) {
          this.entity = new WEntity(this.collectionPath);
        }
      });
  }


}
