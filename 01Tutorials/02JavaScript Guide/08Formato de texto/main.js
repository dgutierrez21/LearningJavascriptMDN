// Formato de Texto #ff0

// Este capítulo presenta cómo trabajar con cadenas y texto en JavaScript.

// Cadenas #008000
// El tipo String de JavaScript se utiliza para representar datos textuales. Es un conjunto de "elementos" de valores enteros sin signo de 16 bits (unidades de código UTF-16). Cada elemento de la cadena ocupa una posición en la misma. El primer elemento está en el índice 0, el siguiente en el índice 1, y así sucesivamente. La longitud de una cadena es el número de elementos que contiene. Se pueden crear cadenas utilizando literales de cadena u objetos de cadena.

// Cadenas literales
// Puedes crear cadenas simples utilizando comillas simples o dobles:

console.log("Esta es una cadena literal");

// Se pueden crear cadenas más avanzadas utilizando secuencias de escape:

// Secuencias de escape hexadecimales #00aae4
// El número después de \x se interpreta como un número hexadecimal.

console.log("\xA9"); // "©"

// Secuencias de escape Unicode #00aae4
// Las secuencias de escape Unicode requieren al menos cuatro dígitos hexadecimales después de \u.

console.log("\u00A9"); // "©"

// Escapes de puntos de código Unicode #00aae4
// Con los escapes de puntos de código Unicode, se puede escapar cualquier carácter utilizando números hexadecimales, por lo que es posible utilizar puntos de código Unicode hasta 0x10FFFF. Con los escapes Unicode simples, a menudo es necesario escribir las mitades sustitutas por separado para conseguir el mismo resultado.

// Véase también String.fromCodePoint() o String.prototype.codePointAt().

console.log("\u{2F804}");

// // lo mismo con escapes Unicode simples

console.log("\uD87E\uDC04");

// Objetos de cadena #00aae4
// El objeto String es una envoltura alrededor del tipo de datos primitivo string.

const foo = new String("FOO123"); // Crea un objeto String
console.log(foo); // Muestra: [String: 'FOO123']
console.log(typeof foo); // Devuelve 'objeto'

// Puede llamar a cualquiera de los métodos del objeto String en un valor literal de cadena: JavaScript convierte automáticamente el literal de cadena en un objeto String temporal, llama al método y luego descarta el objeto String temporal. También puede utilizar la propiedad length con un literal de cadena.

// Debería utilizar literales de cadena a menos que necesite específicamente utilizar un objeto String, porque los objetos String pueden tener un comportamiento contraintuitivo. Por ejemplo

const primerCadena = "2 + 2"; // Crea un valor literal de cadena

console.log(primerCadena);

const segundaCadena = new String("2 + 2"); // Crea un objeto String

console.log(segundaCadena);
// eval(firstString); // Devuelve el número 4
// eval(secondString); // Devuelve un objeto String que contiene "2 + 2"

// Un objeto String tiene una propiedad, length, que indica el número de unidades de código UTF-16 en la cadena. Por ejemplo, el siguiente código asigna a helloLength el valor 13, porque "Hello, World!" tiene 13 caracteres, cada uno representado por una unidad de código UTF-16. Puedes acceder a cada unidad de código usando un estilo de corchete de matriz. No puedes cambiar los caracteres individuales porque las cadenas son objetos inmutables tipo array:

const hola = "¡Hola, mundo!";
const holaLongitud = hola.length;
hola[1] = "X"; // Esto no tiene efecto, porque las cadenas son inmutables
console.log(hola[1]); // Esto devuelve "H"

// Los caracteres cuyos valores escalares Unicode son mayores que U+FFFF (como algunos caracteres chinos/japoneses/coreanos/vietnamitas poco comunes y algunos emoji) se almacenan en UTF-16 con dos unidades de código sustituto cada una. Por ejemplo, una cadena que contenga el único carácter U+1F600 "Emoji grinning face" tendrá una longitud de 2. Acceder a las unidades de código individuales en una cadena de este tipo utilizando paréntesis puede tener consecuencias no deseadas, como la formación de cadenas con unidades de código sustitutas no coincidentes, en violación del estándar Unicode. (Se añadirán ejemplos a esta página una vez que se haya corregido el error MDN 857438.) Véase también String.fromCodePoint() o String.prototype.codePointAt().

// Un objeto String tiene una gran variedad de métodos: por ejemplo, los que devuelven una variación de la propia cadena, como substring y toUpperCase.

console.log(hola.toUpperCase());

// La siguiente tabla resume los métodos de los objetos String.

// ver imagen...

// Ejemplos

console.log(hola.charAt(3));

console.log(hola.indexOf("mundo"));

console.log(hola.includes("Hola"));

console.log(hola.startsWith("¡"));

console.log(hola.endsWith("!"));

const var1 = "Hola",
  var2 = "Mundo";

const concat = var1.concat(" ", var2);

console.log(concat); // Hola Mundo

const arr1 = concat.split(" ");

console.log(arr1[0]);
console.log(arr1[1]);

console.log(concat.substring(0, 4));
console.log(concat.substring(5));

console.log(concat.replace("Mundo", "Fred"));

const concat2 = concat + " | ";

console.log(`La siguiente cadena se repite 5 veces: ${concat2.repeat(5)}`);

// Literales de plantilla multilínea #008000
// Los literales de plantilla son literales de cadena que permiten expresiones incrustadas. Con ellos se pueden utilizar cadenas multilíneas y funciones de interpolación de cadenas.

// Los literales de plantillas van acompañados del carácter "back-tick" (` `) (acento grave) en lugar de comillas dobles o simples. Los literales de las plantillas pueden contener marcadores de posición. Éstos se indican con el signo del dólar y las llaves (${expresión}).

// Líneas múltiples #00aae4
// Cualquier carácter de nueva línea que se inserte en la fuente forma parte del literal de plantilla. Utilizando cadenas normales, tendría que utilizar la siguiente sintaxis para obtener cadenas multilínea:

console.log("Cadena de texto 1\n\
Cadena de texto 2");
// // "cadena texto línea 1
// // cadena texto línea 2"

// Para conseguir el mismo efecto con cadenas de varias líneas, ahora puedes escribir

console.log(`Cadena de texto 1
cadena de text0 2`);
// // "cadena texto línea 1
// // cadena texto línea 2"

// Expresiones incrustadas #00aae4
// Para incrustar expresiones dentro de cadenas normales, se utilizaría la siguiente sintaxis:

const cinco = 5;
const diez = 10;
console.log(
  "Quince es " + (cinco + diez) + " y no " + (2 * cinco + diez) + "."
);
// // "Quince es 15 y no 20".

// Ahora, con los literales de plantilla, puedes hacer uso del azúcar sintáctico haciendo sustituciones como esta más legibles:

console.log(`Quince es ${diez + cinco} y no ${2 * cinco + diez}.`);
// // "Quince es 15 y no 20".

// Para más información, lea sobre los literales de plantilla en la referencia de JavaScript.

// Internacionalización #008000
// El objeto Intl es el espacio de nombres para la API de internacionalización de ECMAScript, que proporciona una comparación de cadenas sensible al idioma, un formato numérico y un formato de fecha y hora. Los constructores de los objetos Intl.Collator, Intl.NumberFormat e Intl.DateTimeFormat son propiedades del objeto Intl.

// Formato de fecha y hora #00aae4
// El objeto Intl.DateTimeFormat es útil para formatear la fecha y la hora. A continuación, se formatea una fecha para el inglés que se utiliza en Estados Unidos. (El resultado es diferente en otra zona horaria).

// // 17 de julio de 2014 00:00:00 UTC:
const julio172014 = new Date("2014-07-17");

const opciones = {
  anio: "2 dígitos",
  mes: "2 dígitos",
  día: "2 dígitos",
  hora: "2 dígitos",
  minuto: "2 dígitos",
  nombreZonaHoraría: "corto",
};
const fechaHoraAmericana = new Intl.DateTimeFormat("en-US", opciones).format;

// // La zona horaria local varía en función de su configuración

// // En CEST, registros: 17/07/14, 02:00 AM GMT+2
// // En PDT, registros: 16/07/14, 05:00 PM GMT-7

console.log(fechaHoraAmericana(julio172014));

// Formato de números #00aae4
// El objeto Intl.NumberFormat es útil para dar formato a los números, por ejemplo a las monedas.

const precioGasolina = new Intl.NumberFormat("en-US", {
  estilo: "moneda",
  moneda: "USD",
  digitosFraccionMinima: 3,
});

console.log();

// Intercalación #00aae4
// El objeto Intl.Collator es útil para comparar y ordenar cadenas.

// Por ejemplo, en realidad hay dos órdenes de ordenación diferentes en alemán, agenda y diccionario. La ordenación de la guía telefónica enfatiza el sonido, y es como si "ä", "ö", etc. se expandieran a "ae", "oe", etc. antes de la ordenación.

const nombres = ["Hochberg", "Hönigswald", "Holzman"];

const guiaTelefonicaAlemana = new Intl.Collator("de-DE-u-co-phonebk");

// como si se tratara de ordenar ["Hochberg", "Hoenigswald", "Holzman"]:

console.log(nombres.sort(guiaTelefonicaAlemana.compare).join(", "));

// registro "Hochberg, Hönigswald, Holzman"

// Algunas palabras alemanas se conjugan con diéresis adicionales, por lo que en los diccionarios es sensato ordenar ignorando las diéresis (excepto cuando se trata de ordenar palabras que sólo se diferencian por las diéresis: schon antes de schön).

const diccionarioAleman = new Intl.Collator("de-DE-u-co-dict");

// como si se tratara de ordenar ["Hochberg", "Honigswald", "Holzman"]:

console.log(nombres.sort(diccionarioAleman.compare).join(", "));

// registro "Hochberg, Holzman, Hönigswald"

// Para obtener más información sobre la API Intl, consulte también Introducción a la API de internacionalización de JavaScript.
