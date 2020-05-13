import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import { EntityComponent } from './entity/entity.component';
import { TitleComponent } from './title/title.component';
import { Routes, RouterModule } from '@angular/router';
import { PastorsSectionComponent } from './pastors-section/pastors-section.component';
import { AppCommonModule } from '../app.common/app.common.module';
import { EntityEditComponent } from './entity-edit/entity-edit.component';

export const routes: Routes = [
  { path: '', component: PageComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    EntityEditComponent,
    PastorsSectionComponent,
    TitleComponent
  ], exports: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    PastorsSectionComponent,
    TitleComponent
  ]
})
export class GenericModule { }
