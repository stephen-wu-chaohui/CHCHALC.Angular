import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-unimplemented-page',
  templateUrl: './unimplemented-page.component.html',
  styleUrls: ['./unimplemented-page.component.css']
})
export class UnimplementedPageComponent implements OnInit {
	title = { english: 'Page under construction', chinese: '未实现的页面'};
	unimplemented = { english: 'This page is not implemented yet', chinese: '本页面尚未完工，敬请谅解'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
