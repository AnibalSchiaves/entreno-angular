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
      let id = params['id'];
      if (id) {
        console.log(id);
        this.ejercicioService.getEjercicio(id).subscribe({
          next:(resp:Ejercicio) => {
            this.ejercicio = resp;
            this.modo ="Edición";
          },
          error:(err) => {
            console.log("Ha ocurrido un error al recuperar el ejercicio",err);
            alert("Ha ocurrido un error al recuperar el ejercicio");
          }
        })
      }
    })
  }

  cancelar() {
    this._router.navigate(['ejercicios']);
  }

  onSubmit() {
    if (this.modo=="Alta") {
      this.ejercicioService.addEjercicio(this.ejercicio).subscribe({
        next:(resp) => {
          alert('Ejercicio agregado correctamente');
          this._router.navigate(['ejercicios']);
        },
        error:(err) => {
          console.error(err);
          alert('Error al guardar el ejercicio');
        }
      });
    } else {
      this.ejercicioService.putEjercicio(this.ejercicio).subscribe({
        next:(resp) => {
          alert('Ejercicio modificado correctamente');
          this._router.navigate(['ejercicios']);
        },
        error:(err) => {
          console.error(err);
          alert('Error al guardar el ejercicio');
        }
      });
    }
  }

}
