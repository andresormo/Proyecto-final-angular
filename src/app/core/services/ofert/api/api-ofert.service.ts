import { ApiOfertI, EmpresaRequestBody, OfertI, OfertRequestBody } from './../models/ofert.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



const API_URL='https://gooodjob-rrwu.vercel.app'
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

  public createApiOfert(body: FormData): Observable<ApiOfertI>{
    return this.http.post<ApiOfertI>(`${API_URL}/ofertas`, body);
  }

  public editApiOfert(body:FormData, id:string): Observable<ApiOfertI>{
    return this.http.put<ApiOfertI>(`${API_URL}/ofertas/${id}`, body);
  }

  public deleteApiOfert(id:string): Observable<ApiOfertI>{
    return this.http.delete<ApiOfertI>(`${API_URL}/ofertas/${id}`);
  }

}
