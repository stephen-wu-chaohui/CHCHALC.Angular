import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import { EntityComponent } from './entity/entity.component';
import { TitleComponent } from './title/title.component';
import { Routes, RouterModule } from '@angular/router';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { NguCarouselModule } from '@ngu/carousel';
import { EditDirective } from './section/edit.directive';
import { PasswordDialogComponent } from './section/password-dialog/password-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SetPasswordDialogComponent } from './entity/set-password-dialog/set-password-dialog.component';
import { SetPasswordDirective } from './entity/set-password.directive';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageComponent },
  // { path: 'tools', component: ToolsPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NguCarouselModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    PageComponent,
    SectionComponent,
    EntityComponent,
    TitleComponent,
    ToolsPageComponent,
    PasswordDialogComponent,
    SetPasswordDialogComponent,
    SetPasswordDirective,
    EditDirective,
  ]
})
export class GenericModule { }
