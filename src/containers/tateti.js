var music = new Audio("Cong.wav");

class JuegoTateti{
    constructor(){
        this.LetraJugador1 = "X";
        this.LetraJugador2 = "O";
        this.cboxForm = ["Cbox1","Cbox2","Cbox3","cbox4","cbox5","cbox6","cbox7","cbox8","cbox9"];
        this.postForm = ["#num1","#num2","#num3","#num4","#num5","#num6","#num7","#num8","#num9"];    
    }
    cambioJugador(){
        if(document.getElementById("jug1").checked){
            $(document).ready(function($){
                $("#jug2").prop("checked",true);
            })
        }
        else if(document.getElementById("jug2").checked){
                $(document).ready(function($){
                $("#jug1").prop("checked",true);
            })
        }
    }
    checkJug(){
        if(document.getElementById("jug1").checked){
            return this.valor = this.LetraJugador1;
        }
        else if(document.getElementById("jug2").checked){
            return this.valor = this.LetraJugador2;
        }
    }
    validarPosi(){
        this.checkJug();
        let x = 0;
        for(var i=0;i<9;i++){
            this.cboxGeneral = document.forms["formuCbox"][this.cboxForm[i]].checked;
            if (this.cboxGeneral == true && ($(this.postForm[i]).val().length == "")){
                $(this.postForm[i]).val(this.valor);
                this.validarGanador();
                this.cambioJugador();
            }
        }
    }
    validarGanador(){
        this.checkJug()
        //para ganador horizontal
        let xhoriz = 0;
        let zhoriz = 1;
        let yhoriz = 2;
        //para ganador vertical;
        let xVertical = 0;
        let zVertical = 3;
        let yVertical = 6;
        //para ganador diagonal;
        let xDiag = 0;
        let zDiag = 4;
        let yDiag = 8;

        for(let cont=0;cont<3;cont++){
            if(this.valor == $(this.postForm[xhoriz]).val() && this.valor == $(this.postForm[zhoriz]).val() && this.valor == $(this.postForm[yhoriz]).val()){
                music.play();
                alert("El Jugador " + this.valor + " es el ganador");
                location.reload();
            }
            xhoriz = xhoriz+3;
            zhoriz = zhoriz+3;
            yhoriz = yhoriz+3;
            //vertical
            if(this.valor == $(this.postForm[xVertical]).val() && this.valor == $(this.postForm[zVertical]).val() && this.valor == $(this.postForm[yVertical]).val()){
                music.play();
                alert("El Jugador " + this.valor + " es el ganador");
                location.reload();
            }
            xVertical = xVertical+1;
            zVertical = zVertical+1;
            yVertical = yVertical+1;
            //Diagonal
            if(cont != 2){
                if(this.valor == $(this.postForm[xDiag]).val() && this.valor == $(this.postForm[zDiag]).val() && this.valor == $(this.postForm[yDiag]).val()){
                    music.play();
                    alert("El Jugador " + this.valor + " es el ganador");
                    location.reload();
                }
                xDiag = xDiag+2;
                yDiag = yDiag+2;
            }
        }
    }
}


var claseTateti = new JuegoTateti();