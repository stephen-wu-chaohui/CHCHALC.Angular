import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Observable } from 'rxjs';
import { last } from 'rxjs/operators';
import { Story } from 'src/app/data/api-data';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.css']
})
export class SermonComponent implements OnInit {
	// todayObserver: Observable<any>;
	today: any;

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
