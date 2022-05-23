import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreksRoutingModule } from './treks-routing.module';
import { TreksComponent } from './treks/treks.component';
import { TreksS1Component } from './treks-s1/treks-s1.component';
import { TreksS2Component } from './treks-s2/treks-s2.component';
import { TreksS3Component } from './treks-s3/treks-s3.component';
import { TreksS4Component } from './treks-s4/treks-s4.component';


@NgModule({
  declarations: [
    TreksComponent,
    TreksS1Component,
    TreksS2Component,
    TreksS3Component,
    TreksS4Component
  ],
  imports: [
    CommonModule,
    TreksRoutingModule
  ]
})
export class TreksModule { }
