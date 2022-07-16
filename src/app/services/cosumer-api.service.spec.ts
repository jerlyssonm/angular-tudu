import { TestBed } from '@angular/core/testing';

import { CosumerApiService } from './cosumer-api.service';

describe('CosumerApiService', () => {
  let service: CosumerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosumerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
