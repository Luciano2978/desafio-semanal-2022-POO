<?php

$palabra1 = "roma";
$palabra2 = "mora";
$existeAnagrama = true;

$dividirPalabra1 = str_split($palabra1);
$dividirPalabra2 = str_split($palabra2);

if(strlen($palabra1) != strlen($palabra2)){
    $existeAnagrama = false;
}
elseif($palabra1 == $palabra2){
    $existeAnagrama = false;
}
else{
    for ($i=0;$i<count($dividirPalabra1);$i++){
        sort($dividirPalabra1);
        sort($dividirPalabra2);
    
        if ($dividirPalabra1 != $dividirPalabra2){
            $existeAnagrama = false;
        }
    }
}
if ($existeAnagrama == true){
    echo "True";
}
else{
    echo "False";
}
function fibo(){
  echo "hola mundo";  
}

echo fibo()


?>