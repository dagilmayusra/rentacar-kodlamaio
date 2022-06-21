import { TestBed } from '@angular/core/testing';

import { BrandListService } from './brand-list.service';

describe('BrandListService', () => {
  let service: BrandListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
