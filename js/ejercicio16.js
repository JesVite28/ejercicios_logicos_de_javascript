// Pide al usuario ingresar una palabra y determina si es un palíndromo (se lee igual al derecho y al revés).
let palabra = prompt("Introduce una palabra:");
let palabraInvertida = palabra.split('').reverse().join('');
if (palabra === palabraInvertida) {
    console.log(palabra + " es un palíndromo.");
} else {
    console.log(palabra + " no es un palíndromo.");
}