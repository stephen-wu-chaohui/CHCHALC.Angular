/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PastorsService } from '../pastors.service';

describe('Service: Pastors', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PastorsService]
    });
  });

  it('should ...', inject([PastorsService], (service: PastorsService) => {
    expect(service).toBeTruthy();
  }));
});
