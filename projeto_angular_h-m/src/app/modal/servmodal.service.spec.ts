import { TestBed } from '@angular/core/testing';

import { ServmodalService } from './servmodal.service';

describe('ServmodalService', () => {
  let service: ServmodalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServmodalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
