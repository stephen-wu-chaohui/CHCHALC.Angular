import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations: [
    HeaderComponent,
    TopBarComponent,
    FooterComponent,
    NewLetterComponent,
  ],
  exports: [
    HeaderComponent,
    TopBarComponent,
    FooterComponent,
    NewLetterComponent,
 ],
})
export class AppLayoutModule { }
