import { OfertService } from 'src/app/core/services/ofert/ofert.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Component({
  selector: 'app-ofert-detail',
  templateUrl: './ofert-detail.component.html',
  styleUrls: ['./ofert-detail.component.scss']
})
export class OfertDetailComponent {

public oferta?: OfertI;
public ofertId: string = '';

  constructor(
    private activateRoute: ActivatedRoute,
    public ofertService: OfertService,
    private router:Router

  ){
    this.activateRoute.params.subscribe((params) => {
      const ofertId = params['_id']
      this.ofertService.getOfertId(ofertId).subscribe((ofert)=>{
        this.oferta = ofert;
      })
    });
  }

  public navigateToDetailCompany(id:string){
    this.router.navigate(['company-detail', id])
  }
}
