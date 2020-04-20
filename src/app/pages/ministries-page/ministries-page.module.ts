import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { MinistriesPageComponent } from './ministries-page.component';
import { PastorsSliderComponent } from './pastors-slider/pastors-slider.component';
import { NguCarouselModule } from '@ngu/carousel';

const routes: Routes = [
  {
    path: '',
    component: MinistriesPageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		NguCarouselModule,
		AppLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		MinistriesPageComponent,
		PastorsSliderComponent
	]
})
export class MinistriesPageModule { }
