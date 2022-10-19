// Gramática y tipos #ff0

// Este capítulo analiza la gramática básica de JavaScript, las declaraciones de variables, los tipos de datos y los literales.

// Conceptos básicos #008000
// JavaScript toma prestada la mayor parte de su sintaxis de Java, C y C++, pero también ha recibido la influencia de Awk, Perl y Python.

// JavaScript distingue entre mayúsculas y minúsculas y utiliza el conjunto de caracteres Unicode. Por ejemplo, la palabra Früh (que significa "temprano" en alemán) puede utilizarse como nombre de variable.

const Früh = "foobar";

console.log(Früh);

// Pero, la variable früh no es la misma que Früh porque JavaScript distingue entre mayúsculas y minúsculas.

const früh = "foobar2345";

console.log(früh);

// En JavaScript, las instrucciones se llaman sentencias y se separan con punto y coma (;).

// El punto y coma no es necesario después de una sentencia si se escribe en su propia línea. Pero si se desea más de una sentencia en una línea, entonces deben estar separadas por punto y coma.

// Nota: ECMAScript también tiene reglas para la inserción automática de punto y coma (ASI) para terminar las sentencias. (Para más información, consulte la referencia detallada sobre la gramática léxica de JavaScript).

// Sin embargo, se considera una buena práctica escribir siempre un punto y coma después de una sentencia, incluso cuando no es estrictamente necesario. Esta práctica reduce las posibilidades de que se introduzcan errores en el código.

// El texto fuente del script de JavaScript se escanea de izquierda a derecha, y se convierte en una secuencia de elementos de entrada que son tokens, caracteres de control, terminadores de línea, comentarios o espacios en blanco. (Los espacios, los tabuladores y los caracteres de nueva línea se consideran espacios en blanco).

// Comentarios #008000
// La sintaxis de los comentarios es la misma que en C++ y en muchos otros lenguajes:

// un comentario de una línea

/* esto es un comentario más largo,
    un comentario de varias líneas
 */

//     No se pueden anidar comentarios en bloque. Esto sucede a menudo cuando se incluye accidentalmente una secuencia */ en el comentario, que terminará el comentario.

// /* Sin embargo, no puede anidar comentarios */ SyntaxError */
// En este caso, debe romper el patrón */. Por ejemplo, insertando una barra invertida:

// /* Puede /* anidar comentarios *\/ escapando de las barras inclinadas */

// Los comentarios se comportan como espacios en blanco, y se descartan durante la ejecución del script.

// Nota: También puede ver un tercer tipo de sintaxis de comentario al principio de algunos archivos JavaScript, que se parece a esto: #!/usr/bin/env node.

// Esto se denomina sintaxis de comentario hashbang, y es un comentario especial que se utiliza para especificar la ruta de acceso a un motor JavaScript concreto que debe ejecutar el script. Ver Comentarios Hashbang para más detalles.

// Declaraciones #008000
// JavaScript tiene tres tipos de declaraciones de variables.

// var
// Declara una variable, opcionalmente inicializándola con un valor.

// let
// Declara una variable local de ámbito de bloque, y opcionalmente la inicializa con un valor.

// const
// Declara una constante con nombre, de sólo lectura y con alcance de bloque.

// Variables #00aae4
// Las variables se utilizan como nombres simbólicos para los valores de la aplicación. Los nombres de las variables, llamados identificadores, se ajustan a ciertas reglas.

// Un identificador de JavaScript suele comenzar con una letra, un guión bajo (_) o un signo de dólar ($). Los caracteres siguientes también pueden ser dígitos (0-9). Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres de la A a la Z (mayúsculas), así como de la a a la z (minúsculas).

// Puede utilizar la mayoría de las letras ISO 8859-1 o Unicode, como å y ü, en los identificadores. (Para más detalles, consulte esta entrada del blog o la referencia de la gramática léxica). También puede utilizar las secuencias de escape de Unicode como caracteres en los identificadores.

// Algunos ejemplos de nombres legales son Number_hits, temp99, $credit y _name.

// Declaración de variables #00aae4
// Puedes declarar una variable de dos maneras:

// Con la palabra clave var. Por ejemplo, var x = 42. Esta sintaxis puede utilizarse para declarar variables locales y globales, dependiendo del contexto de ejecución.
// Con la palabra clave const o let. Por ejemplo, let y = 13. Esta sintaxis se puede utilizar para declarar una variable local de ámbito de bloque. (Ver Ámbito de las variables más adelante).

// Puede declarar variables para descomponer valores de Literales de Objeto utilizando la sintaxis de Asignación de Desestructuración. Por ejemplo, let { bar } = foo. Esto creará una variable llamada bar y le asignará el valor correspondiente a la clave del mismo nombre de nuestro objeto foo.

// También se puede asignar un valor a una variable. Por ejemplo, x = 42. Esta forma crea una variable global no declarada. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas pueden conducir a menudo a un comportamiento inesperado. Por lo tanto, se desaconseja el uso de variables globales no declaradas.

// Evaluación de variables #00aae4
// Una variable declarada mediante la sentencia var o let sin valor asignado especificado tiene el valor de indefinida.

// Si se intenta acceder a una variable no declarada, se lanza una excepción ReferenceError:

var a;

console.log(`El valor de la variable a es ${a}`); // El valor de la variable a es undefined

console.log(`El valor de la variable b es ${b}`); // El valor de la variable b es undefined

var b;
// Esta puede desconcertarte hasta que leas "Levantamiento de variables" más abajo

let x;

console.log(`El valor de la variable x es ${x}`); // El valor de la variable x es undefined

console.log(`El valor de la variable y es ${y}`); // Uncaught ReferenceError: No se puede acceder a 'y' antes de la inicialización

let y;

// Puede utilizar undefined para determinar si una variable tiene un valor. En el siguiente código, a la variable input no se le asigna un valor, y la afirmación if se evalúa como true.

let input;

if (input === undefined) {
  hacerEsto();
} else {
  hacerEso();
}

// El valor indefinido se comporta como falso cuando se utiliza en un contexto booleano. Por ejemplo, el siguiente código ejecuta la función miFunción porque el elemento miMatriz está indefinido:

const miMatriz = [];

if (!miMatriz[0]) {
  miFuncion();
}

// El valor indefinido se convierte en NaN cuando se utiliza en un contexto numérico.

let t;

console.log(t + 2); // Se evalúa como NaN

// Cuando se evalúa una variable nula, el valor nulo se comporta como 0 en contextos numéricos y como falso en contextos booleanos. Por ejemplo:

const n = null;

console.log(n * 32); // Se registrará 0 en la consola

// Alcance de las variables #00aae4
// Cuando declaras una variable fuera de cualquier función, se llama variable global, porque está disponible para cualquier otro código en el documento actual. Cuando se declara una variable dentro de una función, se denomina variable local, porque sólo está disponible dentro de esa función.

// Las declaraciones let y const se limitan al bloque en el que se declaran.

if (Math.random() > 0.5) {
  const y1 = 5;
}

console.log(y1); //  // ReferenceError: y1 no está definido

// Sin embargo, las variables creadas con var no son de ámbito de bloque, sino sólo locales a la función (o ámbito global) dentro de la cual reside el bloque.

// Por ejemplo, el siguiente código registrará 5, porque el ámbito de x es el contexto global (o el contexto de la función si el código es parte de una función). El ámbito de x no se limita al bloque inmediato de la sentencia if.

if (true) {
  var x1 = 5;
}

console.log(x1); // 5

// Elevación de variables #00aae4
// Otra cosa inusual sobre las variables en JavaScript es que puedes referirte a una variable declarada más tarde, sin obtener una excepción.

// Este concepto se conoce como elevación. Las variables en JavaScript son, en cierto sentido, "izadas" (o "levantadas") a la parte superior de la función o declaración. Sin embargo, las variables elevadas devuelven un valor indefinido. Por lo tanto, incluso si se declara e inicializa después de usar o hacer referencia a esta variable, sigue devolviendo un valor indefinido.

/**
 * ejemplo 1
 */

console.log(x2 === undefined); // true

var x2 = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor indefinido

var miVar = "Mi valor";

(function () {
  console.log(miVar); // undefined
  var miVar = "Valor local";
})();

// Los ejemplos anteriores se interpretarán igual que:

/**
 * ejemplo 1
 */

var x3;

console.log(x === undefined); // true

x3 = 3;

/**
 * ejemplo 2
 */

var miVar2 = "Mi valor";

(function () {
  var miVar2;
  console.log(miVar2); // undefined
  miVar2 = "Valor local";
})();

// Debido a la elevación, todas las sentencias var de una función deben colocarse lo más cerca posible de la parte superior de la función. Esta práctica aumenta la claridad del código.

// let y const se elevan pero no se inicializan. Hacer referencia a la variable en el bloque antes de la declaración de la variable resulta en un ReferenceError, porque la variable está en una "zona muerta temporal" desde el inicio del bloque hasta que se procesa la declaración.

console.log(x4); // ReferenceError

const x4 = 3;
