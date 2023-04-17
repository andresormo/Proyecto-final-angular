import { TestBed } from '@angular/core/testing';

import { ApiOfertService } from './api-ofert.service';

describe('ApiOfertService', () => {
  let service: ApiOfertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiOfertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
