"use strict";

// Formulario de alta simulado con prompt: nombre, apodo y edad
let nombre = prompt("Introduce tu nombre:");
let apodo = prompt("Introduce tu apodo:");
let edad = prompt("Introduce tu edad:");

// 1. Muestra el primer valor disponible entre nombre y apodo usando ||; si no hay ninguno, muestra Anónimo.
let usuario = nombre || apodo || "Anónimo";
alert(`Usuario: ${usuario}`);
console.log("1. Usuario mostrado (||):", usuario);

// 2. Usa && para mostrar el mensaje Acceso permitido solo si la edad es mayor o igual que 18 y hay un nombre o un apodo.
let edadNumero = Number(edad);
let esMayorDeEdad = edadNumero >= 18;
let tieneIdentificador = Boolean(nombre || apodo);

(esMayorDeEdad && tieneIdentificador) && alert("Acceso permitido");

if (esMayorDeEdad && tieneIdentificador) {
    console.log("2. Acceso permitido");
} else {
    console.log("2. Acceso no permitido (requisitos no cumplidos)");
}

// 3. Demuestra con un ejemplo propio la diferencia entre || y ?? (por ejemplo, con una altura de 0) y explícalo en un comentario.
let altura = 0; // Valor medido o registrado: 0 metros (0 es falsy, pero está definido)

let alturaConOR = altura || 1.70;       // Devuelve 1.70 porque 0 es falsy para ||
let alturaConNullish = altura ?? 1.70;  // Devuelve 0 porque ?? solo sustituye valores null o undefined

alert(`Diferencia entre || y ?? (con altura = 0):
- Usando || (altura || 1.70): ${alturaConOR}
- Usando ?? (altura ?? 1.70): ${alturaConNullish}`);

console.log("3. Demostración || vs ??:");
console.log("altura || 1.70 ->", alturaConOR);
console.log("altura ?? 1.70 ->", alturaConNullish);

/*
EXPLICACIÓN:
- El operador || (OR lógico) comprueba si el valor de la izquierda es "truthy".
  Como el número 0 se evalúa como falsy (al igual que false, "", null, undefined y NaN),
  el operador || descarta el 0 y toma el valor alternativo (1.70).
- El operador ?? (Nullish Coalescing) comprueba únicamente si el valor es nulo (null o undefined).
  Dado que 0 es un número válido y definido, ?? conserva el 0 y no recurre al valor por defecto.
*/

// 4. Usa !! para convertir un valor a booleano.
let tieneNombre = !!nombre;
let tieneApodo = !!apodo;
let tieneEdadValida = !!edad;

alert(`Conversión a booleano con !!:
- ¿Tiene nombre?: ${tieneNombre}
- ¿Tiene apodo?: ${tieneApodo}`);

console.log("4. Conversión con !! a booleano:");
console.log(`nombre: "${nombre}" -> !!nombre: ${tieneNombre} (tipo: ${typeof tieneNombre})`);
console.log(`apodo: "${apodo}" -> !!apodo: ${tieneApodo} (tipo: ${typeof tieneApodo})`);
console.log(`edad: "${edad}" -> !!edad: ${tieneEdadValida} (tipo: ${typeof tieneEdadValida})`);

/*
EXPLICACIÓN:
El primer operador ! convierte cualquier valor a booleano e invierte su sentido lógico (truthy -> false, falsy -> true).
El segundo operador ! vuelve a invertir el resultado, devolviendo el valor booleano original equivalente (truthy -> true, falsy -> false).
*/
