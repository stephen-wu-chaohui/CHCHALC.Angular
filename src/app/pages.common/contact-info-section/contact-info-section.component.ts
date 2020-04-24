import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-contact-info-section',
  templateUrl: './contact-info-section.component.html',
  styleUrls: ['./contact-info-section.component.css']
})
export class ContactInfoSectionComponent implements OnInit {
	ContactInfo = { english: 'Contact Info', chinese: '联系方式'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
