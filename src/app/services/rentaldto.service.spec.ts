import { TestBed } from '@angular/core/testing';

import { RentaldtoService } from './rentaldto.service';

describe('RentaldtoService', () => {
  let service: RentaldtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentaldtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
