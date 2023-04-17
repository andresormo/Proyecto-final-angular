import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOfertRoutingModule } from './create-ofert-routing.module';
import { CreateOfertComponent } from './create-ofert.component';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  declarations: [
    CreateOfertComponent
  ],
  imports: [
    CommonModule,
    CreateOfertRoutingModule,
    SharedModule
  ]
})
export class CreateOfertModule { }
