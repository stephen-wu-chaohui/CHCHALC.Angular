import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { AppLayoutModule } from '../app.layout/app.layout.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../.././environments/environment';
import { GenericModule } from '../generic/generic.module';
import { StartupService } from '../services/startup.service';
import { AbstrctEntityService } from '../services/entity.service';
import { FirebaseService } from '../services/firebase.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMinusCircle, faFileImage, faCloud } from '@fortawesome/free-solid-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

export function init_app(startup: StartupService) {
	return () => startup.init();
}


@NgModule({
   declarations: [
			AppComponent,
   ],
   imports: [
      BrowserModule,
			AngularFireModule.initializeApp(environment.firebase),
			AngularFireStorageModule,
			AngularFirestoreModule.enablePersistence(),
      GenericModule,
			AppLayoutModule,
			RouterModule.forRoot([]),
			ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
			NgbModule,
			FontAwesomeModule
   ],
	 providers: [
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [StartupService], multi: true },
    { provide: AbstrctEntityService, useClass: FirebaseService }
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
