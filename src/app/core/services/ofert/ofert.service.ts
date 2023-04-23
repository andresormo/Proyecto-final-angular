import { Observable, map } from 'rxjs';
import { ApiOfertI, OfertI, OfertRequestBody } from './models/ofert.interface';
import { Injectable } from '@angular/core';
import { ApiOfertService } from './api/api-ofert.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OfertService {
  constructor(
    private apiOfertService: ApiOfertService,
  ) {}
  //GET
  public getOfert(): Observable<OfertI[]> {
    return this.apiOfertService
      .getAPiOfert()
      .pipe(map((apiOfert: ApiOfertI[]) => this.transformOfert(apiOfert)));
  }

  //GET ID
  public getOfertId(id: string): Observable<OfertI> {
    return this.apiOfertService
      .getApiOfertId(id)
      .pipe(map((apiOfert: ApiOfertI) => this.transformOfertOne(apiOfert)));
  }

  // CREATE
  public createOfert(body: FormData): Observable<OfertI> {
    return this.apiOfertService
      .createApiOfert(body)
      .pipe(map((apiOfert) => this.transformOfertOne(apiOfert)));
  }

  //EDIT
  public editOfert(body: FormData, id: string): Observable<OfertI> {
    return this.apiOfertService
      .editApiOfert(body, id)
      .pipe(map((apiOfert) => this.transformOfertOne(apiOfert)));
  }

  //DELETE
  public deleteOfert(id: string): Observable<OfertI> {
    return this.apiOfertService
      .deleteApiOfert(id)
      .pipe(map((apiOfert) => this.transformOfertOne(apiOfert)));
  }

  //FUNCTIONS

  private transformOfert(apiOfert: ApiOfertI[]): OfertI[] {
    const ofertTransformed = apiOfert.map((ofert) =>
      this.transformOfertOne(ofert)
    );
    return ofertTransformed;
  }

  private transformOfertOne(apiOfert: ApiOfertI): OfertI {
    delete apiOfert.__v, delete apiOfert.createdAt, delete apiOfert.updateAt;
    return apiOfert;
  }
}
