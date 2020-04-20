import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
	title = { english: 'Contact', chinese: '联系我们'};
	ContactInfo = { english: 'Contact Info', chinese: '联系方式'};
	ContactUs = { english: 'Contact Us', chinese: '联系我们'};
	Submit = { english: 'Submit', chinese: '提交'};

	constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
