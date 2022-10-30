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
