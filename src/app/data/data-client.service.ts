import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, forkJoin } from 'rxjs';
import { ContactInfo, Sermon, Ministry, SliderItem, Blog, Pastor } from './api-data';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {

  APIBase = 'https://us-central1-chchalc.cloudfunctions.net/app/api/';

  environment = {
    urlContactInfo: this.APIBase + 'contactInfo',
    urlPastors: this.APIBase + 'Pastors',
    urlSermons: this.APIBase + 'Sermons',
    urlNews: this.APIBase + 'News',
    urlMinistries: this.APIBase + 'Ministries',
    urlTestimonies: this.APIBase + 'Testimonies',
    urlActivities: this.APIBase + 'Activities',
    urlHightlights: this.APIBase + 'Hightlights',
    urlPosts: this.APIBase + 'Posts',
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
  return this.httpClient.get<Sermon[]>(this.environment.urlSermons, this.httpOptions);
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

getPosts() {
  return this.httpClient.get<Blog[]>(this.environment.urlPosts, this.httpOptions);
}

getPastors() {
  return this.httpClient.get<Pastor[]>(this.environment.urlPastors, this.httpOptions);
}

getAllData() {
  return forkJoin([
    this.getContactInfo(),
     this.getPastors(),
     this.getPosts(),
     this.getSliders(),
     this.getSermons(),
  ]);
}


}
