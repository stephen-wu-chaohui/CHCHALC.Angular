import { Component, OnInit, Input } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Ministry } from 'src/app/data/api-data';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
	@Input() item: Ministry;

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
