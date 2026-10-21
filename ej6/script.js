"use strict";

let n1 = prompt("Introduce un número");
let n2 = prompt("Introduce otro número");

alert("El resultado de la suma es: " + (Number(n1) + Number(n2)));
alert("El resultado de la resta es: " + (Number(n1) - Number(n2)));
alert("El resultado de la multiplicación es: " + (Number(n1) * Number(n2)));
alert("El resultado de la división es: " + (Number(n1) / Number(n2)));
alert("El resultado del módulo es: " + (Number(n1) % Number(n2)));
alert("El resultado de la exponenciación es: " + (Number(n1) ** Number(n2)));


//Parte 2


let counter = 0;

counter++;
++counter;
alert(counter++);
alert(++counter);

counter += 2;
counter *= 2;
/*
counter++ muestra el valor actual de counter y luego lo incrementa en 1.
++counter incrementa el valor de counter en 1 y luego muestra el valor.
*/