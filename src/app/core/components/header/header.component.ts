import { Component } from '@angular/core';
import { HeaderLink } from './models/header.models';
import { headerLinks } from './config/header.config';
import {  Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public isLogged : boolean = false;
  public headerLinksElement: HeaderLink[]= headerLinks;

  constructor(
    private router:Router,
    private authService: AuthService
  ){
    this.authService.isLogged$.subscribe((isLogged)=> {this.isLogged = isLogged});
  }

  public logOut(){
    this.authService.logOut();
  }

  public logIn(){
    this.router.navigate(['login']);
  }
}
