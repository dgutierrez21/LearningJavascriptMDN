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

// Entonces, ¿qué puede hacer realmente? #008000
// El lenguaje JavaScript principal del lado del cliente consiste en algunas características de programación comunes que le permiten hacer cosas como:

// Almacene valores útiles dentro de las variables. En el ejemplo anterior, por ejemplo, pedimos que se ingrese un nuevo nombre y luego almacenamos ese nombre en una variable llamada name.

// Operaciones en fragmentos de texto (conocidos como "cadenas" en programación). En el ejemplo anterior tomamos la cadena "Player 1: " y la unimos a la variable name para crear la etiqueta de texto completa, por ejemplo, "Player 1: Chris".

// Ejecutar código en respuesta a ciertos eventos que ocurren en una página web. Usamos un evento click en nuestro ejemplo anterior para detectar cuándo se hace clic en la etiqueta y luego ejecutar el código que actualiza la etiqueta de texto.

// ¡Y mucho más!

// Sin embargo, lo que es aún más emocionante es la funcionalidad construida sobre el lenguaje JavaScript del lado del cliente. Las llamadas interfaces de programación de aplicaciones (API) le proporcionan superpoderes adicionales para usar en su código JavaScript.

// Las API son conjuntos listos para usar de bloques de creación de código que permiten a un desarrollador implementar programas que de otro modo serían difíciles o imposibles de implementar. Hacen lo mismo para la programación que los kits de muebles listos para usar para la construcción del hogar: es mucho más fácil tomar paneles precortados y atornillarlos para hacer una estantería que elaborar el diseño usted mismo, ir y encontrar la madera correcta, cortar todos los paneles al tamaño y forma correctos, encuentre los tornillos del tamaño correcto y luego póngalos juntos para hacer una estantería.

// Generalmente se dividen en dos categorías.

// Las API del navegador #00aae4
//  están integradas en su navegador web y pueden exponer datos del entorno informático circundante o hacer cosas complejas útiles. Por ejemplo:

// La DOM (Document Object Model) API te permite manipular HTML y CSS, creando, eliminando y cambiando HTML, aplicando dinámicamente nuevos estilos a tu página, etc. Cada vez que ve aparecer una ventana emergente en una página, o algún contenido nuevo que se muestra (como vimos anteriormente en nuestra simple demostración), por ejemplo, ese es el DOM en acción.

// La Geolocation API recupera información geográfica. Así es como Google Maps puede encontrar su ubicación y trazarla en un mapa.

// Las API Canvas y WebGL le permiten crear gráficos animados en 2D y 3D. La gente está haciendo algunas cosas increíbles usando estas tecnologías web: consulta Experimentos de Chrome y webglsamples.

// Las API de audio y video como HTMLMediaElement y WebRTC le permiten hacer cosas realmente interesantes con multimedia, como reproducir audio y video directamente en una página web, o tomar video de su cámara web y mostrarlo en la computadora de otra persona (pruebe nuestra simple demostración de instantáneas para tener la idea).

// Nota: Muchas de las demostraciones anteriores no funcionarán en un navegador más antiguo: al experimentar, es una buena idea usar un navegador moderno como Firefox, Chrome, Edge u Opera para ejecutar su código. Deberá considerar las pruebas entre navegadores con más detalle cuando se acerque a la entrega de código de producción (es decir, código real que usarán los clientes reales).

// Las API de terceros #00aae4
// no están integradas en el navegador de forma predeterminada, y generalmente tiene que obtener su código e información de algún lugar de la Web. Por ejemplo:

// La API de Twitter le permite hacer cosas como mostrar sus últimos tweets en su sitio web.

// La API de Google Maps y la API de OpenStreetMap le permiten incrustar mapas personalizados en su sitio web y otras funcionalidades similares.

// Nota: Estas API son avanzadas y no cubriremos ninguna de ellas en este módulo. Puede obtener mucho más información sobre estos en nuestro módulo de API web del lado del cliente.

// ¡También hay mucho más disponible! Sin embargo, no te emociones demasiado todavía. No podrá crear el próximo Facebook, Google Maps o Instagram después de estudiar JavaScript durante 24 horas; hay muchos conceptos básicos que cubrir primero. Y es por eso que estás aquí, ¡sigamos adelante!
