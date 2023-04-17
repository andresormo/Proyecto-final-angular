import { Pipe, PipeTransform } from '@angular/core';
import { OfertI } from 'src/app/core/services/ofert/models/ofert.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: OfertI[], filterKey: string): OfertI[] {
    if(!value || !filterKey || filterKey.length<2){ return value}

    return  value?.filter(ofert =>{
      return ofert.puesto.toLowerCase().includes(filterKey.toLowerCase())
    })
  }

}
