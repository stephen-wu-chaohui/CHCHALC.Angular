import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	UsefulLinks = { english: 'Useful Links', chinese: '友情链接'};
	ContactUs = { english: 'Contact Us', chinese: '联系我们'};

	Address = { english: 'Address: ', chinese: '地址：'};
	Phone = { english: 'Phone: ', chinese: '电话：'};
	Email = { english: 'Email: ', chinese: '邮件：'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
