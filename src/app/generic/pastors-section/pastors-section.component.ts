import { Component, OnInit } from '@angular/core';
import { WSection, WAssembly } from 'src/app/generic/services/types';
import { MockService } from 'src/app/generic/services/mock.service';
import { SettingsService, Language } from 'src/app/data/settings.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Person } from 'src/app/data/api-data';

@Component({
  selector: 'app-pastors-section',
  templateUrl: './pastors-section.component.html',
  styleUrls: ['./pastors-section.component.css']
})
export class PastorsSectionComponent implements OnInit {

  section: WSection;
  host: WAssembly;
  collectionPath = '';

  formChanged = false;

  formChanges = new FormGroup({
    name: new FormControl(''),
    title: new FormControl(''),
  });

  patchValue(entity) {
    this.formChanges.patchValue({
      name: this.data.tr(entity.name),
      title: this.data.tr(entity.title),
    });
  }

  applyChanges(entity: any, language: Language) {
    const v = this.formChanges.value;

    switch (language) {
      case 'chinese':
        entity.name.chinese = v.name;
        entity.title.chinese = v.title;
        break;
      case 'english':
        entity.name.english = v.name;
        entity.title.english = v.title;
        break;
    }
  }

  setDirty() {
    this.formChanged = false;
    this.formChanged = true;
  }

  createNew() {
    return new Person();
  }


  constructor(public es: MockService, public ss: SettingsService, public data: ChchalcDataService) {
    this.section = {
      icon: 'assets/images/church_6.png',
      title: { english: 'Our Pastors', chinese: '我们的牧师'},
      subtitle: { english: 'God loves us all', chinese: '神与我们同在'},
      entitySource: {
        collection: 'persons',
        priorities: ['high', 'low'],
      },
      entityDisplayOptions: {
        size: 'small',
        position: 'top-bottom',
        imageStyle: 'icon',
        contentStyle: 'image-title'
      },
      action: 'Route'
    };

    this.host = {
      id: 'church',
      path: '',
      name: { english: 'Chinese Abundant Life Church', chinese: '基督城华人丰盛生命教会'},
      title: { english: 'Abundant Life', chinese: '丰盛的生命'},
      subTitle: { english: 'Reborn Church', chinese: '重生的教会'},
      address: { english: '182 The Run Way, Wigram, Christchurch 8042'},
      coordinate: { lantitue: -43.549917, longitude: 172.562886 },
      host: 'Lead Pastor'
    };

    this.collectionPath = es.collectionPathOf('', this.section.entitySource.collection);

  }

  ngOnInit() {
  }



}
