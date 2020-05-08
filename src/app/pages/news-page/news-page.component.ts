import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css' ]
})
export class NewsPageComponent implements OnInit {
	title = { english: 'News', chinese: '新闻'};

	constructor() { }

  ngOnInit() {
  }

}
