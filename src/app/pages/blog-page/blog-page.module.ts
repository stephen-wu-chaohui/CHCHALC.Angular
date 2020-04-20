import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutModule } from 'src/app/app.layout/app.layout.module';
import { BlogPageComponent } from './blog-page.component';
import { BlogComponent } from './blog/blog.component';
import { BlogSidebarComponent } from './blog-sidebar/blog-sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: BlogPageComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    BlogPageComponent,
		BlogComponent,
		BlogSidebarComponent
  ]
})
export class BlogPageModule { }
