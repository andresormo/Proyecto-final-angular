import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guards/auth.guard';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'ofert-list',
    loadChildren: () =>
      import('./pages/ofert-list/ofert-list.module').then((m) => m.OfertListModule)
  },
  {
    path: 'ofert-detail/:_id',
    loadChildren: () =>
      import('./pages/ofert-detail/ofert-detail.module').then((m) => m.OfertDetailModule)
  },
  {
    path: 'create-ofert',
    loadChildren: () =>
      import('./pages/create-ofert/create-ofert.module').then((m) => m.CreateOfertModule),
      canActivate:[AuthGuard]
  },
  {
    path:'edit-ofert/:_id',
    loadChildren: ()=>
    import('./pages/edit-ofert/edit-ofert.module').then((m)=>m.EditOfertModule),
    canActivate:[AuthGuard]
  },
  {
    path:'company-profile',
    loadChildren: ()=>
    import('./pages/company-profile/company-profile.module').then((m)=>m.CompanyProfileModule),
    canActivate:[AuthGuard]
  },
  {
    path:'company-list',
    loadChildren: ()=>
    import('./pages/company-list/company-list.module').then((m)=>m.CompanyListModule)
  },
  {
    path:'login',
    loadChildren:()=>
    import('./pages/login/login.module').then((m)=>m.LoginModule)
  },
  {
    path:'create-user',
    loadChildren:()=>
    import('./pages/create-user/create-user.module').then((m)=>m.CreateUserModule)
  },
  {
    path:'company-detail/:id',
    loadChildren:()=>
    import('./pages/company-detail/company-detail.module').then((m)=>m.CompanyDetailModule)
  },
  {
    path:'aboutme',
    loadChildren:()=>
    import('./pages/aboutme/aboutme.module').then((m)=>m.AboutmeModule)
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
