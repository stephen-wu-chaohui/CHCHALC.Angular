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
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { NguCarouselModule } from '@ngu/carousel';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';

export const routes: Routes = [
  { path: '', component: PageComponent },
  { path: 'tools', component: ToolsPageComponent },

  // { path: 'chch', loadChildren : () => import('./generic.module').then(m => m.GenericModule) },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguCarouselModule,
    AppCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    EntityEditComponent,
    PastorsSectionComponent,
    TitleComponent,
    HomeSliderComponent,
    IntroSectionComponent,
    ToolsPageComponent
  ], exports: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    PastorsSectionComponent,
    TitleComponent,
    HomeSliderComponent,
    IntroSectionComponent,
    ToolsPageComponent
  ]
})
export class GenericModule { }
