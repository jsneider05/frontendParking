import { Component, OnInit } from '@angular/core';

import {VehicleService} from './vehicle.service'
import { VehicleDtoModel } from '../model/vehicleDto.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService]
})
export class VehicleComponent implements OnInit {
  private vehiclesDto: Array<VehicleDtoModel>

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.loadVehicles();
  }

  private loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(res=>{
      this.vehiclesDto = res;
    });
  }

}
