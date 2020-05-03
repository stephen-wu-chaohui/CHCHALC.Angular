import { Component, OnInit, Input } from '@angular/core';
import { Story } from 'src/app/data/api-data';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.css']
})
export class StoryViewComponent implements OnInit {
  @Input() item: Story;

  constructor() { }

  ngOnInit() {
  }

}
