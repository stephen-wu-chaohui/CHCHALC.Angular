import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import { EntityComponent } from './entity/entity.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    TitleComponent
  ]
})
export class GenericModule { }
