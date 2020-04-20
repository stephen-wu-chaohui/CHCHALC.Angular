import { Component, Input, AfterViewInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Section } from 'src/app/data/api-data';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements AfterViewInit {
	@Input() section: Section;
	@Input() light = false;

	constructor(public data: ChchalcDataService) { }

	ngAfterViewInit(): void {

	}
}
