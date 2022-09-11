import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoria } from 'src/app/models/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {
  URL = environment.api
  constructor(private http: HttpClient) { }
  getAllCategorias() {
    return this.http.get(`${this.URL}/categorias`)
  }
  agregarCategoria(categoria:categoria){
    return this.http.post(`${this.URL}/categorias/add`,categoria)
  }
  deleteCategoria(id:number){
    return this.http.delete(`${this.URL}/categorias/${id}`)
  }
  updateCategoria(categoria:categoria){
    return this.http.put(`${this.URL}/categorias/update`,categoria)
  }
}
