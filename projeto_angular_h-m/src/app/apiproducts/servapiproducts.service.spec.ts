import { TestBed } from '@angular/core/testing';

import { ServapiproductsService } from './servapiproducts.service';

describe('ServapiproductsService', () => {
  let service: ServapiproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServapiproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
