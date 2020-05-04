import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChchalcDataService } from 'src/app/data/chchalc-data.service';
import { Language } from 'src/app/data/settings.service';
import { Assemply } from 'src/app/data/api-data';
import { v4 as uuidv4 } from 'uuid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cellgroup-edit',
  templateUrl: './cellgroup-edit.component.html',
  styleUrls: ['./cellgroup-edit.component.css']
})
export class CellgroupEditComponent {
  @Input() item: Assemply;
  @Output() itemCreated = new EventEmitter();

  formChanged = false;

  formChanges = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
  });

  constructor(public data: ChchalcDataService, private router: Router) {
    if (!this.item) {
      this.item = this.newCellgroup();
    }
  }

  patchValue() {
    this.formChanges.patchValue({
      title: this.data.tr(this.item.title),
      desc: this.data.tr(this.item.description),
    });
  }

  applyChanges(language: Language) {
    const v = this.formChanges.value;

    switch (language) {
      case 'chinese':
        this.item.title.chinese = v.title;
        this.item.description.chinese = v.desc;
        break;
      case 'english':
        this.item.title.english = v.title;
        this.item.description.english = v.desc;
        break;
    }
  }

  setDirty() {
    this.formChanged = false;
    this.formChanged = true;
  }

  doItemCreated($event) {
		if (this.itemCreated) {
		 	this.itemCreated.emit($event);
		}
    this.item = this.newCellgroup();
    this.patchValue();
  }

  newCellgroup(): Assemply {
		const newItem = new Assemply();
    newItem.id = uuidv4();
    newItem.title = { chinese: '小家', english: 'Cellgroup'};
    newItem.description = {
        chinese: '这处应该是小家的问候话。请使用 admin 工具设置或修改它',
        english: 'This is a place holder description of the cellgroup. Please use admin app to fill it'
    };
    return newItem;
  }

  imageClicked() {
    this.router.navigate(['/cellgroups', this.item.id]);
  }
}
