// Introducción #ff0

// Este capítulo presenta JavaScript y analiza algunos de sus conceptos fundamentales.

// Dónde encontrar información sobre JavaScript #008000
// La documentación de JavaScript en MDN incluye lo siguiente:

// Learn Web Development proporciona información para principiantes e introduce conceptos básicos de programación e Internet.
// La Guía de JavaScript (esta guía) proporciona información general sobre el lenguaje JavaScript y sus objetos.
// JavaScript Reference proporciona material de referencia detallado para JavaScript.

// ¿Qué es JavaScript? #008000
// JavaScript es un lenguaje de programación multiplataforma y orientado a objetos que se utiliza para hacer que las páginas web sean interactivas (por ejemplo, con animaciones complejas, botones clicables, menús emergentes, etc.). También existen versiones más avanzadas de JavaScript del lado del servidor, como Node.js, que permiten añadir a un sitio web más funcionalidades que la descarga de archivos (como la colaboración en tiempo real entre varios ordenadores). Dentro de un entorno anfitrión (por ejemplo, un navegador web), JavaScript puede conectarse a los objetos de su entorno para proporcionar un control programático sobre ellos.

// JavaScript contiene una biblioteca estándar de objetos, como Array, Date y Math, y un conjunto básico de elementos del lenguaje, como operadores, estructuras de control y sentencias. El núcleo de JavaScript puede ampliarse para diversos fines complementándolo con objetos adicionales; por ejemplo:

// El JavaScript del lado del cliente amplía el núcleo del lenguaje proporcionando objetos para controlar un navegador y su Modelo de Objetos del Documento (DOM). Por ejemplo, las extensiones del lado del cliente permiten que una aplicación coloque elementos en un formulario HTML y responda a los eventos del usuario, como los clics del ratón, la introducción de datos en el formulario y la navegación por la página.

// El JavaScript del lado del servidor amplía el lenguaje principal proporcionando objetos relevantes para la ejecución de JavaScript en un servidor. Por ejemplo, las extensiones del lado del servidor permiten que una aplicación se comunique con una base de datos, proporcione continuidad de la información de una invocación a otra de la aplicación o realice manipulaciones de archivos en un servidor.

// Esto significa que en el navegador, JavaScript puede cambiar el aspecto de la página web (DOM). Y, del mismo modo, el JavaScript de Node.js en el servidor puede responder a peticiones personalizadas enviadas por el código ejecutado en el navegador.

// JavaScript y Java #008000
// JavaScript y Java son similares en algunos aspectos, pero fundamentalmente diferentes en otros. El lenguaje JavaScript se parece a Java, pero no tiene la tipificación estática y la comprobación de tipos fuerte de Java. JavaScript sigue la mayor parte de la sintaxis de las expresiones de Java, las convenciones de nomenclatura y las construcciones básicas de flujo de control, razón por la que se cambió su nombre de LiveScript a JavaScript.

// En contraste con el sistema de clases en tiempo de compilación de Java construido por declaraciones, JavaScript soporta un sistema en tiempo de ejecución basado en un pequeño número de tipos de datos que representan valores numéricos, booleanos y de cadena. JavaScript tiene un modelo de objetos basado en prototipos en lugar del modelo de objetos basado en clases, más común. El modelo basado en prototipos proporciona una herencia dinámica; es decir, lo que se hereda puede variar para los objetos individuales. JavaScript también admite funciones sin ningún requisito declarativo especial. Las funciones pueden ser propiedades de los objetos y ejecutarse como métodos de tipado libre.

// JavaScript es un lenguaje muy libre en comparación con Java. No es necesario declarar todas las variables, clases y métodos. No tiene que preocuparse de si los métodos son públicos, privados o protegidos, y no tiene que implementar interfaces. Las variables, los parámetros y los tipos de retorno de las funciones no están explícitamente tipados.

// Java es un lenguaje de programación basado en clases, diseñado para la ejecución rápida y la seguridad de tipos. La seguridad de tipos significa, por ejemplo, que no se puede convertir un entero de Java en una referencia a un objeto o acceder a la memoria privada corrompiendo el código de bytes de Java. El modelo basado en clases de Java significa que los programas consisten exclusivamente en clases y sus métodos. La herencia de clases y la tipificación fuerte de Java requieren, por lo general, jerarquías de objetos fuertemente acopladas. Estos requisitos hacen que la programación en Java sea más compleja que la de JavaScript.

// En cambio, JavaScript desciende en espíritu de una línea de lenguajes más pequeños y de tipado dinámico como HyperTalk y dBASE. Estos lenguajes de scripting ofrecen herramientas de programación a un público mucho más amplio debido a su sintaxis más sencilla, su funcionalidad especializada incorporada y sus requisitos mínimos para la creación de objetos.

// Diferencias entre Javascript y java #008000

// // ver imagen...

// JavaScript y la especificación ECMAScript #008000
// JavaScript está estandarizado en Ecma International, la asociación europea para la estandarización de los sistemas de información y comunicación (ECMA era antes un acrónimo de la Asociación Europea de Fabricantes de Ordenadores) para ofrecer un lenguaje de programación estandarizado e internacional basado en JavaScript. Esta versión estandarizada de JavaScript, llamada ECMAScript, se comporta de la misma manera en todas las aplicaciones que soportan el estándar. Las empresas pueden utilizar el lenguaje estándar abierto para desarrollar su implementación de JavaScript. El estándar ECMAScript está documentado en la especificación ECMA-262.

// El estándar ECMA-262 también está aprobado por la ISO (Organización Internacional de Normalización) como ISO-16262. También puedes encontrar la especificación en el sitio web de Ecma International. La especificación ECMAScript no describe el Modelo de Objetos del Documento (DOM), que está estandarizado por el World Wide Web Consortium (W3C) y/o WHATWG (Web Hypertext Application Technology Working Group). El DOM define la forma en que los objetos del documento HTML se exponen a su script. Para conocer mejor las diferentes tecnologías que se utilizan al programar con JavaScript, consulte el artículo Visión general de las tecnologías de JavaScript.

// La documentación de JavaScript frente a la especificación ECMAScript #00aae4
// La especificación ECMAScript es un conjunto de requisitos para implementar ECMAScript. Es útil si quieres implementar características del lenguaje que cumplen con los estándares en tu implementación o motor de ECMAScript (como SpiderMonkey en Firefox, o V8 en Chrome).

// El documento de ECMAScript no pretende ayudar a los programadores de scripts. Utilice la documentación de JavaScript para obtener información al escribir scripts.

// La especificación ECMAScript utiliza una terminología y una sintaxis que pueden resultar desconocidas para un programador de JavaScript. Aunque la descripción del lenguaje puede ser diferente en ECMAScript, el lenguaje en sí sigue siendo el mismo. JavaScript es compatible con todas las funciones descritas en la especificación ECMAScript.

// La documentación de JavaScript describe aspectos del lenguaje que son apropiados para un programador de JavaScript.

// iniciarse en el uso de javascript
// Empezar a usar JavaScript es fácil: todo lo que necesitas es un navegador web moderno. Esta guía incluye algunas características de JavaScript que sólo están disponibles actualmente en las últimas versiones de Firefox, por lo que se recomienda utilizar la versión más reciente de Firefox.

// La herramienta de la Consola Web integrada en Firefox es útil para experimentar con JavaScript; puedes utilizarla en dos modos: modo de entrada de una sola línea y modo de entrada de varias líneas.

// Entrada de una sola línea en la Consola Web #00aae4
// La Consola Web muestra información sobre la página web cargada actualmente, y también incluye un intérprete de JavaScript que puedes utilizar para ejecutar expresiones de JavaScript en la página actual.

// Para abrir la consola web (Ctrl+Mayús+I en Windows y Linux o Cmd-Opción-K en Mac), abre el menú Herramientas en Firefox y selecciona "Desarrollador ▶ Consola web".

// La consola web aparece en la parte inferior de la ventana del navegador. A lo largo de la parte inferior de la consola hay una línea de entrada que puedes utilizar para introducir JavaScript, y la salida aparece en el panel de arriba:

// La consola funciona exactamente igual que eval: se devuelve la última expresión introducida. Para simplificar, se puede imaginar que cada vez que se introduce algo en la consola, se rodea de console.log alrededor de eval, así

// console.log(eval('3 + 5'))

// Entrada de varias líneas en la consola web #00aae4
// El modo de entrada de una sola línea de la Consola Web es estupendo para probar rápidamente las expresiones de JavaScript, pero aunque puede ejecutar varias líneas, no es muy conveniente para ello. Para un JavaScript más complejo, puede utilizar el modo de entrada multilínea.

// Hola mundo #00aae4
// Para empezar a escribir JavaScript, abra la Consola Web en modo multilínea y escriba su primer código JavaScript "Hola mundo":

function saludarme(miNombre) {
  alert(`Hola, ${miNombre}`);
}

saludarme("Jhon Doe");

// Pulsa Cmd+Enter o Ctrl+Enter (o haz clic en el botón Ejecutar) para ver cómo se desarrolla en tu navegador.

// En las siguientes páginas, esta guía te introducirá en la sintaxis y las características del lenguaje JavaScript, para que puedas escribir aplicaciones más complejas.

// Pero por ahora, recuerda incluir siempre la función (function(){"use strict"; antes de tu código, y añade })(); al final de tu código. Los artículos sobre el modo estricto y IIFE explican lo que hacen, pero por ahora se puede pensar que hacen lo siguiente

// Evitar la semántica en JavaScript que hace tropezar a los principiantes.
// Evitar que los fragmentos de código ejecutados en la consola interactúen entre sí (por ejemplo, que algo creado en una ejecución de consola se utilice en otra ejecución de consola).
