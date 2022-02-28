import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreksRoutingModule } from './treks-routing.module';
import { TreksComponent } from './treks/treks.component';


@NgModule({
  declarations: [
    TreksComponent
  ],
  imports: [
    CommonModule,
    TreksRoutingModule
  ]
})
export class TreksModule { }
