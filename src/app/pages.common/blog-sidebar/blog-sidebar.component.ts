import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Story } from 'src/app/data/api-data';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.css']
})
export class BlogSidebarComponent implements OnInit {

  constructor(public data: ChchalcDataService) {
	}

  ngOnInit() {

  }

}
