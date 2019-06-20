import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

import {VehicleService} from './vehicle.service'
import { VehicleDtoModel } from '../model/vehicleDto.model';
import { PaymentModel } from '../model/payment.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers: [VehicleService]
})
export class VehicleComponent implements OnInit {
  private vehiclesDto: Array<VehicleDtoModel>

  private payment: PaymentModel;
  

  constructor(private vehicleService: VehicleService, private router: Router,private toast:ToastrService) { }

  ngOnInit() {
    this.loadVehicles();
  }

  private loadVehicles(): void {
    this.vehicleService.getVehicles().subscribe(res=>{
      if (res) {
        this.vehiclesDto = res;
      }
    }, err => {
      this.toast.error(err,"Error al listar vehiculos");

    }); 
  }

  public checkoutVehicle(vehicleDto:VehicleDtoModel):void{
    
    //sessionStorage.setItem('plate', JSON.stringify(vehicleDto.plate));
    this.vehicleService.checkout(vehicleDto).subscribe(res=>{
      console.log(res);
      if (res) {
        this.payment = res;
        //this.vehicleService.getVehicles();
       //this.router.navigate(['/vehicleComponent']);
       this.toast.success("$ "+this.payment,"VALOR A PAGAR");
       this.loadVehicles();
      }
    }, err => {
      this.toast.error(err,"Error al listar vehiculos");

    }); 
  }

}
