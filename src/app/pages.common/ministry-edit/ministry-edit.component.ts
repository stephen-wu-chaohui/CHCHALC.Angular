import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Ministry } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Language } from 'src/app/data/settings.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-ministry-edit',
  templateUrl: './ministry-edit.component.html',
  styleUrls: ['./ministry-edit.component.css']
})
export class MinistryEditComponent {
  @Input() item: Ministry;
  @Output() itemCreated = new EventEmitter();

  formChanged = false;

  formChanges = new FormGroup({
    title: new FormControl(''),
    text: new FormControl(''),
  });

  constructor(public data: ChchalcDataService) {
    if (!this.item) {
      this.item = this.newMinistry();
    }
  }

  patchValue() {
    this.formChanges.patchValue({
      title: this.data.tr(this.item.title),
      text: this.data.tr(this.item.text),
    });
  }

  applyChanges(language: Language) {
    const v = this.formChanges.value;

    switch (language) {
      case 'chinese':
        this.item.title.chinese = v.title;
        this.item.text.chinese = v.text;
        break;
      case 'english':
        this.item.title.english = v.title;
        this.item.text.english = v.text;
        break;
    }
  }

  setDirty() {
    this.formChanged = false;
    this.formChanged = true;
  }

  doItemCreated($event) {
		console.log('doItemCreated($event)', $event);
		if (this.itemCreated) {
			this.itemCreated.emit($event);
		}
    this.item = this.newMinistry();
  }

  newMinistry(): Ministry {
		const newItem = new Ministry();
		newItem.id = uuidv4();
    newItem.title = { chinese: '新的事工', english: 'New Ministry'};
    newItem.text = {
        chinese: '你们要去、使万民作我的门徒、奉父子圣灵的名、给他们施洗',
        english: 'Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit'
    };
    return newItem;
  }

}
