import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NguCarouselModule } from '@ngu/carousel';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { IntroComponent } from './intro/intro.component';
import { SermonComponent } from './sermon/sermon.component';
import { CausesComponent } from './causes/causes.component';
import { NewsComponent } from './news/news.component';
import { ServicesComponent } from './services/services.component';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { HomeSliderComponent } from './home-slider/home-slider.component';
import { HttpClientModule } from '@angular/common/http';

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
		AppLayoutModule,
		HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		HomePageComponent,
		HomeSliderComponent,
		IntroComponent,
		CausesComponent,
		SermonComponent,
		NewsComponent,
		ServicesComponent,
	]
})
export class HomePageModule { }
