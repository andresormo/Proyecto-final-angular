import { IUser } from "../../auth/models/auth.models"

export interface ApiOfertI {
  _id: string,
  empresa: IUser[],
  puesto:string,
  salario: string,
  descripcion:string,
  sector:Sector,
  contrato:Contrato,
  portada: string[],
  telefono:string,
  email:string,
  createdAt?: string,
  updateAt?: string,
  __v?:number
}

export interface OfertI{
  _id: string,
  empresa: IUser[],
  puesto:string,
  salario: string,
  descripcion:string,
  sector:Sector,
  contrato:Contrato,
  portada: string[],
  telefono:string,
  email:string
}

export interface Contrato{
  tipo:ContratosTypes
}

export interface Sector{
  tipo: SectorType
}

export interface OfertRequestBody{
  empresa: IUser,
  puesto:string,
  salario: string,
  descripcion:string,
  sector:SectorType,
  contrato:ContratosTypes,
  portada: File,
  telefono:string,
  email:string
}

export interface EmpresaRequestBody{
  portada:string[],
  _id:string,
  nombre:string,
  cif:string,
  direccion:string,
  ofertas: OfertI,
}

export type ContratosTypes = "indefinido"
| "temporal"
| "larga duración"
| "sustitucion"
| "baja";


export type SectorType = "Administracion"
|"Tecnologico"
|"Agrícola"
|"Servicio"
|"Turismo"
|"Industria"
|"Otros";
