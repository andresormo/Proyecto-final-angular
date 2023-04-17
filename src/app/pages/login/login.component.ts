import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

public loginForm?: FormGroup;
public formError: boolean = false;

constructor(
  private authService: AuthService,
  private router:Router,
  private fb: FormBuilder,
){
  this.loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })
}

public navigateToSignUp(){
  this.router.navigate(['create-user'])
}

public login(){
  if(this.loginForm?.valid){
    this.authService.login(this.loginForm.value).subscribe();
    this.loginForm.reset();
  } else{
    this.formError=true;
    this.loginForm?.reset()
  }
}
}
