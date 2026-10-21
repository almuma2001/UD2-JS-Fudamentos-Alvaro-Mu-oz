"use strict";

/*
Crea una variable de cada uno de los tipos básicos: number, bigint, string, boolean,
null, undefined y symbol, además de un object. Muestra en pantalla (con
document.write o console.log) el valor y el resultado de typeof de cada una, en
forma de lista. Al final, escribe un comentario explicando por qué typeof null
devuelve "object".
*/

let number = 1;
let bigint = 1n;
let string = "Hola";
let boolean = true;
let nullValue = null;
let undefinedValue = undefined;
let symbolValue = Symbol("symbol");
let objectValue = { name: "Álvaro", age: 25 };

document.write(
    `
    <ul>
        <li>Valor: ${number} - Tipo: ${typeof number}</li>
        <li>Valor: ${bigint} - Tipo: ${typeof bigint}</li>
        <li>Valor: ${string} - Tipo: ${typeof string}</li>
        <li>Valor: ${boolean} - Tipo: ${typeof boolean}</li>
        <li>Valor: ${nullValue} - Tipo: ${typeof nullValue}</li>
        <li>Valor: ${undefinedValue} - Tipo: ${typeof undefinedValue}</li>
        <li>Valor: ${symbolValue.toString()} - Tipo: ${typeof symbolValue}</li>
        <li>Valor: ${JSON.stringify(objectValue)} - Tipo: ${typeof objectValue}</li>
    </ul>
    `  
)

//¿Por qué typeof null devuelve "object"?
//Es un bug que existe desde el principio de JavaScript y no se ha corregido para no romper la web.
//A día de hoy sigue siendo "object" para mantener la compatibilidad con código antiguo.
