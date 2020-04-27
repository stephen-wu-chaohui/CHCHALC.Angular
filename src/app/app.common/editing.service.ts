import { Injectable } from '@angular/core';
import { OneOfList, DataClientService } from '../data/data-client.service';
import { Story } from '../data/api-data';
import * as _ from 'lodash';
import { StoryFormComponent } from './story-form/story-form.component';
import { ChchalcDataService } from '../data/chchalc-data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditingService {
  storyFormComponent: StoryFormComponent;
  story: Story;
  listName: OneOfList;

  constructor(
    private data: ChchalcDataService,
    private dataClient: DataClientService
  ) { }

  register(form: StoryFormComponent) {  // for StoryFormComponent
    this.storyFormComponent = form;
  }

  async edit(listName: OneOfList, story: Story) {	// used by directive click
    if (!this.data.adminMode) {
      console.error('Can\'t start edit story because of improper state');
      return false;
    }
    if (!this.storyFormComponent) {
      console.error('Can\'t start edit story because of improper storyFormComponent');
      return false;
    }
    if (story == null) {
      console.error('Can\'t edit a null story');
      return false;
    }
    this.listName = listName;
    this.story = story;
    return await this.storyFormComponent.edit(story);
  }

  async save(newRevision: Story): Promise<boolean> {  // used by save
    return this.dataClient.upsert(this.listName, newRevision).pipe(
      map(updates => _.merge(this.story, updates) != null)
    ).toPromise();
  }
}
