import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
	title = { english: 'Contact', chinese: '联系我们'};

	constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
