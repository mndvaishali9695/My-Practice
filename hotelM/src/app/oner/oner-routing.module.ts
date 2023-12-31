import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnerLoginComponent } from './oner-login/oner-login.component';
import { OnerSuccessComponent } from './oner-success/oner-success.component';
import { HotelRegistrationComponent } from './hotel-registration/HotelRegistrationComponent';

const routes: Routes = [
  { path : "", component : OnerLoginComponent},
  { path:"onerSuccess", component: OnerSuccessComponent},
  { path:"hotelReg",component:HotelRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnerRoutingModule { }
