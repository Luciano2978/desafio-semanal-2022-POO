/*Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 - Una cadena de texto que representa una fecha tiene el formato 'dd/MM/yyyy'. 
 - La función recibirá dos String y retornará un Int. 
 - La diferencia en días será absoluta (no importa el orden de las fechas). 
- Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.*/

class dias{
    constructor(fecha1,fecha2){
        this.fecha1 = fecha1;
        this.fecha2 = fecha2;

    }
    getFechas(){
        let sepFecha1 = this.fecha1.split("/")
        let sepFecha2 = this.fecha2.split("/")
        let intFecha1 = Date.UTC(sepFecha1[2],sepFecha1[1]-1,sepFecha1[0])
        let intFecha2 = Date.UTC(sepFecha2[2],sepFecha2[1]-1,sepFecha2[0])
        let diferenciaFecha = intFecha1 - intFecha2;
        let dias = Math.floor(diferenciaFecha / (1000 * 60 * 60 * 24))
        return dias
    }

}

let objFechas = new dias('21/09/2022','18/09/2022')

console.log(objFechas.getFechas())