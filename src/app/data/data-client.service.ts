import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

export type OneOfList = ''|'contactInfo' |'Sermons' |'Activities' |'Hightlights' |'Persons' |'Stories' |'Cellgroups'|'Ministries';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {
  private APIBase = 'https://us-central1-chchalc.cloudfunctions.net/app/api/';
  // private APIBase = 'http://localhost:5001/chchalc/us-central1/app/api/';

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

  getAPIData<T>(listName: OneOfList): Observable<T> {
    return this.httpClient.get<T>(this.APIBase + listName, this.httpOptions);
  }

  upsert(listName: OneOfList, entity: any): Observable<any> {
    const url = this.APIBase + listName;
    return this.httpClient.post(url, entity);
  }

}
