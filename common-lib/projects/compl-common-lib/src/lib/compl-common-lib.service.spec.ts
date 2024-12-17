import { TestBed } from '@angular/core/testing';

import { ComplCommonLibService } from './compl-common-lib.service';

describe('ComplCommonLibService', () => {
  let service: ComplCommonLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplCommonLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
