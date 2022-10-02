let tablero = document.getElementById("ahorcado").getContext("2d");
let coordenadaCaja = [];
let coordenadaFuente =[];

function generarCoordenadas(){
    let a= centrar();
    let b=centrar()+32;
    for(i=0;i<palabraSecreta.length;i++){
        a=a+115;
        b=a+32; 
        coordenadaCaja.push(a);
        coordenadaFuente.push(b);
    }
}

function dibujarCaja (){
    tablero.lineWidth = 5;
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();
    for(i=0;i<coordenadaCaja.length;i++){
       tablero.rect(coordenadaCaja[i], 530, 100, 100);
       tablero.fill();
       tablero.stroke();
    }  
}

function dibujarFuente(letra,x,z){
    tablero.strokeStyle = "#0A3871";
    tablero.font = "60px Inter";
    tablero.strokeText(letra, x, z);
}
function dibujarCanvas(){    
    tablero.fillStyle = "#f3f5f6";
    tablero.fillRect(0,0,1200,800);
}

function centrar(){
   let anchura = 115 * palabraSecreta.length - 15; 
   origenX = 450 - (anchura/2);
   return origenX
}

function dibujoAhorcado(){
    tablero.lineWidth =  6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5f6";
    tablero.strokeStyle = "#8a3871";

    tablero.beginPath();
    tablero.setLineDash([]);
    
    tablero.moveTo(480, 510);
    tablero.lineTo(630, 510);
        
    tablero.moveTo(560, 510);
    tablero.lineTo(560, 150);

    tablero.moveTo(560, 150);
    tablero.lineTo(700, 150);

    tablero.moveTo(700, 150);
    tablero.lineTo(700, 200);
    tablero.stroke();

}
function juegoAhorcado(numero){
    tablero.lineWidth =  6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#f3f5f6";
    tablero.strokeStyle = "#8a3871";

    tablero.beginPath();
    tablero.setLineDash([]);
    switch(numero){
     case 1:
       tablero.arc(700, 250, 50, 1.5*Math.PI,3.5*Math.PI,false);
       break;
     case 2:
       tablero.moveTo(700, 300);
       tablero.lineTo(700, 400);
       break;
     case 3:
       tablero.moveTo(700, 330);
       tablero.lineTo(650, 400);
       break;
     case 4:
       tablero.moveTo(700, 330);
       tablero.lineTo(750, 400);
       break;
     case 5:
       tablero.moveTo(700, 400);
       tablero.lineTo(650, 500);
       break;
     case 6:
       tablero.moveTo(700, 400);
       tablero.lineTo(750, 500);
       break;
     case 7:
      perderAhorcado();
      alert("Perdiste el juego");
    }
    tablero.stroke();   
}
function perderAhorcado(){
  tablero.lineWidth =  6;
  tablero.lineCap = "round";
  tablero.lineJoin = "round";
  tablero.fillStyle = "#f3f5f6";
  tablero.strokeStyle = "red";

  tablero.beginPath();
  tablero.setLineDash([]);
    
  tablero.arc(700, 250, 65, 0, Math.PI,false);
  tablero.stroke(); 
}

