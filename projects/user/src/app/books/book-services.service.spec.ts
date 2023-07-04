import { TestBed } from '@angular/core/testing';

import { BookServicesService } from './book-services.service';

describe('BookServicesService', () => {
  let service: BookServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
