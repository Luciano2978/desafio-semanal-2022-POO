//Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva

                                                      
class Factorial{
    constructor(numero1){
        this.numero1=numero1;
    }

    getFactorial(){
        var resultado=1;
        for (var i=1; i<=this.numero1; i++){
            resultado=resultado*i
        }

        return console.log("El Factorial del Numero:", this.numero1 ," es :",resultado )
    }  
}
let Fac=new Factorial(7)

Fac.getFactorial()