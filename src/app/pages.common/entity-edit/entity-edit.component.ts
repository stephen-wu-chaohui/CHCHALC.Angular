import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Entity } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { SettingsService } from 'src/app/data/settings.service';
import { DataClientService, OneOfList } from 'src/app/data/data-client.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-entity-edit',
  templateUrl: './entity-edit.component.html',
  styleUrls: ['./entity-edit.component.css']
})
export class EntityEditComponent implements OnInit, OnChanges {
  @Input() width = '276px';
	@Input() height = '276px';
	@Input() borderRadius = '50%';
	@Input() borderColor = 'red';
  @Input() groupName: string;
  @Input() item: Entity = null;
  @Input() formChanged = false;
  @Output() applyChanges = new EventEmitter();
  @Output() patchValue = new EventEmitter();
  @Output() itemCreated = new EventEmitter();
  @Output() imageClick = new EventEmitter();

  image: any;
  isDirty = false;
  isNew = true;
  message = '';
  file: File;
  isSaving = false;

	ngStyle = '';

  constructor(public data: ChchalcDataService,
              public settings: SettingsService,
							private dbapi: DataClientService,
              private storage: AngularFireStorage,
              private router: Router
  ) {
	}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.formChanged) {
			if (changes.formChanged.currentValue) {
				this.isDirty = true;
			}
    }
    if (changes.item) {
      this.item = changes.item.currentValue;
      this.image = this.item.image;
      this.isDirty = false;
      this.isNew = !this.image;
      this.message = '';
      this.file = null;
    }
  }

  onImageClick() {
    if (this.data.adminMode) {
      return;
    }
    this.router.navigate(['/' + this.groupName, { id: this.item.id }]);
	}


  ngOnInit() {
    this.image = this.item.image;
    this.patchValue.emit();
    this.settings.languageChanging.subscribe(language => {
      this.applyChanges.emit(language);
    });
    this.settings.languageChanged.subscribe(() => {
      this.patchValue.emit();
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
      console.log(width, height, 'portrait: ', portrait);
    }
  }

  onSave() {
    if (!this.isDirty) {
      return;
    }
    if (this.file) {
      this.isSaving = true;
      const ref = this.storage.ref(`${this.groupName}/${this.item.id}-${this.file.name}`);
      ref.put(this.file).then(() => {
        ref.getDownloadURL().subscribe(path => {
          this.item.image = path;
          this.saveItem();
        });
      });
    } else {
      this.saveItem();
    }
  }


  saveItem() {
    this.applyChanges.emit(this.settings.language);
    this.dbapi.upsert(this.groupName, this.item).then(
      () => {
        this.setDirty(false);
        this.itemCreated.emit(this.item);
      });
	}
}
