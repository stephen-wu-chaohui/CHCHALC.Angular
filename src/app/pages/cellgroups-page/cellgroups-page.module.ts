import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CellgroupsPageComponent } from './cellgroups-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { AppCommonModule } from 'src/app/app.common/app.common.module';
import { PagesCommonModule } from 'src/app/pages.common/pages.common.module';

const routes: Routes = [
  {
    path: '',
    component: CellgroupsPageComponent
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
  declarations: [CellgroupsPageComponent]
})
export class CellgroupsPageModule { }
