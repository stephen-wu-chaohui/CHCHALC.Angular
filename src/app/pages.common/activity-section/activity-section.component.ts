import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-activity-section',
  templateUrl: './activity-section.component.html',
  styleUrls: ['./activity-section.component.css']
})
export class ActivitySectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
