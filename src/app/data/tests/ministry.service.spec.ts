/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MinistryService } from '../ministry.service';

describe('Service: Ministry', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MinistryService]
    });
  });

  it('should ...', inject([MinistryService], (service: MinistryService) => {
    expect(service).toBeTruthy();
  }));
});
