// Módulos de JavaScript #ff0

// Esta guía le ofrece todo lo que necesita para empezar a utilizar la sintaxis de los módulos de JavaScript.

// Antecedentes de los módulos #00aae4
// Los programas de JavaScript empezaron siendo bastante pequeños - la mayor parte de su uso en los primeros días era para realizar tareas aisladas de scripting, proporcionando un poco de interactividad a sus páginas web cuando era necesario, por lo que generalmente no se necesitaban grandes scripts. Si avanzamos unos años, ahora tenemos aplicaciones completas que se ejecutan en los navegadores con mucho JavaScript, así como el uso de JavaScript en otros contextos (Node.js, por ejemplo).

// Por lo tanto, en los últimos años ha tenido sentido empezar a pensar en proporcionar mecanismos para dividir los programas de JavaScript en módulos separados que puedan importarse cuando se necesiten. Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y frameworks de JavaScript que permiten el uso de módulos (por ejemplo, otros sistemas de módulos basados en CommonJS y AMD como RequireJS, y más recientemente Webpack y Babel).

// La buena noticia es que los navegadores modernos han empezado a soportar la funcionalidad de los módulos de forma nativa, y de eso trata este artículo. Esto sólo puede ser algo bueno - los navegadores pueden optimizar la carga de módulos, haciéndola más eficiente que tener que usar una librería y hacer todo ese procesamiento extra del lado del cliente y viajes de ida y vuelta adicionales.

// El uso de módulos nativos de JavaScript depende de las sentencias import y export; éstas son soportadas en los navegadores como se muestra en la tabla de compatibilidad de abajo.

// VER TABLA EN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#browser_compatibility
