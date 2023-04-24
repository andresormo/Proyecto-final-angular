
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/services/auth/models/auth.models';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
})
export class CompanyProfileComponent implements OnInit {
  public oferts?: OfertI[];
  public user?: IUser[];


  constructor(
    private router: Router,
    private ofertService: OfertService,
    private userService: AuthService
  ) {}
  public ngOnInit(): void {
    this.getOwnOfert();
  }

  public getOwnOfert(){
    const idUser = this.userService.getUserId();
    this.ofertService.getOfert().subscribe((ofert: OfertI[]) => {
      if (idUser) {
        const userOferts = ofert.filter((empresa) => {
          return empresa.empresa.some((nombre) => nombre._id === idUser);
        });
        this.oferts = userOferts;
      }
    });
  }
  public createOfert() {
    this.router.navigate(['create-ofert']);
  }

  public deletedOfert(id:string){
    this.ofertService.deleteOfert(id).subscribe(()=> this.getOwnOfert());
  }

}
