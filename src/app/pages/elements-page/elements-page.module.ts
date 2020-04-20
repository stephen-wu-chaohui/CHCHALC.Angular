import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { ElementsPageComponent } from './elements-page.component';

const routes: Routes = [
  {
    path: '',
    component: ElementsPageComponent
  }
];

@NgModule({
  imports: [
		CommonModule,
		AppLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
		ElementsPageComponent,
	]
})
export class ElementsPageModule { }
