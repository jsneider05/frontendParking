import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//import { VehicleCommandModel } from '../model/VehicleCommand.model';
import { VehicleDtoModel } from '../model/vehicleDto.model';
import { PaymentModel } from '../model/payment.model';
import { VehicleModel } from "./../model/vehicle.model";

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  public parkingPayment: number;
  //private vehicle: VehicleModel;
  //private plate : VehicleModel["plate"];

  constructor(private http: HttpClient) { }

  public getVehicles():Observable<VehicleDtoModel[]> {
    return this.http.get<VehicleDtoModel[]>("http://localhost:8080/vehicle/list").pipe(
      retry(1),
      catchError(this.responseError)
    );
  }

  public checkout(plate : VehicleDtoModel):Observable<PaymentModel> {

    return this.http.put<PaymentModel>("http://localhost:8080/vehicle/checkout",plate).pipe(
      retry(1),
      catchError(this.responseError)
    );
  }

  responseError(error) {
    let errorMessage = '';
    errorMessage = error.error.message;
    return throwError(errorMessage);
  }
}
