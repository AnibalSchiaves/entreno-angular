import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../global';
import { Ejercicio } from '../model/ejercicio';

@Injectable({
  providedIn: 'root'
})
export class EjerciciosService {

  private url_base:string;

  constructor(
    private http:HttpClient
  ) { 
    this.url_base = env.api+"ejercicios";
  }

  getEjercicios() {
      return this.http.get<Ejercicio[]>(this.url_base);
  }

  getEjercicio(id:string) {
    return this.http.get<Ejercicio>(this.url_base+"/"+id);
  }

  addEjercicio(ejercicio:Ejercicio) {
    return this.http.post<Ejercicio>(this.url_base, ejercicio);
  }

  putEjercicio(ejercicio:Ejercicio) {
    return this.http.put<Ejercicio>(this.url_base+"/"+ejercicio.id, ejercicio);
  }

  deleteEjercicio(id:string) {
    return this.http.delete<Ejercicio>(this.url_base+"/"+id);
  }


}
