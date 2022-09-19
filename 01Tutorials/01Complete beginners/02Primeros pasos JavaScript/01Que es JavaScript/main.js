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

// ¿Qué hace JavaScript en tu página? #008000
// Aquí comenzaremos a mirar algo de código y, mientras lo hacemos, exploramos lo que realmente sucede cuando ejecutas javaScript en tu página.

// Recapitulemos brevemente la historia de lo que sucede cuando carga una página web en un navegador (de lo que se habló por primera vez en nuestro artículo Cómo funciona CSS). Cuando carga una página web en su navegador, está ejecutando su código (HTML, CSS y JavaScript) dentro de un entorno de ejecución (la pestaña del navegador). Esto es como una fábrica que toma materias primas (el código) y produce un producto (la página web).

// Un uso muy común de JavaScript es modificar dinámicamente HTML y CSS para actualizar una interfaz de usuario, a través de la API de Document Object Model (como se mencionó anteriormente). Tenga en cuenta que el código de sus documentos web generalmente se carga y ejecuta en el orden en que aparece en la página. Pueden producirse errores si JavaScript se carga y se ejecuta antes del HTML y CSS que se pretende modificar. Aprenderá formas de evitar esto más adelante en el artículo, en la sección Estrategias de carga de scripts.

// Seguridad del navegador #00aae4
// Cada pestaña del navegador tiene su propio bucket separado para ejecutar código (estos buckets se llaman "entornos de ejecución" en términos técnicos), lo que significa que en la mayoría de los casos el código de cada pestaña se ejecuta completamente por separado, y el código de una pestaña no puede afectar directamente al código en otra pestaña, o en otro sitio web. Esta es una buena medida de seguridad: si este no fuera el caso, entonces los piratas podrían comenzar a escribir código para robar información de otros sitios web y otras cosas tan malas.

// Nota: Hay formas de enviar código y datos entre diferentes sitios web / pestañas de manera segura, pero estas son técnicas avanzadas que no cubriremos en este curso.

// Orden de ejecución de JavaScript #00aae4
// Cuando el navegador encuentra un bloque de JavaScript, generalmente lo ejecuta en orden, de arriba a abajo. Esto significa que debes tener cuidado con el orden en el que pones las cosas. Por ejemplo, volvamos al bloque de JavaScript que vimos en nuestro primer ejemplo:

// const para = document.querySelector("p");

// para.addEventListener("click", updateName);

// function updateName() {
//   const name = prompt("Enter a new name");
//   para.textContent = `Player 1: ${name}`;
// }

// Aquí estamos seleccionando un párrafo de texto (línea 1), luego adjuntando un detector de eventos (línea 3) para que cuando se haga clic en el párrafo, se ejecute el bloque updateName() (líneas 5–8). El bloque updateName() (estos tipos de bloques de código reutilizables se denominan "funciones") solicita al usuario un nuevo nombre y, a continuación, inserta ese nombre en el párrafo para actualizar la visualización.

// Si cambiara el orden de las dos primeras líneas de código, ya no funcionaría; en cambio, obtendría un error devuelto en la consola del desarrollador del navegador: TypeError: para is undefined. Esto significa que el objeto para aún no existe, por lo que no podemos agregarle un detector de eventos.

// Nota: Este es un error muy común: debe tener cuidado de que los objetos a los que se hace referencia en su código existan antes de intentar hacerles cosas.

// Código interpretado versus compilado #00aae4
// Es posible que escuche los términos interpretados y compilados en el contexto de la programación. En los lenguajes interpretados, el código se ejecuta de arriba a abajo y el resultado de ejecutar el código se devuelve inmediatamente. No es necesario transformar el código en un formulario diferente antes de que el navegador lo ejecute. El código se recibe en su forma de texto amigable para el programador y se procesa directamente a partir de eso.

// Los lenguajes compilados, por otro lado, se transforman (compilan) en otra forma antes de que sean ejecutados por la computadora. Por ejemplo, C/C++ se compilan en código máquina que luego ejecuta el equipo. El programa se ejecuta desde un formato binario, que se generó a partir del código fuente original del programa.

// JavaScript es un lenguaje de programación interpretado ligero. El navegador web recibe el código JavaScript en su forma de texto original y ejecuta el script a partir de eso. Desde un punto de vista técnico, la mayoría de los intérpretes de JavaScript modernos en realidad utilizan una técnica llamada compilación justo a tiempo para mejorar el rendimiento; el código fuente de JavaScript se compila en un formato binario más rápido mientras se utiliza el script, para que pueda ejecutarse lo más rápido posible. Sin embargo, JavaScript todavía se considera un lenguaje interpretado, ya que la compilación se maneja en tiempo de ejecución, en lugar de antes de tiempo.

// Hay ventajas para ambos tipos de lenguaje, pero no las discutiremos en este momento.

// Código del lado del servidor frente al del lado del cliente #00aae4
// También es posible que escuche los términos código del lado del servidor y del lado del cliente, especialmente en el contexto del desarrollo web. El código del lado del cliente es el código que se ejecuta en el equipo del usuario: cuando se ve una página web, se descarga el código del lado del cliente de la página, luego se ejecuta y se muestra en el navegador. En este módulo estamos hablando explícitamente de JavaScript del lado del cliente..

// El código del lado del servidor, por otro lado, se ejecuta en el servidor, luego sus resultados se descargan y se muestran en el navegador. Ejemplos de lenguajes web populares del lado del servidor incluyen PHP, Python, Ruby, ASP.NET e incluso JavaScript. JavaScript también se puede utilizar como un lenguaje del lado del servidor, por ejemplo, en el popular entorno Node.js: puede obtener más información sobre JavaScript del lado del servidor en nuestro tema Sitios web dinámicos - Programación del lado del servidor.

// Código dinámico frente a código estático #00aae4
// La palabra dinámica se usa para describir tanto JavaScript del lado del cliente como los lenguajes del lado del servidor: se refiere a la capacidad de actualizar la visualización de una página web / aplicación para mostrar diferentes cosas en diferentes circunstancias, generando nuevo contenido según sea necesario. El código del lado del servidor genera dinámicamente nuevo contenido en el servidor, por ejemplo, extrayendo datos de una base de datos, mientras que JavaScript del lado del cliente genera dinámicamente nuevo contenido dentro del navegador en el cliente, por ejemplo, creando una nueva tabla HTML, llenándola con datos solicitados desde el servidor y luego mostrando la tabla en una página web que se muestra al usuario. El significado es ligeramente diferente en los dos contextos, pero relacionado, y ambos enfoques (lado del servidor y lado del cliente) generalmente funcionan juntos.

// Una página web sin contenido de actualización dinámica se conoce como estática: solo muestra el mismo contenido todo el tiempo.
