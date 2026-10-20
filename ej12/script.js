"use strict";
const formatoLargo = new Intl.DateTimeFormat('es-ES', { dateStyle: 'long', });
//Obtenemos el día actual
const fechaActual = new Date();

const diaActual = fechaActual.getDate();
const mesActual = fechaActual.getMonth() + 1;
const anioActual = fechaActual.getFullYear();

//Obtenemos un día aleatorio entre 1 y 30
let diaAleatorio = Math.floor(Math.random() * 30) + 1;

//Comprobamos si el día aleatorio es mayor que el día actual y si no se vuelve a generar
while (diaAleatorio < diaActual) {
    diaAleatorio = Math.floor(Math.random() * 30) + 1;
}

//Creamos la fecha aleatoria con el mismo mes y año que la fecha actual
const fechaAleatoria = new Date(anioActual, mesActual - 1, diaAleatorio);


//Calculamos la diferencia de días
let diferenciaDias = diaAleatorio - diaActual;

//Muestro el resultado usando Template Strings
document.write(`La fecha actual es ${formatoLargo.format(fechaActual)}<br>La fecha del evento es ${formatoLargo.format(fechaAleatoria)}<br>`);
document.write(`Faltan ${diferenciaDias} días para el evento.`);

//