
let palabras=["ALURA","PERRO","GATO","SIERRA","ALFA","GOLF"];

let juego = document.getElementById("ahorcado").getContext("2d");

let palabraSecreta = "";

var j = 1;

var k = 0;

function capturarLetra(){
window.addEventListener("keydown", (KeyboardEvent => {
    key = KeyboardEvent.key.toUpperCase();
    estado = palabraSecreta.includes(key); 
    KeyboardEvent.preventDefault();
    KeyboardEvent.stopImmediatePropagation();
    compararLetra(key);
    ganar();
   })  )}
 
function escogerPalabraSecreta(){  
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
}

function cambiarVisibilidad(identidad,propiedad){
    document.getElementById(identidad).style.display = propiedad;
}

function compararLetra(key){
    if (estado==true){   
       for(i=0;i<palabraSecreta.length;i++){ 
        if (palabraSecreta[i]==key){
        dibujarFuente(palabraSecreta[i],coordenadaFuente[i],600); 
       }       
    } k++; 
    }else{
        juegoAhorcado(j);
        j = j + 1; 
}    
}

function jugar(){
    cambiarVisibilidad("iniciarJuego","none");
    cambiarVisibilidad("agregarPalabra","none");
    cambiarVisibilidad("ahorcado","flex");
    cambiarVisibilidad("nuevoJuego","inline");
    cambiarVisibilidad("desistir","inline"); 
}
function nuevoJuego(){
    reiniciarValores();
    escogerPalabraSecreta();
    generarCoordenadas();
    dibujarCanvas();
    dibujoAhorcado();     
    dibujarCaja();
    capturarLetra(); 
}  

function reiniciarValores(){  
    coordenadaCaja = [];
    coordenadaFuente = [];
    k=0;
    j = 1;
    numero=1;
    jugar();
}

function agregarPalabra(){
    cambiarVisibilidad("iniciarJuego","none");
    cambiarVisibilidad("agregarPalabra","none");
    cambiarVisibilidad("label1","flex");
    cambiarVisibilidad("input1","flex");
    cambiarVisibilidad("guardar","inline");
}

function guardarPalabra(){
   var entrada = document.getElementById("input1").value;
   entrada=entrada.toUpperCase();
    palabras.push(entrada);   
    cambiarVisibilidad("guardar","none");
    jugar();
}

function desistir(){
    location.reload();
}
function ganar(){
   if (k==palabraSecreta.length){alert("has ganado el juego");}
}