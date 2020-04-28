import { Component, HostListener } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { SettingsService } from 'src/app/data/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuActive = false;
  searchActive = false;
  headerScrolled = false;
  activeMenuItem = 'home';

  constructor(private setting: SettingsService, public data: ChchalcDataService) {
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
    }
  }

  setMenu(menuitem: string = null) {
    if (!!menuitem) {
      this.activeMenuItem = menuitem;
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
