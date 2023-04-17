import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { contratoOption, sectorOption } from '../config/form.config';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';
import { Router } from '@angular/router';
import { IUser, IUserSignInResponse } from 'src/app/core/services/auth/models/auth.models';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

@Input() public oferta?: OfertI;
@Input() public editMode: boolean = false;

public ofertForm?: FormGroup;
public contratoOption = contratoOption;
public sectorOption = sectorOption;

public hasFormError: boolean= false;
public hasSuccess: boolean = false;
public hasDeleted: boolean = false;


constructor(
  private formBuilder: FormBuilder,
  private ofertService: OfertService,
  private router: Router,
  private userService:AuthService,
){}

public ngOnInit(): void {
  this.initForm();
}

public handleOfert(){
  if(this.ofertForm?.valid){
    if(this.editMode){
      this.editOfert();

    }else{
      this.createOfert();
      this.hasSuccess = true;
    }
    this.ofertForm?.reset();

  } else{
    this.hasFormError = true;
  }
}

private createOfert(){
  this.hasFormError = false;
  this.ofertService.createOfert(this.ofertForm?.value).subscribe((ofert)=>{
      this.router.navigate(['../company-profile']);
  })
}

private editOfert(){
  if(!this.oferta){return;}
  this.ofertService.editOfert(this.ofertForm?.value, this.oferta._id).subscribe((ofert)=>{
    this.router.navigate(['../company-profile']);
  })
}

public returnToProfile(){
  this.router.navigate(['company-profile']);
}

private initForm(){
  const userId = this.userService.getUserId();
  this.ofertForm = this.formBuilder.group({
    empresa: [userId],
    puesto: new FormControl(this.oferta?.puesto ||'', [Validators.required]),
    salario: new FormControl(this.oferta?.salario ||''),
    descripcion: new FormControl(this.oferta?.descripcion ||''),
    contrato: new FormControl(this.oferta?.contrato ||'', [Validators.required]),
    sector: new FormControl(this.oferta?.sector ||'',[Validators.required]),
    portada:new FormControl(this.oferta?.portada ||'https://cdn-icons-png.flaticon.com/512/25/25634.png'),
    telefono: new FormControl(this.oferta?.telefono ||'', [Validators.required]),
    email: new FormControl (this.oferta?.email ||'', [Validators.required, Validators.email]),
   });
  }
}
