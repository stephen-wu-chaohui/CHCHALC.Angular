import { Component, OnInit, Input } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Observable } from 'rxjs';
import { Section, Story } from 'src/app/data/api-data';
import { DataClientService } from 'src/app/data/data-client.service';

@Component({
  selector: 'app-story-section',
  templateUrl: './story-section.component.html',
  styleUrls: ['./story-section.component.css']
})
export class StorySectionComponent implements OnInit {
  @Input() section: Section;
  @Input() groupName: string;

  observer: Observable<Story[]>;

  constructor(public data: ChchalcDataService, public dataClient: DataClientService) { }

  ngOnInit() {
    this.observer = this.dataClient.observeList<Story>(this.groupName, this.data.adminMode);
	}

}
