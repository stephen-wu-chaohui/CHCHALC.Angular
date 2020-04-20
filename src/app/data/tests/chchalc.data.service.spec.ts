/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Chchalc.dataService } from './chchalc.data.service';

describe('Service: Chchalc.data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Chchalc.dataService]
    });
  });

  it('should ...', inject([Chchalc.dataService], (service: Chchalc.dataService) => {
    expect(service).toBeTruthy();
  }));
});
