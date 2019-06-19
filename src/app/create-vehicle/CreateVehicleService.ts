import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { VehicleModel } from "./../model/vehicle.model";
@Injectable({
  providedIn: 'root'
})
export class CreateVehicleService {
  constructor(private http: HttpClient) { }

  checkinVehicle(vehicle: VehicleModel){
    return this.http.post("http://localhost:8080/vehicle/checkin",vehicle).pipe(
      retry(1),
      catchError(this.responseError)
    );
  }

  responseError(error) {
    let errorMessage = '';
    errorMessage = error.error.message;
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
