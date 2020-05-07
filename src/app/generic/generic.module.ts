import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import { EntityComponent } from './entity/entity.component';
import { TitleComponent } from './title/title.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', component: PageComponent },
  { path: ':entityId/:pageId', component: PageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    TitleComponent
  ], exports: [
    PageComponent,
  ]
})
export class GenericModule { }
