import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyProfileRoutingModule } from './company-profile-routing.module';
import { CompanyProfileComponent } from './company-profile.component';
import { FormsModule } from '@angular/forms';
import { OwnOfertsComponent } from './components/own-oferts/own-oferts.component';


@NgModule({
  declarations: [
    CompanyProfileComponent,
    OwnOfertsComponent,
  ],
  imports: [
    CommonModule,
    CompanyProfileRoutingModule,
    FormsModule
  ],
  exports:[
    CompanyProfileComponent
  ]
})
export class CompanyProfileModule { }
