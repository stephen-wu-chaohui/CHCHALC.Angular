import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SectionComponent } from './section/section.component';
import { SectionContainerComponent } from './section-container/section-container.component';

@NgModule({
  imports: [
		CommonModule,
		ReactiveFormsModule,
  ],
  declarations: [
    SectionComponent,
    SectionContainerComponent,
  ],
  exports: [
    SectionComponent,
    SectionContainerComponent,
  ],
})
export class AppCommonModule { }
