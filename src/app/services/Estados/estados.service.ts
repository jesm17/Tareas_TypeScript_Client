import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  URL = environment.api
  constructor(private http: HttpClient) { }

  getAllEstados() {
    return this.http.get(`${this.URL}/estados`)
  }
  createEstado(estado: any){
    return this.http.post(`${this.URL}/estados/add`,estado)
  }
  deleteEstado(id_estado:number){
    return this.http.delete(`${this.URL}/estados/delete/${id_estado}`)
  }
  updateEstado(estado:any){
    return this.http.put(`${this.URL}/estados/update/`,estado)
  }
}
