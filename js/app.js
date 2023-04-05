/* Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo 
desde donde comenzará a decrementar el contador. 
Debe contener los botones, iniciar, pausar y reset. */

/* 
let seg = document.getElementById("seg").value;

let min = document.getElementById("min").value;

let hour = document.getElementById("hour").value; */


let boton = document.getElementById("enviar");
boton.addEventListener("click", funcion);

let milisegundos = 0;

let segundos;
let minutos;
let horas;

function funcion() {
    let seg = Number(document.getElementById("seg").value);
    segundos = seg

    let min = Number(document.getElementById("min").value);
    minutos = min;

    let hour = Number(document.getElementById("hour").value);
    horas = hour;

}

let bandera = 0;
console.log(horas);
console.log(minutos);
console.log(segundos);

function funcion2() {
    console.log(milisegundos);
    milisegundos ++;
    milisegundosASegundos();

    let cronometro = `   ${horas}:${minutos}:${segundos}`;
    document.getElementById("cronometro").innerHTML = cronometro;
    if (segundos == 0 && minutos == 0 && horas == 0) {
        detener();
    }
}
function milisegundosASegundos(){
    if (milisegundos == 280 && segundos > 0) {
      segundos --;
      milisegundos = 0;
    }

    if (segundos == 0 && minutos > 0) {
      minutos --;
      segundos = 60;
    }

    if (minutos == 0 && horas > 0) {
      horas --;
      minutos = 60;
    }
}
function detener() {
    clearInterval(intervalIniciar);
};


let intervalIniciar;

document.getElementById("iniciar").addEventListener("click", function() {
  intervalIniciar = setInterval(funcion2, 1);
});

document.getElementById("detener").addEventListener("click", function() {
    clearInterval(intervalIniciar);
});

document.getElementById("reiniciar").addEventListener("click", function() {
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    horas= 0;
  });


/* let milisegundos = 0;
let segundos = 0;
let minuto = 0;
let hora = 0;

function cronometro(){
  milisegundos ++;
  milisegundosASegundos();
  let cronometro = `     ${hora}:${minuto}:${segundos}`;
  document.getElementById("cronometro").innerHTML = cronometro;
}
function milisegundosASegundos(){
    if (milisegundos == 280) {
      segundos ++;
      milisegundos = 0;
    }

    if (segundos == 60) {
      minuto ++;
      segundos = 0;
    }

    if (minuto == 60) {
      hora ++;
      minuto = 0;
    }
}

let intervalIniciar;

document.getElementById("iniciar").addEventListener("click", function() {
  intervalIniciar = setInterval(cronometro, 1);
});

document.getElementById("detener").addEventListener("click", function() {
  clearInterval(intervalIniciar);
});

document.getElementById("reiniciar").addEventListener("click", function() {
  milisegundos = 0;
  segundos = 0;
  minuto = 0;
  hora = 0;
}); */
