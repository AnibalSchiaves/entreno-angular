import { Component } from '@angular/core';
import { EntrenamientoInput } from '../model/entrenamiento-input';
import { Ejercicio } from '../model/ejercicio';
import { EjerciciosService } from '../services/ejercicios.service';
import { EntrenamientosService } from '../services/entrenamientos.service';
import { Entrenamiento } from '../model/entrenamiento';
import { Router } from '@angular/router';

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
    private ejercicioService:EjerciciosService,
    private entrenamientoService:EntrenamientosService,
    private _router:Router
  ) {
    this.modo = "Alta";
    this.entrenamiento = new EntrenamientoInput("",0,"Total","",0,"",[]);
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

  agregarSerieEn(i:number) {
    this.entrenamiento.ejercicios[i].series.push(0);
  }

  guardar() {
    console.log(this.entrenamiento);
    this.entrenamientoService.addEntrenamiento(this.entrenamiento).subscribe({
      next:(resp:Entrenamiento) => {
        console.log(resp);
        alert("Entrenamiento guardado correctamente");
        this._router.navigate(['/entrenamientos']);
      },
      error:(err) => {
        console.error("Ha ocurrido un error al guardar el entrenamiento",err);
        alert("Ha ocurrido un error al guardar el entrenamiento");
      }
    });
  }

}
