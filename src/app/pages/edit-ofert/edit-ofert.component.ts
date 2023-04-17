import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';

@Component({
  selector: 'app-edit-ofert',
  templateUrl: './edit-ofert.component.html',
  styleUrls: ['./edit-ofert.component.scss']
})
export class EditOfertComponent {
  public oferta?: OfertI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ofertService: OfertService
  ){
    this.activatedRoute.params.subscribe((params) => {
      const ofertId = params['_id']
      this.ofertService.getOfertId(ofertId).subscribe((ofert)=>{
        this.oferta = ofert;
      })
    });
  }
}
