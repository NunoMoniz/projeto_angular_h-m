import { TestBed } from '@angular/core/testing';

import { Servproducts2Service } from './servproducts2.service';

describe('Servproducts2Service', () => {
  let service: Servproducts2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Servproducts2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
