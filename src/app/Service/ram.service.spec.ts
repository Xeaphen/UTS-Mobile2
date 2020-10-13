import { TestBed } from '@angular/core/testing';

import { RAMService } from './ram.service';

describe('RAMService', () => {
  let service: RAMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RAMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
