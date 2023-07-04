import { TestBed } from '@angular/core/testing';

import { AdminServiseService } from './admin-servise.service';

describe('AdminServiseService', () => {
  let service: AdminServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
