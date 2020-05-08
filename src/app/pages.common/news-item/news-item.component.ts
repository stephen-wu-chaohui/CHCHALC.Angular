import { Component, OnInit, Input } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Story } from 'src/app/data/api-data';
import * as moment from 'moment';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
	@Input() item: Story;

	constructor(public data: ChchalcDataService) { }

  ngOnInit() { }

  dayOfStart = () => moment(this.item.start).format('d');
  monthOfStart = () => moment(this.item.start).format('MMM y');
}
