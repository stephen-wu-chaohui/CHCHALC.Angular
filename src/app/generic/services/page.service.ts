import { Injectable } from '@angular/core';
import { WEntity, WPage } from './types';

export class EntityPagesBinding {
  entity: WEntity;
  template: WPage[];
  selectedPage?: number;
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
    title: { english: 'News', chinese: '新闻'},
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'News', chinese: '最新消息'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'news',
        priorities: ['high'],
      },
      entityDisplayOptions: {
        size: 'large',
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
      label: 'ministries',
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
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'original',
        contentStyle: 'quote'
      },
      action: 'Link'
    }, {
      label: 'pastors',
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
      label: 'cellgroups',
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

  sermonsPage: WPage = {
    id: 'sermons',
    title: { english: 'Sermons', chinese: '讲道'},
    sections: [{
      icon: 'assets/images/church_3.png',
      title: { english: 'Today"s Sermon', chinese: '今日讲道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroudImage: '/assets/images/sermon.png',
      entitySource: {
        collection: 'sermons',
        priorities: ['high'],
        slice: 'first',
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
  };

  homePage: WPage = {
    id: 'home',
    title: { english: 'Home', chinese: '首页'},
    homeBar: 'none',
    sections: [{
      entitySource: {
        collection: 'homeslides',
        priorities: ['high'],
      },
      entityDisplayOptions: {
        size: 'slide',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'image-title'
      }
    }, {
      label: 'welcome',
      icon: 'assets/images/church_2.png',
      title: { english: 'Welcome to ALC', chinese: '欢迎来到丰盛生命教会'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      description: {
        english: 'to bring people to Jesus and membership in his family',
        chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员'
      },
      entitySource: {
        collection: 'welcome',
        priorities: ['high'],
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'intro',
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
        directionStr: 'asc'
      },
      entityDisplayOptions: {
        size: 'tiny',
        position: 'top-bottom',
        imageStyle: 'original',
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
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'page',
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
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'row',
        position: 'left-right',
        imageStyle: 'original',
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
        slice: 'first',
        maxinum: 20
      },
      entityDisplayOptions: {
        size: 'large',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      action: 'Route'
    }]
  };

  topPages = [
    this.homePage,
    this.churchPage,
    this.sermonsPage,
    this.newsPage
  ];

}
