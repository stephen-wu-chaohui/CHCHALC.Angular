import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { StoryEditorDirective } from './story-editor/story-editor.directive';
import { SectionContainerComponent } from './section-container/section-container.component';
import { StoryFormComponent } from './story-form/story-form.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SectionComponent,
    SectionContainerComponent,
    StoryEditorDirective,
    StoryFormComponent,
  ],
  exports: [
    SectionComponent,
    SectionContainerComponent,
    StoryEditorDirective,
    StoryFormComponent
  ],
})
export class AppCommonModule { }
