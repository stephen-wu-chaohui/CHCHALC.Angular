import { Component, OnInit, Input, ContentChild, TemplateRef, Output, EventEmitter } from '@angular/core';
import { WSection, WEntity } from '../services/types';
import { SettingsService } from 'src/app/data/settings.service';
import { MockService } from '../services/mock.service';
import { Observable } from 'rxjs';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-new-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() section: WSection;
  @Input() host: WEntity;
  @Input() itemTemplate: TemplateRef<any>;
  @ContentChild(TemplateRef)

  checked = false;
  entitySource: any;
  bootstrapColumnClasses = '';

  constructor(public es: MockService, public ss: SettingsService, public data: ChchalcDataService) {
  }

  ngOnInit() {
    setTimeout(() => this.entitySource = this.es.getObservable(this.host.path, this.section.entitySource), 100);
    this.bootstrapColumnClasses = this.getBootstrapColumnClasses();
  }

  private getBootstrapColumnClasses() {
    const options = this.section.entityDisplayOptions;
    switch (options.size) {
    case 'slide':
    case 'row':
      return 'col-12';
    case 'large':
      return 'col-lg-6 col-md-12';
    case 'medium':
      return 'col-lg-4 col-md-6 col-sm-12';
    case 'small':
      return 'col-lg-3 col-md-6 col-sm-12';
    case 'icon':
      return 'col-lg-6 col-md-4 col-sm-6';
    }
  }

  backgroudImage() {
    if (!this.section.backgroudImage) {
      return '';
    }
    return `url(${this.section.backgroudImage})`;
  }

  createNew() {
    return new WEntity();
  }
}
