import { Component, OnInit, Input } from '@angular/core';
import { WPage, WEntity } from '../services/types';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';
import { EntityService } from '../services/entity.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: WPage;
  entity: WEntity;

  constructor(activeRouter: ActivatedRoute, pageService: PageService, entityService: EntityService) {
    const pageId = activeRouter.snapshot.params.pageId;
    const entityPath = activeRouter.snapshot.params.entityPath;
    this.page = pageService.getPage(pageId);
    this.entity = entityService.getEntity(entityPath);
  }

  ngOnInit() {
  }

}
