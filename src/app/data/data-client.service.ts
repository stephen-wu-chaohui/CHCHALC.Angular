import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ContactInfo, Ministry, SliderItem, Person, Story } from './api-data';

@Injectable({
  providedIn: 'root'
})

export class DataClientService {
	APIBase = 'https://us-central1-chchalc.cloudfunctions.net/app/api/';
	// APIBase = 'http://localhost:5001/chchalc/us-central1/app/api/';
  environment = {
    urlContactInfo: this.APIBase + 'contactInfo',
    urlSermons: this.APIBase + 'Sermons',
    urlMinistries: this.APIBase + 'Ministries',
    urlActivities: this.APIBase + 'Activities',
    urlHightlights: this.APIBase + 'Hightlights',
		urlPeople: this.APIBase + 'Persons',
		urlStories: this.APIBase + 'Stories',
	};

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

constructor(private httpClient: HttpClient) { }

getContactInfo() {
  return this.httpClient.get<ContactInfo>(this.environment.urlContactInfo, this.httpOptions);
}

getSermons() {
  return this.httpClient.get<Story[]>(this.environment.urlSermons, this.httpOptions);
}

getServices() {
  return this.httpClient.get<Ministry[]>(this.environment.urlActivities, this.httpOptions);
}

getMinistries() {
  return this.httpClient.get<Ministry[]>(this.environment.urlMinistries, this.httpOptions);
}

getSliders() {
  return this.httpClient.get<SliderItem[]>(this.environment.urlHightlights, this.httpOptions);
}

getPeople() {
  return this.httpClient.get<Person[]>(this.environment.urlPeople, this.httpOptions);
}

getStories() {
  return this.httpClient.get<Story[]>(this.environment.urlStories, this.httpOptions);
}


}
