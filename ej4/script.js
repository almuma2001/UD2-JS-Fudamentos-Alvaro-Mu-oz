"use strict";

let nombre = prompt("Introduce tu nombre: ");
let ciudad = prompt("Introduce tu ciudad: ");
let anios = parseInt(prompt("Introduce tu año de nacimiento: "));

const YEAR = new Date().getFullYear();

if (nombre !== null && ciudad !== null && anios !== null) {
    document.write(`Bienvenido ${nombre} de ${ciudad}. Probablemente tengas ${YEAR - anios} años.`)
} else {
    document.write("Has cancelado la operación.")
}
