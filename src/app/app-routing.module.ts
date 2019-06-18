import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';

const routes: Routes = [
  {path :'', redirectTo: '/vehicleComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'vehicleComponent', component: VehicleComponent},
  {path: 'createVehicleComponent', component: CreateVehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

