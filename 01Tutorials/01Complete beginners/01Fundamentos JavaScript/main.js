// Conceptos básicos de JavaScript #ff0
// JavaScript es un lenguaje de programación que agrega interactividad a su sitio web. Esto sucede en los juegos, en el comportamiento de las respuestas cuando se presionan botones o con la entrada de datos en los formularios; con estilo dinámico; con animación, etc. Este artículo le ayuda a comenzar con JavaScript y mejora su comprensión de lo que es posible.

// ¿Qué es JavaScript? #008000
// JavaScript es un poderoso lenguaje de programación que puede agregar interactividad a un sitio web. Fue inventado por Brendan Eich.

// JavaScript es versátil y amigable para principiantes. Con más experiencia, podrás crear juegos, gráficos animados en 2D y 3D, aplicaciones completas basadas en bases de datos y mucho más.

// JavaScript en sí es relativamente compacto, pero muy flexible. Los desarrolladores han escrito una variedad de herramientas sobre el lenguaje JavaScript central, desbloqueando una gran cantidad de funcionalidad con el mínimo esfuerzo. Estos incluyen:

// Interfaces de programación de aplicaciones (API) del navegador integradas en los navegadores web, que proporcionan funcionalidades como la creación dinámica de HTML y la configuración de estilos CSS; recopilar y manipular una secuencia de vídeo desde la cámara web de un usuario, o generar gráficos 3D y muestras de audio.

// API de terceros que permiten a los desarrolladores incorporar funcionalidad en sitios de otros proveedores de contenido, como Twitter o Facebook.

// Marcos y bibliotecas de terceros que puede aplicar a HTML para acelerar el trabajo de creación de sitios y aplicaciones.

// Está fuera del alcance de este artículo, como una ligera introducción a JavaScript, presentar los detalles de cómo el lenguaje JavaScript central es diferente de las herramientas enumeradas anteriormente. Puede obtener más información en el área de aprendizaje de JavaScript de MDN, así como en otras partes de MDN.

// La siguiente sección presenta algunos aspectos del lenguaje principal y ofrece la oportunidad de jugar con algunas características de la API del navegador también. ¡Que te diviertas!

// Un ejemplo de Hello world! #008000
// ¡JavaScript es una de las tecnologías web modernas más populares! A medida que sus habilidades de JavaScript crecen, sus sitios web entrarán en una nueva dimensión de poder y creatividad.

// Sin embargo, sentirse cómodo con JavaScript es más difícil que sentirse cómodo con HTML y CSS. Es posible que tenga que comenzar poco a poco y progresar gradualmente. Para comenzar, examinemos cómo agregar JavaScript a su página para crear un ejemplo de Hello world!. (¡Hola mundo! es el estándar para ejemplos introductorios de programación.)

// Vaya a su sitio de prueba y cree una nueva carpeta llamada scripts. Dentro de la carpeta de scripts, cree un nuevo documento de texto llamado main.js y guárdelo.

// En el archivo index.html, introduzca este código en una nueva línea, justo antes de la etiqueta </body> de cierre:

// <script src="scripts/main.js"></script>
//

// Esto está haciendo el mismo trabajo que el elemento <link> para CSS. Aplica el JavaScript a la página, por lo que puede tener un efecto en el HTML (junto con el CSS y cualquier otra cosa en la página).

// Agregue este código al archivo main.js:
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// Asegúrese de que los archivos HTML y JavaScript estén guardados. A continuaciónindex.html en su navegador. El hello word:

// Nota: La razón por la que las instrucciones (arriba) colocan el elemento <script> cerca de la parte inferior del archivo HTML es que el navegador lee el código en el orden en que aparece en el archivo.

// Si el JavaScript se carga primero y se supone que afecta al HTML que aún no se ha cargado, podría haber problemas. Colocar JavaScript cerca de la parte inferior de una página HTML es una forma de acomodar esta dependencia. Para obtener más información sobre enfoques alternativos, consulte Estrategias de carga de scripts.

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Word!";

// ¿¿Qué pasó??
// El texto del encabezado cambió a Hello world! usando JavaScript. Para ello, utilice una función denominada querySelector() para obtener una referencia a su encabezado y, a continuación, almacenarla en una variable denominada myHeading. Esto es similar a lo que hicimos usando selectores CSS. Cuando desee hacer algo con un elemento, primero debe seleccionarlo.

// Después de eso, el código establece el valor de la propiedad textContent de la variable myHeading (que representa el contenido del encabezado) en Hello world!.
