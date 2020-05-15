import { Component, OnInit, Input } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {
	@Input() greeting;

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
    if (!this.greeting) {
      this.greeting = this.data.greeting;
    }
  }
}
