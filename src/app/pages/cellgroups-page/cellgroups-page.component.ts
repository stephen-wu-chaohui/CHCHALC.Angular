import { Component, OnInit } from '@angular/core';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Assemply, Greeting, Section } from 'src/app/data/api-data';
import { ActivatedRoute, Router } from '@angular/router';
import { DataClientService } from 'src/app/data/data-client.service';

@Component({
  selector: 'app-cellgroups-page',
  templateUrl: './cellgroups-page.component.html',
  styleUrls: ['./cellgroups-page.component.css']
})
export class CellgroupsPageComponent implements OnInit {
  greeting: Greeting;
  title: { english: 'Cellgroup', chinese: '小家' };

  cellgroup: Assemply;

  sectionMoments: Section;
  folderMoments: string;

  constructor(private actRoute: ActivatedRoute, private router: Router, public data: ChchalcDataService, public dataClient: DataClientService) { }

  ngOnInit() {
    if (!this.data.Cellgroups) {
      this.router.navigate(['/ministries']);
      return;
    }
    const id = this.actRoute.snapshot.params.id;
    this.cellgroup = this.data.Cellgroups.find(m => m.id === id);
    if (!this.cellgroup) {
      this.router.navigate(['/ministries']);
      return;
    }
    this.greeting = {
      start: new Date(2020, 4, 12).getTime(),
      icon: '/assets/images/church_1.png',
      title: {
        english: `Welcome to ${this.cellgroup.title.english}`,
        chinese: `欢迎来到 ${this.cellgroup.title.chinese}`
      },
      image: this.cellgroup.image,
      subtitle: {
        chinese: '神与我们同在',
        english: 'God loves us all'
      },
      description: this.cellgroup.description
    };
    this.sectionMoments = {
      icon: '/assets/images/church_1.png',
      title: {
        english: `Moments in ${this.cellgroup.title.english}`,
        chinese: `${this.cellgroup.title.chinese} 的精彩瞬间`
      },
      subtitle: {
        chinese: '神与我们同在',
        english: 'God loves us all'
      },
      description: this.cellgroup.description
    };

    this.folderMoments = `cellgroups/${this.cellgroup.id}/moments`;
  }
}
