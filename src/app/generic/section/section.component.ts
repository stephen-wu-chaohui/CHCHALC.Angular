import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { WSection, WEntity, MultiText } from '../../services/types';
import { SettingsService } from 'src/app/services/settings.service';
import { ContextService } from '../../services/context.service';
import { AbstrctEntityService } from 'src/app/services/entity.service';
import { v4 } from 'uuid';
import * as moment from 'moment';
import * as _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() section: WSection;
  @Input() host: WEntity;
  @Output() routeTo = new EventEmitter();
  @Input() itemTemplate: TemplateRef<any>;
  @ContentChild(TemplateRef)

  checked = false;
  editMode: boolean;
  entitySource: Observable<WEntity[]>;
  bootstrapColumnClasses = '';
  collectionPath = '';
  sectionTitle: MultiText;
  busy = false;
  onlyEntity: WEntity;

  constructor(public es: AbstrctEntityService,
              public ss: SettingsService,
              public contextService: ContextService,
             ) {
  }

  ngOnInit() {
    const includingDeleted = this.editMode;
    setTimeout(() => {
        this.entitySource = this.es.getObservable(this.host.path, this.section.entitySource, includingDeleted);
        if (this.section.entityDisplayOptions.contentStyle === 'frontpage') {
          this.entitySource.subscribe(ob => this.onlyEntity = ob[0], err => this.onlyEntity = this.newFrontPage());
        }
      }, 100);
    this.bootstrapColumnClasses = this.getBootstrapColumnClasses();
    this.collectionPath = `${this.host.path}/${this.section.entitySource.collection}`;
    this.sectionTitle = this.buildSectionTitle();

  }

  newFrontPage(): WEntity {
    return {
      id: 'only',
      start: 20200101,
      image: '/assets/images/slider_background_1.jpg',
      title: { english: 'Title here', chinese: '标题'},
      text: { english: 'Text here', chinese: '此处应该是文字'},
    };
  }

  buildSectionTitle(): MultiText {
    if (!this.host) {
      return this.section.title;
    }
    if (!this.section.title) {
      return this.host.title;
    }
    const english = this.section.title.english.replace('{host}', this.host.title.english);
    if (!this.section.title.chinese || !this.host.title.chinese) {
      return {english};
    }
    const chinese = this.section.title.chinese.replace('{host}', this.host.title.chinese);
    return { english, chinese };
  }

  private getBootstrapColumnClasses() {
    const options = this.section.entityDisplayOptions;
    switch(options.contentStyle) {
    case 'frontpage':
    case 'quote':
    case 'page':
    case 'greeting':
    case 'sermon':
      return 'col-12';
    case 'item':
      return 'col-lg-4 col-md-6';
    case 'person':
      return 'col-lg-3 col-md-4';
    case 'icon':
      return 'col-lg-2 col-md-3 col-sm-6';
    }
  }

  backgroundImage() {
    if (this.section.backgroundImage) {
      return `url(${this.section.backgroundImage})`;
    }
    if (this.section.entityDisplayOptions.contentStyle === 'frontpage' && this.onlyEntity?.image) {
      return `url(${this.onlyEntity.image})`;
    }
    return '';
  }

  importMultipleFiles(files: File[]) {
    if (files.length === 0) {
      return;
    }
    _.forEach(files, file => {
      const mimeType = file.type;
      if (mimeType.match(/image\/*/) != null) {
        const item: WEntity = {
          id: v4(),
          lastUpdated: moment().unix(),
          start: moment().unix(),
          title: { english: '', chinese: ''},
          uiTemplateId: this.section.entityTemplate
        };
        const imagePath = this.es.collectionPathOf(this.collectionPath, item.id);
        this.busy = true;
        item.path = imagePath;
        if (this.section.entityTemplate) {
          this.es.uploadImage(imagePath, file).then(
            async path => {
              item.image = path;
              item.uiTemplateId = this.section.entityTemplate;
              item.start = this.guessStartTime(file);
              this.es.setEntity(this.collectionPath, item);
              this.busy = false;
            }
          );
        } else {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            item.image = reader.result as string;
            item.uiTemplateId = null;
            item.start = this.guessStartTime(file);
            this.es.setEntity(this.collectionPath, item);
            this.busy = false;
        };
        }
      }
    });
  }

  guessStartTime(file: File): number {
    const a = file.name.lastIndexOf('-');
    const b = file.name.lastIndexOf('.');
    const numberPart = file.name.substring(a+1, b);
    // console.log('guess file name:', numberPart);
    if (a === -1 || b === -1 || (b - a) < 2) {
      return file.lastModified;
    }
    return parseInt(numberPart, 10);
  }

  onEditMode($event) {
    this.editMode = $event;
    this.entitySource = this.es.getObservable(this.host.path, this.section.entitySource, this.editMode);
  }
}
