import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {
	title = { english: 'Pastor', chinese: '牧师'};
	unimplemented = { english: 'This page is not implemented yet', chinese: '本页面尚未完工，敬请谅解'};

  constructor(private actRoute: ActivatedRoute, public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
