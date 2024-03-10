export class EntrenamientoInput {

    constructor(
        public id:string,
        public numero:number,
        public tipo:string,
        public fecha:string,
        public duracionMinutos:number,
        public observacion:string,
        public ejercicios:{
            ejercicio:string,
            series:number[],
            unidad:string
        }[]
    ) {

    }

    addEjercicio(e:{
        ejercicio:string,
        series:number[],
        unidad:string
    }) {
        let encontro = this.ejercicios.find((ej) => {return ej.ejercicio==e.ejercicio});
        if (!encontro) {
            this.ejercicios.push(e);
        }
    }

}