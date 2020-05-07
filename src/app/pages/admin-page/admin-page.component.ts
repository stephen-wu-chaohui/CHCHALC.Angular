import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
	title = { english: 'Admin', chinese: '维护模式'};

  constructor(private data: ChchalcDataService) { }

  ngOnInit() {
  }

	setAdmin(admin: boolean = true) {
    this.data.adminMode = admin;
    document.getElementById('admin-message-div-canaan').style.opacity = '1.0';
    setTimeout('hideAdmin()', 5000);
	}
}
