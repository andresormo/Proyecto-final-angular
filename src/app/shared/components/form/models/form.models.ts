import { ContratosTypes, SectorType } from "src/app/core/services/ofert/models/ofert.interface";

export interface ContratoOption{
  value: ContratosTypes;
  text: string;
}

export interface SectorOption{
  value: SectorType,
  text: string
}
