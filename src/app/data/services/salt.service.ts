import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SigDataService, SigData } from './sig-data.service';
import { AppDataService } from './app-data.service';
import { PushingService } from './pushing.service';

export namespace Salt {

  export class Church implements SigData {
    id?: number;
    lastUpdated: number;	// unix time
    deleted: boolean;
    keywords: string;

    name: string;
    code: string;
    address: string;
    latitude: number;
    longitude: number;

    missionStatement: string[];
  }

  export class CellGroup implements SigData {
    id?: number;
    lastUpdated: number;	// unix time
    deleted: boolean;
    keywords: string;

    name: string;
    code: string;
    address: string;
    latitude: number;
    longitude: number;
    missionStatement: string;

    churchId: number;
    capacity: number;
    photoIds?: string[];
  }

  export class Disciple implements SigData {
    id?: number;
    lastUpdated: number;	// unix time
    deleted: boolean;
    keywords: string;

    familyName: string;
    givenName: string;
    preferName: string;

    gender: string;
    birthDate: string;
    personalStatement: string;
    phoneNumber: string;
  }

  export class Event implements SigData {
    id?: number;
    lastUpdated: number;	// unix time
    deleted: boolean;
    keywords: string;

    churchId: number;
    cellGroupId: number;
    type: string;   // Sermon | Fellowship ...
    from: Date;
    to?: Date;
  }

  export class Participate implements SigData {
    id?: number;
    lastUpdated: number;	// unix time
    deleted: boolean;
    keywords: string;

    churchId: number;
    cellGroupId: number;
    discipleId: number;
    title: string;
    statement: string;
    from: Date;
    to?: Date;
  }


  @Injectable({
    providedIn: 'root'
  })
  export class Churches extends SigDataService<Church> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'Churches', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class CellGroups extends SigDataService<CellGroup> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'CellGroups', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class Disciples extends SigDataService<Disciple> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'Disciples', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class Events extends SigDataService<Event> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'Events', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class Participates extends SigDataService<Participate> {
    constructor(httpClient: HttpClient, appConfig: AppDataService, ngZone: NgZone, pushingService: PushingService) {
      super(httpClient, appConfig, ngZone, pushingService, 'Participates', true);
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class Service {
    church = {
      id: '1',
      lastUpdated: 0,
      deleted: false,

      name: 'Abundant Life Church',
      address: '182 The Runway, Wigram, Christchurch 8042 New Zealand',
      latitude: -43.549917,
      longitude: 172.562886,

      missionStatement: [
        'to bring people to Jesus and membership in his family,',
        'develop them Christlike maturity, and equip them for their ministry in the church',
        'and life mission in the world, in order to magnify God’s name'
      ]
    };

    constructor(public disciples: Disciples, public cellGroups: CellGroups, public events: Events, public participates: Participates ) {
      disciples.start();
      cellGroups.start();
      events.start();
      participates.start();
    }
  }
}
