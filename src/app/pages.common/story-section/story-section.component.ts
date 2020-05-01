import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.css']
})
export class StorySectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
	}

	itemCreated($event) {
		console.log('$event', $event);
		// this.data.Ministries.unshift($event);
	}

}
