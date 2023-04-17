import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/core/services/auth/models/auth.models';

@Pipe({
  name: 'filterCompany'
})
export class FilterCompanyPipe implements PipeTransform {

  transform(value: IUser[], filterkey: string): IUser[] {
    if(!value || !filterkey || filterkey.length<2){ return value}

    return    value?.filter(company =>{
      return company.nombre.toLowerCase().includes(filterkey.toLowerCase())
     })
  }

}
