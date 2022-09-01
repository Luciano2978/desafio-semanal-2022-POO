<?php

/* Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono. 
- La función recibirá por parámetro sólo UN polígono a la vez.
- Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
- Imprime el cálculo del área de un polígono de cada tipo. 
 - area triangulo = (base * altura)2
 - area cuadrado =  (lado)2
 - area rectangulo = (largo * ancho)
*/

function poligono($forma){
    
    $frase = "El calculo del área es: ";

    if ($forma == "Triangulo"){
        $base = 20;
        $altura = 15;
        $areaTriangulo = ($base * $altura) / 2;

        echo $frase . $areaTriangulo . " - (Base * Altura)^2";
    }
    elseif($forma == "Cuadrado"){
        $lado = 30;
        $areaCuadrado = pow($lado,2);
        echo $frase . $areaCuadrado ." - (Lado)^2 ";
    }
    else{
        $largo = 25;
        $ancho = 15;
        $areaRectangulo = $largo * $ancho;
        echo $frase . $areaRectangulo ." - (largo * ancho)";
    }

}

echo poligono("Rectangulo");


?>


