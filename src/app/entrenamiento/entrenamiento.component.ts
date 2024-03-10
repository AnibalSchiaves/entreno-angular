import { Component } from '@angular/core';
import { EntrenamientoInput } from './entrenamiento-input';
import { Ejercicio } from '../model/ejercicio';
import { EjerciciosService } from '../services/ejercicios.service';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css']
})
export class EntrenamientoComponent {

  public modo:string;
  public entrenamiento:EntrenamientoInput;
  public ejercicios:Ejercicio[];

  constructor(
    private ejercicioService:EjerciciosService
  ) {
    this.modo = "Alta";
    this.entrenamiento = new EntrenamientoInput("",0,"Total","",[]);
    this.ejercicios = [];
  }

  ngOnInit() {
    this.ejercicioService.getEjercicios().subscribe({
      next:(resp) => this.ejercicios = resp
    })
  }

  agregarEjercicio() {
    let nuevoEjer = {
      ejercicio: "",
      series:[0],
      unidad:"Rep"
    }
    this.entrenamiento.addEjercicio(nuevoEjer);
  }

  guardar() {
    console.log(this.entrenamiento);
  }

}
