import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TreksComponent } from './treks/treks.component';

const routes: Routes = [
  {
    path:"treks",
    component: TreksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TreksRoutingModule { }
