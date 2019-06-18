import { TestBed } from '@angular/core/testing';

import { CreateVehicleService } from "./CreateVehicleService";

describe('CreateVehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateVehicleService = TestBed.get(CreateVehicleService);
    expect(service).toBeTruthy();
  });
});
