import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { contratoOption, sectorOption } from '../config/form.config';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() public oferta?: OfertI;
  @Input() public editMode: boolean = false;

  public ofertForm?: FormGroup;
  public contratoOption = contratoOption;
  public sectorOption = sectorOption;

  public hasFormError: boolean = false;
  public hasSuccess: boolean = false;
  public hasDeleted: boolean = false;

  public uploadedPortadaUrl?: string;

  constructor(
    private formBuilder: FormBuilder,
    private ofertService: OfertService,
    private router: Router,
    private userService: AuthService,
    private http: HttpClient
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public handleOfert() {
    if (this.ofertForm?.valid) {
      if (this.editMode) {
        this.editOfert();
        console.log(this.ofertForm?.value);
      } else {
        this.createOfert();
        this.hasSuccess = true;
        console.log(this.ofertForm?.value);
      }
      this.ofertForm?.reset();
    } else {
      this.hasFormError = true;
    }
  }

  private createOfert() {
    this.hasFormError = false;
    this.ofertService.createOfert(this.formDataRecovery()).subscribe((ofert) => {
      this.router.navigate(['../company-profile']);
    });
  }

  private editOfert() {
    if (!this.oferta) {
      return;
    }
    this.ofertService
      .editOfert(this.formDataRecovery(), this.oferta._id)
      .subscribe((ofert) => {
        this.router.navigate(['../company-profile']);
      });
  }

  public returnToProfile() {
    this.router.navigate(['company-profile']);
  }

//recoge los datos del input
  public onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const file = target.files[0];
      const portadaControl = this.ofertForm?.get('portada');
      if (portadaControl) {
        portadaControl.setValue(file);
        console.log(file);
      }
    }
  }
//Obtiene los datos del formulario
  private formDataRecovery(){
    const formData = new FormData();
    formData.append('empresa', this.ofertForm?.get('empresa')?.value);
    formData.append('puesto', this.ofertForm?.get('puesto')?.value);
    formData.append('salario', this.ofertForm?.get('salario')?.value);
    formData.append('descripcion', this.ofertForm?.get('descripcion')?.value);
    formData.append('contrato', this.ofertForm?.get('contrato')?.value);
    formData.append('sector', this.ofertForm?.get('sector')?.value);
    formData.append('telefono', this.ofertForm?.get('telefono')?.value);
    formData.append('email', this.ofertForm?.get('email')?.value);
    formData.append('portada', this.ofertForm?.get('portada')?.value);
    return formData;
  }

  private initForm() {

    const userId = this.userService.getUserId();
    this.ofertForm = this.formBuilder.group({
      empresa: [userId],
      puesto: new FormControl(this.oferta?.puesto || '', [Validators.required]),
      salario: new FormControl(this.oferta?.salario || ''),
      descripcion: new FormControl(this.oferta?.descripcion || ''),
      contrato: new FormControl(this.oferta?.contrato || '', [
        Validators.required,
      ]),
      sector: new FormControl(this.oferta?.sector || '', [Validators.required]),
      portada: new FormControl(this.oferta?.portada || ''),
      telefono: new FormControl(this.oferta?.telefono || '', [
        Validators.required,
      ]),
      email: new FormControl(this.oferta?.email || '', [
        Validators.required,
        Validators.email,
      ]),
    });
  }
}
