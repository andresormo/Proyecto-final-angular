import { SectorOption } from './../models/form.models';
import { ContratoOption } from "../models/form.models";
import { __values } from 'tslib';

export const contratoOption: ContratoOption[] =[
  {value:'temporal', text:'temporal'},
  {value:'baja', text:'baja'},
  {value:'indefinido', text:'indefinido'},
  {value:'larga duración', text: 'larga duracion'},
  {value:'sustitucion', text:'sustitucion'}
]


export const sectorOption: SectorOption[] = [
  {value:'Administracion', text:'Administracion'},
  {value:'Agrícola', text:'Agricola'},
  {value:'Industria', text:'Industria'},
  {value:'Servicio', text:'Servicio'},
  {value:'Tecnologico', text:'Tecnologico'},
  {value:'Turismo', text:'Turismo'},
  {value:'Otros', text:'Otros'}
]



