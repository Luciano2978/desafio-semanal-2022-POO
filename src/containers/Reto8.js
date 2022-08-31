


function convertirBinario(numeroDec){
    let num = numeroDec;
    let binario = (num % 2).toString();
    for (; num>1 ;){
        num = parseInt(num/2);
        binario = (num % 2) + (binario);
    }
    console.log(binario);
}


console.log(convertirBinario(72))
