import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertDetailComponent } from './ofert-detail.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component: OfertDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertDetailRoutingModule { }
