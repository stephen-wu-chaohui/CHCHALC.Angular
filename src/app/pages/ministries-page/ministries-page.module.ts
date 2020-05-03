import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { MinistriesPageComponent } from '../ministries-page/ministries-page.component';
import { NguCarouselModule } from '@ngu/carousel';
import { AppCommonModule } from 'src/app/app.common/app.common.module';
import { MinistriesSinglePageComponent } from './ministries-single-page/ministries-single-page.component';
import { PagesCommonModule } from 'src/app/pages.common/pages.common.module';

const routes: Routes = [
  {
    path: '',
    component: MinistriesPageComponent
  }, {
    path: ':id',
    component: MinistriesSinglePageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		NguCarouselModule,
		AppLayoutModule,
    AppCommonModule,
    PagesCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MinistriesPageComponent,
    MinistriesSinglePageComponent
	]
})
export class MinistriesPageModule { }
