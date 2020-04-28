import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-ministry-section',
  templateUrl: './ministry-section.component.html',
  styleUrls: ['./ministry-section.component.css']
})
export class MinistrySectionComponent implements OnInit {

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
	}

	createEmptyItem() {
		return {
	      image: 'assets/images/ministries_1.jpg',
	      title: { chinese: '新的事工', english: 'New Ministry'},
	      text: {
	        chinese: '你们要去、使万民作我的门徒、奉父子圣灵的名、给他们施洗',
	        english: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
	      }
	    };
	}

}
