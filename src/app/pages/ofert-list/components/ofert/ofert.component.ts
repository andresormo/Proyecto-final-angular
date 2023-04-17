import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';

@Component({
  selector: 'app-ofert',
  templateUrl: './ofert.component.html',
  styleUrls: ['./ofert.component.scss']
})
export class OfertComponent{


@Input() public ofertToShow?: OfertI;
@Output() public watchDetails = new EventEmitter<void>();

constructor(
  private router: Router,
){}

public navigateToDetail(id:string){
  this.router.navigate(['ofert-detail', id]);
}
}
