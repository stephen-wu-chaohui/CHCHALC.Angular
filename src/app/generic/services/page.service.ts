import { Injectable } from '@angular/core';
import { WEntity, WPage } from './types';

export class EntityPagesBinding {
  entity: WEntity;
  template: WPage[];
}

@Injectable({
  providedIn: 'root'
})
export class PageService {
  storyPage: WPage = {
    id: 'story',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Story', chinese: '精彩故事'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'photos',
        priorities: ['high', 'emergancy', 'low']
      },
      entityDisplayOptions: {
        size: 'large',
        position: 'left-right',
        imageStyle: 'margin',
        contentStyle: 'image-only'
      }
    }]
  };

  ministryPage: WPage = {
    id: 'home',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Testimonies', chinese: '见证'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high']
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route',
      entityTemplate: [this.storyPage]
    }]
  };

  cellgroupPage: WPage = {
    id: 'home',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Testimonies', chinese: '见证'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high']
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route',
      entityTemplate: [this.storyPage]
    }]
  };

  personalPage: WPage = {
    id: 'home',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Confession', chinese: '我的告解'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high'],
        slice: 'last',
        maxinum: 3
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route',
      entityTemplate: [this.storyPage]
    }]
  };

  newsPage: WPage = {
    id: 'news',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'News', chinese: '最新消息'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high'],
        slice: 'last',
        maxinum: 3
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route',
      entityTemplate: [this.storyPage]
    }]
  };

  churchPage: WPage = {
    id: 'church',
    title: { english: 'Our church', chinese: '教会'},
    sections: [{
      icon: 'assets/images/church_2.png',
      title: { english: 'Our Ministries', chinese: '我们的事工'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'ministries',
        priorities: ['high', 'low'],
        directionStr: 'asc',
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'page',
        contentStyle: 'image-title'
      },
      action: 'Route',
      entityTemplate: [this.ministryPage ]
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
        directionStr: 'asc',
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'icon',
        contentStyle: 'pastor'
      },
      action: 'Route',
      entityTemplate: [this.personalPage ]
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
        imageStyle: 'page',
        contentStyle: 'image-title'
      },
      action: 'Route',
      entityTemplate: [this.cellgroupPage ]
    }]
  };

  topPages = [
    this.churchPage,
    this.newsPage
  ];

  private routeStack: EntityPagesBinding[] = [];

  constructor() { }

  routeTo(context: EntityPagesBinding) {
    this.routeStack.unshift(context);
  }

  get currentContext() {
    if (!this.routeStack.length) {
      return null;
    }
    return this.routeStack[0];
  }

  pop(): boolean {
    if (!this.routeStack.length) {
      return false;
    }
    this.routeStack.shift();
    return this.routeStack.length > 0;
  }
}
