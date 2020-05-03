import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home-page/home-page.module';
import { BlogPageModule } from './blog-page/blog-page.module';
import { ContactPageModule } from './contact-page/contact-page.module';
import { MinistriesPageModule } from './ministries-page/ministries-page.module';
import { SermonsPageModule } from './sermons-page/sermons-page.module';
import { ElementsPageModule } from './elements-page/elements-page.module';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from '../app.layout/app.layout.module';
import { AppCommonModule } from '../app.common/app.common.module';
import { PagesCommonModule } from '../pages.common/pages.common.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { UnimplementedPageModule } from './unimplemented-page/unimplemented-page.module';
import { PersonsPageModule } from './persons-page/persons-page.module';
import { CellgroupsPageModule } from './cellgroups-page/cellgroups-page.module';

export const PagesRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', loadChildren: () => AdminPageModule },
  { path: 'home', loadChildren: () => HomePageModule },
  { path: 'blog', loadChildren: () => BlogPageModule },
  { path: 'contact', loadChildren: () => ContactPageModule },
  { path: 'ministries', loadChildren: () => MinistriesPageModule },
  { path: 'sermons', loadChildren: () => SermonsPageModule },
  { path: 'elements', loadChildren: () => ElementsPageModule },
  { path: 'persons/:id', loadChildren: () => PersonsPageModule },
  { path: 'cellgroups/:id', loadChildren: () => CellgroupsPageModule },
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppLayoutModule,
    AppCommonModule,
    PagesCommonModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [
  ]
})
export class PagesModule { }
