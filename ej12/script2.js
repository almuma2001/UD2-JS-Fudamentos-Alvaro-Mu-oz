"use strict";

//Obtenemos el día actual usando Temporal
const fechaActual = Temporal.Now.plainDateISO();

//Elegimos una fecha aleatoria entre hoy y el último día del mes actual
const diasRestantes = fechaActual.daysInMonth - fechaActual.day;
const diferenciaDias = Math.floor(Math.random() * (diasRestantes + 1));
const fechaEvento = fechaActual.add({ days: diferenciaDias });

//Mostramos las fechas y los días que faltan
document.write(
    `La fecha actual es ${fechaActual.toLocaleString('es-ES', { dateStyle: 'long' })}<br>` +
    `La fecha del evento es ${fechaEvento.toLocaleString('es-ES', { dateStyle: 'long' })}<br>`
);
document.write(`Faltan ${fechaActual.until(fechaEvento, { largestUnit: 'day' }).days} días para el evento.`);
