import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { ConfirmationService } from 'primeng/primeng';

import { VehicleModel } from '../model/vehicle.model';
import { CreateVehicleService } from "./create-vehicle.service";


@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
  providers: [CreateVehicleService]
})
export class CreateVehicleComponent implements OnInit {

  private vehicle: VehicleModel;
  private isValid: boolean = true;
  private message: String ="";
  public ocultarCilindraje: boolean = false;

  constructor(private createVehicleService: CreateVehicleService, private router: Router,private toast:ToastrService) { 
    this.vehicle = new VehicleModel();
  }

  ngOnInit() {
  }

  public checkinVehicle():void{
    this.vehicle.plate = this.vehicle.plate.toLocaleUpperCase();
    this.createVehicleService.checkinVehicle(this.vehicle).subscribe(res =>{
      if (res) {

        this.router.navigate(['/vehicleComponent']);
        this.toast.success("Registro exitoso para "+res['typeVehicle']+" de placa "+ res['plate'],"REGISTRO DE INGRESO");
      }
    }, err => {
      this.toast.error(err,"Error al ingresar:");

    }); 
  }
}
