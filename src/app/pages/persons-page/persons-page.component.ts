import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-persons-page',
  templateUrl: './persons-page.component.html',
  styleUrls: ['./persons-page.component.css']
})
export class PersonsPageComponent implements OnInit {
	title = { english: 'Page under construction', chinese: '未实现的页面'};
	unimplemented = { english: 'This page is not implemented yet', chinese: '本页面尚未完工，敬请谅解'};

  constructor(private actRoute: ActivatedRoute, public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
