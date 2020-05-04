import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Ministry, Greeting, Story, Section } from 'src/app/data/api-data';
import { Observable } from 'rxjs';
import { DataClientService } from 'src/app/data/data-client.service';

@Component({
  selector: 'app-ministries-single-page',
  templateUrl: './ministries-single-page.component.html',
  styleUrls: ['./ministries-single-page.component.css']
})
export class MinistriesSinglePageComponent implements OnInit {
  greeting: Greeting;
  title: { english: 'Ministry', chinese: '事工' };

  ministry: Ministry;

  sectionMoments: Section;
  folderMoments: string;

  constructor(private actRoute: ActivatedRoute, private router: Router, public data: ChchalcDataService, public dataClient: DataClientService) { }

  ngOnInit() {
    if (!this.data.Ministries) {
      this.router.navigate(['/ministries']);
      return;
    }
    const id = this.actRoute.snapshot.params.id;
    this.ministry = this.data.Ministries.find(m => m.id === id);
    if (!this.ministry) {
      this.router.navigate(['/ministries']);
      return;
    }
    this.greeting = {
      start: new Date(2020, 4,12).getTime(),
      icon: '/assets/images/church_1.png',
      title: {
        english: `Welcome to ${this.ministry.title.english}`,
        chinese: `欢迎来到 ${this.ministry.title.chinese}`
      },
      image: this.ministry.image,
      subtitle: {
        chinese: '神与我们同在',
        english: 'God loves us all'
      },
      description: this.ministry.text
    };
    this.sectionMoments = {
      icon: '/assets/images/church_1.png',
      title: {
        english: `Moments in ${this.ministry.title.english}`,
        chinese: `${this.ministry.title.chinese} 的精彩瞬间`
      },
      subtitle: {
        chinese: '神与我们同在',
        english: 'God loves us all'
      },
      description: this.ministry.text
    };

    this.folderMoments = `ministries/${this.ministry.id}/moments`;
  }
}
