import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfertListRoutingModule } from './ofert-list-routing.module';
import { OfertListComponent } from './ofert-list.component';
import { OfertComponent } from './components/ofert/ofert.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OfertListComponent,
    OfertComponent
  ],
  imports: [
    CommonModule,
    OfertListRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    OfertListComponent,
    OfertComponent
  ]
})
export class OfertListModule { }
