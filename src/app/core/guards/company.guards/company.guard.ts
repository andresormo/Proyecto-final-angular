import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, switchMap, take } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { OfertService } from '../../services/ofert/ofert.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyGuard implements CanActivate {

  constructor(
    private router:Router,
    private authService: AuthService,
    private ofertService: OfertService,
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true
}
}
