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
