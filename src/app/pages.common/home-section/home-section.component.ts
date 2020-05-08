import { Component, Input } from '@angular/core';
import { MultiText } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.css']
})
export class HomeSectionComponent {
	Home = { english: 'Home', chinese: '首页'};
	@Input() title: MultiText;

  constructor(public data: ChchalcDataService) { }
}
