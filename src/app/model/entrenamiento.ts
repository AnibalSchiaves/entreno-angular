import { EjercicioRealizado } from "./ejercicio-realizado";

export class Entrenamiento {

    constructor(
        public id:string,
        public numero:number,
        public tipo:string,
        public duracionMinutos:number,
        public volumenTotal:number,
        public fecha:string,
        public ejercicios:EjercicioRealizado[]
    ) {

    }

    addEjercicio(e:EjercicioRealizado) {
        let encontro = this.ejercicios.find((ej:EjercicioRealizado) => {return ej.ejercicio?.id==e.ejercicio?.id});
        if (!encontro) {
            this.ejercicios.push(e);
        }
    }
}