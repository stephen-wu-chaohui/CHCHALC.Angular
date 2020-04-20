import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { QuoteComponent } from './quote/quote.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { SectionComponent } from './section/section.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    GoogleMapsModule
  ],
  declarations: [
    HeaderComponent,
    TopBarComponent,
    ContactMapComponent,
    FooterComponent,
    NewLetterComponent,
    QuoteComponent,
    SectionComponent,
    HomeComponent,
  ],
  exports: [
    HeaderComponent,
    ContactMapComponent,
    FooterComponent,
    NewLetterComponent,
    QuoteComponent,
    SectionComponent,
    HomeComponent,
 ],
})
export class AppLayoutModule { }
