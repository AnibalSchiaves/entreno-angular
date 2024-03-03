import { Component } from "@angular/core";

@Component({
    selector:"app-home",
    templateUrl:"./home.component.html"   
})
export class HomeComponent {

    public titulo:string;

    constructor() {
        this.titulo = "Aplicación de registro de Entrenamientos";
    }

    ngOnInit() {

    }

}