// ¿Qué es JavaScript? #ff0
// ¡Bienvenido al curso de JavaScript para principiantes de MDN! En este artículo veremos JavaScript desde un alto nivel, respondiendo a preguntas como "¿Qué es?" y "¿Qué puedes hacer con él?", y asegurándonos de que te sientas cómodo con el propósito de JavaScript.

// Una definición de alto nivel #008000
// JavaScript es un lenguaje de scripting o programación que le permite implementar características complejas en páginas web, cada vez que una página web hace más que simplemente sentarse allí y mostrar información estática para que la vea, mostrando actualizaciones de contenido oportunas, mapas interactivos, gráficos animados 2D / 3D, jukeboxes de video de desplazamiento, etc., puede apostar que JavaScript probablemente esté involucrado. Es la tercera capa de la torta de capas de tecnologías web estándar, dos de las cuales (HTML y CSS) hemos cubierto con mucho más detalle en otras partes del Área de Aprendizaje.

// HTML es el lenguaje de marcado que utilizamos para estructurar y dar significado a nuestro contenido web, por ejemplo, definiendo párrafos, encabezados y tablas de datos, o incrustando imágenes y videos en la página.

// CSS es un lenguaje de reglas de estilo que utilizamos para aplicar estilos a nuestro contenido HTML, por ejemplo, establecer colores de fondo y fuentes, y diseñar nuestro contenido en varias columnas.

// JavaScript es un lenguaje de scripting que le permite crear contenido de actualización dinámica, controlar multimedia, animar imágenes y casi todo lo demás. (De acuerdo, no todo, pero es increíble lo que puedes lograr con unas pocas líneas de código JavaScript).

// Las tres capas se construyen una encima de la otra muy bien. Tomemos una etiqueta de texto simple como ejemplo. Podemos marcarlo usando HTML para darle estructura y propósito:

// Luego podemos agregar un poco de CSS a la mezcla para que se vea bien:

// Y por último, podemos añadir algo de JavaScript para implementar el comportamiento dinámico:

const para = document.querySelector(".container_1 p");

para.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Ingresa el nuevo nombre");
  para.textContent = `Player 1: ${name}`;
}
