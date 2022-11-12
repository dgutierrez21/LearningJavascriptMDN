// Módulos de JavaScript #ff0

// Esta guía le ofrece todo lo que necesita para empezar a utilizar la sintaxis de los módulos de JavaScript.

// Antecedentes de los módulos #00aae4
// Los programas de JavaScript empezaron siendo bastante pequeños - la mayor parte de su uso en los primeros días era para realizar tareas aisladas de scripting, proporcionando un poco de interactividad a sus páginas web cuando era necesario, por lo que generalmente no se necesitaban grandes scripts. Si avanzamos unos años, ahora tenemos aplicaciones completas que se ejecutan en los navegadores con mucho JavaScript, así como el uso de JavaScript en otros contextos (Node.js, por ejemplo).

// Por lo tanto, en los últimos años ha tenido sentido empezar a pensar en proporcionar mecanismos para dividir los programas de JavaScript en módulos separados que puedan importarse cuando se necesiten. Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y frameworks de JavaScript que permiten el uso de módulos (por ejemplo, otros sistemas de módulos basados en CommonJS y AMD como RequireJS, y más recientemente Webpack y Babel).

// La buena noticia es que los navegadores modernos han empezado a soportar la funcionalidad de los módulos de forma nativa, y de eso trata este artículo. Esto sólo puede ser algo bueno - los navegadores pueden optimizar la carga de módulos, haciéndola más eficiente que tener que usar una librería y hacer todo ese procesamiento extra del lado del cliente y viajes de ida y vuelta adicionales.

// El uso de módulos nativos de JavaScript depende de las sentencias import y export; éstas son soportadas en los navegadores como se muestra en la tabla de compatibilidad de abajo.

// VER TABLA EN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_compatibility

// Presentación de un ejemplo #008000
// Para demostrar el uso de los módulos, hemos creado un sencillo conjunto de ejemplos que puedes encontrar en https://github.com/mdn/js-examples/tree/master/module-examples Estos ejemplos demuestran un conjunto simple de módulos que crean un elemento <canvas> en una página web, y luego dibujan (y reportan información sobre) diferentes formas en el lienzo.

// Son bastante triviales, pero se han mantenido deliberadamente simples para demostrar los módulos con claridad.

// Nota: Si quieres descargar los ejemplos y ejecutarlos localmente, tendrás que ejecutarlos a través de un servidor web local.

// Ejemplo de estructura básica #008000

// En nuestro primer ejemplo (ver módulos básicos) tenemos una estructura de archivos como la siguiente:

// index.html;
// main.js;
// modules /
//      canvas.js;
//      square.js;

// Nota: Todos los ejemplos de esta guía tienen básicamente la misma estructura; lo anterior debería empezar a ser bastante familiar.

// Los dos módulos del directorio de módulos se describen a continuación:

// canvas.js - contiene funciones relacionadas con la configuración del lienzo:

// create() - crea un lienzo con una anchura y altura especificadas dentro de un <div> envolvente con un ID especificado, que a su vez se anexa dentro de un elemento padre especificado. Devuelve un objeto que contiene el contexto 2D del lienzo y el ID de la envoltura.

// createReportList() - crea una lista desordenada anexada dentro de un elemento envolvente especificado, que puede utilizarse para dar salida a los datos del informe. Devuelve el ID de la lista.

// square.js - contiene:

// name - una constante que contiene la cadena 'square'.

// draw() - dibuja un cuadrado en un lienzo especificado, con un tamaño, posición y color especificados. Devuelve un objeto que contiene el tamaño, la posición y el color del cuadrado.

// reportArea() - escribe el área de un cuadrado en una lista de informes específica, dada su longitud.

// reportPerimeter() - escribe el perímetro de un cuadrado en una lista de informes específica, dada su longitud.

// Aside — .mjs contra .js #00aae4

// A lo largo de este artículo, hemos utilizado las extensiones .js para nuestros archivos de módulos, pero en otros recursos puedes ver que se utiliza la extensión .mjs en su lugar. La documentación de V8 lo recomienda, por ejemplo. Las razones que se dan son:

// Es bueno para la claridad, es decir, deja claro qué archivos son módulos y cuáles son JavaScript normal.
// Asegura que tus archivos de módulos sean analizados como un módulo por tiempos de ejecución como Node.js, y herramientas de construcción como Babel.
// Sin embargo, hemos decidido seguir utilizando .js, al menos por el momento. Para que los módulos funcionen correctamente en un navegador, debes asegurarte de que tu servidor los sirve con una cabecera Content-Type que contenga un tipo MIME de JavaScript como text/javascript. Si no lo hace, obtendrá un error de comprobación de tipo MIME estricto del tipo "El servidor respondió con un tipo MIME no JavaScript" y el navegador no ejecutará su JavaScript. La mayoría de los servidores ya establecen el tipo correcto para los archivos .js, pero aún no para los archivos .mjs. Los servidores que ya sirven correctamente los archivos .mjs incluyen GitHub Pages y http-server para Node.js.

// Esto está bien si ya estás usando un entorno de este tipo, o si no lo estás pero sabes lo que estás haciendo y tienes acceso (es decir, puedes configurar tu servidor para establecer el Content-Type correcto para los archivos .mjs). Sin embargo, podría causar confusión si no controlas el servidor desde el que estás sirviendo los archivos, o estás publicando archivos para uso público, como es nuestro caso.

// Por motivos de aprendizaje y portabilidad, hemos decidido mantener el .js.

// Si realmente valoras la claridad de usar .mjs para los módulos frente a usar .js para los archivos JavaScript "normales", pero no quieres encontrarte con el problema descrito anteriormente, siempre puedes usar .mjs durante el desarrollo y convertirlos a .js durante el paso de construcción.

// También hay que tener en cuenta que:

// Algunas herramientas pueden no soportar nunca .mjs.
// El atributo <script type="module"> se utiliza para denotar cuando se está apuntando a un módulo, como verás a continuación.

// Exportación de las características del módulo #008000
// Lo primero que hay que hacer para acceder a las características del módulo es exportarlas. Esto se hace utilizando la sentencia export.

// La forma más sencilla de utilizarla es colocarla delante de cualquier elemento que quieras exportar fuera del módulo, por ejemplo

// export const name = 'square';

// export function draw(ctx, length, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, length, length);

//   return { longitud, x, y, color };
// }

// Puedes exportar funciones, var, let, const, y -como veremos más adelante- clases. Tienen que ser elementos de nivel superior; no puedes usar export dentro de una función, por ejemplo.

// Una forma más conveniente de exportar todos los elementos que quieres exportar es utilizar una única sentencia export al final de tu archivo de módulo, seguida de una lista separada por comas de las funciones que quieres exportar envueltas en llaves. Por ejemplo:

// export { name, draw, reportArea, reportPerimeter };

// Importación de funciones a su script #008000
// Una vez que haya exportado algunas funciones de su módulo, deberá importarlas a su script para poder utilizarlas. La forma más sencilla de hacerlo es la siguiente:

// import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

// Utiliza la sentencia import, seguida de una lista separada por comas de las características que quieres importar entre llaves, seguida de la palabra clave from, seguida de la ruta al archivo del módulo - una ruta relativa a la raíz del sitio, que para nuestro ejemplo de módulos básicos sería /js-examples/module-examples/basic-modules.

// Sin embargo, hemos escrito la ruta de una manera un poco diferente - estamos utilizando la sintaxis de punto (.) para significar "la ubicación actual", seguido por la ruta más allá de que el archivo que estamos tratando de encontrar. Esto es mucho mejor que escribir toda la ruta relativa cada vez, ya que es más corto, y hace que la URL sea portátil - el ejemplo seguirá funcionando si lo mueve a una ubicación diferente en la jerarquía del sitio.

// Así, por ejemplo:

// /js-examples/module-examples/basic-modules/modules/square.js

// se convierte en

// ./módulos/cuadrado.js

// Puedes ver estas líneas en acción en main.js.

// Nota: En algunos sistemas de módulos, se puede omitir la extensión del archivo y el encabezamiento /, ./, o ../ (por ejemplo, 'modules/square'). Esto no funciona en el entorno del navegador, ya que puede dar lugar a múltiples viajes de ida y vuelta por la red.

// Una vez que hayas importado las funciones en tu script, puedes utilizarlas como si estuvieran definidas dentro del mismo archivo. Lo siguiente se encuentra en main.js, debajo de las líneas de importación:

// const myCanvas = create('myCanvas', document.body, 480, 320);
// const reportList = createReportList(myCanvas.id);

// const square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
// reportArea(square1.length, reportList);
// reportPerimeter(square1.length, reportList);

// Nota: Aunque las características importadas están disponibles en el archivo, son vistas de sólo lectura de la característica que fue exportada. No se puede cambiar la variable que se importó, pero sí se pueden modificar propiedades similares a la const. Además, estas características se importan como enlaces vivos, lo que significa que pueden cambiar de valor aunque no se pueda modificar el enlace, a diferencia de const.

// Aplicando el módulo a tu HTML #008000
// Ahora sólo tenemos que aplicar el módulo main.js a nuestra página HTML. Esto es muy similar a cómo aplicamos un script normal a una página, con algunas diferencias notables.

// En primer lugar, necesitas incluir type="module" en el elemento <script>, para declarar este script como un módulo. Para importar el script main.js, usamos esto:

// <script type="module" src="main.js"></script>

// También puedes incrustar el script del módulo directamente en el archivo HTML colocando el código JavaScript dentro del cuerpo del elemento <script>:

// <script type="module">
//   /* Código del módulo JavaScript aquí */
// </script>

// El script en el que importas las características del módulo actúa básicamente como el módulo de nivel superior. Si lo omites, Firefox, por ejemplo, te da un error de "SyntaxError: las declaraciones de importación sólo pueden aparecer en el nivel superior de un módulo". #FF0000

// Sólo puedes utilizar declaraciones import y export dentro de los módulos, no de los scripts normales.

// Otras diferencias entre los módulos y los scripts estándar #008000

// Tienes que prestar atención a las pruebas locales - si intentas cargar el archivo HTML localmente (es decir, con una URL file://), te encontrarás con errores CORS debido a los requisitos de seguridad del módulo JavaScript. Necesitas hacer tus pruebas a través de un servidor.
// Además, tenga en cuenta que puede obtener un comportamiento diferente de las secciones de script definidas dentro de los módulos en comparación con los scripts estándar. Esto se debe a que los módulos utilizan el modo estricto automáticamente.
// No hay necesidad de utilizar el atributo defer (ver atributos <script>) cuando se carga un script de módulo; los módulos son diferidos automáticamente.
// Los módulos sólo se ejecutan una vez, aunque hayan sido referenciados en múltiples etiquetas <script>.
// Por último, pero no por ello menos importante, dejemos esto claro: las funciones de los módulos se importan en el ámbito de un solo script, no están disponibles en el ámbito global. Por lo tanto, sólo podrás acceder a las funciones importadas en el script en el que se importan, y no podrás acceder a ellas desde la consola de JavaScript, por ejemplo. Seguirá recibiendo los errores de sintaxis mostrados en las DevTools, pero no podrá utilizar algunas de las técnicas de depuración que podría haber esperado utilizar.
// Las variables definidas por el módulo tienen un ámbito de aplicación en el módulo a menos que se adjunten explícitamente al objeto global. Por otro lado, las variables definidas globalmente están disponibles dentro del módulo. Por ejemplo, dado el siguiente código:

// <!DOCTYPE html>
// <html lang="es-US">
//   <head>
//     <meta charset="UTF-8" />
//     <title></title>
//     <link rel="stylesheet" href=" />
//   </head>
//   <body>
//     <div id="main"></div>
//     <script>
//       // Una sentencia var crea una variable global.
//       var text = "Hola";
//     </script>
//     <script type="module" src="./render.js"></script>
//   </body>
// </html>
// /* render.js */
// document.getElementById("main").innerText = text;

// La página seguiría renderizando Hello, porque las variables globales text y document están disponibles en el módulo. (Observe también en este ejemplo que un módulo no necesita necesariamente una declaración de importación/exportación - lo único que se necesita es que el punto de entrada tenga type="module").

// Exportaciones por defecto versus exportaciones con nombre #008000
// La funcionalidad que hemos exportado hasta ahora ha estado compuesta por exportaciones con nombre - cada elemento (ya sea una función, const, etc.) ha sido referido por su nombre en la exportación, y ese nombre se ha utilizado para referirse a él en la importación también.

// También hay un tipo de exportación llamado exportación por defecto - esto está diseñado para facilitar que una función por defecto sea proporcionada por un módulo, y también ayuda a los módulos de JavaScript a interoperar con los sistemas de módulos existentes de CommonJS y AMD (como se explica muy bien en ES6 In Depth: Modules de Jason Orendorff; busque "Default exports").

// Veamos un ejemplo para explicar cómo funciona. En nuestro módulo básico square.js podemos encontrar una función llamada randomSquare() que crea un cuadrado con un color, tamaño y posición aleatorios. Queremos exportar esto como nuestro predeterminado, así que al final del archivo escribimos esto:

// export default randomSquare;
// Fíjate en la falta de llaves.

// En lugar de eso, podríamos añadir export default a la función y definirla como una función anónima, así:

// export default function (ctx) {
//   // ...
// }

// En nuestro archivo main.js, importamos la función por defecto usando esta línea:

// import randomSquare from './modules/square.js';

// De nuevo, fíjate en la falta de llaves. Esto se debe a que sólo se permite una exportación por defecto por módulo, y sabemos que es randomSquare. La línea anterior es básicamente una abreviatura de:

// import {default as randomSquare} from './modules/square.js';

// Nota: La sintaxis para renombrar elementos exportados se explica más adelante en la sección Renombrar importaciones y exportaciones.

// Evitar conflictos de nombres #008000
// Hasta ahora, nuestros módulos de dibujo de formas en el lienzo parecen funcionar bien. ¿Pero qué pasa si intentamos añadir un módulo que se ocupe de dibujar otra forma, como un círculo o un triángulo? Estas formas probablemente tendrían también funciones asociadas como draw(), reportArea(), etc.; si intentáramos importar diferentes funciones del mismo nombre en el mismo archivo de módulo de nivel superior, acabaríamos con conflictos y errores.

// Afortunadamente, hay varias maneras de evitar esto. Las veremos en las siguientes secciones.

// Cambiar el nombre de las importaciones y exportaciones #008000

// Dentro de las llaves de tu declaración de importación y exportación, puedes usar la palabra clave as junto con un nuevo nombre de característica, para cambiar el nombre de identificación que usarás para una característica dentro del módulo de nivel superior.

// Así que, por ejemplo, los dos siguientes harían el mismo trabajo, aunque de una manera ligeramente diferente:

// // dentro de module.js
// export {
//   function1 as newFunctionName,
//   function2 as anotherNewFunctionName
// };

// // dentro de main.js
// import { nuevoNombreDeLaFunción, otroNuevoNombreDeLaFunción } from './modules/module.js';
// // dentro de module.js
// export { función1, función2 };

// // dentro de main.js

// import {
//   function1 as newFunctionName
//   function2 as anotherNewFunctionName,
// } from './modules/module.js';

// Veamos un ejemplo real. En nuestro directorio de renombramiento verás el mismo sistema de módulos que en el ejemplo anterior, excepto que hemos añadido los módulos circle.js y triangle.js para dibujar e informar sobre círculos y triángulos.

// Dentro de cada uno de estos módulos, tenemos funciones con los mismos nombres que se exportan, y por lo tanto cada uno tiene la misma declaración de exportación en la parte inferior:

// export { name, draw, reportArea, reportPerimeter };
// Al importarlos en main.js, si intentáramos usar

// import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
// import { name, draw, reportArea, reportPerimeter } from './modules/circle.js';
// import { name, draw, reportArea, reportPerimeter } from './modules/triangle.js';

// El navegador arrojaría un error como "SyntaxError: redeclaration of import name" (Firefox).

// En su lugar, debemos renombrar las importaciones para que sean únicas:

// import {
//   name as squareName,
//   draw as drawSquare,
//   reportArea as reportSquareArea,
//   reportPerimeter as reportSquarePerimeter,
// } de './modules/square.js';

// import {
//   name as circleName,
//   draw as drawCircle,
//   reportArea as reportCircleArea,
//   reportPerimeter as reportCirclePerimeter,
// } de './modules/circle.js';

// import {
//   name as triangleName,
//   draw as drawTriangle,
//   reportArea as reportTriangleArea,
//   reportPerimeter as reportTrianglePerimeter,
// } de './modules/triangle.js';

// Tenga en cuenta que podría resolver el problema en los archivos del módulo en su lugar, por ejemplo

// // en square.js
// export {
//   name como squareName,
//   draw como drawSquare,
//   reportArea como reportSquareArea,
//   reportPerimeter como reportSquarePerimeter,
// };

// // en main.js
// import { squareName, drawSquare, reportSquareArea, reportSquarePerimeter } from './modules/square.js';

// Y funcionaría igual. El estilo que utilices depende de ti, sin embargo podría decirse que tiene más sentido dejar el código de tu módulo solo, y hacer los cambios en las importaciones. Esto tiene sentido especialmente cuando se importan módulos de terceros sobre los que no se tiene ningún control.

// Creación de un objeto módulo #008000
// El método anterior funciona bien, pero es un poco complicado y largo. Una solución aún mejor es importar las características de cada módulo dentro de un objeto módulo. La siguiente forma sintáctica lo hace:

// import * as Module from './modules/module.js';

// Esto toma todas las exportaciones disponibles dentro de module.js, y las hace disponibles como miembros de un objeto Module, dándole efectivamente su propio espacio de nombres. Así, por ejemplo

// Module.function1();
// Module.function2();

// De nuevo, veamos un ejemplo real. Si vas a nuestro directorio module-objects, verás el mismo ejemplo de nuevo, pero reescrito para aprovechar esta nueva sintaxis. En los módulos, las exportaciones están todas en la siguiente forma simple:

// export { name, draw, reportArea, reportPerimeter };

// Por otro lado, las importaciones tienen el siguiente aspecto

// import * as Canvas from './modules/canvas.js';

// import * as Square de './modules/square.js';
// import * as Circle de './modules/circle.js';
// import * as Triangle de './modules/triangle.js';

// En cada caso, ahora puedes acceder a las importaciones del módulo bajo el nombre del objeto especificado, por ejemplo

// const square1 = Square.draw(myCanvas.ctx, 50, 50, 100, 'blue');
// Square.reportArea(square1.length, reportList);
// Square.reportPerimeter(square1.length, reportList);

// Así que ahora puedes escribir el código igual que antes (siempre que incluyas los nombres de los objetos donde sea necesario), y las importaciones son mucho más ordenadas.

// Módulos y clases #008000
// Como ya hemos dicho, también puede exportar e importar clases; esta es otra opción para evitar conflictos en su código, y es especialmente útil si ya tiene su código de módulo escrito en un estilo orientado a objetos.

// Puede ver un ejemplo de nuestro módulo de dibujo de formas reescrito con clases ES en nuestro directorio de clases. Como ejemplo, el archivo square.js ahora contiene toda su funcionalidad en una sola clase:

// class Cuadrado {
//   constructor(ctx, listId, length, x, y, color) {
//     // ...
//   }

//   draw() {
//     // ...
//   }

//   // ...
// }
// que luego exportamos:

// export { Square };

// En main.js, lo importamos así

// import { Square } from './modules/square.js';
// Y luego usamos la clase para dibujar nuestro cuadrado:

// const square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
// square1.draw();
// square1.reportArea();
// square1.reportPerimeter();

// Agregar módulos #008000
// Habrá ocasiones en las que querrá agregar módulos juntos. Es posible que tengas varios niveles de dependencias, y que quieras simplificar las cosas, combinando varios submódulos en un módulo padre. Esto es posible utilizando la sintaxis de exportación de las siguientes formas en el módulo padre:

// export * from 'x.js'
// export { name } from 'x.js'

// Para un ejemplo, vea nuestro directorio de agregación de módulos. En este ejemplo (basado en nuestro ejemplo de clases anteriores) tenemos un módulo extra llamado shapes.js, que agrega toda la funcionalidad de circle.js, square.js y triangle.js juntos. También hemos movido nuestros submódulos dentro de un subdirectorio dentro del directorio de módulos llamado shapes. Así que la estructura del módulo en este ejemplo es

// modules/
//   canvas.js
//   shapes.js
//   shapes/
//     circle.js
//     square.js
//     triángulo.js

// En cada uno de los submódulos, la exportación tiene la misma forma, por ejemplo

// export { Square };

// A continuación viene la parte de agregación. Dentro de shapes.js, incluimos las siguientes líneas:

// export { Square } from './shapes/square.js';
// export { Triangle } from './shapes/triangle.js';
// export { Circle } from './shapes/circle.js';

// Esto toma las exportaciones de los submódulos individuales y las hace disponibles desde el módulo shapes.js.

// Nota: Las exportaciones referenciadas en shapes.js básicamente son redirigidas a través del archivo y no existen realmente allí, por lo que no podrás escribir ningún código útil relacionado dentro del mismo archivo.

// Así que ahora en el archivo main.js, podemos acceder a las tres clases del módulo reemplazando

// import { Square } from './modules/square.js';
// import { Circle } de './modules/circle.js';
// import { Triangle } from './modules/triangle.js';

// con la siguiente línea única:

// import { Square, Circle, Triangle } from './modules/shapes.js';

// Carga dinámica de módulos #008000
// Una adición reciente a la funcionalidad de los módulos de JavaScript es la carga dinámica de módulos. Esto permite cargar dinámicamente los módulos sólo cuando se necesitan, en lugar de tener que cargar todo por adelantado. Esto tiene algunas ventajas obvias de rendimiento; sigamos leyendo y veamos cómo funciona.

// Esta nueva funcionalidad te permite llamar a import() como una función, pasándole la ruta del módulo como parámetro. Devuelve una Promesa, que se cumple con un objeto de módulo (ver Creación de un objeto de módulo) dándole acceso a las exportaciones de ese objeto. Por ejemplo

// import('./modules/miMódulo.js')
//   .then((module) => {
//     // Haz algo con el módulo.
//   });

// Veamos un ejemplo. En el directorio dynamic-module-imports tenemos otro ejemplo basado en nuestro ejemplo de clases. Esta vez, sin embargo, no estamos dibujando nada en el lienzo cuando el ejemplo se carga. En su lugar, incluimos tres botones - "Círculo", "Cuadrado" y "Triángulo" - que, al ser pulsados, cargan dinámicamente el módulo requerido y lo utilizan para dibujar la forma asociada.

// En este ejemplo sólo hemos hecho cambios en nuestros archivos index.html y main.js - las exportaciones de módulos siguen siendo las mismas que antes.

// En el archivo main.js hemos tomado una referencia a cada botón utilizando una llamada a document.querySelector(), por ejemplo

// const squareBtn = document.querySelector('.square');

// A continuación, adjuntamos un receptor de eventos a cada botón para que, al pulsarlo, se cargue dinámicamente el módulo correspondiente y se utilice para dibujar la forma:

// squareBtn.addEventListener('click', () => {
//   import('./modules/square.js').then((Module) => {
//     const square1 = new Module.Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, 'blue');
//     square1.draw();
//     square1.reportArea();
//     square1.reportPerimeter();
//   })
// });

// Ten en cuenta que, como el cumplimiento de la promesa devuelve un objeto del módulo, la clase se convierte en una subfigura del objeto, por lo que ahora tenemos que acceder al constructor con Module. antepuesto, por ejemplo Module.Square( /* ... */ ).

// Otra ventaja de las importaciones dinámicas es que siempre están disponibles, incluso en entornos de script. Por lo tanto, si tienes una etiqueta <script> en tu HTML que no tiene type="module", todavía puedes reutilizar el código distribuido como módulos importándolo dinámicamente.

// <script>
//   import("./modules/square.js").then((module) => {
//     // Haz algo con el módulo.
//   });
//   // Otro código que opera en el ámbito global y no está
//   // listo para ser refactorizado en módulos todavía.
//   var btn = document.querySelector(".square");
// </script>
