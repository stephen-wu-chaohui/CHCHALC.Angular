import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { WSection, WEntity } from '../../services/types';
import { SettingsService } from 'src/app/services/settings.service';
import { MockService } from '../../services/mock.service';
import { NguCarouselConfig } from '@ngu/carousel';
import { ContextService } from '../../services/context.service';
import { v4 } from 'uuid';
import * as moment from 'moment';
import * as _ from 'lodash';

@Component({
  selector: 'app-new-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() section: WSection;
  @Input() host: WEntity;
  @Output() routeTo = new EventEmitter();
  @Input() itemTemplate: TemplateRef<any>;
  @ContentChild(TemplateRef)

  checked = false;
  entitySource: any;
  bootstrapColumnClasses = '';
  collectionPath = '';

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 3000 },
    animation: 'lazy'
  };
  comeAndJoinUs = {
    english: 'Come and Join us', chinese: '欢迎加入我们'
  };

  constructor(public es: MockService,
              public ss: SettingsService,
              public contextService: ContextService,
             ) {
  }

  ngOnInit() {
    setTimeout(() => this.entitySource = this.es.getObservable(this.host.path, this.section.entitySource), 100);
    this.bootstrapColumnClasses = this.getBootstrapColumnClasses();
    this.collectionPath = `${this.host.path}/${this.section.entitySource.collection}`;
  }

  private getBootstrapColumnClasses() {
    const options = this.section.entityDisplayOptions;
    switch (options.size) {
    case 'slide':
    case 'row':
      return 'col-12';
    case 'large':
      return 'col-lg-6';
    case 'medium':
      return 'col-lg-3 col-md-4';
    case 'small':
      return 'col-lg-2 col-md-3 col-sm-6';
    case 'tiny':
      return 'col-lg-2 col-md-3 col-sm-6';
    }
  }

  backgroudImage() {
    if (!this.section.backgroudImage) {
      return '';
    }
    return `url(${this.section.backgroudImage})`;
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
        };
        const collectionPath = `${this.host.path}/${this.collectionPath}`;
        const imagePath = `${collectionPath}/${item.id}`;
        this.es.uploadImage(imagePath, file).then(
          path => {
            item.image = path;
            item.start = this.guessStartTime(file);
            item.path = `${collectionPath}/${item.id}`;
            this.es.setEntity(collectionPath, item).then();
            //this.dbapi.upsert(this.collectionPath, item).then();
          }
        );
        // const ref = this.storage.ref(`${collectionPath}/${item.id}-${file.name}`);
        // ref.put(file).then(() => {
        //   ref.getDownloadURL().subscribe(imgPath => {
        //     item.image = imgPath;
        //     item.start = this.guessStartTime(file);
        //     item.path = `${collectionPath}/${item.id}`;
        //     this.dbapi.upsert(this.collectionPath, item).then();
        //   });
        // });
      }
    });
  }

  guessStartTime(file: File): number {
    const a = file.name.lastIndexOf('-');
    const b = file.name.lastIndexOf('.');
    const numberPart = file.name.substring(a+1, b);
    console.log('guess file name:', numberPart);
    if (a === -1 || b === -1 || (b - a) < 2) {
      return file.lastModified;
    }
    return parseInt(numberPart, 10);
  }
}
