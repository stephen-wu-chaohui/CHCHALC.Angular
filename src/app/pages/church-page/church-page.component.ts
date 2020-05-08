import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-church-page',
  templateUrl: './church-page.component.html',
  styleUrls: ['./church-page.component.css']
})
export class ChurchPageComponent implements OnInit {
	title = { english: 'Church', chinese: '教会'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() { }
}
