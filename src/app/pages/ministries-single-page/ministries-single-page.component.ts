import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ministries-single-page',
  templateUrl: './ministries-single-page.component.html',
  styleUrls: ['./ministries-single-page.component.css']
})
export class MinistriesSinglePageComponent implements OnInit {
	title = { english: 'Ministries', chinese: '宣教'};
  id = '';

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit() {
		this.id = this.actRoute.snapshot.params.id;
  }

}
