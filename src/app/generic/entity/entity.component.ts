import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WEntity, WSection } from '../services/types';
import { SettingsService } from 'src/app/data/settings.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity: WEntity;
  @Input() section: WSection;
  @Output() routeTo = new EventEmitter();

  constructor(public ss: SettingsService) { }

  ngOnInit() {
    console.log('EntityComponent: ', this.entity.title);
  }

  imageClick() {
    if (this.section.action === 'Link' && this.entity.link) {
      // href to link;
      console.log('Link clicked: ', this.entity.link);
    }
    if (this.section.action === 'Route' && this.section.entityTemplate) {
      // route to section.entitySource/this.entity.id
      console.log('Link clicked: ', this.section.entitySource + '/' + this.entity.id);
      this.routeTo.emit({ entity: this.entity, template: this.section.entityTemplate });
    }
  }
}


