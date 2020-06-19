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
        contentStyle: 'page',
        imageStyle: 'full'
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
        imageStyle: 'full',
        contentStyle: 'page'
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
        imageStyle: 'margin',
        contentStyle: 'item'
      },
      entityTemplate: [this.storyPage.id]
    }]
  };

  lifegroupPage: WPage = {
    id: 'lifegroupPage',
    sections: [{
      icon: 'assets/images/church_1.png',
      entitySource: {
        collection: 'homeslides',
        priorities: ['high'],
        slice: 'last',
        maxinum: 1
      },
      entityDisplayOptions: {
        imageStyle: 'original',
        contentStyle: 'frontpage'
      },
    }, {
      label: 'welcome',
      icon: 'assets/images/church_2.png',
      title: { english: 'Welcome to {host}', chinese: '欢迎光临{host}'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      description: {
        english: 'to bring people to Jesus and membership in his family',
        chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员'
      },
      entitySource: {
        collection: 'welcome',
        priorities: ['high'],
        slice: 'first',
        maxinum: 3
      },
      entityDisplayOptions: {
        imageStyle: 'full',
        contentStyle: 'greeting',
      }
    }, {
      icon: 'assets/images/church_6.png',
      title: { english: 'Testimony Gallery', chinese: '见证'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'moments',
        priorities: ['high'],
        editable: true
      },
      entityDisplayOptions: {
        imageStyle: 'margin',
        contentStyle: 'item'
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
        imageStyle: 'margin',
        contentStyle: 'item'
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
        imageStyle: 'margin',
        contentStyle: 'item'
      },
      entityTemplate: [this.storyPage.id]
    }]
  };

  lifeGroupsPage: WPage = {
    id: 'lifegroups',
    title: { english: 'Lifegroups', chinese: '小家'},
    sections: [{
      label: 'welcome',
      icon: 'assets/images/church_2.png',
      description: {
        english: 'to bring people to Jesus and membership in his family',
        chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员'
      },
      entitySource: {
        collection: 'cellGroupsFrontPage',
        priorities: ['high'],
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        imageStyle: 'full',
        contentStyle: 'frontpage',
      }
    }, {
      label: 'lifegroups',
      icon: 'assets/images/church_4.png',
      title: { english: 'Our Church\'s Lifegroups', chinese: '我们的小家'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'cellgroups',
        priorities: ['high', 'low'],
        editable: true
      },
      entityDisplayOptions: {
        imageStyle: 'full',
        contentStyle: 'item'
      },
      entityTemplate: [this.lifegroupPage.id ]
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
        imageStyle: 'margin',
        contentStyle: 'item'
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
        imageStyle: 'margin',
        contentStyle: 'item'
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
        imageStyle: 'full',
        contentStyle: 'item'
      },
      entityTemplate: [this.ministryPage.id ]
    }, {
      icon: 'assets/images/church_5.png',
      title: { english: 'Quote of the day', chinese: '今日金句'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroundImage: '/assets/images/quote.jpg',
      lightText: true,
      entitySource: {
        collection: 'quotes',
        priorities: ['high', 'low'],
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
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
        contentStyle: 'person',
        imageStyle: 'full'
      },
      entityTemplate: [this.personalPage.id ]
    }]
  };

  sermonsPage: WPage = {
    id: 'sermons',
    title: { english: 'Sermons', chinese: '讲道'},
    sections: [{
      icon: 'assets/images/church_3.png',
      title: { english: 'Today"s Sermon', chinese: '今日讲道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroundImage: '/assets/images/sermon.png',
      entitySource: {
        collection: 'sermons',
        priorities: ['high'],
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        imageStyle: 'full',
        contentStyle: 'sermon'
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
        imageStyle: 'full',
        contentStyle: 'item'
      },
      entityTemplate: [this.slicePage.id]
    }]
  };

  homePage: WPage = {
    id: 'home',
    title: { english: 'Home', chinese: '首页'},
    homeBar: 'none',
    sections: [{
      icon: 'assets/images/cross_1.png',
      entitySource: {
        collection: 'homeslides',
        priorities: ['high'],
        slice: 'last',
        maxinum: 1
      },
      entityDisplayOptions: {
        imageStyle: 'original',
        contentStyle: 'frontpage'
      }
    }, {
      label: 'welcome',
      icon: 'assets/images/church_2.png',
      title: { english: 'Welcome to Abundant Life Church', chinese: '欢迎来到丰盛生命教会'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'welcome',
        priorities: ['high'],
        slice: 'first',
        maxinum: 3
      },
      entityDisplayOptions: {
        imageStyle: 'full',
        contentStyle: 'greeting'
      }
    }, {
      icon: 'assets/images/church_2.png',
      title: { english: 'Our Church main activities', chinese: '教会主要活动'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      description: {
        english: 'to bring people to Jesus and membership in his family',
        chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员'
      },
      backgroundImage: '/assets/images/services.jpg',
      lightText: true,
      entitySource: {
        collection: 'activity',
        priorities: ['high', 'low'],
        directionStr: 'asc'
      },
      entityDisplayOptions: {
        contentStyle: 'icon',
        imageStyle: 'original'
      }
    }, {
      icon: 'assets/images/church_3.png',
      title: { english: 'Today\'s Sermon', chinese: '今日讲道'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroundImage: '/assets/images/sermon.png',
      entitySource: {
        collection: 'sermons',
        priorities: ['high', 'low'],
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
        imageStyle: 'full',
        contentStyle: 'sermon'
      },
      entityTemplate: [this.slicePage.id]
    }, {
      icon: 'assets/images/church_5.png',
      title: { english: 'Quote of the day', chinese: '今日金句'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      backgroundImage: '/assets/images/quote.jpg',
      lightText: true,
      entitySource: {
        collection: 'quotes',
        priorities: ['high', 'low'],
        slice: 'first',
        maxinum: 1
      },
      entityDisplayOptions: {
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
        imageStyle: 'margin',
        contentStyle: 'item'
      },
      entityTemplate: [this.storyPage.id]
    }]
  };

  topPages = [
    this.homePage,
    this.churchPage,
    this.sermonsPage,
    this.lifeGroupsPage
  ];

  allPages = [
    this.homePage,
    this.churchPage,
    this.sermonsPage,
    this.newsPage,
    this.lifegroupPage,
    this.lifeGroupsPage,
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
