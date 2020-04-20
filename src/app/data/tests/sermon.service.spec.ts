/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SermonService } from '../sermon.service';

describe('Service: Sermon', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SermonService]
    });
  });

  it('should ...', inject([SermonService], (service: SermonService) => {
    expect(service).toBeTruthy();
  }));
});
