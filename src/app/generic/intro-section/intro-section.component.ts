import { Component, OnInit, Input } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { WEntity } from '../services/types';

@Component({
  selector: 'app-intro-section',
  templateUrl: './intro-section.component.html',
  styleUrls: ['./intro-section.component.css']
})
export class IntroSectionComponent implements OnInit {
	@Input() greeting: WEntity;

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
    if (!this.greeting) {
      this.greeting = {
        id: 'welcome-1',
        image: 'assets/images/intro.jpg',
        start: 0,
        path: 'welcome/welcome-1',
        title: { chinese: '神与我们同在', english: 'God is all with us'},
        text: {
            chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员，使他们在基督里成熟，装备他们在教会中参与事工，在世界以生命宣教，以此来宣扬神的名',
            english: 'to bring people to Jesus and membership in his family, develop them Christlike maturity, and equip them for their ministry in the church, and life mission in the world, in order to magnify God’s name'
        }
      }
    }
  }
}
