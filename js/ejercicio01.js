//Escribe un programa que declare dos variables: una para almacenar tu nombre y otra para tu edad. Imprime ambos valores en la consola.
let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuál es tu edad?");

function mostrar(nombre, edad) {
    alert("Mi nombre es: " + nombre + " y tengo " + edad + " años.");
}

mostrar(nombre, edad);
