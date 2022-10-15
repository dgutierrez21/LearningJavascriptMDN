// Práctica de construcción de objetos #ff0

// Vamos a rebotar algunas bolas #008000
// En este artículo escribiremos una demo clásica de "bolas rebotando", para mostrarle lo útiles que pueden ser los objetos en JavaScript. Nuestras pequeñas bolas rebotarán en la pantalla y cambiarán de color cuando se toquen entre sí. El ejemplo terminado se verá un poco como esto:

// ver en la carpeta img...

// Este ejemplo hará uso de la API de Canvas para dibujar las bolas en la pantalla y la API requestAnimationFrame para animar toda la pantalla: no necesita tener ningún conocimiento previo de estas API, y esperamos que para cuando haya terminado este artículo esté interesado en explorarlas más. En el camino, haremos uso de algunos objetos ingeniosos y le mostraremos un par de técnicas agradables como rebotar bolas en las paredes y verificar si se han golpeado entre sí (también conocida como detección de colisiones).).

// Empezar #008000
// Para empezar, haga copias locales de index.html, style.css y main.js. Estos contienen lo siguiente, respectivamente:

//--- Un documento HTML muy simple con un elemento <h1>, un elemento <canvas> para dibujar nuestras bolas y elementos para aplicar nuestro CSS y JavaScript a nuestro HTML.

// ---Algunos estilos muy simples, que sirven principalmente para peinar y posicionar el <h1>, y deshacerse de cualquier barra de desplazamiento o margen alrededor del borde de la página (para que se vea bien y ordenada).

// ---Algún JavaScript que sirva para configurar el elemento <canvas> y proporcionar una función general que vamos a utilizar.
// La primera parte del guión se ve así:

// configuración canvas

const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

// Este script obtiene una referencia al elemento <canvas> y luego llama al método getContext() para darnos un contexto en el que podemos comenzar a dibujar. La constante resultante (ctx) es el objeto que representa directamente el área de dibujo del lienzo y nos permite dibujar formas 2D sobre él.

// A continuación, establecemos constantes llamadas width y height, y el ancho y el alto del elemento canvas (representado por las propiedades width y canvas.height) para que coincida con el ancho y el alto de la ventana gráfica del navegador (el área en la que aparece la página web, esto se puede obtener de las propiedades Window.innerWidth y heightcanvas.width Window.innerWidth).Window.innerHeight canvas.height
// Tenga en cuenta que estamos encadenando múltiples asignaciones juntas, para que todas las variables se configuren más rápido, esto está perfectamente bien.

// Entonces tenemos dos funciones auxiliares:

// función para generar un número aleatorio

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// función para generar un color aleatorio

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// La función random() toma dos números como argumentos y devuelve un número aleatorio en el rango entre los dos. La función randomRGB() genera un color aleatorio representado como una cadena rgb()
