import { Component } from '@angular/core';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
public ofert?: OfertI[]

constructor(
  private ofertService: OfertService
){
 
}
}
