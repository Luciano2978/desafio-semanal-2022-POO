/*Enunciado: Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 - Debe detectar automáticamente de qué tipo se trata y realizar la conversión. 
- En morse se soporta raya '—', punto '.', un espacio ' ' entre letras o símbolos y dos espacios entre palabras ' '. -*/

// instalar libreria morsee --- npm install morsee --save
function descifrarMorse(texto,codigo){
    var { encode , decode} = require('morsee');
    var mostrarCod = encode(texto)
    var mostrarTxt = decode(codigo)
    console.log("Lo que usted Ingreso ´"+ texto + "´ - en codigo morse es: " + mostrarCod)
    console.log("Lo que usted Ingreso ´"+ codigo + "´ - en texto : " + mostrarTxt)

}

descifrarMorse("Luciano",".-.. ..- -.-. .. .- -. --- ")
