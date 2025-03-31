import { TestBed } from '@angular/core/testing';

import { CuentaServicesService } from './cuenta-services.service';

describe('CuentaServicesService', () => {
  let service: CuentaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
