import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { AdminPageComponent } from './admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		AppLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		AdminPageComponent,
	]
})
export class AdminPageModule { }
