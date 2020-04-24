import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-pastors-slider',
  templateUrl: './pastors-slider.component.html',
  styleUrls: ['./pastors-slider.component.css']
})
export class PastorsSliderComponent implements OnInit {
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 2, lg: 3, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 500 },
    animation: 'lazy'
  };

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
