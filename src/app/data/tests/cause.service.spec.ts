/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CauseService } from '../cause.service';

describe('Service: Cause', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CauseService]
    });
  });

  it('should ...', inject([CauseService], (service: CauseService) => {
    expect(service).toBeTruthy();
  }));
});
