import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {


  @Input() public user?: IUser;

  public userForm?: FormGroup;

  public hasFormError:boolean = false;
  public hasSuccess: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userServicie: AuthService,
    private router: Router,
  ){}

public ngOnInit(): void {
  this.initFormUser();
}

public handleUser(){
  console.log(this.userForm?.valid, this.userForm?.value);

  if(this.userForm?.valid){
    this.createUser();
    this.userForm?.reset();
    this.hasSuccess = true;
  } else{
    this.hasFormError = true;
  }
}


private createUser(){
  this.hasFormError = false;
  this.userServicie.signUp(this.userForm?.value).subscribe();
}

  private initFormUser(){
    const passwordpattern = new RegExp(/(?=.*\d).{6,}/);
    this.userForm = this.formBuilder.group({
      email: new FormControl(this.user?.email || '', [Validators.required]),
      password: new FormControl(this.user?.password || '', [Validators.required, Validators.pattern(passwordpattern)]),
      rol: new FormControl(this.user?.rol || '', [Validators.required]),
      cif: new FormControl(this.user?.cif||'', [Validators.required]),
      nombre: new FormControl(this.user?.nombre||'', [Validators.required]),
      direccion: new FormControl(this.user?.direccion||'', [Validators.required]),
      numero: new FormControl(this.user?.numero||'',[Validators.required]),
      cp: new FormControl(this.user?.cp||'', [Validators.required]),
      localidad: new FormControl(this.user?.localidad||'',[Validators.required]),
      portada: new FormControl(this.user?.portada||'https://img.freepik.com/vector-premium/concepto-empresa-2-icono-linea-color-ilustracion-simple-elemento-amarillo-azul-diseno-simbolo-esquema-concepto-empresa_159242-4866.jpg'),
      capital: new FormControl(this.user?.capital||''),
      trabajadores: new FormControl(this.user?.trabajadores||'')
    })

  }
}
