import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-section-container',
  templateUrl: './section-container.component.html',
  styleUrls: ['./section-container.component.css']
})
export class SectionContainerComponent implements OnInit {
	@Input() section: Section;
	@Input() light = false;

  constructor(public data: ChchalcDataService) { }

  ngOnInit() {
  }

}
