// Secuencia de animaciones #ff0

// En esta evaluación actualizarás una página para reproducir una serie de animaciones en una secuencia. Para ello, utilizarás algunas de las técnicas que aprendimos en el artículo Cómo usar las promesas.

// Punto de partida #008000
// Haz una copia local de los archivos en https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start. Contiene cuatro archivos:

// alice.svg
// index.html
// main.js
// style.css
// El único archivo que tendrás que editar es "main.js".

// Si abres "index.html" en un navegador, verás tres imágenes dispuestas en diagonal:

const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

// Resumen del proyecto #008000
// Queremos actualizar esta página para aplicar una animación a las tres imágenes, una tras otra. Así, cuando la primera haya terminado animamos la segunda, y cuando la segunda haya terminado animamos la tercera.

// La animación ya está definida en "main.js": simplemente gira la imagen y la encoge hasta que desaparece.

// Para que te hagas una idea de cómo queremos que funcione la página, echa un vistazo al ejemplo terminado. Ten en cuenta que las animaciones sólo se ejecutan una vez: para verlas de nuevo, recarga la página.

// Pasos para completar #008000
// Animar la primera imagen
// Estamos utilizando la API de Animaciones Web para animar las imágenes, específicamente el método element.animate().

// Actualiza "main.js" para añadir una llamada a alice1.animate(), así:

// alice1.animate(aliceTumbling, aliceTiming);

// Vuelva a cargar la página y debería ver que la primera imagen gira y se encoge.

// Animar todas las imágenes #00aae4
// A continuación, queremos animar a alice2 cuando alice1 haya terminado, y a alice3 cuando alice2 haya terminado.

// El método animate() devuelve un objeto Animation. Este objeto tiene una propiedad finished, que es una promesa que se cumple cuando la animación ha terminado de reproducirse. Así que podemos usar esta promesa para saber cuándo empezar la siguiente animación.

// impleméntala como una cadena de promesas. Ten en cuenta que hay diferentes maneras de escribir esto, debido a las diferentes formas que puedes usar para una función de flecha. Prueba algunas formas diferentes. ¿Cuál es la más concisa? ¿Cuál te parece más legible?

alice1
  .animate(aliceTumbling, aliceTiming)
  .finished.then(() => alice2.animate(aliceTumbling, aliceTiming).finished)
  .then(() => alice3.animate(aliceTumbling, aliceTiming));

// Recuerda que element.animate() no devuelve una Promise: devuelve un objeto Animation con una propiedad finished que es una Promise.
