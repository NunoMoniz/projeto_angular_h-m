import { TestBed } from '@angular/core/testing';

import { ServwishlistService } from './servwishlist.service';

describe('ServwishlistService', () => {
  let service: ServwishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServwishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
