import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-ministries-page',
  templateUrl: './ministries-page.component.html',
  styleUrls: ['./ministries-page.component.css']
})
export class MinistriesPageComponent implements OnInit {
	title = { english: 'Ministries', chinese: '宣教'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() { }
}
