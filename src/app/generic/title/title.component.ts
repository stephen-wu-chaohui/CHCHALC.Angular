import { Component, OnInit, Input } from '@angular/core';
import { WPage } from '../services/types';
import { SettingsService } from 'src/app/data/settings.service';
import { Router } from '@angular/router';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  @Input() page: WPage;
	Home = { english: 'Home', chinese: '首页'};

  constructor(private router: Router, private pageService: PageService, public ss: SettingsService) { }

  onHome() {
    if (!this.pageService.pop()) {
      this.router.navigate(['/home']);
    }
  }
}
