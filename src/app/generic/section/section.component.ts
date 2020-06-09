import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { WSection, WEntity, MultiText } from '../../services/types';
import { SettingsService } from 'src/app/services/settings.service';
import { ContextService } from '../../services/context.service';
import { AbstrctEntityService } from 'src/app/services/entity.service';
import { v4 } from 'uuid';
import * as moment from 'moment';
import * as _ from 'lodash';

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
  entitySource: any;
  bootstrapColumnClasses = '';
  bootstrapRowClasses = '';
  collectionPath = '';
  sectionTitle: MultiText;
  busy = false;

  constructor(public es: AbstrctEntityService,
              public ss: SettingsService,
              public contextService: ContextService,
             ) {
  }

  ngOnInit() {
    const includingDeleted = this.editMode;
    setTimeout(() =>
      this.entitySource = this.es.getObservable(this.host.path, this.section.entitySource, includingDeleted)
    , 100);
    this.bootstrapColumnClasses = this.getBootstrapColumnClasses();
    this.bootstrapRowClasses = this.getBootstrapRowClasses();
    this.collectionPath = `${this.host.path}/${this.section.entitySource.collection}`;
    this.sectionTitle = this.buildSectionTitle();

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

  private getBootstrapRowClasses() {
    const options = this.section.entityDisplayOptions;
    switch (options.size) {
    case 'slide':
      return 'vh-100';
    case 'side-by-side':
    case 'large':
    case 'medium':
    case 'small':
    case 'tiny':
      return  '';
    }
  }

  private getBootstrapColumnClasses() {
    const options = this.section.entityDisplayOptions;
    switch (options.size) {
    case 'slide':
      return 'col home_slider_content text-center';
    case 'side-by-side':
    case 'full':
        return 'col';
    case 'large':
      return 'col-lg-6';
    case 'medium':
      return 'col-lg-4 col-md-6';
    case 'small':
      return 'col-lg-3 col-md-4 col-sm-6';
    case 'tiny':
      return 'col-lg-2 col-md-2 col-sm-3';
    }
  }

  backgroundImage() {
    if (!this.section.backgroundImage) {
      return '';
    }
    return `url(${this.section.backgroundImage})`;
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
        this.es.uploadImage(imagePath, file).then(
          async path => {
            item.image = path;
            item.start = this.guessStartTime(file);
            item.path = imagePath;
            item.uiTemplateId = this.section.entityTemplate || null;
            await this.es.setEntity(this.collectionPath, item);
            this.busy = false;
          }
        );
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
