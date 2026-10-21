"use strict";

let entrada = prompt("Introduce una nota numérica (0 - 10):");

// Validación: comprobar que no sea null (cancelar), ni vacío, y que sea un número entre 0 y 10
if (
    entrada === null || 
    entrada.trim() === "" || 
    isNaN(Number(entrada)) || 
    Number(entrada) < 0 || 
    Number(entrada) > 10
) {
    alert("Error: Debes introducir un número válido entre 0 y 10.");
} else {
    let nota = Number(entrada);
    let calificacion = "";

    /*
    // VERSIÓN ORIGINAL COMPLETA (if / else if / else):

    if (nota < 5) {
        calificacion = "Suspenso";
    } else if (nota < 7) {
        calificacion = "Aprobado";
    } else if (nota < 9) {
        calificacion = "Notable";
    } else {
        calificacion = "Sobresaliente";
    }
    */

    //OPERADOR TERNARIO (? :)

    if (nota < 5) {
        calificacion = "Suspenso";
    } else if (nota < 7) {
        calificacion = "Aprobado";
    } else {
        /*
        // Versión original de esta comprobación:
        if (nota < 9) {
            calificacion = "Notable";
        } else {
            calificacion = "Sobresaliente";
        }
        */

        // Reescrita con el operador ternario:
        calificacion = (nota < 9) ? "Notable" : "Sobresaliente";
    }

    // Mostrar resultado
    alert(`Nota: ${nota} - Calificación: ${calificacion}`);

}
