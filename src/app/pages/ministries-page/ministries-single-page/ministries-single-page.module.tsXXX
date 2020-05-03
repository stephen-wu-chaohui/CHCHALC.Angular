import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinistriesSinglePageComponent } from './ministries-single-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesCommonModule } from 'src/app/pages.common/pages.common.module';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { AppCommonModule } from 'src/app/app.common/app.common.module';

const routes: Routes = [
  {
    path: '',
    component: MinistriesSinglePageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		AppLayoutModule,
		AppCommonModule,
		PagesCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MinistriesSinglePageComponent]
})
export class MinistriesSinglePageModule { }
