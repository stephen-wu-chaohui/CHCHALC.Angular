import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { HeaderComponent } from './header/header.component';
import { TopBarComponent } from './header/top-bar/top-bar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps'
import { AppCommonModule } from '../app.common/app.common.module';

@NgModule({
  imports: [
    CommonModule,
		AppCommonModule,
		RouterModule,
    GoogleMapsModule
  ],
  declarations: [
    HeaderComponent,
    TopBarComponent,
    ContactMapComponent,
    FooterComponent,
    NewLetterComponent,
  ],
  exports: [
    HeaderComponent,
    TopBarComponent,
    ContactMapComponent,
    FooterComponent,
    NewLetterComponent,
 ],
})
export class AppLayoutModule { }
