import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModule
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
