import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import { filter, map } from 'rxjs/operators';
import { Entity } from './api-data';

export type OneOfList = ''|'contactInfo' |'sermons' |'activities' |'homeslides' |'persons' |'stories' |'cellgroups'|'ministries';

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
		dbentity.lastUpdated = moment().unix();
    return this.store.collection(listName).doc(entity.id).set(dbentity);
  }

  observeList<T>(listName: string, includingDeleted: boolean) {
		// const query = this.store.collection(listName).ref.orderBy('timeStamp', 'desc');
		let query = this.store.collection(listName).valueChanges();
		if (!includingDeleted) {
			query = query.pipe(map(arr => arr.filter((item: Entity) => !item.deleted)));
		}
		return query as Observable<T[]>;
	}

	single(collectionName: string): Observable<any> {
		const query = this.store.collection(collectionName).doc('singleton');
    return query.valueChanges();
  }

}
