import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { VehicleDtoModel } from '../model/vehicleDto.model';
//import { VehicleCommandModel } from '../model/VehicleCommand.model';
import { Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  public getVehicles():Observable<VehicleDtoModel[]> {
    return this.http.get<VehicleDtoModel[]>("http://localhost:8080/vehicle/list");
  }
}
