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
  get page() { return this.pageService.currentContext?.template[0]; }
  get entity() { return this.pageService.currentContext?.entity; }

  constructor(entityService: MockService, public pageService: PageService) {
    if (!this.pageService.currentContext) {
      this.pageService.routeTo({
        entity: entityService.root,
        template: pageService.topPages
      });
    }
  }

  ngOnInit() {
  }

  routeTo($event) {
    this.pageService.routeTo($event);
  }

  back() {
    return this.pageService.pop();
  }
}
