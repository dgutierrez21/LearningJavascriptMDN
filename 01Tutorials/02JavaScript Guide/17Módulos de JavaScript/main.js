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
