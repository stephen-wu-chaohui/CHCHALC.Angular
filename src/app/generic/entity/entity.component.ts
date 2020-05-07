import { Component, OnInit, Input } from '@angular/core';
import { WEntity, WSection } from '../services/types';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.css']
})
export class EntityComponent implements OnInit {
  @Input() entity: WEntity;
  @Input() section: WSection;

  constructor() { }

  ngOnInit() {
  }

  imageClick() {
    if (this.section.action === 'Link' && this.entity.link) {
      // href to link;
    }
    if (this.section.action === 'Route') {
      // route to section.entitySource/this.entity.id
    }
  }
}
