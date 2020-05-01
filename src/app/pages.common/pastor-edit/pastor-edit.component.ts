import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from 'src/app/data/api-data';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup, FormControl } from '@angular/forms';
import { Language } from 'src/app/data/settings.service';

@Component({
  selector: 'app-pastor-edit',
  templateUrl: './pastor-edit.component.html',
  styleUrls: ['./pastor-edit.component.css']
})
export class PastorEditComponent {
  @Input() item: Person;
  @Output() itemCreated = new EventEmitter();

  formChanged = false;

  formChanges = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
  });

  constructor(public data: ChchalcDataService) {
    if (!this.item) {
      this.item = this.newPerson();
    }
  }

  patchValue() {
    this.formChanges.patchValue({
      title: this.data.tr(this.item.title),
      name: this.data.tr(this.item.name),
    });
  }

  applyChanges(language: Language) {
    const v = this.formChanges.value;

    switch (language) {
      case 'chinese':
        this.item.title.chinese = v.title;
        this.item.name.chinese = v.name;
        break;
      case 'english':
        this.item.title.english = v.title;
        this.item.name.english = v.name;
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
    this.item = this.newPerson();
  }

  newPerson(): Person {
		const newItem = new Person();
		newItem.id = uuidv4();
    newItem.title = { chinese: '牧师', english: 'Pastor'};
    newItem.name = {
        chinese: '[名字]',
        english: '[name]'
    };
    return newItem;
  }

}
