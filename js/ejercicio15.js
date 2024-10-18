//Pide al usuario que ingrese un número y verifica si es realmente un número. Si no lo es, muestra un mensaje de error.
let entrada = prompt("Introduce un número:");
if (isNaN(entrada)) {
    console.log("Error: No has introducido un número válido.");
} else {
    console.log("Has introducido el número "+entrada);
}