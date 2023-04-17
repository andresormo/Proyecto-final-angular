import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfertDetailRoutingModule } from './ofert-detail-routing.module';
import { OfertDetailComponent } from './ofert-detail.component';


@NgModule({
  declarations: [
    OfertDetailComponent
  ],
  imports: [
    CommonModule,
    OfertDetailRoutingModule
  ]
})
export class OfertDetailModule { }
