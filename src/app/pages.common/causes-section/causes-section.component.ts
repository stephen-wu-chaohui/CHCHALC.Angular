import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-causes-section',
  templateUrl: './causes-section.component.html',
  styleUrls: ['./causes-section.component.css']
})
export class CausesSectionComponent {
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 500 },
    animation: 'lazy'
  };

  constructor(public data: ChchalcDataService) { }

}
