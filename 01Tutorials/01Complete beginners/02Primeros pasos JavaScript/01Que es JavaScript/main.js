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

// ¿Cómo se añade JavaScript a la página? #008000
// JavaScript se aplica a su página HTML de manera similar a CSS. Mientras que CSS utiliza elementos <link> para aplicar hojas de estilo externas y <style> para aplicar hojas de estilo internas a HTML, JavaScript solo necesita un amigo en el mundo de HTML: el elemento <script>. Aprendamos cómo funciona esto.

// JavaScript interno #00aae4
// En primer lugar, haga una copia local de nuestro archivo de ejemplo apply-javascript.html. Guárdelo en un directorio en algún lugar sensato.
// Abra el archivo en su navegador web y en su editor de texto. Verá que el HTML crea una página web simple que contiene un botón en el que se puede hacer clic.
// A continuación, vaya a su editor de texto y agregue lo siguiente en su cabeza, justo antes de su etiqueta </head>:

// ver html...

// Guarde su archivo y actualice el navegador: ahora debería ver que cuando hace clic en el botón, se genera un nuevo párrafo y se coloca debajo.

// Nota: Si su ejemplo no parece funcionar, siga los pasos nuevamente y verifique que haya hecho todo bien. ¿Guardó su copia local del código de inicio como un archivo .html? ¿Agregaste tu elemento <script> justo antes de la etiqueta </head>? ¿Ingresó el JavaScript exactamente como se muestra? JavaScript distingue entre mayúsculas y minúsculas y es muy exigente, por lo que debe ingresar la sintaxis exactamente como se muestra, de lo contrario puede que no funcione.

// JavaScript externo #00aae4
// Esto funciona muy bien, pero ¿y si quisiéramos poner nuestro JavaScript en un archivo externo? Exploremos esto ahora.

// En primer lugar, cree un nuevo archivo en el mismo directorio que el archivo HTML de ejemplo. Llámalo script.js: asegúrate de que tenga esa extensión de nombre de archivo .js, ya que así es como se reconoce como JavaScript.

// Reemplace el elemento <script> actual por el siguiente:

{
  /* <script src="script.js" defer></script>; */
}

// Controladores javascript en línea #00aae4
// Tenga en cuenta que a veces se encontrará con fragmentos de código JavaScript reales que viven dentro de HTML. Podría verse algo como esto:

{
  /* <button onclick="createParagraph()">Click me!</button>; */
}

// Sin embargo, por favor, no hagas esto. Es una mala práctica contaminar su HTML con JavaScript, y es ineficiente: tendría que incluir el atributo onclick="createParagraph()" en cada botón al que desea que se aplique JavaScript.

// Uso de addEventListener en su lugar #00aae4
// En lugar de incluir JavaScript en su HTML, use una construcción de JavaScript pura. La función querySelectorAll() permite seleccionar todos los botones de una página. A continuación, puede recorrer los botones en bucle, asignando un controlador para cada uno mediante addEventListener(). El código para esto se muestra a continuación:

// const buttons = document.querySelectorAll("button");

// for (const button of buttons) {
//   button.addEventListener("click", createParagraph);
// }

// Esto puede ser un poco más largo que el atributo onclick, pero funcionará para todos los botones, sin importar cuántos estén en la página, ni cuántos se agreguen o eliminen. No es necesario cambiar el JavaScript.

// Nota: Intente editar su versión de apply-javascript.html y agregue algunos botones más al archivo. Cuando vuelva a cargar, debería encontrar que todos los botones cuando se hace clic crearán un párrafo. Prolijo, ¿eh?

// Estrategias de carga de scripts #00aae4
// Hay una serie de problemas relacionados con la carga de scripts en el momento adecuado. ¡Nada es tan simple como parece! Un problema común es que todo el HTML de una página se carga en el orden en que aparece. Si está utilizando JavaScript para manipular elementos de la página (o, más exactamente, el modelo de objetos de documento), el código no funcionará si el JavaScript se carga y analiza antes del HTML al que está intentando hacer algo.

// En los ejemplos de código anteriores, en los ejemplos internos y externos, JavaScript se carga y se ejecuta en el encabezado del documento, antes de analizar el cuerpo HTML. Esto podría causar un error, por lo que hemos utilizado algunas construcciones para evitarlo.

// En el ejemplo interno, puede ver esta estructura alrededor del código:

// document.addEventListener("DOMContentLoaded", () => {
//   // …
// });

// Este es un detector de eventos, que escucha el evento DOMContentLoaded del navegador, lo que significa que el cuerpo HTML está completamente cargado y analizado. El JavaScript dentro de este bloque no se ejecutará hasta después de que se active ese evento, por lo tanto, se evita el error (aprenderá sobre los eventos más adelante en el curso).

// En el ejemplo externo, utilizamos una característica de JavaScript más moderna para resolver el problema, el atributo defer, que le dice al navegador que continúe descargando el contenido HTML una vez que se haya alcanzado el elemento <script>.

{
  /* <script src="script.js" defer></script>; */
}

// En este caso, tanto el script como el HTML se cargarán simultáneamente y el código funcionará.

// Nota: En el caso externo, no necesitábamos usar el evento DOMContentLoaded porque el atributo defer resolvió el problema por nosotros. No usamos la solución defer para el ejemplo interno de JavaScript porque defer solo funciona para scripts externos.

// #FF0000
// Una solución anticuada a este problema solía ser colocar su elemento de script justo en la parte inferior del cuerpo (por ejemplo, justo antes de la etiqueta </body>), para que se cargara después de que se haya analizado todo el HTML. El problema con esta solución es que la carga / análisis del script está completamente bloqueado hasta que se haya cargado el DOM HTML. En sitios más grandes con mucho JavaScript, esto puede causar un problema de rendimiento importante, ralentizando su sitio.

// asincrónica y aplazar #00aae4
// En realidad, hay dos características modernas que podemos usar para evitar el problema del script de bloqueo: async y defer (que vimos anteriormente). Veamos la diferencia entre estos dos.

// Los scripts cargados con el atributo async descargarán el script sin bloquear la página mientras se obtiene el script. Sin embargo, una vez que se complete la descarga, se ejecutará el script, lo que bloquea la representación de la página. No obtiene ninguna garantía de que los scripts se ejecutarán en un orden específico. Es mejor usar async cuando los scripts de la página se ejecutan independientemente entre sí y no dependen de ningún otro script en la página.

// Los scripts cargados con el atributo defer se cargarán en el orden en que aparecen en la página. No se ejecutarán hasta que el contenido de la página se haya cargado, lo cual es útil si sus scripts dependen de que el DOM esté en su lugar (por ejemplo, modifican uno o más elementos de la página).

// Aquí hay una representación visual de los diferentes métodos de carga de scripts y lo que eso significa para su página:

// ver Imagen...

// Por ejemplo, si tiene los siguientes elementos de script:

{
  /* <script async src="js/vendor/jquery.js"></script>

<script async src="js/script2.js"></script>

<script async src="js/script3.js"></script> */
}

// No puede confiar en el orden en que se cargarán los scripts. jquery.js puede cargarse antes o después script2.js y script3.js y si este es el caso, cualquier función en esos scripts dependiendo de jquery producirá un error porque jquery no se definirá en el momento en que se ejecute el script.

// async debe usarse cuando tiene un montón de scripts en segundo plano para cargar y solo desea ponerlos en su lugar lo antes posible. Por ejemplo, tal vez tenga algunos archivos de datos del juego para cargar, que serán necesarios cuando el juego realmente comience, pero por ahora solo desea continuar mostrando la introducción del juego, los títulos y el lobby, sin que estén bloqueados por la carga del script.

// Los scripts cargados con el atributo defer (ver más abajo) se ejecutarán en el orden en que aparecen en la página y los ejecutarán tan pronto como se descarguen el script y el contenido:

{
  /* <script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script> */
}

// En el segundo ejemplo, podemos estar seguros de que jquery.js se cargará antes script2.js y script3.js y que script2.js se cargará antes script3.js. No se ejecutarán hasta que el contenido de la página se haya cargado, lo cual es útil si sus scripts dependen de que el DOM esté en su lugar (por ejemplo, modifican uno de los elementos más de la página).

// Para resumir:

// async y defer ambos indican al navegador que descargue los scripts en un hilo separado, mientras que el resto de la página (el DOM, etc.) se está descargando, por lo que la carga de la página no se bloquea durante el proceso de búsqueda.

// los scripts con async se ejecutarán tan pronto como se complete la descarga. Esto bloquea la página y no garantiza ninguna orden de ejecución específica.

// los scripts con un atributo defer se cargarán en el orden en que se encuentran y solo se ejecutarán una vez que todo haya terminado de cargarse.

// Si sus scripts deben ejecutarse inmediatamente y no tienen ninguna dependencia, use async.

// Si sus scripts necesitan esperar para el análisis y dependen de que otros scripts y / o el DOM esté en su lugar, cárguelos usando defer y coloque sus elementos <script> en el orden en que desea que el navegador los ejecute.
