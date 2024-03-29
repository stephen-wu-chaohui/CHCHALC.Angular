import { Component, Input } from '@angular/core';
import { WPage } from '../../services/types';
import { SettingsService } from 'src/app/services/settings.service';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() page: WPage;
	Home = { english: 'Home', chinese: '首页'};

  constructor(private contextService: ContextService, public ss: SettingsService) {
  }

  onHome() {
    if (!this.contextService.pop()) {
      this.contextService.setPage('home');
    }
  }
}
