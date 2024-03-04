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

  addEjercicio(ejercicio:Ejercicio) {
    return this.http.post<Ejercicio>(this.url_base, ejercicio);
  }


}
