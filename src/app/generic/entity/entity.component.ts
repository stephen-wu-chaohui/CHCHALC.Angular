import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from '@angular/core';
import { WEntity, WSection, Link } from '../../services/types';
import { SettingsService, Language } from 'src/app/services/settings.service';
import { FormGroup, FormControl } from '@angular/forms';
import { AbstrctEntityService } from 'src/app/services/entity.service';
import { faMinusCircle, faFileImage, faCloud, faKey } from '@fortawesome/free-solid-svg-icons';
import { SetPasswordDialogComponent } from './set-password-dialog/set-password-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit, OnChanges {

  constructor(public ss: SettingsService,
              private modalService: NgbModal,
              private cs: ContextService,
              private es: AbstrctEntityService
  ) {}
  @Input() entity: WEntity;
  @Input() section: WSection;
  @Input() editMode: boolean;
  @Input() collectionPath: string;
  @Output() routeTo = new EventEmitter();

  faMinusCircle = faMinusCircle;
  faFileImage = faFileImage;
  faCloud = faCloud;
  faKey = faKey;

  image: any;
  isDirty = false;
  message = '';
  file: File;
  isSaving = false;
  availableSetPassword = false;

  formChanges = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
    subTitle: new FormControl(''),
    text: new FormControl(''),
    description: new FormControl(''),
    reference: new FormControl(''),
});

  saveTimer: any;

  patchValue() {
    this.formChanges.patchValue({
      name: this.ss.tr(this.entity.name),
      title: this.ss.tr(this.entity.title),
      subTitle: this.ss.tr(this.entity.subTitle),
      text: this.ss.tr(this.entity.text),
      description: this.ss.tr(this.entity.description),
      reference: this.ss.tr(this.entity.reference),
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

  ngOnChanges(changes: SimpleChanges): void {
    this.editMode = changes.editMode.currentValue;
  }

  imageClick() {
    if (this.entity.imageLink) {
      const jumpTo = this.entity.imageLink;
      this.onClick(jumpTo);
    } else if (this.entity.uiTemplateId) {
      this.cs.saveScrollPos();
      this.routeTo.emit({ entity: this.entity });
    } else if (this.entity.links) {
      const jumpTo = this.entity.links[0];
      this.onClick(jumpTo);
    }
  }

  onClick(jumpTo: Link) {
    switch (jumpTo.type) {
    case 'setPage':
      this.cs.setPage(jumpTo.url);
      break;
    case 'link':
      window.open(jumpTo.url, '_blank');
      break;
    case 'template':
      if (this.entity.uiTemplateId) {
        this.cs.saveScrollPos();
        this.routeTo.emit({ entity: this.entity });
      }
      break;
    }
  }

  ngOnInit() {
    this.image = this.entity.image;
    this.message = '';
    this.file = null;
    this.isDirty = false;

    this.patchValue();
    this.ss.languageChanging.subscribe(language => {
      this.applyChanges(language);
    });
    this.ss.languageChanged.subscribe(() => {
      this.patchValue();
    });

    if (!this.entity.uiTemplateId && this.section.entityTemplate) {
      this.entity.uiTemplateId = this.section.entityTemplate;
    }
  }

  onClickHide() {
    this.entity.deleted = !this.entity.deleted;
    this.setDirty();
  }

  backgroundImage() {
    if (!this.entity.backgroundImage) {
      return '';
    }
    return `url(${this.entity.backgroundImage})`;
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
      this.file = files[0];
      this.setDirty();
    };
  }

  onSave() {
    if (!this.isDirty) {
      return;
    }

    if (this.file) {
      this.isSaving = true;
      // this.es.uploadImage(this.entity.path, this.file).then(
      //   path => {
      //     this.entity.image = path;
      //     this.isSaving = false;
      //     this.saveItem();
      //   }
      // );
      this.entity.image = this.image;
      this.isSaving = false;
      this.saveItem();
    } else {
      this.saveItem();
    }
  }


  saveItem() {
    this.applyChanges(this.ss.language);
    this.es.setEntity(this.collectionPath, this.entity).then(() => this.setDirty(false));
  }

  setDirty(flag = true) {
    this.isDirty = flag;
    if (this.saveTimer) {
      clearTimeout(this.saveTimer);
    }
    this.saveTimer = setTimeout(()=> this.onSave(), 5000);
  }

  onSetPassword() {
    const modalRef = this.modalService.open(SetPasswordDialogComponent, { size: 'sm', centered: true });
    modalRef.componentInstance.title = 'Set password to this entity';
    modalRef.result.then(password => {
      this.entity.password = password;
      this.setDirty();
    });
  }
}
