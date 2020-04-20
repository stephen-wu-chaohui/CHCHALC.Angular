/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataClientService } from '../data-client.service';

describe('Service: DataClient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataClientService]
    });
  });

  it('should ...', inject([DataClientService], (service: DataClientService) => {
    expect(service).toBeTruthy();
  }));
});
