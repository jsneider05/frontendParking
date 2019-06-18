import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    CreateVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ToastrModule.forRoot({
      preventDuplicates:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
