import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemEditorDirective } from './item-editor.directive';
import { DOMService } from './dom.service';
import { ItemEditorComponent } from './item-editor/item-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
		ItemEditorDirective,
		ItemEditorComponent
	],
	exports: [
		ItemEditorDirective,
		ItemEditorComponent,
	]
})
export class ItemEditorModule { }
