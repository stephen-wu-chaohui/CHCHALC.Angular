import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-ministry-section',
  templateUrl: './ministry-section.component.html',
  styleUrls: ['./ministry-section.component.css']
})
export class MinistrySectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
