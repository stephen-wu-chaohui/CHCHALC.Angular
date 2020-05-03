import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Ministry } from 'src/app/data/api-data';

@Component({
  selector: 'app-ministry-section',
  templateUrl: './ministry-section.component.html',
  styleUrls: ['./ministry-section.component.css']
})
export class MinistrySectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
	}

	itemCreated($event) {
		// this.data.Ministries.unshift($event);
	}
}
