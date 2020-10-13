import { TestBed } from '@angular/core/testing';

import { GPUService } from './gpu.service';

describe('GPUService', () => {
  let service: GPUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GPUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
