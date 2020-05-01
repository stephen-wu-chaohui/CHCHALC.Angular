import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.css']
})
export class ItemEditorComponent implements OnInit {
  isDirty = false;

  constructor() { }

  ngOnInit() {
		console.log('ItemEditorComponent.ngInit');
  }

  onClickHide() {
  }

  OnChangeImage(files: File[]) {
  }

  OnSave() {
  }


}
