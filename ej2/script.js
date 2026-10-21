"use strict";

let userName = "Álvaro";
let age = 25;
let city = "Córdoba";

const COLOR_FAVORITO = "#FFEE8C";
const loadTime = Date.now();

alert("Nombre de usuario: " + userName);
alert("Edad: " + age);
alert("Ciudad: " + city);
alert("Color favorito: " + COLOR_FAVORITO);
alert("Hora actual: " + loadTime);

//Compruebo qué ocurre si intento reasignar una constante.
COLOR_FAVORITO = "#000000";
console.log("Nuevo color favorito: " + COLOR_FAVORITO);
//El error que aparece en consola es: "TypeError: Assignment to constant variable." porque he intentado reasignar una constante.
