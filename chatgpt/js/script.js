// Agregar un evento al botón con ID "roll-button" para ejecutar la función cuando se haga clic
document.getElementById("roll-button").addEventListener("click", function() {
    // Obtener el elemento HTML con ID "dice" (el dado)
    const dice = document.getElementById("dice");

    // Generar un número aleatorio entre 1 y 6 (simulando el lanzamiento de un dado)
    const result = Math.floor(Math.random() * 6) + 1;

    // Diccionario con las rotaciones correctas para cada cara del dado
    const rotations = {
        1: "rotateX(0deg) rotateY(0deg)",    // Cara con el número 1 al frente
        2: "rotateX(-90deg) rotateY(0deg)",  // Cara con el número 2 en la parte superior
        3: "rotateX(0deg) rotateY(-90deg)",  // Cara con el número 3 a la derecha
        4: "rotateX(0deg) rotateY(90deg)",   // Cara con el número 4 a la izquierda
        5: "rotateX(90deg) rotateY(0deg)",   // Cara con el número 5 en la parte inferior
        6: "rotateX(180deg) rotateY(0deg)"   // Cara con el número 6 en la parte trasera
    };

    // Simular un giro aleatorio inicial antes de mostrar el resultado final
    const randomX = Math.floor(Math.random() * 360); // Rotación aleatoria en el eje X
    const randomY = Math.floor(Math.random() * 360); // Rotación aleatoria en el eje Y
    dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;

    // Después de 1 segundo, aplicar la rotación final para mostrar el número correcto
    setTimeout(() => {
        dice.style.transform = rotations[result];
    }, 1000);
});
