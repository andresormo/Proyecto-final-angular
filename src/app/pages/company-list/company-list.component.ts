import { IUser } from './../../core/services/auth/models/auth.models';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  public company?: IUser[];
  public inputValue: string = '';

  constructor(private userService: AuthService) {}

  public ngOnInit(): void {
    this.userService.getUserCompany().subscribe((companies: IUser[]) => {
      this.company = companies;
    });
  }

}
