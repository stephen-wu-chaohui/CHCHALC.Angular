import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppLayoutModule } from '../app.layout/app.layout.module';
import { AppCommonModule } from '../app.common/app.common.module';
import { PagesCommonModule } from '../pages.common/pages.common.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ChurchPageComponent } from './church-page/church-page.component';
import { MinistryPageComponent } from './ministry-page/ministry-page.component';
import { SermonsPageComponent } from './sermons-page/sermons-page.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { CellgroupPageComponent } from './cellgroup-page/cellgroup-page.component';
import { MomentPageComponent } from './moment-page/moment-page.component';

export const PagesRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin', component: AdminPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'church', component: ChurchPageComponent },
  { path: 'sermons', component: SermonsPageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'ministries/:id', component: MinistryPageComponent },
  { path: 'persons/:id', component: PersonPageComponent },
  { path: 'cellgroups/:id', component: CellgroupPageComponent },
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
    NewsPageComponent,
    ContactPageComponent,
    ChurchPageComponent,
    MinistryPageComponent,
    SermonsPageComponent,
    PersonPageComponent,
    CellgroupPageComponent,
    MomentPageComponent,
  ]
})
export class PagesModule { }
