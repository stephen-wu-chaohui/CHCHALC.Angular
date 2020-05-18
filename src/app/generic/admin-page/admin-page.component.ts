import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  page = {
    id: 'admin',
    title: { english: 'Admin', chinese: '维护模式'},
    sections: []
  };

  constructor(private ss: SettingsService) { }

  ngOnInit() {
  }

  setAdmin(admin: boolean = true) {
    this.ss.adminMode = admin;
  }
}
