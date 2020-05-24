import { Component, HostListener } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ContextService } from 'src/app/services/context.service';
import { MenuItem } from 'src/app/services/types';
import { AbstrctEntityService } from 'src/app/services/entity.service';
import { faLanguage, faBars } from '@fortawesome/free-solid-svg-icons';

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
  faLanguage = faLanguage;
  faBars = faBars;

  switchLanguage = {
    english: '切换到中文', chinese: 'Switch to English'
  };

  constructor(public ss: SettingsService, public contextService: ContextService, public es: AbstrctEntityService) {
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
    this.ss.toggleLanguage();
  }
}
