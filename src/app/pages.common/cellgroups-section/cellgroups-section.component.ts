import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-cellgroups-section',
  templateUrl: './cellgroups-section.component.html',
  styleUrls: ['./cellgroups-section.component.css']
})
export class CellgroupsSectionComponent implements OnInit {

	public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 2, md: 3, lg: 4, all: 0 },
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };

	constructor(public data: ChchalcDataService) { }

	ngOnInit() {

	}

}
