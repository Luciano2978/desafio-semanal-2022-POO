
var numeroPrimo = 2;


if (numeroPrimo == 0 || numeroPrimo == 1){
    esNumeroPrimo = false
}

while (numeroPrimo < 100){
    var esNumeroPrimo = true;    
    for (var i = 2; i< numeroPrimo;i++){
        if(numeroPrimo % i == 0){
            //console.log("prueba - " + numeroPrimo)
            esNumeroPrimo = false;
        }   
    }


    if (esNumeroPrimo == true){
        console.log(numeroPrimo + " -" + " Es un número primo")
    }
    else{
        console.log(numeroPrimo + " -" + " No es número Primo")
    }

    numeroPrimo++;
}


