
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditOfertRoutingModule } from './edit-ofert-routing.module';
import { EditOfertComponent } from './edit-ofert.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditOfertComponent
  ],
  imports: [
    CommonModule,
    EditOfertRoutingModule,
    SharedModule
  ]
})
export class EditOfertModule { }
