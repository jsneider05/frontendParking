import { TestBed } from '@angular/core/testing';

import { CreateVehicleService } from "./create-vehicle.service";

describe('CreateVehicleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateVehicleService = TestBed.get(CreateVehicleService);
    expect(service).toBeTruthy();
  });
});
