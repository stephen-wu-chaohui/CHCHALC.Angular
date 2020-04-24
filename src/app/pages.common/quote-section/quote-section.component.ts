import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
