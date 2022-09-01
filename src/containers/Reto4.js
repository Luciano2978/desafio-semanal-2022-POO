
function poligono(forma){
    
    var frase = "El cálculo del área es: ";

    if (forma == "Triangulo"){
        let base = 20;
        let altura = 15;
        let areaTriangulo = (base * altura) /2 ;
        console.log(frase + areaTriangulo + " - (Base * Altura)^2");
        
    }
    else if(forma == "Cuadrado"){
        
        let lado = 30;
        let areaCuadrado = (lado)^2;
        console.log(frase + areaCuadrado + " - (Lado)^2 ");
    }
    else{

        let largo = 25;
        let ancho = 15;
        let areaRectangulo = largo * ancho;
        console.log(frase + areaRectangulo + " - (Largo * Ancho) ");
    }
}

console.log(poligono("Rectangulo"));