<?php

$numeroPrimo = 2;

if ($numeroPrimo == 0 || $numeroPrimo == 1 ){
    $esNumeroPrimo = false;
}

while($numeroPrimo < 100){
    $esNumeroPrimo = true;
    for($i = 2; $i < $numeroPrimo; $i++){
        if($numeroPrimo % $i == 0){
            $esNumeroPrimo = false;
        }

    }
    if($esNumeroPrimo == true){
        echo $numeroPrimo . " - " . " Es un número primo \n";
    }
    else{
        echo $numeroPrimo . " - " . " No es un número primo \n";
    }
    $numeroPrimo++;
}



?>
