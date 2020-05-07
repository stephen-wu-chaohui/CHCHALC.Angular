import { Component, OnInit, Input } from '@angular/core';
import { WPage } from '../services/types';
import { SettingsService } from 'src/app/data/settings.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() page: WPage;

  constructor(public ss: SettingsService) { }

  ngOnInit() {
  }

}
