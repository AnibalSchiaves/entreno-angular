import { Injectable } from '@angular/core';
import { env } from '../global';
import { HttpClient } from '@angular/common/http';
import { Entrenamiento } from '../model/entrenamiento';

@Injectable({
  providedIn: 'root'
})
export class EntrenamientosService {

  private url_base:string;

  constructor(
    private http_:HttpClient
  ) { 
    this.url_base = env.api+"entrenamientos";
  }

  
  getEntrenamientos(anio:number, mes:number) {
    let params = `?anio=${anio}&mes=${mes}`;
    return this.http_.get<Entrenamiento[]>(this.url_base+params);
  }
  
}
