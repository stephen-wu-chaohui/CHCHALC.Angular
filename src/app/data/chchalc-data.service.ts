import { Injectable } from '@angular/core';
import {
  ContactInfo,
  Blog,
  Cause,
  Ministry,
  Pastor,
  Sermon,
  SliderItem,
  MultiText,
  MenuItem,
  Resource
} from './api-data';
import { SettingsService } from './settings.service';
import { DataClientService } from './data-client.service';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ChchalcDataService {

  loaded = false;

  contactInfo = new ContactInfo();

  Posts: Blog[];
  News: Blog[];
  Ministries: Blog[];

  Menu: MenuItem[] = [{
      title: { english: 'Home', chinese: '首页'},
      route: '/home'
    }, {
      title: { english: 'Ministries', chinese: '傳道'},
      route: '/ministries'
    }, {
      title: { english: 'Sermons', chinese: '證道'},
      route: '/sermons'
    }, {
      title: { english: 'Blog', chinese: '部落格'},
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

  Causes = [{
      image: '/assets/images/causes_1.jpg',
      title: { english: 'Children\'s aid'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
    }, {
      image: '/assets/images/causes_2.jpg',
      title: { english: 'Aid for the Elderly'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
    }, {
      image: '/assets/images/causes_3.jpg',
      title: { english: 'Aid for the Elderly'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
    }, {
      image: '/assets/images/causes_4.jpg',
      title: { english: 'Aid for the Elderly'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
    }];

  Latest = [{
      image: 'latest_1.jpg',
      date: new Date('2020-12-17T03:24:00'),
      title: { english: 'How to pray the right way'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dic tumst malesuada congue magna at finibus. In hac habitasse platea.'}
    }, {
      image: 'latest_2.jpg',
      date: new Date('2020-01-07T03:24:00'),
      title: { english: 'Latest news in the 18 community'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dic tumst malesuada congue magna at finibus. In hac habitasse platea.'}
    }, {
      image: 'latest_3.jpg',
      date: new Date('2020-02-05T03:24:00'),
      title: { english: 'Church charities for 2018'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dic tumst malesuada congue magna at finibus. In hac habitasse platea.'}
    }, {
      image: 'latest_4.jpg',
      date: new Date('2020-02-05T03:24:00'),
      title: { english: 'News in the youth community'},
      text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dic tumst malesuada congue magna at finibus. In hac habitasse platea.'}
    }];

  Pastors: Pastor[];
  today: Sermon;
  Featured: Sermon[];
  PopularSermons: Sermon[];
  Sliders: SliderItem[];


  constructor(private settings: SettingsService, private dataClient: DataClientService) {
  }

  tr(text: MultiText): string {
    return this.settings.tr(text);
  }

  path(img: Resource) {
    return img.baseURL + img.filename;
  }

  format(timestamp: number, fmt: string) {
    return moment(timestamp).format(fmt);
  }

  init() {
    this.dataClient.getSliders().subscribe(next =>
      this.Sliders = next
    );
    this.dataClient.getContactInfo().subscribe(next =>
      this.contactInfo = next
    );
    this.dataClient.getPastors().subscribe(next =>
      this.Pastors = next
    );
    this.dataClient.getPosts().subscribe(posts => {
      this.Posts = posts;
      this.Ministries = this.Posts;
    });
    this.dataClient.getSermons().subscribe(sermons => {
      this.today = sermons[0];
      this.PopularSermons = sermons.slice(1);
      this.Featured = sermons.filter(s => s.categories.find(v => v === 'featured'));
    });
  }
}
