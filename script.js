var numero = prompt("Introduce un número:");

// Convertir el valor ingresado a un número entero
numero = parseInt(numero);

// Verificar si el número es un entero válido
if (isNaN(numero)) {
    alert("Por favor, introduce un número válido.");
} else {
    // Mostrar los divisores del número
    mostrarDivisores(numero);
}

// Función para mostrar los divisores de un número
function mostrarDivisores(num) {
    var divisores = [];

    for (var i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores.push(i);
        }
    }

    // Mostrar los divisores en la consola
    console.log("Divisores de " + num + ": " + divisores.join(', '));
}