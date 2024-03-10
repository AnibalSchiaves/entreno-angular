import { Ejercicio } from "./ejercicio";

export class EjercicioRealizado {

    constructor(
        public id:string,
        public series:number[],
        public volumen:number,
        public unidad:string,
        public ejercicio:Ejercicio | null
    ) { }
    
}