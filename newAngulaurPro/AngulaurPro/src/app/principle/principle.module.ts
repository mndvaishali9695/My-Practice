import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrincipleRoutingModule } from './principle-routing.module';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';
import { PrincipalLoginComponent } from './principal-login/principal-login.component';
import { PrincipalSignUpComponent } from './principal-sign-up/principal-sign-up.component';

import { PrincilpalsuccessComponent } from './princilpalsuccess/princilpalsuccess.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';
console.log('prici');



@NgModule({
  declarations: [
    PrincipleHomeComponent,
    PrincipalLoginComponent,
    PrincipalSignUpComponent,
    PrincilpalsuccessComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    PrincipleRoutingModule,
    SharedModule
  ]
})
export class PrincipleModule { }
