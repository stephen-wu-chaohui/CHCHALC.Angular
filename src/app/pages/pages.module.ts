import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from '../app.layout/app.layout.module';
import { AppCommonModule } from '../app.common/app.common.module';
import { PagesCommonModule } from '../pages.common/pages.common.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MinistriesPageComponent } from './ministries-page/ministries-page.component';
import { MinistriesSinglePageComponent } from './ministries-single-page/ministries-single-page.component';
import { SermonsPageComponent } from './sermons-page/sermons-page.component';
import { ElementsPageComponent } from './elements-page/elements-page.component';
import { PersonsPageComponent } from './persons-page/persons-page.component';
import { CellgroupsPageComponent } from './cellgroups-page/cellgroups-page.component';
import { MomentPageComponent } from './moment-page/moment-page.component';

export const PagesRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'ministries', component: MinistriesPageComponent },
  { path: 'ministries/:id', component: MinistriesSinglePageComponent },
  { path: 'sermons', component: SermonsPageComponent },
  { path: 'elements', component: ElementsPageComponent },
  { path: 'persons/:id', component: PersonsPageComponent },
  { path: 'cellgroups/:id', component: CellgroupsPageComponent },
  { path: 'cellgroups/:cellgroupId/moments/:momentId', component: MomentPageComponent },
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
    AdminPageComponent,
    HomePageComponent,
    BlogPageComponent,
    ContactPageComponent,
    MinistriesPageComponent,
    MinistriesSinglePageComponent,
    SermonsPageComponent,
    ElementsPageComponent,
    PersonsPageComponent,
    CellgroupsPageComponent,
    MomentPageComponent,
  ]
})
export class PagesModule { }
