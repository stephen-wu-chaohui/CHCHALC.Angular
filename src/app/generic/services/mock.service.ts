import { Injectable } from '@angular/core';
import { Observable, pipe, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { WPage, WAssembly, WEntity, ServiceResponse, EntitySource, Path, EntityId, ImageURL, CollectionRef, WEntityRoot } from './types';
import { AbstrctEntityService } from './entity.service';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class MockService extends AbstrctEntityService {
  constructor(private store: AngularFirestore, private storage: AngularFireStorage) {
    super();
  }

  topPages: WPage[] = [{
    id: 'home',
    sections: [{
      entitySource: {
        collection: 'sliders',
        priorities: ['high'],
      },
      entityDisplayOptions: {
        size: 'slide',
        position: 'middle',
        imageStyle: 'full',
        contentStyle: 'image-title'
      }
    }, {
      entitySource: {
        collection: 'welcome',
        priorities: ['high'],
        slice: 'last',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'all'
      }
    }, {
      icon: 'assets/images/church_2.png',
      title: { english: 'Our Church main activities', chinese: '教会主要活动'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      description: {
        english: 'to bring people to Jesus and membership in his family',
        chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员'
      },
      backgroudImage: '/assets/images/services.jpg',
      lightText: true,
      entitySource: {
        collection: 'activity',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'icon',
        position: 'top-bottom',
        imageStyle: 'icon',
        contentStyle: 'image-title'
      },
      action: 'Route'
    }, {
      icon: 'assets/images/church_3.png',
      title: { english: 'Today\'s Sermon', chinese: '今日讲道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroudImage: '/assets/images/sermon.png',
      entitySource: {
        collection: 'sermons',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'all'
      },
      action: 'Link'
    }, {
      icon: 'assets/images/church_5.png',
      title: { english: 'Quote of the day', chinese: '今日金句'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroudImage: '/assets/images/quote.jpg',
      lightText: true,
      entitySource: {
        collection: 'quotes',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'quote'
      },
      action: 'Link'
    }, {
      icon: 'assets/images/church_6.png',
      title: { english: 'Latest News', chinese: '最新消息'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'news',
        priorities: ['high'],
        slice: 'last',
        maxinum: 3
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route'
    }]
  }, {
    id: 'church',
    title: { english: 'Our church', chinese: '教会'},
    sections: [{
      icon: 'assets/images/church_2.png',
      title: { english: 'Our Ministries', chinese: '我们的事工'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'ministries',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'all'
      },
      action: 'Route'
    }, {
      icon: 'assets/images/church_5.png',
      title: { english: 'Quote of the day', chinese: '今日金句'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroudImage: '/assets/images/quote.jpg',
      lightText: true,
      entitySource: {
        collection: 'quotes',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'quote'
      },
      action: 'Link'
    }, {
      icon: 'assets/images/church_6.png',
      title: { english: 'Our Pastors', chinese: '我们的牧师'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'persons',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'icon',
        contentStyle: 'image-title'
      },
      action: 'Route'
    }, {
      icon: 'assets/images/church_4.png',
      title: { english: 'Our Church\'s Cellgroups', chinese: '我们的小家'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'cellgroups',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route'
    }]
  }, {
    id: 'sermons',
    title: { english: 'Sermons', chinese: '讲道'},
    sections: [{
      icon: 'assets/images/church_3.png',
      title: { english: 'Today\'s Sermon', chinese: '今日讲道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroudImage: '/assets/images/sermon.png',
      entitySource: {
        collection: 'sermons',
        priorities: ['high'],
        slice: 'last',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'all'
      },
      action: 'Link'
    }, {
      icon: 'assets/images/church_4.png',
      title: { english: 'Popular Sermons', chinese: '热点讲道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'sermons',
        priorities: ['high'],
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'full',
        contentStyle: 'image-title'
      },
      action: 'Link'
    }, {
      lightText: true,
      entitySource: {
        collection: 'sermons',
        priorities: ['emergancy'],
      },
      entityDisplayOptions: {
        size: 'large',
        position: 'middle',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Link'
    }]
  }, {
    id: 'news',
    title: { english: 'News', chinese: '新闻'},
    sections: [{
      entitySource: {
        collection: 'news',
        priorities: ['high'],
        slice: 'last',
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'full',
        contentStyle: 'image-title'
      },
      action: 'Route'
    }]
  }];

  church: WAssembly = {
    id: 'church',
    path: WEntityRoot,
    name: { english: 'Chinese Abundant Life Church', chinese: '基督城华人丰盛生命教会'},
    title: { english: 'Abundant Life', chinese: '丰盛的生命'},
    subTitle: { english: 'Reborn Church', chinese: '重生的教会'},
    address: { english: '182 The Run Way, Wigram, Christchurch 8042'},
    coordinate: { lantitue: -43.549917, longitude: 172.562886 },
    host: 'Lead Pastor',
    availableCollections: [
      { location: 'root', collectionName: 'sliders' },
      { location: 'root', collectionName: 'sermons' },
      { location: 'root', collectionName: 'welcome' },
      { location: 'root', collectionName: 'pastors' },
      { location: 'root', collectionName: 'cellgroups' },
      { location: 'root', collectionName: 'news' },
      { location: 'root', collectionName: 'ministries'}
    ],
    availablePages: ['home', 'church', 'sermons', 'news']
  };

  get root(): WEntity { return this.church; }

  private rootCollectionPathOf(parent: WEntity) {
    const firstSeperator = parent.path.indexOf('/');
    if (firstSeperator === -1) {
      return parent.path;
    }
    return parent.path.substring(0, firstSeperator);
  }

  private parentCollectionPathOf(parent: WEntity) {
    let path = parent.path;
    if (path.endsWith('/')) {
      path = path.substring(0, path.length - 1);
    }
    let lastIndex = path.lastIndexOf('/');
    if (lastIndex <= 0) {
      return path;
    }
    lastIndex = path.lastIndexOf('/', lastIndex - 1);
    if (lastIndex <= 0) {
      return path;
    }
    path = path.substring(0, lastIndex - 1);
    return path;
  }

  private thisCollectionPathOf(parent: WEntity) {
    let path = parent.path;
    if (path.endsWith('/')) {
      path = path.substring(0, path.length - 1);
    }
    return path;
  }

  collectionPathOf(parent: WEntity, collectionName: string): Path {
    const collectionRef = parent.availableCollections.find(it => it.collectionName === collectionName);
    if (collectionRef) {
      return null;
    }
    switch (collectionRef.location) {
      case 'root':
        return this.rootCollectionPathOf(parent) + '/' + collectionRef.collectionName;
      case 'parent':
        return this.parentCollectionPathOf(parent) + '/' + collectionRef.collectionName;
      case 'this':
        return this.thisCollectionPathOf(parent) + '/' + collectionRef.collectionName;
    }
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

  getObservable(host: WEntity, source: EntitySource): Observable<any[]> {
    const collectionPath = this.collectionPathOf(host, source.collection);
    const directionStr = source.directionStr || 'desc';
    const query = this.store.collection(collectionPath, a => {
      const cond = a.orderBy('start', directionStr);
      if (source.slice === 'first') {
        return cond.limit(source.maxinum);
      } else if (source.slice === 'last') {
        return cond.limitToLast(source.maxinum);
      } else {
        return cond;
      }
    });

    return query.valueChanges();
  }

  async uploadImage(collectionPath: Path, file: File): Promise<ImageURL> {
    const ref = this.storage.ref(`${collectionPath}/${file.name}`);
    await ref.put(file);
    return (await ref.getDownloadURL().toPromise()) as ImageURL;
  }
}