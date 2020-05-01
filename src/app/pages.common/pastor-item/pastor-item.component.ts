import { Component, OnInit, Input } from '@angular/core';
import { Person } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-pastor-item',
  templateUrl: './pastor-item.component.html',
  styleUrls: ['./pastor-item.component.css']
})
export class PastorItemComponent implements OnInit {
  @Input() item: Person;

  constructor(public data: ChchalcDataService) {}


  ngOnInit() {
  }

}
