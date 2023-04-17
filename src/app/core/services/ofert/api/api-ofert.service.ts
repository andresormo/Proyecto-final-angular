import { ApiOfertI, EmpresaRequestBody, OfertI, OfertRequestBody } from './../models/ofert.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API_URL= 'https://este-si-5xt9.vercel.app'

@Injectable({
  providedIn: 'root'
})
export class ApiOfertService {

  constructor(
    private http: HttpClient
  ) { }

  public getAPiOfert(): Observable<ApiOfertI[]>{
    return this.http.get<ApiOfertI[]>(`${API_URL}/ofertas`)
  }

  public getApiOfertId(id:string): Observable<ApiOfertI>{
    return this.http.get<ApiOfertI>(`${API_URL}/ofertas/oferta/${id}`)
  }

  public createApiOfert(body: OfertRequestBody): Observable<ApiOfertI>{
    return this.http.post<ApiOfertI>(`${API_URL}/ofertas/`, body);
  }

  public editApiOfert(body:OfertRequestBody, id:string): Observable<ApiOfertI>{
    return this.http.put<ApiOfertI>(`${API_URL}/ofertas/${id}`, body);
  }

  public deleteApiOfert(id:string): Observable<ApiOfertI>{
    return this.http.delete<ApiOfertI>(`${API_URL}/ofertas/${id}`);
  }



  // public getApiEmpresa(): Observable<ApiEmpresaI[]>{
  //   return this.http.get<ApiEmpresaI[]>(`${API_URL}/empresas`)
  // }

  // public getApiEmpresaId(id:string):Observable<ApiEmpresaI>{
  //   return this.http.get<ApiEmpresaI>(`${API_URL}/empresas/empresa/${id}`)
  // }

  // public createEmpresa(body: EmpresaRequestBody): Observable<ApiEmpresaI>{
  //   return this.http.post<ApiEmpresaI>(`${API_URL}/empresas/`, body)
  // }

  // public updateEmpresa(body: EmpresaRequestBody, id:string): Observable<ApiEmpresaI>{
  //   return this.http.put<ApiEmpresaI>(`${API_URL}/empresas/${id}`, body)
  // }
}
