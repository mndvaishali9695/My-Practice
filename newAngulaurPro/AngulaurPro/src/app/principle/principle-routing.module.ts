import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipleHomeComponent } from './principle-home/principle-home.component';

const routes: Routes = [

  {path: 'principleHome',component:PrincipleHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipleRoutingModule { }
