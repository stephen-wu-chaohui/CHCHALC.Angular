import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AutosizeModule } from 'ngx-autosize';

import { PageComponent } from './page/page.component';
import { SectionComponent } from './section/section.component';
import { EntityComponent } from './entity/entity.component';
import { TitleComponent } from './title/title.component';
import { ToolsPageComponent } from './tools-page/tools-page.component';
import { EditDirective } from './section/edit.directive';
import { PasswordDialogComponent } from './section/password-dialog/password-dialog.component';
import { SetPasswordDialogComponent } from './entity/set-password-dialog/set-password-dialog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageComponent },
  { path: 'tools', component: ToolsPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AutosizeModule,
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
    EditDirective,
  ]
})
export class GenericModule { }
