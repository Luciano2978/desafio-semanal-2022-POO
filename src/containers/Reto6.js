/*Enunciado: Enunciado:
 Crea un programa que invierta el orden de una cadena de texto 
 sin usar funciones propias del lenguaje que lo hagan de forma automática. 
 - Si le pasamos 'Hola mundo' nos retornaría 'odnum aloH'*/



function invertirPalabra(palabra) {
    var nuevaCadena = "";
    for (var i = palabra.length - 1; i >= 0; i--) {
        nuevaCadena += palabra[i];
    }
    return console.log(nuevaCadena);
}


invertirPalabra('hola mundo');