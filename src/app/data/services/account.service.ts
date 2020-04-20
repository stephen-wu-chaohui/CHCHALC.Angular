import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { Observable, of, from } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';

import { AppDataService } from './app-data.service';
import { Salt } from './salt.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  currentUser: Salt.Disciple;

  savedUserName: string;
  savedPhoneNumber: string;
  savedCode: string;

  private serviceEndPoint = '';

  constructor(private appConfig: AppDataService, private httpClient: HttpClient, private storage: Storage) {
    this.serviceEndPoint = `${this.appConfig.apiURL}/Disciples`;
    this.loadCurrentUser();
  }

  private loadCurrentUser() {
    Promise.all([
        this.storage.get('Salt.savedUserName'),
        this.storage.get('Salt.savedPhoneNumber')])
      .then(data => {
        this.savedUserName = data[0];
        this.savedPhoneNumber = data[1];
        if (this.savedUserName) {
          return this.signUp(this.savedUserName, this.savedPhoneNumber).subscribe();
        }
      });
  }


  clearSaving() {
    this.storage.remove('Salt.savedUserName');
    this.storage.remove('Salt.savedPhoneNumber');
    this.currentUser = null;
    this.savedUserName = '';
  }

  saveIdentity() {
    this.storage.set('Salt.savedUserName', this.currentUser.preferName);
    this.storage.set('Salt.savedPhoneNumber', this.currentUser.phoneNumber);
  }

  signUp(preferName, phoneNumber): Observable<Salt.Disciple> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: '2000' })
    };

    return this.httpClient.post<any>(this.serviceEndPoint, { preferName, phoneNumber }, httpOptions).pipe(
      map(user => {
        this.currentUser = user;
        this.savedUserName = this.currentUser.preferName;
        this.savedPhoneNumber = this.currentUser.phoneNumber;
        this.saveIdentity();
        return user;
      }),
    );
  }

  logOut() {
    this.clearSaving();
    this.currentUser = null;
  }

  update(): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: '2000' }),
    };

    return this.httpClient.put(`${this.serviceEndPoint}/${this.currentUser.id}`, this.currentUser, httpOptions).pipe(
      map(() => {
          return 'OK';
        },
        catchError(error => error.toString())
    ));
  }

  getCode(phoneNumber): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', timeout: '2000' }),
    };

    return this.httpClient.post(this.serviceEndPoint, { phoneNumber }, httpOptions).pipe(
      map(() => {
          return 'OK';
        },
        catchError(error => error.toString())
    ));
  }
}
