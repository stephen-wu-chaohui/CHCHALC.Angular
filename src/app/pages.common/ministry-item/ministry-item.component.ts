import { Component, OnInit, Input } from '@angular/core';
import { Ministry } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-ministry-item',
  templateUrl: './ministry-item.component.html',
  styleUrls: ['./ministry-item.component.css']
})
export class MinistryItemComponent implements OnInit {
  @Input() item: Ministry;

  constructor(public data: ChchalcDataService) {}

  ngOnInit() {
  }
}
