import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path :'', redirectTo: '/vehicleComponent', pathMatch: 'full'},
  {path: 'appComponent', component: AppComponent},
  {path: 'vehicleComponent', component: VehicleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

