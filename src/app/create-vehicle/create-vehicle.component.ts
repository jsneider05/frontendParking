import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ConfirmationService } from 'primeng/primeng';

//import { VehicleCommandModel } from '../model/vehicleCommand.model';
import { VehicleModel } from '../model/vehicle.model';
import { CreateVehicleService } from "./CreateVehicleService";
import { MessageService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private createVehicleService: CreateVehicleService, private router: Router,private toast:ToastrService) { 

    //, private service: MessageService,private toast:ToastrService
    // private confirmationService: ConfirmationService,
    this.vehicle = new VehicleModel();
  }

  ngOnInit() {
  }

  public checkinVehicle():void{
    this.createVehicleService.checkinVehicle(this.vehicle).subscribe(res =>{
      //this.router.navigate(['/vehicleComponent']);
      if (res) {

        this.router.navigate(['/vehicleComponent']);
        this.toast.success("Registro exitoso para "+res['typeVehicle']+" de placa "+ res['plate'],"Registro de entrada");
      }
    }, err => {
      this.toast.error(err,"Error al ingresar:");

    }); 
  }

/*   registrarTicket() {
    this.createVehicleService.checkinVehicle(this.vehicle).subscribe(
      res => {
        if(res){
          this.toast.success("se registro la entrada del vehiculo: " + res['value']['licensePlate'] + ", con exito","Registro de entrada");
          this.limpiarFormulario();
        }
      }, err => {
        this.toast.error(err,"Error al ingresar:");
      });
  } */

}
