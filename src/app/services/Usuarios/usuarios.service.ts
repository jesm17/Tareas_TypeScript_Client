import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { user } from 'src/app/models/user';
import { tarea } from 'src/app/models/tarea';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  URL = environment.api;
  constructor(private http: HttpClient) { }
  getAllUser() {
    return this.http.get(`${this.URL}/usuarios`)
  }

  createUsuario(usuario: user) {
    return this.http.post(`${this.URL}/usuarios/add`, usuario)
  }

  deleteUsuario(id: any) {
    return this.http.delete(`${this.URL}/usuarios/${id}`)
  }

  asignarTarea(tarea: tarea) {
    return this.http.post(`${this.URL}/usuario/add/tarea`, tarea)
  }

  getUser(id: any) {
    return this.http.get(`${this.URL}/usuarios/${id}`)
  }

  updateUsuario(usuario: user) {
    return this.http.put(`${this.URL}/usuario/update`, usuario)
  }

  deleteTarea(id: string) {
    return this.http.delete(`${this.URL}/usuario/delete/tarea/${id}`)
  }

  updatarea(tarea: tarea) {
    return this.http.put(`${this.URL}/usuario/update/tarea`, tarea)
  }
}
