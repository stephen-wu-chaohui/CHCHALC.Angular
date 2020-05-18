import { Component, OnInit } from '@angular/core';
import { ContextService } from '../../services/context.service';
import { WPage } from '../../services/types';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  page: WPage;

  get entity() { return this.contextService.currentContext?.entity; }

  constructor(public contextService: ContextService) {
    contextService.contextChanged.subscribe(() => this.updatePage(''));
    contextService.pageChanged.subscribe((router: string) => this.updatePage(router));
    this.updatePage('');
  }

  updatePage(router) {
    const cxt = this.contextService.currentContext;
    if (!cxt) {
      this.page = null;
    }
    const index = cxt.selectedPage || 0;
    this.page = cxt.template[index];

    const arr = router.split('#');
    if (arr.length < 2) {
      window.scrollTo(0, 0);
    } else {
      this.contextService.jumpTo(arr[1]);
    }

  }

  ngOnInit() {
  }

  routeTo($event) {
    this.contextService.routeTo($event);
  }

  back() {
    return this.contextService.pop();
  }
}
