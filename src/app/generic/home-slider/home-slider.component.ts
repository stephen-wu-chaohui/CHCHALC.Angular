import { Component, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
import { Observable } from 'rxjs';
import { ContextService } from '../../services/context.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit {
  @Input() slideObservable: Observable<any>;

  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    speed: 500,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1000 },
    animation: 'lazy'
  };
  comeAndJoinUs = {
    english: 'Come and Join us', chinese: '欢迎加入我们'
  };

  constructor(public ss: SettingsService, public contxetService: ContextService) {
  }

  ngOnInit() {
  }
}
