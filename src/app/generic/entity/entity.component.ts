import { Component, OnInit, Input } from '@angular/core';
import { WEntity, WSection } from '../services/types';
import { SettingsService } from 'src/app/data/settings.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  @Input() entity: WEntity;
  @Input() section: WSection;

  constructor(public ss: SettingsService) { }

  ngOnInit() {
  }

  imageClick() {
    if (this.section.action === 'Link' && this.entity.link) {
      // href to link;
      console.log('Link clicked: ', this.entity.link);
    }
    if (this.section.action === 'Route') {
      // route to section.entitySource/this.entity.id
      console.log('Link clicked: ', this.section.entitySource + '/' + this.entity.id);
    }
  }
}
