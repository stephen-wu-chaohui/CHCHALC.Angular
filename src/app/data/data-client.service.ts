import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { v4 as uuidv4 } from 'uuid';
import * as moment from 'moment';
import { map } from 'rxjs/operators';
import { Entity } from './api-data';

export type OneOfList = ''|'contactInfo' |'sermons' |'activities' |'homeslides' |'persons' |'stories' |'cellgroups'|'ministries';

@Injectable({
  providedIn: 'root'
})
export class DataClientService {
  constructor(private store: AngularFirestore) { }

  upsert(listName: string, entity: any) {
    if (!entity.id) {
      entity.id = uuidv4();
    }
    const dbentity = Object.assign({}, entity);
    dbentity.lastUpdated = moment().unix();
    return this.store.collection(listName).doc(entity.id).set(dbentity);
  }

  observeList<T>(listName: string, includingDeleted: boolean) {
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
