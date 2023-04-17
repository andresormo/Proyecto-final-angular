import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyListRoutingModule } from './company-list-routing.module';
import { CompanyListComponent } from './company-list.component';
import { CompanyComponent } from './components/company/company.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CompanyListComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyListRoutingModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    CompanyListComponent,
    CompanyComponent
  ]
})
export class CompanyListModule { }
