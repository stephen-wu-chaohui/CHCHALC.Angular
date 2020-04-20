import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements-page',
  templateUrl: './elements-page.component.html',
  styleUrls: ['./elements-page.component.css']
})
export class ElementsPageComponent implements OnInit {
  accordions = [
    {
      title: 'Suspendisse 1',
      desc: 'Suspendisse Description 1 '
    }, {
      title: 'Suspendisse 2',
      desc: 'Suspendisse Description 1 '
    },{
      title: 'Suspendisse 3',
      desc: 'Suspendisse Description 1 '
    }
  ];

  tabs = [{
    title: 'Suspendisse dictu',
    img: '/assets/images/tab.jpg',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci'
  }, {
    title: 'Ero malesuada',
    img: '/assets/images/sermon_pastor.jpg',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci'
  }, {
    title: 'Ependisse dictu',
    img: '/assets/images/pastor_4.jpg',
    desc: 'Morbi ut dapibus dui. Sed ut iaculis elit, quis varius mauris. Integer ut ultricies orci'
  }];

  Loaders = [{
    perc: 0.70,
    desc: 'Fun Times'
  }, {
    perc: 0.83,
    desc: 'Hard Work'
  }, {
    perc: 0.25,
    desc: 'Inspiration'
  }, {
    perc: 0.95,
    desc: 'Creativity'
  }];

  constructor() { }

  ngOnInit() {
  }

}
