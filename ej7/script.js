"use strict";

// 1. 2 > 1
// Resultado: true
// Explicación: Comparación numérica estándar entre dos números del mismo tipo (number). 2 es estrictamente mayor que 1.
console.log("2 > 1 ->", 2 > 1);

// 2. "2" > 1
// Resultado: true
// Explicación: Al usar un operador relacional (>), JavaScript convierte automáticamente el string "2" a número (Number("2") es 2). Por lo tanto, 2 > 1 es true.
console.log('"2" > 1 ->', "2" > 1);

// 3. "01" == 1
// Resultado: true
// Explicación: El operador de igualdad no estricta (==) realiza conversión de tipos. La cadena "01" se convierte al número 1 (Number("01") es 1), ignorando el cero inicial. Como 1 == 1, da true.
console.log('"01" == 1 ->', "01" == 1);

// 4. 0 == false
// Resultado: true
// Explicación: En la igualdad no estricta (==), el valor booleano false se convierte a número (Number(false) es 0). Por ende, se evalúa 0 == 0, lo cual es true.
console.log("0 == false ->", 0 == false);

// 5. "" == false
// Resultado: true
// Explicación: Con ==, ambos operandos se convierten a número. Una cadena vacía "" se convierte a 0 (Number("") es 0) y false también se convierte a 0 (Number(false) es 0). Como 0 == 0, da true.
console.log('"" == false ->', "" == false);

// 6. 0 === false
// Resultado: false
// Explicación: El operador de igualdad estricta (===) compara valor y tipo sin realizar conversiones automáticas. 0 es de tipo 'number' y false es de tipo 'boolean'. Al tener tipos distintos, devuelve false.
console.log("0 === false ->", 0 === false);

// 7. null == undefined
// Resultado: true
// Explicación: Regla especial de JavaScript para ==: null y undefined son iguales entre sí (y solo iguales a sí mismos o entre ellos), sin realizar conversión a números. Por tanto, es true.
console.log("null == undefined ->", null == undefined);

// 8. null === undefined
// Resultado: false
// Explicación: El operador === verifica el tipo sin coerción. null y undefined pertenecen a tipos de datos diferentes (null es un tipo propio con typeof 'object' por compatibilidad histórica, y undefined es de tipo 'undefined'). Por ello da false.
console.log("null === undefined ->", null === undefined);

// 9. null > 0
// Resultado: false
// Explicación: Los operadores relacionales (>, <, >=, <=) convierten los operandos a números. null se convierte en 0 (Number(null) es 0). Por tanto se evalúa 0 > 0, lo cual es false.
console.log("null > 0 ->", null > 0);

// 10. null >= 0
// Resultado: true
// Explicación: Al igual que en el caso anterior, el operador relacional >= convierte null al número 0. Por tanto, se evalúa 0 >= 0, lo cual es true (cero es mayor o igual a cero).
console.log("null >= 0 ->", null >= 0);

// 11. undefined == 0
// Resultado: false
// Explicación: Para el operador ==, undefined solo es igual a null o a sí mismo; nunca se convierte a número en comparaciones con ==. Por ello no es igual a 0. (Si se convirtiese a número daría NaN, que tampoco es igual a 0).
console.log("undefined == 0 ->", undefined == 0);

// 12. "Glow" > "Glee"
// Resultado: true
// Explicación: Comparación de strings lexicográfica(según el código Unicode/ASCII de cada carácter de izquierda a derecha). 'G' y 'l' son idénticos; en la tercera letra, 'o' (código 111) es mayor que 'e' (código 101). Por tanto, "Glow" > "Glee" es true.
console.log('"Glow" > "Glee" ->', "Glow" > "Glee");
