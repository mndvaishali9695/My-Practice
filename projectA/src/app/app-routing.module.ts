import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { AddCircleComponent } from './add-circle/add-circle.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
import { Landing2Component } from './admin/landing2/landing2.component';


const routes: Routes = [
  { path : '' , component: LandingComponent },
  { path :'Home',component:HomeComponent},
  {path : 'addCircle',component :AddCircleComponent},
  {path : 'landing',component:LandingComponent},
  {path :'Student',component:StudentComponent},
  {path :'landing2',component:Landing2Component},

  {path : 'studentModule',loadChildren:()=>import('./student/student.module').then(m => m.StudentModule)},
  {path : 'admin',loadChildren:() => import('./admin/admin.module').then(mod =>mod.AdminModule)},
  {path : '**', component :PagenotfoundComponent},//wildcard route
 
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
