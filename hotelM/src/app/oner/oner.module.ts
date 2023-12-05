import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnerRoutingModule } from './oner-routing.module';
import { OnerLoginComponent } from './oner-login/oner-login.component';
import { SharedModule } from '../shared/shared.module';
import { OnerSigUpComponent } from './oner-login/oner-sig-up/oner-sig-up.component';
import { HotelRegistrationComponent } from './hotel-registration/HotelRegistrationComponent';
import { OnerSuccessComponent } from './oner-success/oner-success.component';


@NgModule({
  declarations: [
    OnerLoginComponent,
    OnerSigUpComponent,
    HotelRegistrationComponent,
    OnerSuccessComponent
   
  ],
  imports: [
    CommonModule,
    OnerRoutingModule,
    SharedModule
  ]
})
export class OnerModule { }
