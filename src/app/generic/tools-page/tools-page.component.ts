import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.css']
})
export class ToolsPageComponent implements OnInit {
  slides = {
    name: 'add slides',
    collectionPath: 'slides',
    data: [{
      id: 'slider-1',
      image: 'assets/images/slider_background_1.jpg',
      start: 0,
      title: { chinese: '神与我们同在', english: 'God is all with us'}
    }, {
      id: 'slider-2',
      image: 'assets/images/slider_background_2.jpg',
      start: 1,
      title: { chinese: '神与我们同在', english: 'God is all with us'}
    }, {
      id: 'slider-3',
      image: 'assets/images/slider_background_3.jpg',
      start: 3,
      title: { chinese: '神与我们同在', english: 'God is all with us'}
    }]
 };

 welcome = {
  name: 'add welcome',
  collectionPath: 'welcome',
  data: [{
      id: 'welcome-1',
      image: 'assets/images/intro.jpg',
      start: 0,
      path: 'welcome/welcome-1',
      title: { chinese: '神与我们同在', english: 'God is all with us'},
      subtitle: {
        chinese: '神与我们同在',
        english: 'God loves us all'
      },
      text: {
          chinese: '带领人来到耶稣的跟前，并使人成为他家中的成员，使他们在基督里成熟，装备他们在教会中参与事工，在世界以生命宣教，以此来宣扬神的名',
          english: 'to bring people to Jesus and membership in his family, develop them Christlike maturity, and equip them for their ministry in the church, and life mission in the world, in order to magnify God’s name'
      }
    }]
 };

 activities = {
  name: 'add activity',
  collectionPath: 'activity',
  data: [{
    id: 'activity-1',
    start: 1,
    image: '/assets/images/services_1.png',
    title: { english: 'Preaching', chinese: '宣教'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'},
    jumpTo: 'church#ministries'
  }, {
    id: 'activity-2',
    start: 2,
    image: '/assets/images/services_2.png',
    title: { english: 'Fellowship', chinese: '团契'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'},
    jumpTo: 'church#cellgroups'
  }, {
    id: 'activity-3',
    start: 3,
    image: '/assets/images/services_3.png',
    title: { english: 'Confessions', chinese: '告解'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'},
    jumpTo: 'church#pastors'
  }, {
    id: 'activity-4',
    start: 4,
    image: '/assets/images/services_4.png',
    title: { english: 'Sermons', chinese: '讲道'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'},
    jumpTo: 'sermons'
  }, {
    id: 'activity-5',
    start: 5,
    image: '/assets/images/services_5.png',
    title: { english: 'Reading', chinese: '查经'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }, {
    id: 'activity-6',
    start: 6,
    image: '/assets/images/services_6.png',
    title: { english: 'Prayers', chinese: '祷告'},
    text: { english: 'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.'}
  }]
};

quote = {
  name: 'add quote',
  collectionPath: 'quotes',
  data: [{
      id: 'quote-1',
      image: '/assets/images/quote_char.png',
      start: 0,
      path: 'quotes/quote-1',
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
  }]
 };

 churches = {
  name: 'add churches',
  collectionPath: 'churches',
  data: [{
    id: 'chchalc',
    start: 1589232395000,
    path: '',
    name: { english: 'Chinese Abundant Life Church', chinese: '基督城华人丰盛生命教会'},
    title: { english: 'Abundant Life', chinese: '丰盛的生命'},
    subTitle: { english: 'Reborn Church', chinese: '重生的教会'},
    address: { english: '182 The Run Way, Wigram, Christchurch 8042'},
    coordinate: { lantitue: -43.549917, longitude: 172.562886 },
    host: 'Lead Pastor',
    phoneNumbers: ['02102591292', '02102591292'],
    email: 'admin@nzalc.org'
  }]
};


  tools = [
    this.slides,
    this.welcome,
    this.activities,
    this.quote,
    this.churches
  ];

  constructor(private store: AngularFirestore) { }

  ngOnInit() {
  }

  async do(tool) {
    await tool.data.forEach(e => {
      try {
        this.store.collection(tool.collectionPath).doc(e.id).set(e);
        return ({ status: 'OK', reason: null });
      } catch (reason) {
        return ({ status: 'Error', reason });
      }
    });
  }
}
