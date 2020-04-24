import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { ContactPageComponent } from './contact-page.component';
import { AppCommonModule } from 'src/app/app.common/app.common.module';
import { PagesCommonModule } from 'src/app/pages.common/pages.common.module';

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
		AppCommonModule,
		PagesCommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		ContactPageComponent,
	]
})
export class ContactPageModule { }
