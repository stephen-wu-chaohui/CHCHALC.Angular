import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { SermonSinglePageComponent } from './sermon-single-page.component';

const routes: Routes = [
  {
    path: '',
    component: SermonSinglePageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		AppLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		SermonSinglePageComponent,
	]
})
export class SermonSinglePageModule { }
