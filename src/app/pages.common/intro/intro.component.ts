import { Component, OnInit, Input } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
	@Input() greeting;

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
    if (!this.greeting) {
      this.greeting = this.data.greeting;
    }
  }
}
