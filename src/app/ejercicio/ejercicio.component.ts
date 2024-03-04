import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EjerciciosService } from '../services/ejercicios.service';
import { Ejercicio } from '../model/ejercicio';

@Component({
  selector: 'app-ejercicio',
  templateUrl: './ejercicio.component.html',
  styleUrls: ['./ejercicio.component.css']
})
export class EjercicioComponent {

  public modo:string;
  public ejercicio:Ejercicio;

  constructor(
    private _router:Router,
    private _activatedRoute: ActivatedRoute,
    private ejercicioService:EjerciciosService
  ) {
    this.modo = "Alta";
    this.ejercicio = new Ejercicio("","","","");
  }

  ngOnInit() {
    this._activatedRoute.params.forEach((params:Params) => {
      console.log(params);
    })
  }

  cancelar() {
    this._router.navigate(['ejercicios']);
  }

  onSubmit() {
    this.ejercicioService.addEjercicio(this.ejercicio).subscribe({
      next:(resp) => {
        alert('El ejercicio agregado correctamente');
        this._router.navigate(['ejercicios']);
      },
      error:(err) => {
        console.error(err);
        alert('Error al guardar el ejercicio');
      }
    })
  }

}
