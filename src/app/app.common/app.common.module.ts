import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { SectionContainerComponent } from './section-container/section-container.component';
import { EntityEditComponent } from './entity-edit/entity-edit.component';
import { StoriesComponent } from './stories/stories';

@NgModule({
  imports: [
    CommonModule,
		ReactiveFormsModule,
  ],
  declarations: [
    EntityEditComponent,
    SectionComponent,
    SectionContainerComponent,
    StoriesComponent
  ],
  exports: [
    EntityEditComponent,
    SectionComponent,
    SectionContainerComponent,
    StoriesComponent
  ],
})
export class AppCommonModule { }
