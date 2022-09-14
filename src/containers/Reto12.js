//Escribe una función que reciba un texto y retorne verdadero o falso (Boolean) según sean o no palíndromos. 
//Un Palíndromo es una palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda. 
//NO se tienen en cuenta los espacios, signos de puntuación y tildes. Ejemplo: Ana lleva al oso la avellana


//usar reverse para despues comparar


class palindromos{
    constructor(palabra){
        this.palabra = palabra;
    }
    invertirCad(){
        let divCad = this.palabra.split("");
        let reverseArray = divCad.reverse();
        let ingArray = reverseArray.join("");
        let sinEspacios = ingArray.replace(/\s+/g, "");
        return sinEspacios; 
    }
    validarPalin(){
        let sinEspa = this.palabra.replace(/\s+/g, "");
        if(sinEspa == this.invertirCad()){
            console.log("True");
        }
        else{
            console.log("False");
        }
    }
}

let palinClas = new palindromos("reconocer");

palinClas.validarPalin()

