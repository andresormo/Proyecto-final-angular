import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditOfertComponent } from './edit-ofert.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: EditOfertComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditOfertRoutingModule { }
