"use strict";

let salir = false;

// Bucle while para mantener el menú repitiéndose hasta que el usuario decida salir (opción 0)
while (!salir) {
    let opcion = prompt(
        "=== MENÚ ===\n\n" +
        "1 - Mostrar la tabla de multiplicar de un número (con for)\n" +
        "2 - Sumar números hasta introducir vacío o cancelar (con while(true) y break)\n" +
        "3 - Mostrar solo los números impares del 1 al 20 (con for y continue)\n" +
        "4 - Cuenta atrás desde un número dado hasta 0 (con do...while)\n" +
        "0 - Salir\n\n" +
        "Introduce una opción:"
    );

    // Si el usuario pulsa Cancelar en el menú principal, cerramos la aplicación
    if (opcion === null) {
        alert("Operación cancelada. ¡Hasta pronto!");
        break;
    }

    switch (opcion.trim()) {
        case "1": {
            // Opción 1: Mostrar la tabla de multiplicar de un número
            // Tipo de bucle utilizado: for
            let entrada = prompt("Introduce un número para ver su tabla de multiplicar:");

            if (entrada === null || entrada.trim() === "" || isNaN(Number(entrada))) {
                alert("Error: Debes introducir un número válido.");
            } else {
                let numero = Number(entrada);
                let resultado = `Tabla de multiplicar del ${numero}:\n`;

                for (let i = 1; i <= 10; i++) {
                    resultado += `${numero} x ${i} = ${numero * i}\n`;
                }

                alert(resultado);
                console.log(resultado);
            }
            break;
        }

        case "2": {
            // Opción 2: Sumar números introducidos por el usuario hasta que introduzca uno vacío o cancele
            // Tipo de bucle utilizado: while(true) con break
            let suma = 0;
            let cantidad = 0;

            while (true) {
                let entrada = prompt(
                    `Suma acumulada: ${suma}\n` +
                    "Introduce un número para sumar (deja en blanco o pulsa Cancelar para terminar):"
                );

                // Si cancela (null) o deja el texto vacío (""), salimos del bucle con break
                if (entrada === null || entrada.trim() === "") {
                    break;
                }

                let numero = Number(entrada);
                if (isNaN(numero)) {
                    alert("Error: No has introducido un número válido.");
                } else {
                    suma += numero;
                    cantidad++;
                }
            }

            alert(`Suma completada.\nCantidad de números sumados: ${cantidad}\nTotal: ${suma}`);
            console.log(`Suma completada: ${suma} (${cantidad} números introducidos)`);
            break;
        }

        case "3": {
            // Opción 3: Mostrar solo los números impares del 1 al 20
            // Tipo de bucle utilizado: for con continue
            let impares = [];

            for (let i = 1; i <= 20; i++) {
                // Si el número es par, usamos continue para saltar el resto de la iteración
                if (i % 2 === 0) {
                    continue;
                }
                impares.push(i);
            }

            let resultadoImpares = `Números impares del 1 al 20:\n${impares.join(", ")}`;
            alert(resultadoImpares);
            console.log(resultadoImpares);
            break;
        }

        case "4": {
            // Opción 4: Cuenta atrás desde un número dado hasta 0
            // Tipo de bucle utilizado: do...while
            let entrada = prompt("Introduce un número entero (>= 0) para iniciar la cuenta atrás:");

            if (entrada === null || entrada.trim() === "" || isNaN(Number(entrada)) || Number(entrada) < 0) {
                alert("Error: Debes introducir un número entero mayor o igual a 0.");
            } else {
                let actual = Math.floor(Number(entrada));
                let cuentaAtras = `Cuenta atrás desde ${actual} hasta 0:\n`;

                do {
                    cuentaAtras += actual + (actual > 0 ? ", " : "");
                    actual--;
                } while (actual >= 0);

                alert(cuentaAtras);
                console.log(cuentaAtras);
            }
            break;
        }

        case "0":
            // Opción 0: Salir
            alert("¡Hasta luego! Gracias por usar la aplicación.");
            salir = true;
            break;

        default:
            // Opción por defecto para cualquier valor no contemplado
            alert(`Opción "${opcion}" no válida. Por favor, introduce un número entre 0 y 4.`);
            break;
    }
}
