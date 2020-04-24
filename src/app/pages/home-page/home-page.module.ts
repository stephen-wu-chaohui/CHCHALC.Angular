import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import { HomePageComponent } from './home-page.component';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { HttpClientModule } from '@angular/common/http';
import { PagesCommonModule } from 'src/app/pages.common/pages.common.module';
import { AppCommonModule } from 'src/app/app.common/app.common.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];


@NgModule({
  imports: [
		CommonModule,
		NguCarouselModule,
		HttpClientModule,
		AppLayoutModule,
		AppCommonModule,
		PagesCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		HomePageComponent,
	]
})
export class HomePageModule { }
