import { Component } from '@angular/core';
import { EjerciciosService } from '../services/ejercicios.service';
import { Ejercicio } from '../model/ejercicio';
import { map } from 'rxjs';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {

  public titulo:string;
  public ejercicios:Ejercicio[];

  constructor(
    private service:EjerciciosService
  ) {
    this.titulo = "Administrar Ejercicios"
    this.ejercicios = [];
  }

  ngOnInit() {
    this.sleep(2000).then(//retardo a proposito 2 segundos
      () => {
        this.service.getEjercicios().subscribe({
          next: (resp:Ejercicio[]) => {
            this.ejercicios = resp;
          },
          error: err => {
            console.error("Hubo un error al acceder al obtener los ejercicios",err);
          }
        });
      }
    )

  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}