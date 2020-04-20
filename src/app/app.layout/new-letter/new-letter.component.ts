import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css']
})
export class NewLetterComponent implements OnInit {
	label = { english: 'Subscribe to our newsletter', chinese: '订阅我们的新闻邮件'};
	Subscribe = { english: 'Subscribe', chinese: '订阅'};

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
