import { Injectable } from '@angular/core';
import { WEntity, WPage } from './types';

export class EntityPagesBinding {
  entity: WEntity;
  selectedPage?: number;
  windowYPosition?: number;
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
        priorities: ['high', 'emergancy', 'low'],
        directionStr: 'asc',
        editable: true
      },
      entityDisplayOptions: {
        size: 'large',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'image-only'
      }
    }]
  };

  slicePage: WPage = {
    id: 'slice',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Story', chinese: '讲道提纲'},
      subtitle: { english: 'God loves us all', chinese: '神的话语是我生命的灵粮'},
      entitySource: {
        collection: 'pdfs',
        priorities: ['high', 'emergancy', 'low'],
        directionStr: 'asc',
        editable: true
      },
      entityDisplayOptions: {
        size: 'large',
        position: 'top-bottom',
        imageStyle: 'full',
        contentStyle: 'image-only'
      }
    }]
  };

  ministryPage: WPage = {
    id: 'ministryPage',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Testimonies', chinese: '见证'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high'],
        editable: true
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.storyPage.id]
    }]
  };

  cellgroupPage: WPage = {
    id: 'cellgroupPage',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Testimonies', chinese: '见证'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high'],
        editable: true
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.storyPage.id]
    }, {
      icon: 'assets/images/church_1.png',
      title: { english: 'Bible Study', chinese: '查经'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'bible-study',
        priorities: ['high'],
        editable: true
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.storyPage.id]
    }, {
      icon: 'assets/images/church_2.png',
      title: { english: 'Outdoors', chinese: '传道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'outdoors',
        priorities: ['high'],
        editable: true
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.storyPage.id]
    }]
  };

  personalPage: WPage = {
    id: 'personalPage',
    sections: [{
      icon: 'assets/images/church_6.png',
      title: { english: 'Confession', chinese: '我的告解'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high'],
        editable: true
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.storyPage.id]
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
        editable: true
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.storyPage.id]
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
        editable: true
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'page',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.ministryPage.id ]
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
        size: 'full',
        position: 'top-bottom',
        imageStyle: 'original',
        contentStyle: 'quote'
      }
    }, {
      label: 'pastors',
      icon: 'assets/images/church_6.png',
      title: { english: 'Our Pastors', chinese: '我们的牧师'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'persons',
        priorities: ['high', 'low'],
        directionStr: 'asc',
        editable: true
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'icon',
        contentStyle: 'pastor'
      },
      entityTemplate: [this.personalPage.id ]
    }, {
      label: 'cellgroups',
      icon: 'assets/images/church_4.png',
      title: { english: 'Our Church\'s Cellgroups', chinese: '我们的小家'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'cellgroups',
        priorities: ['high', 'low'],
        editable: true
      },
      entityDisplayOptions: {
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'page',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.cellgroupPage.id ]
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
        size: 'side-by-side',
        position: 'left-right',
        imageStyle: 'full',
        contentStyle: 'all'
      },
      entityTemplate: [this.slicePage.id]
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
      entityTemplate: [this.slicePage.id]
    }]
  };

  homePage: WPage = {
    id: 'home',
    title: { english: 'Home', chinese: '首页'},
    homeBar: 'none',
    sections: [{
      backgroudImage: '/assets/images/slider_background_1.jpg',
      entitySource: {
        collection: 'homeslides',
        priorities: ['high'],
        slice: 'last',
        maxinum: 1
      },
      entityDisplayOptions: {
        size: 'slide',
        position: 'top-bottom',
        imageStyle: 'original',
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
        size: 'side-by-side',
        position: 'right-left',
        imageStyle: 'page',
        contentStyle: 'text-only'
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
      }
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
        size: 'side-by-side',
        position: 'left-right',
        imageStyle: 'page',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.slicePage.id]
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
        size: 'full',
        position: 'top-bottom',
        imageStyle: 'original',
        contentStyle: 'quote'
      },
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
        size: 'medium',
        position: 'top-bottom',
        imageStyle: 'margin',
        contentStyle: 'image-title'
      },
      entityTemplate: [this.slicePage.id]
    }]
  };

  topPages = [
    this.homePage,
    this.churchPage,
    this.sermonsPage,
    this.newsPage
  ];

  allPages = [
    this.homePage,
    this.churchPage,
    this.sermonsPage,
    this.newsPage,
    this.cellgroupPage,
    this.ministryPage,
    this.personalPage,
    this.slicePage,
    this.storyPage,
  ];


  getTemplate(entity: WEntity): WPage[] {
    return entity.uiTemplateId?.map(id => this.allPages.find(p => p.id === id));
  }

  findPage(pageId: string): WPage {
    return this.allPages.find(p => p.id === pageId);
  }

}
