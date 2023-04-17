import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/services/auth/models/auth.models';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
 @Input() public empresaToShow?: IUser;
 @Output() public watchDetails = new EventEmitter<void>();
public ofert?:OfertI;

constructor(
  private router: Router
){}

public navigateToDetailCompany(id:string){
  this.router.navigate(['company-detail', id])
}

}
