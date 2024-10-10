import { TestBed } from '@angular/core/testing';

import { HamstersService } from './hamsters.service';

describe('HamstersService', () => {
  let service: HamstersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HamstersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
