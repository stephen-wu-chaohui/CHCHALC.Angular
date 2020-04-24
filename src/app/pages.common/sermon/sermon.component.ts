import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.css']
})
export class SermonComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
	  console.log(this.data.today);
  }

}
