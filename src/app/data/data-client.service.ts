import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Entity } from './api-data';

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
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  constructor(private httpClient: HttpClient, private store: AngularFirestore) { }

  getAPIData<T>(listName: OneOfList): Observable<T> {
    return this.httpClient.get<T>(this.APIBase + listName, this.httpOptions);
  }

  upsert(listName: string, entity: any) {
    // const url = this.APIBase + listName;
    // return this.httpClient.post(url, entity);
    if (!entity.id) {
      entity.id = uuidv4();
    }
    const dbentity = Object.assign({}, entity);
    return this.store.collection(listName).doc(entity.id).set(dbentity);
  }

  observeList(listName: string, includingDeleted: boolean) {
    return this.store.collection(listName, ref => ref.where('deleted', '==', includingDeleted.toString())).snapshotChanges();
  }
}
