import { Injectable } from '@angular/core';
import {
  ContactInfo,
  Ministry,
  SliderItem,
  MultiText,
  MenuItem,
  Resource,
  Person,
  Story,
  Assemply,
  Greeting
} from './api-data';
import { SettingsService } from './settings.service';
import { DataClientService } from './data-client.service';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChchalcDataService {
  Menu: MenuItem[] = [{
      title: { english: 'Home', chinese: '首页'},
      route: '/home'
    }, {
      title: { english: 'Ministries', chinese: '事工'},
      route: '/ministries'
    }, {
      title: { english: 'Sermons', chinese: '讲道'},
      route: '/sermons'
    }, {
      title: { english: 'News', chinese: '新闻'},
      route: '/blog'
    }, {
      title: { english: 'Contact', chinese: '聯係我們'},
      route: '/contact'
    }];

  churchTitle = {
    english: 'Abundant Life', chinese: '丰盛生命教会'
  };

  switchLanguage = {
    english: '切换到中文', chinese: 'Switch to English'
  };

  Activities = [{
    image: '/assets/images/services_1.png',
    title: { english: 'Preaching', chinese: '宣教'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }, {
    image: '/assets/images/services_2.png',
    title: { english: 'Fellowship', chinese: '团契'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }, {
    image: '/assets/images/services_3.png',
    title: { english: 'Confessions', chinese: '告解'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }, {
    image: '/assets/images/services_4.png',
    title: { english: 'Sermons', chinese: '讲道'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }, {
    image: '/assets/images/services_5.png',
    title: { english: 'Reading', chinese: '查经'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }, {
    image: '/assets/images/services_6.png',
    title: { english: 'Prayers', chinese: '祷告'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }];

  Sections = {
    popularSermons: {
      icon: '/assets/images/church_4.png',
      title: {
            english: 'Popular Sermons',
            chinese: '热点讲道'
        },
        subtitle: {
            chinese: '神与我们同在',
            english: 'God loves us all'
        }
    },
    ministries: {
        subtitle: {
            english: 'God loves us all',
            chinese: '神与我们同在'
        },
        icon: '/assets/images/church_1.png',
        title: {
            chinese: '我们的事工',
            english: 'Our Ministries'
        }
    },
    quote: {
        subtitle: {
            chinese: '神与我们同在',
            english: 'God loves us all'
        },
        description: {
            english: 'One thing I ask from the LORD, this only do I seek: that I may dwell in the house of the LORD all the days of my life, to gaze on the beauty of the LORD and to seek him in his temple.',
            chinese: '有一件事，我曾求耶和华，我仍要寻求：就是一生一世住在耶和华的殿中，瞻仰他的荣美，在他的殿里求问。'
        },
        source: {
            chinese: '诗篇27章4节',
            english: 'Psalm 27:4'
        },
        label: 'quote',
        icon: '/assets/images/church_5.png',
        title: {
            chinese: '今日金句',
            english: 'Quote of the day'
        }
    },
    cellgroups: {
      icon: '/assets/images/church_4.png',
      title: {
            english: 'Our Church\'s Cellgroups',
            chinese: '我们的小家'
        },
        subtitle: {
            chinese: '神与我们同在',
            english: 'God loves us all'
        }
    },
    contactImage: '/assets/images/contact_image.jpg',
    pastors: {
      icon: '/assets/images/church_2.png',
      title: {
            chinese: '我们的牧师',
            english: 'Our Pastors'
        },
        subtitle: {
            chinese: '神与我们同在',
            english: 'God loves us all'
        }
    },
    todaySermon: {
      icon: '/assets/images/church_3.png',
      title: {
            english: 'Today\'s Sermon',
            chinese: '今日讲道'
        },
        subtitle: {
            english: 'God loves us all',
            chinese: '神与我们同在'
        }
    },
    activities: {
        icon: '/assets/images/church_2.png',
        title: {
            english: 'Our Church main activities',
            chinese: '教会主要活动'
        },
        image: '/assets/images/intro.jpg',
        subtitle: {
            english: 'God loves us all',
            chinese: '神与我们同在'
        },
        description: {
            english: 'to bring people to Jesus and membership in his family',
            chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员'
        }
    },
    latest: {
        icon: '/assets/images/church_6.png',
        title: {
            chinese: '最新消息',
            english: 'Latest News'
        },
        subtitle: {
            chinese: '神与我们同在',
            english: 'God loves us all'
        }
    },
  };

  greeting: Greeting = {
    start: new Date(),
    icon: '/assets/images/church_1.png',
    title: {
        english: 'Welcome to Our Church',
        chinese: '欢迎来到丰盛生命教会'
    },
    image: '/assets/images/intro.jpg',
    subtitle: {
        chinese: '神与我们同在',
        english: 'God loves us all'
    },
    description: {
        chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员，使他们在基督里成熟，装备他们在教会中参与事工，在世界以生命宣教，以此来宣扬神的名',
        english: 'to bring people to Jesus and membership in his family, develop them Christlike maturity, and equip them for their ministry in the church, and life mission in the world, in order to magnify God’s name'
    }
  };

  Sliders: SliderItem[];
  contactInfo = new ContactInfo();
  Cellgroups: Assemply[];
  Stories: Story[];
  latestStories: Story[];
  Ministries: Ministry[];
  People: Person[];


  // MinistriesObserver: Observable<any>;
  PeopleObserver: Observable<any>;
  SlidersObserver: Observable<any>;
  latestStoriesObserver: Observable<any>;
  StoriesObserver: Observable<any>;
  CellgroupsObserver: Observable<any>;
  contactInfoObserver: Observable<any>;

  todaySermon: Story;
  featuredSermons: Story[];
  PopularSermons: Story[];

  adminMode: boolean = false;

  constructor(private settings: SettingsService, private dataClient: DataClientService, private store: AngularFirestore) {
  }

  tr(text: MultiText): string {
    return this.settings.tr(text);
  }

  path(img: Resource) {
    return img;
  }

  format(timestamp: number, fmt: string) {
    return moment(timestamp).format(fmt);
  }

  init() {
    this.dataClient.single('contactInfo').subscribe(
      next => {
        this.contactInfo = next as ContactInfo;
      }
    );
    this.store.collection('sermons', a => a.orderBy('start', 'desc')).valueChanges().subscribe(
      next => {
        const sermons = (next as Story[]);
        this.todaySermon = sermons.shift() as Story;
        this.PopularSermons = sermons.slice(0, 30) as Story[];
        this.featuredSermons = sermons.slice(0, 2) as Story[];
      }
    );
    this.store.collection('ministries', a => a.orderBy('start', 'asc')).valueChanges().subscribe(
      next => {
        this.Ministries = next as Ministry[];
      }
    );
    this.PeopleObserver = this.store.collection('persons', a => a.orderBy('start', 'asc')).valueChanges();
    this.SlidersObserver = this.store.collection('homeslides').valueChanges();
    this.StoriesObserver = this.store.collection('stories', a => a.orderBy('start', 'desc')).valueChanges();
    this.CellgroupsObserver = this.store.collection('cellgroups', a => a.orderBy('start', 'asc')).valueChanges();
    this.CellgroupsObserver.subscribe(next => {
      this.Cellgroups = next as Assemply[];
      return next;
    });

  }

  hideDeleted(list: any[]) {
    return (this.adminMode || !list) ? list : list.filter(it => !it.deleted);
  }
}
