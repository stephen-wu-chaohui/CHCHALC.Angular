import { Component, OnInit } from '@angular/core';
import { WPage, WEntity } from '../services/types';
import { ActivatedRoute } from '@angular/router';
import { PageService } from '../services/page.service';
import { MockService } from '../services/mock.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: WPage;
  entity: WEntity;

  constructor(activeRouter: ActivatedRoute, pageService: PageService, entityService: MockService) {
    const pageId = activeRouter.snapshot.params.pageId;
    const entityId = activeRouter.snapshot.params.entityId;
    console.log('PageId, entityId', pageId, entityId);

    if (!entityId) {
      this.page = entityService.topPages.find(p => p.id === 'home');
      this.entity = entityService.root;
    }
  }

  ngOnInit() {
  }

}
