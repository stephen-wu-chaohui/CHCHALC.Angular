import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableDirective } from './editable/editable.directive';
import { SectionComponent } from './section/section.component';
import { StoryEditorDirective } from './story-editor/story-editor.directive';
import { SectionContainerComponent } from './section-container/section-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
		EditableDirective,
		SectionComponent,
		SectionContainerComponent,
		StoryEditorDirective
	],
  exports: [
		EditableDirective,
		SectionComponent,
		SectionContainerComponent,
		StoryEditorDirective
	],
})
export class AppCommonModule { }
