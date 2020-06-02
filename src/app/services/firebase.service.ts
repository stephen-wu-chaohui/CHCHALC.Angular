import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, CollectionReference } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { WAssembly, WEntity, ServiceResponse, EntitySource, Path, EntityId, ImageURL } from './types';
import { AbstrctEntityService } from './entity.service';
import { map } from 'rxjs/operators';
import { PageService } from './page.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService extends AbstrctEntityService {
  constructor(private store: AngularFirestore, private storage: AngularFireStorage, private pageService: PageService) {
    super();
  }

  private church: WAssembly = {
    id: 'church',
    start: 1589232395000,
    path: '',
    name: { english: 'Chinese Abundant Life Church', chinese: '基督城华人丰盛生命教会'},
    title: { english: 'Abundant Life', chinese: '丰盛的生命'},
    subTitle: { english: 'Reborn Church', chinese: '重生的教会'},
    address: { english: '182 The Run Way, Wigram, Christchurch 8042'},
    coordinate: { lantitue: -43.549917, longitude: 172.562886 },
    host: 'Lead Pastor',
    phoneNumbers: ['02102591292', '02102591292'],
    email: 'admin@nzalc.org',
    password: 'chchalc',
    uiTemplateId: this.pageService.topPages.map(p => p.id)
  };

  get root(): WAssembly {
    // return from(this.getEntity<WAssembly>('churches', 'chchalc'));
    return this.church;
  }

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

  async getEntity<TEntity extends WEntity>(collectionPath: Path, id: EntityId): Promise<TEntity> {
    return this.store.collection(collectionPath).doc(id).get().toPromise().then(
      obj => (obj.data()) as TEntity
    );
  }

  async setEntity<TEntity extends WEntity>(collectionPath: Path, newValue: TEntity): Promise<ServiceResponse> {
    try {
      await this.store.collection(collectionPath).doc<TEntity>(newValue.id).set(newValue);
      return ({ status: 'OK', reason: null });
    } catch (reason) {
      return ({ status: 'Error', reason });
    }
  }

  async updateEntity<TEntity extends WEntity>(collectionPath: Path, newChanges: TEntity): Promise<ServiceResponse> {
    try {
      await this.store.collection(collectionPath).doc<TEntity>(newChanges.id).update(newChanges);
      return ({ status: 'OK', reason: null });
    } catch (reason) {
      return ({ status: 'Error', reason });
    }
  }

  getObservable<TEntity extends WEntity>(hostPath: Path, source: EntitySource, includingDeleted: boolean): Observable<TEntity[]> {
    const collectionPath = this.collectionPathOf(hostPath, source.collection);
    const directionStr = source.directionStr || 'desc';
    const query = this.store.collection<TEntity>(collectionPath, (a: CollectionReference) => {
      const cond = a.orderBy('start', directionStr) || a;
      if (source.slice === 'first') {
        return cond.limit(source.maxinum);
      } else if (source.slice === 'last') {
        return cond.limitToLast(source.maxinum);
      } else {
        return cond;
      }
    });

    let changes = query.snapshotChanges().pipe(map(
      actions => actions.map(act => {
        const doc = act.payload.doc;
        const entity = doc.data();
        entity.path = doc.ref.path;
        entity.id = doc.ref.id;
        return entity;
      })));

    if (!includingDeleted) {
      changes = changes.pipe(map(
        items => items.filter(it => !it.deleted)
      ));
    }
    return changes;
  }


  async uploadImage(collectionPath: Path, file: File): Promise<ImageURL> {
    const ref = this.storage.ref(`${collectionPath}/${file.name}`);
    await ref.put(file);
    return (await ref.getDownloadURL().toPromise()) as ImageURL;
  }
}
