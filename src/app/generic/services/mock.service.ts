import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { WPage, WAssembly, WEntity, ServiceResponse, EntitySource, Path, EntityId, ImageURL, WEntityRoot } from './types';
import { AbstrctEntityService } from './entity.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockService extends AbstrctEntityService {
  constructor(private store: AngularFirestore, private storage: AngularFireStorage) {
    super();
  }

  church: WAssembly = {
    id: 'church',
    start: 1589232395000,
    path: '',
    name: { english: 'Chinese Abundant Life Church', chinese: '基督城华人丰盛生命教会'},
    title: { english: 'Abundant Life', chinese: '丰盛的生命'},
    subTitle: { english: 'Reborn Church', chinese: '重生的教会'},
    address: { english: '182 The Run Way, Wigram, Christchurch 8042'},
    coordinate: { lantitue: -43.549917, longitude: 172.562886 },
    host: 'Lead Pastor'
  };

  get root(): WEntity { return this.church; }

  collectionPathOf(path: Path, collectionName: string): Path {
    const names = path.split('/');
    const patterns = collectionName.split('/');

    if (patterns.length === 1) {
      if (path === '') {
        return patterns[0];
      }
      names.push(patterns[0]);
      return names.length === 1 ? patterns[0] : names.join('/');
    }
    if (patterns.length === 2 && patterns[0] === '.') {
      names.push(patterns[1]);
      return names.join('/');
    }
    if (patterns.length === 2 && patterns[0] === '..') {
      if (names.length < 2) {
        console.error('path is too short:', path);
        return null;
      }
      names.pop();
      names.pop();
      names.push(patterns[1]);
      return names.join('/');
    }
    if (patterns.length === 2 && patterns[0] === '') {
      // let names = path.split('/');
      // if (names.length < 2) {
      //   console.error('path is too short:', path);
      //   return null;
      // }
      // names = names.slice(0, 1);
      // names.push(patterns[1]);
      // return names.join('/');
      return patterns[1];
    }
    return null;
  }

  async getEntity(collectionPath: Path, id: EntityId): Promise<WEntity> {
    return this.store.collection(collectionPath).doc(id).get().toPromise().then(
      obj => (obj.data) as unknown as WEntity
    );
  }

  async setEntity(collectionPath: Path, newValue: WEntity): Promise<ServiceResponse> {
    try {
      await this.store.collection(collectionPath).doc(newValue.id).set(newValue);
      return ({ status: 'OK', reason: null });
    } catch (reason) {
      return ({ status: 'Error', reason });
    }
  }

  async updateEntity(collectionPath: Path, newChanges: WEntity): Promise<ServiceResponse> {
    try {
      await this.store.collection(collectionPath).doc(newChanges.id).update(newChanges);
      return ({ status: 'OK', reason: null });
    } catch (reason) {
      return ({ status: 'Error', reason });
    }
  }

  getObservable(hostPath: Path, source: EntitySource): Observable<any[]> {
    const collectionPath = this.collectionPathOf(hostPath, source.collection);
    const directionStr = source.directionStr || 'desc';
    const query = this.store.collection(collectionPath, (a: CollectionReference) => {
      const cond = a.orderBy('start', directionStr);
      if (!cond) {
        return a;
      }
      if (source.slice === 'first') {
        return cond.limit(source.maxinum);
      } else if (source.slice === 'last') {
        return cond.limitToLast(source.maxinum);
      } else {
        return cond;
      }
    });

    return query.valueChanges().pipe(map(a => {
      console.log(source.collection, a);
      return a;
    }));
  }

  async uploadImage(collectionPath: Path, file: File): Promise<ImageURL> {
    const ref = this.storage.ref(`${collectionPath}/${file.name}`);
    await ref.put(file);
    return (await ref.getDownloadURL().toPromise()) as ImageURL;
  }
}
