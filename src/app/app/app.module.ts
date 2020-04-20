import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppLayoutModule } from '../app.layout/app.layout.module';
import { PagesModule } from '../pages/pages.module';
import { ChchalcDataService } from '../data/chchalc-data.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../.././environments/environment';

export function init_app(data: ChchalcDataService) {
	return () => data.init();
}


@NgModule({
   declarations: [
			AppComponent,
		],
   imports: [
      BrowserModule,
      PagesModule,
			AppLayoutModule,
			RouterModule.forRoot([]),
			ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
   ],
	 providers: [
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [ChchalcDataService], multi: true }
  ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
