import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    date.setDate(date.getDate() + 3);
    const target_date = date.getTime();
    const current_date = new Date().getTime();
    let seconds_left = (target_date - current_date) / 1000;

    setInterval(() =>
    {
        // do some time calculations
        this.days = seconds_left / 86400;
        seconds_left = seconds_left % 86400;

        this.hours = seconds_left / 3600;
        seconds_left = seconds_left % 3600;

        this.minutes = seconds_left / 60;
        this.seconds = seconds_left % 60;

    }, 1000);

  }

}

