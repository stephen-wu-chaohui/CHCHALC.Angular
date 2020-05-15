import { Injectable, EventEmitter } from '@angular/core';
import { EntityPagesBinding, PageService } from './page.service';
import { MockService } from './mock.service';
import { MenuItem } from 'src/app/data/api-data';

@Injectable({
  providedIn: 'root'
})
export class ContextService {
  private routeStack: EntityPagesBinding[] = [];
  private backMenu = { english: 'Back', chinese: '返回'};

  pageChanged: EventEmitter<string> = new EventEmitter();
  contextChanged: EventEmitter<string> = new EventEmitter();

  constructor(private entityService: MockService, private pageService: PageService) {
    this.routeStack.unshift({
      entity: entityService.root,
      template: pageService.topPages
    });
    this.contextChanged.emit();
   }

  routeTo(context: EntityPagesBinding) {
    this.routeStack.unshift(context);
    this.contextChanged.emit();
  }

  get currentContext() {
    if (this.routeStack.length === 0) {
      this.routeStack.unshift({
        entity: this.entityService.root,
        template: this.pageService.topPages
      });
      this.contextChanged.emit();
    }
    return this.routeStack[0];
  }

  pop(): boolean {
    if (this.routeStack.length <= 1) {
      return false;
    }
    this.routeStack.shift();
    this.contextChanged.emit();
    return true;
  }

  get contextMenu(): MenuItem[] {
    const template = this.currentContext.template;
    const menuItems = template.map(t => ({title: t.title, route: t.id}));
    if (this.routeStack.length > 1) {
      menuItems.unshift({title: this.backMenu, route: '..'});
    }
    return menuItems;
  }

  setPage(menuItem: string) {
    if (menuItem === '..') {
      this.pop();
    } else {
      const template = this.currentContext.template;
      this.currentContext.selectedPage = template.findIndex(t => t.id === menuItem);
    }
    this.pageChanged.emit(menuItem);
  }

}
