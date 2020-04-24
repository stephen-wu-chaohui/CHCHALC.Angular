import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-popular-semon-section',
  templateUrl: './popular-semon-section.component.html',
  styleUrls: ['./popular-semon-section.component.css']
})
export class PopularSemonSectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
