import { TestBed } from '@angular/core/testing';

import { ServproductsapiService } from './servproductsapi.service';

describe('ServproductsapiService', () => {
  let service: ServproductsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServproductsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
