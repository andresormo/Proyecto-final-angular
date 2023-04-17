import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form-ofert/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormUserComponent } from './components/form/form-user/form-user.component';
import { FilterPipe } from './pipes/filterOfert/filter.pipe';
import { FilterCompanyPipe } from './pipes/filterCompany/filter-company.pipe';



@NgModule({
  declarations: [
    FormComponent,
    FormUserComponent,
    FilterPipe,
    FilterCompanyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    FormComponent,
    FormUserComponent,
    FilterPipe,
    FilterCompanyPipe
  ]
})
export class SharedModule { }
