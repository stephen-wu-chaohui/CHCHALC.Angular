import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-sermons-page',
  templateUrl: './sermons-page.component.html',
  styleUrls: ['./sermons-page.component.css']
})
export class SermonsPageComponent implements OnInit {
	title = { english: 'Sermons', chinese: '讲道'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
	}

}
