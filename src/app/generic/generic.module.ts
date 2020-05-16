import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import { EntityComponent } from './entity/entity.component';
import { TitleComponent } from './title/title.component';
import { Routes, RouterModule } from '@angular/router';
import { EntityEditComponent } from './entity-edit/entity-edit.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { NguCarouselModule } from '@ngu/carousel';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { IntroSectionComponent } from './intro-section/intro-section.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageComponent },
  { path: 'tools', component: ToolsPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguCarouselModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    EntityEditComponent,
    TitleComponent,
    HomeSliderComponent,
    IntroSectionComponent,
    ToolsPageComponent,
    AdminPageComponent
  ], exports: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    TitleComponent,
    HomeSliderComponent,
    IntroSectionComponent,
    ToolsPageComponent,
    AdminPageComponent
  ]
})
export class GenericModule { }
