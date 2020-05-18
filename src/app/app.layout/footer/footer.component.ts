import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  weAreHere = { english: 'We are here', chinese: '我们在这里'};
  ContactUs = { english: 'Contact Us', chinese: '联系我们'};

  Address = { english: 'Address: ', chinese: '地址：'};
  Phone = { english: 'Phone: ', chinese: '电话：'};
  Email = { english: 'Email: ', chinese: '邮件：'};

  // contactInfo: Observable<ContactInfo>;

  constructor(public ss: SettingsService, public es: MockService) {

  }

  ngOnInit() {
    // this.contactInfo = this.dataClient.single('contactInfo');
  }

}
