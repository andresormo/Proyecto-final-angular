import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfertComponent } from './components/ofert/ofert.component';
import { OfertListComponent } from './ofert-list.component';

const routes: Routes = [{
  path:'',
  pathMatch:'full',
  component: OfertListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertListRoutingModule { }
