import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-contact-form-section',
  templateUrl: './contact-form-section.component.html',
  styleUrls: ['./contact-form-section.component.css']
})
export class ContactFormSectionComponent implements OnInit {
	ContactUs = { english: 'Contact Us', chinese: '联系我们'};
	Submit = { english: 'Submit', chinese: '提交'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
