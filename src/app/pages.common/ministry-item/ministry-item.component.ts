import { Component, OnInit, Input } from '@angular/core';
import { Ministry } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';

@Component({
  selector: 'app-ministry-item',
  templateUrl: './ministry-item.component.html',
  styleUrls: ['./ministry-item.component.css']
})
export class MinistryItemComponent implements OnInit {
  @Input() item: Ministry;
  isDirty = false;
  message = '';

  constructor(public data: ChchalcDataService) {}

  ngOnInit() {
    if (!this.item) {
      this.item = {
        image: 'assets/images/ministries_1.jpg',
        title: { chinese: '新的事工', english: 'New Ministry'},
        text: {
          chinese: '你们要去、使万民作我的门徒、奉父子圣灵的名、给他们施洗',
          english: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
        }
      };
    }
  }

  setDirty(flag = true) {
    this.isDirty = flag;
  }

  clickImage() {

  }


  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.item.image = files;
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      this.item.image = reader.result as string;
    };
  }

  onClick() {
    this.message = 'Button Clicked';
  }
}
