/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContactInfoService } from '../contact-info.service';

describe('Service: ContactInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactInfoService]
    });
  });

  it('should ...', inject([ContactInfoService], (service: ContactInfoService) => {
    expect(service).toBeTruthy();
  }));
});
