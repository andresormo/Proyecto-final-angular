import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from 'src/app/shared/components/form/form-ofert/form.component';
import { CreateOfertComponent } from './create-ofert.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: CreateOfertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOfertRoutingModule { }
