import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.css']
})
export class CausesComponent {
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
