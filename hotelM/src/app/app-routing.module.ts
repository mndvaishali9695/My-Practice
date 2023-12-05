import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './commnonScreen/landing/landing.component';
import { OnerSigUpComponent } from './oner/oner-login/oner-sig-up/oner-sig-up.component';

const routes: Routes = [
  { path : "", component: LandingComponent},
  { path:"signUp", component:OnerSigUpComponent},
  { path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path:'oner',loadChildren:()=>import('./oner/oner.module').then(mod=>mod.OnerModule)},
  { path:'user',loadChildren:()=>import('./user/user.module').then(mod=>mod.UserModule)},
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
