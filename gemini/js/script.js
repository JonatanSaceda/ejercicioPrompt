// Selecciona el elemento del dado en el DOM
const dice = document.querySelector('.dice');

// Selecciona el botón de lanzar el dado
const rollBtn = document.getElementById('rollButton');

// Función para generar un número aleatorio entre un rango dado
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función que maneja la animación y el resultado del lanzamiento del dado
function rollDice() {
  // Deshabilita el botón mientras se anima el dado para evitar múltiples clics
  rollBtn.disabled = true;

  // Genera ángulos de rotación aleatorios para animar el dado al girar
  const xRand = getRandomNumber(0, 360);
  const yRand = getRandomNumber(0, 360);

  // Aplica la rotación aleatoria al dado
  dice.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;

  // Espera 1 segundo (duración de la animación) antes de mostrar el resultado final
  setTimeout(() => {
    // Genera un número aleatorio del 1 al 6, que representa el resultado del dado
    const result = getRandomNumber(1, 6);
    
    // Variables para la rotación final según el número obtenido
    let xRot, yRot;

    // Define las rotaciones exactas para cada cara del dado
    switch(result) {
      case 1: xRot = 0; yRot = 0; break;      // Cara 1 (frontal)
      case 2: xRot = 0; yRot = -90; break;    // Cara 2 (izquierda)
      case 3: xRot = 0; yRot = -180; break;   // Cara 3 (trasera)
      case 4: xRot = 0; yRot = 90; break;     // Cara 4 (derecha)
      case 5: xRot = -90; yRot = 0; break;    // Cara 5 (arriba)
      case 6: xRot = 90; yRot = 0; break;     // Cara 6 (abajo)
    }

    // Aplica la rotación final para que el dado muestre el número obtenido
    dice.style.transform = `rotateX(${xRot}deg) rotateY(${yRot}deg)`;

    // Habilita nuevamente el botón después de que la animación termina
    rollBtn.disabled = false;
  }, 1000); // Tiempo de espera de 1 segundo
}

// Agrega un event listener al botón para ejecutar la función rollDice al hacer clic
rollBtn.addEventListener('click', rollDice);
