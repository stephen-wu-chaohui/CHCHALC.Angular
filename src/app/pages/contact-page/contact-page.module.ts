import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { ContactPageComponent } from './contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		AppLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		ContactPageComponent,
	]
})
export class ContactPageModule { }
