import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { IUser } from 'src/app/core/services/auth/models/auth.models';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';
import { OfertService } from 'src/app/core/services/ofert/ofert.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {
  public userCompany?: IUser;
  public ofert?: OfertI[];

  constructor(
    private activateRoute: ActivatedRoute,
    public userService: AuthService,
    public ofertService: OfertService,
    private router:Router,
  ) {
    this.activateRoute.params.subscribe((params) => {
      const companyId = params['id'];
      this.userService.getUserById(companyId).subscribe((company) => {
        this.userCompany = company;
      });
    });
  }

  public ngOnInit(): void {
    this.ofertService.getOfert().subscribe((ofert: OfertI[]) => {
        let companyOferts = ofert.filter((empresa) => {
          return empresa.empresa.some((nombre) => nombre._id === this.userCompany?._id);
      })
      this.ofert = companyOferts
    });
  }
public navigateToDetail(id:string){
  this.router.navigate(['ofert-detail', id]);
}
}
