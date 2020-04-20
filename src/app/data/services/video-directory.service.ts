import { Injectable } from '@angular/core';
import { lookup } from 'dns';

export class VideoDirectory {
  id: string;
  label: string;
  img?: string;
  speaker?: string;
  date?: string;
  video?: string;
  directory?: VideoDirectory[];
}

@Injectable({
  providedIn: 'root'
})
export class VideoDirectoryService {
  public content: VideoDirectory = {
    id: '0',
    label: 'Sunday Sermons',
    img: '/assets/news/sm-mf-1.jpg',
    directory: [{
      id: '1',
      label: '主堂主日崇拜',
      directory: [{
        id: '2',
        label: '因着良人而勇敢的生命',
        speaker: 'David Sliker 牧师',
        date: '07/04/2019',
        video: '',
      }, {
        id: '3',
        label: '受苦的相邀',
        speaker: '游祥祺 传道',
        date: '31/03/2019',
        video: '',
      }, {
        id: '4',
        label: '新妇的花园',
        speaker: '江衍诚 牧师',
        date: '24/03/2019',
        video: '',
      }, {
        id: '5',
        label: '我虽然黑，却是秀美',
        speaker: '吴蒙恩 传道',
        date: '10/03/2019',
        video: '',
      }]
    }, {
      id: '6',
      label: '三谷分堂主日信息',
      directory: [{
        id: '7',
        label: '神愿意医治吗',
        speaker: '李光明 传道',
        date: '07/04/2019',
        video: '',
      }, {
        id: '8',
        label: '恩典够用',
        speaker: '饶阿艳 传道',
        date: '31/03/2019',
        video: '',
      }, {
        id: '9',
        label: '喜乐的心乃是良药',
        speaker: '李光明 传道',
        date: '24/03/2019',
        video: '',
      }, {
        id: '10',
        label: '恩典掌权的得胜生活',
        speaker: '饶阿艳 传道',
        date: '10/03/2019',
        video: '',
      }]
    }, {
      id: '11',
      label: '圣何西分堂主日信息',
      directory: [{
        id: '12',
        label: '清洁的心',
        speaker: '张玮 牧师',
        date: '07/04/2019',
        video: '',
      }, {
        id: '13',
        label: '神仆人在基督里成为新造的人',
        speaker: '张誉腾 传道',
        date: '31/03/2019',
        video: '',
      }, {
        id: '14',
        label: '加速度的恩典',
        speaker: '吴炳玮 牧师',
        date: '24/03/2019',
        video: '',
      }, {
        id: '15',
        label: '重新启动爱神爱人的大能',
        speaker: '江秀琴 牧师',
        date: '10/03/2019',
        video: '',
      }]
    }, {
      id: '16',
      label: '南湾分堂主日信息',
      directory: [{
        id: '17',
        label: '摩西(三）',
        speaker: '刘士魁 传道',
        date: '07/04/2019',
        video: '',
      }, {
        id: '18',
        label: '摩西(二）',
        speaker: '刘士魁 传道',
        date: '31/03/2019',
        video: '',
      }, {
        id: '19',
        label: '摩西(一）',
        speaker: '刘士魁 传道',
        date: '24/03/2019',
        video: '',
      }, {
        id: '20',
        label: '我要看见',
        speaker: '游祥祺 传道',
        date: '10/03/2019',
        video: '',
      }]
    }, {
      id: '21',
      label: '中半岛分堂主日信息',
      directory: [{
        id: '22',
        label: '感恩节见证',
        speaker: '中半岛慕主先锋教会',
        date: '07/04/2019',
        video: '',
      }, {
        id: '23',
        label: '把握当下',
        speaker: '李群 传道',
        date: '31/03/2019',
        video: '',
      }, {
        id: '24',
        label: '信息',
        speaker: '张玮 牧师',
        date: '10/03/2019',
        video: '',
      }]
    }],
  };

  private lookupTable = {};

  find(videoDirectory: VideoDirectory, id: string) {
    if (videoDirectory.id === id) {
      return videoDirectory;
    } else if (!videoDirectory.directory) {
      return null;
    } else {
      for (const d of videoDirectory.directory) {
        const found = this.find(d, id);
        if (found) {
          return found;
        }
      }
      return null;
    }
  }

  lookup(id: string) {
    return this.lookupTable[id];
  }

  constructor() {
    this.lookupTable = {};
    this.resortDirectory(this.content);
  }

  resortDirectory(videoDirectory: VideoDirectory) {
    this.lookupTable[videoDirectory.id] = videoDirectory;
    if (videoDirectory.directory) {
      for (const d of videoDirectory.directory) {
        this.resortDirectory(d);
      }
    }
  }
}
