# Dado 3D Interactivo

Este proyecto es una aplicación web sencilla que simula el lanzamiento de un dado en 3D utilizando HTML, CSS y JavaScript. Cuando el usuario presiona un botón, el dado gira aleatoriamente antes de mostrar una de sus seis caras con el número correspondiente.

Este proyecto ha sido desarrollado con técnicas de **prompting**, bajo el paradigma **No-Code**, utilizando **ChatGPT-4o** para la generación de código y la estructuración de la lógica de funcionamiento.

## Tecnologías utilizadas
- **HTML**: Estructura básica de la página web.
- **CSS**: Estilos y animaciones para la representación del dado en 3D.
- **JavaScript**: Lógica para generar el número aleatorio y manipular las rotaciones del dado.

## Archivos

### 1. `index.html`
Contiene la estructura de la página, incluyendo:
- Un contenedor `div` para representar el dado.
- Un botón que permite lanzar el dado al hacer clic.

### 2. `styles.css`
Define los estilos del dado en 3D, incluyendo:
- Efecto de perspectiva para simular profundidad.
- Transformaciones en `rotateX` y `rotateY` para mostrar diferentes caras.
- Transiciones suaves para mejorar la animación.

### 3. `script.js`
Incluye la lógica de funcionamiento del dado:
- Detecta el clic en el botón de lanzamiento.
- Genera un número aleatorio entre 1 y 6.
- Aplica rotaciones aleatorias iniciales para simular un giro antes de mostrar el resultado final.

## Cómo usar
1. Descarga los archivos y guárdalos en la misma carpeta.
2. Abre `index.html` en un navegador web.
3. Haz clic en el botón "Lanzar Dado" y observa cómo el dado gira antes de mostrar su resultado.

## Captura de Pantalla
_(Opcional: Agregar una imagen del dado en acción)_

## Mejoras futuras
- Agregar sonidos al lanzar el dado.
- Implementar una mejor física de animación.
- Optimizar la apariencia del dado con texturas más detalladas.


