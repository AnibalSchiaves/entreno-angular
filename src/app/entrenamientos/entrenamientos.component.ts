import { Component } from '@angular/core';
import { Entrenamiento } from '../model/entrenamiento';
import { EntrenamientosService } from '../services/entrenamientos.service';

@Component({
  selector: 'app-entrenamientos',
  templateUrl: './entrenamientos.component.html',
  styleUrls: ['./entrenamientos.component.css']
})
export class EntrenamientosComponent {

  public titulo:string;
  public anios:number[];
  public anioActual:number;
  public meses:string[];
  public mesActual:number;
  public entrenamientos:Entrenamiento[] | undefined;

  constructor(
    private service:EntrenamientosService
  ) {
    this.titulo="Administrar Entrenamientos";
    this.anios = [];
    this.anioActual = (new Date()).getFullYear();
    this.mesActual = (new Date()).getMonth()-1;
    for (let anio=2000;anio<=this.anioActual;anio++) {
      this.anios.push(anio);
    }
    this.meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    this.entrenamientos=undefined;
  }

  ngOnInit() {
    this.actualizar();
  }

  sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  actualizar() {
    this.entrenamientos = undefined;
    this.sleep(2000).then(//retardo a proposito 2 segundos
      () => {
        this.service.getEntrenamientos(this.anioActual, this.mesActual).subscribe({
          next:(resp:Entrenamiento[]) => {this.entrenamientos=resp;console.log(this.entrenamientos)}
        });
      }
    );
  }

}
