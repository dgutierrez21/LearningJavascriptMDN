// Expresiones regulares #ff0

// Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en las cadenas. En JavaScript, las expresiones regulares son también objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con los métodos match(), matchAll(), replace(), replaceAll(), search() y split() de String. Este capítulo describe las expresiones regulares de JavaScript.

// Creación de una expresión regular #008000
// Una expresión regular se construye de dos maneras:

// Utilizando un literal de expresión regular, que consiste en un patrón encerrado entre barras, como se indica a continuación:

const re = /ab+c/;

console.log(re);

// Los literales de expresión regular proporcionan la compilación de la expresión regular cuando se carga el script. Si la expresión regular permanece constante, su uso puede mejorar el rendimiento.

// O llamando a la función constructora del objeto RegExp, como sigue

const re1 = new RegExp("ab+c");

console.log(re1);

// El uso de la función constructora proporciona la compilación en tiempo de ejecución de la expresión regular. Utilice la función constructora cuando sepa que el patrón de la expresión regular va a cambiar, o cuando no conozca el patrón y lo obtenga de otra fuente, como la entrada del usuario.
