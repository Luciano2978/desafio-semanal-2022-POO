/*Enunciado: Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta. 
 - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 - Expresión balanceada: { [ a * ( c + d ) ] - 5 } - Expresión no balanceada: { a * ( c + d ) ] - 5 }*/



let parentesis = 0;
let llave = 0;
let corchete = 0;

expresion = ("{ a * ( c + d ) ] - 5 }");

for(i=0;i<expresion.length;i++){
    if (expresion[i] == "("){
        parentesis++;
    }
    if (expresion[i] == ")"){
        parentesis--;
    }
    if (expresion[i] == "["){
        corchete++;
    }
    if (expresion[i] == "]"){
        corchete--;
    }
    if (expresion[i] == "{"){
        llave++;
    }
    if (expresion[i] == "}"){
        llave--;
    }

}
if (parentesis == 0 && llave == 0 && corchete == 0){
    console.log("Expresion Balanceada")
}
else if(parentesis < 0 || llave < 0 || corchete < 0){
    console.log("Expresion No Balanceada")
}





