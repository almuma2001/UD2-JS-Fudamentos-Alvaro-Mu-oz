"use strict";

let n1 = prompt("Introduce un número");
let n2 = prompt("Introduce otro número");

//Sumar sin parsear los números, es decir, concatenarlos
let sumaSinParsear = n1 + n2;
document.write("La suma sin parsear es: " + sumaSinParsear + "<br>");

//Sumar parseando los números, es decir, sumarlos
let sumaParseada = parseInt(n1) + parseInt(n2);
document.write("La suma parseada es: " + sumaParseada + "<br>");

//Después, crea una tabla en HTML(generada desde JS) que muestre el resultado de Number(), String() y Boolean() aplicados a estos valores: "123", " 45 ", "abc","", "0", 0, null, undefined, true.
document.write("<table border='1'>");
document.write("<tr><th>Valor</th><th>Number()</th><th>String()</th><th>Boolean()</th></tr>");
document.write("<tr><td>'123'</td><td>" + Number("123") + "</td><td>" + String("123") + "</td><td>" + Boolean("123") + "</td></tr>");
document.write("<tr><td>' 45 '</td><td>" + Number(" 45 ") + "</td><td>" + String(" 45 ") + "</td><td>" + Boolean(" 45 ") + "</td></tr>");
document.write("<tr><td>'abc'</td><td>" + Number("abc") + "</td><td>" + String("abc") + "</td><td>" + Boolean("abc") + "</td></tr>");
document.write("<tr><td>''</td><td>" + Number("") + "</td><td>" + String("") + "</td><td>" + Boolean("") + "</td></tr>");
document.write("<tr><td>'0'</td><td>" + Number("0") + "</td><td>" + String("0") + "</td><td>" + Boolean("0") + "</td></tr>");
document.write("<tr><td>0</td><td>" + Number(0) + "</td><td>" + String(0) + "</td><td>" + Boolean(0) + "</td></tr>");
document.write("<tr><td>null</td><td>" + Number(null) + "</td><td>" + String(null) + "</td><td>" + Boolean(null) + "</td></tr>");
document.write("<tr><td>undefined</td><td>" + Number(undefined) + "</td><td>" + String(undefined) + "</td><td>" + Boolean(undefined) + "</td></tr>");
document.write("<tr><td>true</td><td>" + Number(true) + "</td><td>" + String(true) + "</td><td>" + Boolean(true) + "</td></tr>");
document.write("</table>");
