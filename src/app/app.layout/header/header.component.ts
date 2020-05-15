import { Component, HostListener } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { SettingsService } from 'src/app/data/settings.service';
import { ContextService } from 'src/app/generic/services/context.service';
import { MenuItem } from 'src/app/data/api-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  contextMenu: MenuItem[];
  menuActive = false;
  searchActive = false;
  headerScrolled = false;
  activeMenuItem = 'home';

  constructor(private setting: SettingsService, public data: ChchalcDataService, public contextService: ContextService) {
    this.contextMenu = this.contextService.contextMenu;
    contextService.contextChanged.subscribe(() => {
      this.contextMenu = this.contextService.contextMenu;
      this.activeMenuItem = '';
    });
    contextService.pageChanged.subscribe(menuitem => {
      this.activeMenuItem = menuitem;
    });
  }

  setHeader() {
    this.headerScrolled = (window.scrollY > 100);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.setHeader();
  }

  @HostListener('document:scroll', ['$event'])
  onDocumentScroll() {
    this.setHeader();
  }

  toggleMenu(menuitem: string = null) {
    this.menuActive = !this.menuActive;
    if (!!menuitem) {
      this.activeMenuItem = menuitem;
      this.contextService.setPage(menuitem);
    }
  }

  setMenu(menuitem: string = null) {
    if (!!menuitem) {
      this.activeMenuItem = menuitem;
      this.contextService.setPage(menuitem);
    }
  }

  toggleSearch() {
    this.searchActive = !this.searchActive;
  }

  toggleLanguage() {
    this.menuActive = false;
    this.setting.toggleLanguage();
  }
}
