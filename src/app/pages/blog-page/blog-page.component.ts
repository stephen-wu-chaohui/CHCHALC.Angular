import { Component, OnInit } from '@angular/core';
import { PagesCommonModule } from '../../pages.common/pages.common.module';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css' ]
})
export class BlogPageComponent implements OnInit {
	title = { english: 'Blog', chinese: '部落格'};

	constructor() { }

  ngOnInit() {
  }

}
