import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WEntity, WSection } from '../../services/types';
import { SettingsService } from 'src/app/services/settings.service';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity: WEntity;
  @Input() section: WSection;
  @Output() routeTo = new EventEmitter();

  constructor(public ss: SettingsService, public contextService: ContextService) { }

  ngOnInit() {
    console.log('EntityComponent: ', this.entity.title);
  }

  imageClick() {
    if (this.section.action === 'Link') {
      console.log('Link clicked: ', this.entity.link || this.entity.videoURL);
      window.open(this.entity.link || this.entity.videoURL, '_blank');
    } else if (this.section.action === 'Route' && this.section.entityTemplate) {
      console.log('Link clicked: ', this.section.entitySource + '/' + this.entity.id);
      this.routeTo.emit({ entity: this.entity, template: this.section.entityTemplate });
    } else if (this.entity.jumpTo) {
      this.contextService.setPage(this.entity.jumpTo);
    }
  }
}


