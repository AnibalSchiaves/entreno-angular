import { Component } from '@angular/core';
import { EjerciciosService } from '../services/ejercicios.service';
import { Ejercicio } from '../model/ejercicio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent {

  public titulo:string;
  public ejercicios:Ejercicio[];

  constructor(
    private service:EjerciciosService,
    private _router:Router
  ) {
    this.titulo = "Administrar Ejercicios"
    this.ejercicios = [];
  }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.ejercicios = [];
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
    );
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  alta() {
    this._router.navigate(['ejercicios','nuevo']);
  }

  editar(id:string) {
    this._router.navigate(['ejercicios',id]);
  }

  borrar(id:string) {
    if (confirm("¿Está seguro que desea borrar el ejercicio?")) {
      this.service.deleteEjercicio(id).subscribe({
        next:(resp) => {
          alert("El ejercicio ha sido borrado");
          //this.cargarDatos();
          let borrado:Ejercicio | undefined = this.ejercicios.find((e:Ejercicio) => e.codigo===resp.codigo);
          if (borrado) {
            let index = this.ejercicios.indexOf(borrado);
            this.ejercicios.splice(index);
          }
        },
        error:(err) => {
          console.error("Hubo un error al borrar el ejercicio",err);
          alert("El ejercicio no se pudo borrar");
        }
      })
    }
  }
}
