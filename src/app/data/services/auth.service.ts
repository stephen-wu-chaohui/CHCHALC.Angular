import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppDataService } from './app-data.service';


export interface Authentication {
  userName: string;
  userPhoneNumber: string;
  passcode: string;
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient, private appConfig: AppDataService) {
  }

  getPasscode(userName: string, userPhoneNumber: string, messageTemplate: string): Observable<boolean> {
    const serviceEndPoint = `${this.appConfig.apiURL}/Auth/getPasscode`;
    return this.httpClient.post<boolean>(serviceEndPoint, {
      userName,
      userPhoneNumber,
      messageTemplate
    }, httpOptions);
  }

  authenticate(userName: string, userPhoneNumber: string, userPasscode: string): Observable<Authentication> {
    const serviceEndPoint = `${this.appConfig.apiURL}/Auth/authenticate`;
    return this.httpClient.post<Authentication>(serviceEndPoint, {
      userName,
      userPhoneNumber,
      userPasscode
    }, httpOptions);
  }
}
