"use strict";

const playlist = [
["Bohemian Rhapsody", "Queen", 354, "Rock"],
["Hotel California", "Eagles", 391, "Rock"],
["Imagine", "John Lennon", 183, "Pop"]
];

//Parte 1
document.write("<h1>Parte 1: </h1>");
    //1. Añade al final dos canciones nuevas
playlist.push(["Stairway to Heaven", "Led Zeppelin", 482, "Rock"]);
playlist.push(["Billie Jean", "Michael Jackson", 294, "Pop"]);

    //2. Elimina la última canción y guarda en una variable la fila eliminado
let cancionEliminada = playlist.pop();

    //3. Añade un quinto dato a la primera canción
playlist[0].push("1975"); 

    //4. Muestra por pantalla la canción eliminada y la playlist completa
document.write("<b>Canción eliminada: </b>" + cancionEliminada[0] + "<br>");
document.write("<br><b>Playlist completa: </b><br>");
for (let i = 0; i < playlist.length; i++) {
    document.write(playlist[i].join(", ") + "<br>");
}

//Parte 2
document.write("<h1>Parte 2: </h1>");
    //5. Inserta una nueva canción en la posición 1 de la playlist sin eliminar ninguna de las existentes
    playlist.splice(1, 0, ["Smells Like Teen Spirit", "Nirvana", 301, "Grunge"]);

    //6. Elimina la fila situada en la posición 2 y guardala en una variable.
    let cancionEliminada2 = playlist.splice(2, 1); 

    //7. Sustituye la fila situada en la posición 0 por una nueva canción.
    playlist.splice(0, 1, ["Hey Jude", "The Beatles", 431, "Rock"]);

    //8. Muestra por pantalla la canción eliminada y la playlist completa.
    for (let i = 0; i < cancionEliminada2.length; i++) {
    document.write("<br><b>Canción eliminada: </b>" + cancionEliminada2[i].join(", ") + "<br>");
    }
    document.write("<br><b>Playlist completa: </b><br>");
    for (let i = 0; i < playlist.length; i++) {
        document.write(playlist[i].join(", ") + "<br>");
    }

//Parte 3
document.write("<h1>Parte 3: </h1>");

    //9. Crea una copia usando spread. Después, modifica el título de la primera cación de la copia y comprueba qué ocurre en la original.
let copiaPlaylist = [...playlist]; 

document.write("<h3>Copia con spread: </h3>");
copiaPlaylist[0][0] = "Let it be";
document.write("<br><b>Playlist copiada completa: </b><br>");
    for (let i = 0; i < copiaPlaylist.length; i++) {
        document.write(copiaPlaylist[i].join(", ") + "<br>");
    }

document.write("<br><b>Playlist completa: </b><br>");
for (let i = 0; i < playlist.length; i++) {
    document.write(playlist[i].join(", ") + "<br>");
}

    //He comprobado que al modificar la copia, también se modifica la original. Esto ocurre porque el spread  crea una copia superficial del array, lo que significa que los elementos internos (en este caso, los arrays de canciones) siguen siendo referencias a los mismos objetos en memoria. Por lo tanto, al modificar un elemento interno de la copia, también se modifica el mismo elemento en la original.

    //10. Crea una copia usando map y spread. Repite la modificación anterior y comprueba qué ocurre en la original.

let copiaPlaylist2 = playlist.map(cancion => [...cancion]);


document.write("<h3>Copia con map: </h3>");
copiaPlaylist2[0][0] = "Yesterday";
document.write("<b>Playlist copiada completa: </b><br>");
for (let i = 0; i < copiaPlaylist2.length; i++) {
    document.write(copiaPlaylist2[i].join(", ") + "<br>");
}

document.write("<br><b>Playlist completa: </b><br>");
for (let i = 0; i < playlist.length; i++) {
    document.write(playlist[i].join(", ") + "<br>");
}

    //He comprobado que al modificar la copia, no se modifica la original. Esto ocurre porque el método map crea una nueva matriz y, al usar el spread operator dentro de la función de mapeo, se crean nuevas referencias para los elementos internos (los arrays de canciones). Por lo tanto, al modificar un elemento interno de la copia, no afecta a la original.

