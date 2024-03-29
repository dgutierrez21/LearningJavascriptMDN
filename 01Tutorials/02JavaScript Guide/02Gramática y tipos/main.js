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

// Elevación de funciones #00aae4
// Las funciones se elevan si se definen mediante declaraciones de función, pero no se elevan si se definen mediante expresiones de función.

// El siguiente ejemplo muestra cómo, debido a la elevación de funciones, la función foo puede ser llamada incluso antes de ser definida - porque la función foo está definida usando una declaración de función.

foo("Este mensaje se esta ejecuntado desde una declaración de función"); // funciona correctamente

// declaración de función

function foo(msj) {
  console.log(msj);
}

foo2("Este mensaje se esta ejecuntado desde una expresión de función"); // Uncaught ReferenceError: Cannot access 'foo2' before initialization"

// expresión de función

let foo2 = function (msj) {
  console.log(msj);
};

// En el siguiente ejemplo, el nombre de la variable baz es elevado - debido a la elevación de variables - pero debido a que una función es asignada a baz usando una expresión de función en lugar de que baz sea definida con una declaración de función, la función no puede ser llamada antes de ser definida, porque no está elevada.

// Así, la llamada a baz() de abajo lanza un TypeError con "baz no es una función", porque la función asignada a baz no está elevada - mientras que la llamada a console.log(baz) no lanza un ReferenceError sino que registra undefined, porque la variable baz está elevada aunque la función asignada a ella no lo esté. (Pero el valor de baz es indefinido, ya que todavía no se le ha asignado nada).

// No lanza ReferenceError
console.log(baz); // undefined

// Lanza 'TypeError: baz no es una función'
baz();

// expresión de función

var baz = function () {
  console.log("bar2");
};

// Variables globales #00aae4
// Las variables globales son, de hecho, propiedades del objeto global.

// En las páginas web, el objeto global es la ventana, por lo que puedes establecer y acceder a las variables globales utilizando la sintaxis window.variable.

// En consecuencia, puedes acceder a las variables globales declaradas en una ventana o marco desde otra ventana o marco especificando el nombre de la ventana o marco. Por ejemplo, si en un documento se declara una variable llamada número de teléfono, puedes referirte a esta variable desde un iframe como parent.phoneNumber.

// Constantes #00aae4
// Puede crear una constante de sólo lectura con la palabra clave const.

// La sintaxis de un identificador de constante es la misma que la de cualquier identificador de variable: debe comenzar con una letra, un guión bajo o un signo de dólar ($), y puede contener caracteres alfabéticos, numéricos o de subrayado.

const PI = 3.14;

console.log(PI);

// Una constante no puede cambiar de valor a través de la asignación o ser re-declarada mientras el script se está ejecutando. Debe ser inicializada a un valor.

// Las reglas de alcance de las constantes son las mismas que las de las variables de alcance de bloque let. Si se omite la palabra clave const, se asume que el identificador representa una variable.

// No se puede declarar una constante con el mismo nombre que una función o variable en el mismo ámbito. Por ejemplo:

// ESTO CAUSARÁ UN ERROR
function f() {}
const f = 5;

// ESTO TAMBIÉN PROVOCARÁ UN ERROR
function f() {
  const g = 5;
  var g;

  //declaraciones
}

// Sin embargo, las propiedades de los objetos asignados a las constantes no están protegidas, por lo que la siguiente sentencia se ejecuta sin problemas.

const MI_OBJETO = {
  key: "valor",
};

MI_OBJETO.key = "Otro Valor";

console.log(MI_OBJETO.key); // Otro valor

// Además, el contenido de un array no está protegido, por lo que la siguiente sentencia se ejecuta sin problemas.

const MI_MATRIZ = ["HTML", "CSS"];

MI_MATRIZ.push("JAVASCRIPT");

console.log(MI_MATRIZ); // (3) ["HTML", "CSS", "JAVASCRIPT"]

// Estructuras y tipos de datos #008000
// Tipos de datos #00aae4
// El último estándar ECMAScript define ocho tipos de datos:

// Siete tipos de datos que son primitivos:
// 1.Boolean. true y false.
// 2. null. Una palabra clave especial que denota un valor nulo. (Como JavaScript distingue entre mayúsculas y minúsculas, null no es lo mismo que Null, Nulo o cualquier otra variante).
// 3. undefined. Una propiedad de nivel superior cuyo valor no está definido.
// 4. Número. Un número entero o de coma flotante. Por ejemplo: 42 o 3,14159.
// 5. BigInt. Un número entero con precisión arbitraria. Por ejemplo: 9007199254740992n.
// 6. Cadena. Una secuencia de caracteres que representa un valor de texto. Por ejemplo: "Hola".
// 7. Símbolo. Un tipo de datos cuyas instancias son únicas e inmutables.

// y Objeto
// Aunque estos tipos de datos son relativamente pocos, permiten realizar operaciones útiles con las aplicaciones. Las funciones son los otros elementos fundamentales del lenguaje. Mientras que las funciones son técnicamente un tipo de objeto, puedes pensar en los objetos como contenedores con nombre para valores, y en las funciones como procedimientos que tu script puede realizar.

// Conversión de tipos de datos #00aae4
// JavaScript es un lenguaje de tipado dinámico. Esto significa que no tienes que especificar el tipo de datos de una variable cuando la declaras. También significa que los tipos de datos se convierten automáticamente según sea necesario durante la ejecución del script.

// Así, por ejemplo, podrías definir una variable de la siguiente manera

let respuesta = 35;

// Y más tarde, podría asignar a la misma variable un valor de cadena, por ejemplo:

respuesta = "Gracias por todo el pescado";

console.log(respuesta); // Gracias por todo el pescado

// Dado que JavaScript es de tipificación dinámica, esta asignación no provoca un mensaje de error.

// Números y el operador " + " #00aae4
// En las expresiones que incluyen valores numéricos y de cadena con el operador +, JavaScript convierte los valores numéricos en cadenas. Por ejemplo, considere las siguientes declaraciones:

let x5 = "La respuesta es " + 40; // "La respuesta es 40"

let y5 = 40 + "es la respuesta:"; // "40 es la respuesta"

let z = "40" + 7; // "407"

// Con todos los demás operadores, JavaScript no convierte los valores numéricos en cadenas. Por ejemplo:

console.log("37" - 7); // 30
console.log("10" * 2); // 20

// Convertir cadenas en números #00aae4
// En el caso de que un valor que represente un número esté en memoria como una cadena, existen métodos para su conversión.

// parseInt()

// parseFloat()

// parseInt sólo devuelve números enteros, por lo que su uso disminuye para los decimales.

// Nota: Además, una buena práctica para parseInt es incluir siempre el parámetro radix. El parámetro radix se utiliza para especificar qué sistema numérico se va a utilizar.

console.log(parseInt("101", 2)); // binario a decimal

// Un método alternativo para recuperar un número de una cadena es con el operador + (unario más):

console.log("1.1" + "1.1"); // 1.11.1
console.log(+"1.1" + +"1.1"); // 2.2

// Nota: los paréntesis se añaden por claridad, no son necesarios.

// Literales #008000
// Los literales representan valores en JavaScript. Son valores fijos -no variables- que se proporcionan literalmente en el script. Esta sección describe los siguientes tipos de literales:

// Literales de matrices
// Literales booleanos
// Literales numéricos
// Literales de objeto
// Literales RegExp
// Literales de cadena

// Literales de matrices #00aae4
// Un literal de matriz es una lista de cero o más expresiones, cada una de las cuales representa un elemento de la matriz, encerrada entre corchetes ([]). Cuando se crea una matriz utilizando un literal de matriz, ésta se inicializa con los valores especificados como sus elementos, y su longitud se establece en el número de argumentos especificados.

// El siguiente ejemplo crea una matriz de cafés con tres elementos y una longitud de tres:

const cafes = ["Americano", "Expresso", "Cappuccino"];

console.log(cafes); // (3) ["Americano", "Expresso", "Cappuccino"]

// Si se crea una matriz utilizando un literal en un script de nivel superior, JavaScript interpreta la matriz cada vez que evalúa la expresión que contiene el literal de la matriz. Además, un literal utilizado en una función se crea cada vez que se llama a la función.

// Nota: Los literales de matriz crean objetos de matriz. Consulte Array y colecciones indexadas para obtener más información sobre los objetos Array.

// Comas adicionales en literales de matrices #00aae4
// Si pones dos comas seguidas en un literal de matriz, la matriz deja un espacio vacío para el elemento no especificado. El siguiente ejemplo crea el array fish:

const pescado = ["león", , "Angel"];

// Cuando registre esta matriz, verá:

console.log(pescado); // (3)[("león", empty, "Angel")];

// Tenga en cuenta que el segundo elemento es "vacío", que no es exactamente lo mismo que el valor indefinido real. Cuando se utilizan métodos de recorrido de arrays como Array.prototype.map, se omiten los espacios vacíos. Sin embargo, el acceso al índice pescado[1] sigue devolviendo undefined.

// Si se incluye una coma al final de la lista de elementos, la coma se ignora.

// En el siguiente ejemplo, la longitud de la matriz es tres. No existe miLista[3]. Todas las demás comas en la lista indican un nuevo elemento.

const miLista = ["Casa", , "Escuela"];

console.log(miLista); // (3) ['Casa', empty, 'Escuela']

// En el siguiente ejemplo, la longitud del array es cuatro, y faltan miLista[0] y miLista[2].

const miLista2 = [, "casa", , "escuela"];

// En el siguiente ejemplo, la longitud de la matriz es cuatro, y faltan miLista[1] y miLista[3]. Sólo se ignora la última coma.

const miLista3 = ["casa", , "escuela", ,];

// Nota: Las comas al final ayudan a mantener limpios los diffs de git cuando tienes un array de varias líneas, porque añadir un elemento al final sólo añade una línea, pero no modifica la línea anterior.

const miLista4 = ["casa", "escuela" + "hospital"];

// Comprender el comportamiento de las comas extra es importante para entender JavaScript como lenguaje.

// Sin embargo, cuando escriba su propio código, debe declarar explícitamente los elementos que faltan como indefinidos, o al menos insertar un comentario para resaltar su ausencia. Hacer esto aumenta la claridad y la capacidad de mantenimiento de su código.

const miLista5 = ["casa" /* empty */, , "escuela" /* empty */, ,];

console.log(miLista5); // (4) ['casa', empty, 'escuela', empty]

// Literales booleanos #00aae4
// El tipo booleano tiene dos valores literales: verdadero y falso.

// Nota: No confunda los valores booleanos primitivos true y false con los valores true y false del objeto booleano.

// El objeto booleano es una envoltura del tipo de datos booleano primitivo. Vea Boolean para más información.

// Literales numéricos #00aae4
// Los literales numéricos de JavaScript incluyen literales enteros en diferentes bases, así como literales de punto flotante en base-10.

// Tenga en cuenta que la especificación del lenguaje requiere que los literales numéricos sean sin signo. Sin embargo, los fragmentos de código como -123.4 están bien, ya que se interpretan como un operador unario - aplicado al literal numérico 123.4.

// Literales enteros #00aae4
// Los literales enteros y BigInt pueden escribirse en decimal (base 10), hexadecimal (base 16), octal (base 8) y binario (base 2).

// Un literal entero decimal es una secuencia de dígitos sin un 0 (cero) inicial.

// Un 0 (cero) inicial en un literal entero, o un 0o (o 0O) inicial indica que está en octal. Los literales enteros octales sólo pueden incluir los dígitos 0-7.

// Un 0x (o 0X) inicial indica un literal entero hexadecimal. Los enteros hexadecimales pueden incluir dígitos (0-9) y las letras a-f y A-F. (El caso de un carácter no cambia su valor. Por lo tanto: 0xa = 0xA = 10 y 0xf = 0xF = 15).

// Un 0b (o 0B) a la izquierda indica un literal entero binario. Los literales enteros binarios sólo pueden incluir los dígitos 0 y 1.

// Un sufijo n al final de un literal entero indica un literal BigInt. El literal entero puede utilizar cualquiera de las bases anteriores. Tenga en cuenta que la sintaxis octal con ceros a la cabeza, como 0123n, no está permitida, pero 0o123n sí lo está.

// // Algunos ejemplos de literales enteros son:

// 0, 117, 123456789123456789n             (decimal, base 10)
// 015, 0001, 0o777777777777n              (octal, base 8)
// 0x1123, 0x00111, 0x123456789ABCDEFn     (hexadecimal, "hex" or base 16)
// 0b11, 0b0011, 0b11101001010101010101n   (binary, base 2)

// Literales en coma flotante #00aae4
// Un literal de punto flotante puede tener las siguientes partes:

// Un entero decimal sin signo,

// Un punto decimal (.),

// Una fracción (otro número decimal),

// Un exponente.

// La parte del exponente es una e o E seguida de un entero, que puede tener signo (precedido de + o -). Un literal de punto flotante debe tener al menos un dígito, y un punto decimal o e (o E).

// De forma más sucinta, la sintaxis es:

// [dígitos].[dígitos][(E|e)[(+|-)]dígitos]
// Por ejemplo

// 3.1415926
// .123456789
// 3.1E+12
// .1e-23

// Literales de objeto #00aae4
// Un literal de objeto es una lista de cero o más pares de nombres de propiedades y valores asociados de un objeto, encerrados entre llaves ({}).

// Advertencia: No utilice un literal de objeto al principio de una sentencia. Esto conducirá a un error (o no se comportará como usted espera), porque el { será interpretado como el comienzo de un bloque. #FF0000

// El siguiente es un ejemplo de un literal de objeto. El primer elemento del objeto coche define una propiedad, myCar, y le asigna una nueva cadena, "Saturn"; al segundo elemento, la propiedad getCar, se le asigna inmediatamente el resultado de la invocación de la función (carTypes("Honda")); el tercer elemento, la propiedad special, utiliza una variable existente (sales).

const ventas = "Toyota";

function tiposCarros(nombre) {
  return nombre === "Honda" ? nombre : `Lo siento, no vendemos ${nombre}`;
}

const carro = {
  miCarro: "Saturno",
  conseguirCarro: tiposCarros("Honda"),
  especial: ventas,
};

console.log(carro.miCarro); // Saturno
console.log(carro.conseguirCarro); // Honda
console.log(carro.especial); // Toyota

// Además, puede utilizar un literal numérico o de cadena para el nombre de una propiedad o anidar un objeto dentro de otro. El siguiente ejemplo utiliza estas opciones.

const carro2 = {
  muchosCarros: {
    a: "Saab",
    b: "Jeep",
  },
  7: "Mazda",
};

console.log(carro2.muchosCarros.b); // Jeep
console.log(carro2[7]); // Mazda

// Los nombres de las propiedades de los objetos pueden ser cualquier cadena, incluida la cadena vacía. Si el nombre de la propiedad no es un identificador o número válido de JavaScript, debe ir entre comillas.

// Los nombres de propiedades que no son identificadores válidos no pueden ser accedidos como una propiedad de punto (.).

const nombresDePropiedadesInusuales = {
  "": "Una cadena vacía",
  "!": "Bang!",
};

console.log(nombresDePropiedadesInusuales.""); // SyntaxError: Unexpected string
console.log(nombresDePropiedadesInusuales.!); // SyntaxError: Unexpected token 

// En su lugar, se debe acceder a ellos con la notación de corchetes ([]).

console.log(nombresDePropiedadesInusuales[""]); // Una cadena vacia
console.log(nombresDePropiedadesInusuales["!"]); //  Bang!

// Literales de objeto mejorados #00aae4
// Los literales de objeto admiten una serie de sintaxis abreviadas que incluyen la fijación del prototipo en la construcción, la abreviación de las asignaciones foo: foo, la definición de métodos, la realización de superllamadas y el cálculo de los nombres de las propiedades con expresiones.

// En conjunto, estas sintaxis acercan las declaraciones de objetos a las declaraciones de clases y permiten que el diseño basado en objetos se beneficie de algunas de las mismas ventajas.

const obj = {
  __proto__: theProtoObj,
    // Abreviatura de 'handler: handler'
    handler,
    // metodos
    toString() {
      // super llamadas
      return "d " + super.toString();
    },
      // Nombres de propiedades computados (dinámicos)
      ["prop_" + (() => 42)()]: 42,
}

// Literales RegExp #00aae4
// Un literal regex (que se define en detalle más adelante) es un patrón encerrado entre barras. El siguiente es un ejemplo de un literal regex.

const re = /ab+c/;

// Literales de cadena #00aae4
// Un literal de cadena son cero o más caracteres encerrados entre comillas dobles (") o simples ('). Una cadena debe estar delimitada por comillas del mismo tipo (es decir, tanto comillas simples como comillas dobles).

// Los siguientes son ejemplos de literales de cadena:

console.log('foo');
console.log("bar");
console.log('1234');
console.log('una linea \n en otra linea');
console.log("Jhon's cat");

// Debe usar literales de cadena a menos que necesite específicamente usar un objeto String. Vea String para más detalles sobre los objetos String.

// Puede llamar a cualquiera de los métodos del objeto String sobre un valor literal de cadena. JavaScript convierte automáticamente el literal de cadena en un objeto String temporal, llama al método y luego descarta el objeto String temporal. También se puede utilizar la propiedad length con un literal de cadena:

// Imprimirá el número de símbolos en la cadena incluyendo los espacios en blanco.

console.log("John's cat".length); // en este caso es 10

// También hay literales de plantilla. Los literales de las plantillas se encierran con el carácter de la palomita (`) (acento grave) en lugar de las comillas dobles o simples.

// Los literales de plantilla proporcionan azúcar sintáctico para la construcción de cadenas. (Esto es similar a las características de interpolación de cadenas en Perl, Python y otros).

// Creación de cadenas literales básicas
console.log(`En JavaScript '\n' es un salto de línea.`);

// Cadenas multilíneas
console.log(`En JavaScript, las cadenas de plantilla pueden recorrer
 en varias líneas, pero las cadenas con comillas dobles y simples no pueden.`);

// Interpolación de cadenas
const nombre = "Bob", tiempo = "hoy";
console.log(`Hola ${nombre}, ¿cómo estás el día de ${tiempo}?`);

// Las plantillas etiquetadas son una sintaxis compacta para especificar un literal de plantilla junto con una llamada a una función "tag" para analizarlo. Una plantilla etiquetada es simplemente una forma más sucinta y semántica de invocar una función que procesa una cadena y un conjunto de valores relevantes. El nombre de la función de etiqueta de la plantilla precede al literal de la plantilla - como en el siguiente ejemplo, donde la función de etiqueta de la plantilla se llama print. La función print interpolará los argumentos y serializará cualquier objeto o matriz que pueda aparecer, evitando el molesto [objeto Object].

const formatoArg = (arg) => {
  if (Array.isArray(arg)) {
        // Imprimir una lista con viñetas

        return arg.map((parte) => `- ${parte}`).join("\n");
  }

  if (arg.toString === Object.prototype.toString) {
      // Este objeto será serializado a "[objeto objeto]".
    // Vamos a imprimir algo más bonito.

    return JSON.stringify(arg);
  }

  return arg;
}

const print = (segmentos, ...args) => {
    // Para cualquier literal de plantilla bien formado, siempre habrá N argumentos y
  // (N+1) segmentos de cadena.

  let mensaje = segmentos[0];
  segmentos.slice(1).forEach((segmento, index) => {
    mensaje += formatoArg(args[index]) + segmento;
  });

  console.log(mensaje);
}

const todos = [
    "Aprender JavaScript",
  "Aprender las APIs de la web",
  "Montar mi sitio web",
  "¡Ganar!",
]

const progreso = {javascript: 20,html: 50,css: 10}

print`Tengo que hacer:
${todos}
Mi progreso actual es: ${progreso}
`;

// Dado que los literales de plantilla etiquetados son sólo azúcar de las llamadas de función, puede reescribir lo anterior como una llamada de función equivalente:

print(["Tengo que hacer:\n", "\nMi progreso actual es: ", "\n"], todos, progreso);

// Esto puede recordar a la interpolación del estilo console.log:

console.log("Tengo que hacer:\n%o\nMi progreso actual es: %o\n", todos, progreso);

// Puede ver cómo la plantilla etiquetada se lee de forma más natural que una función "formateadora" tradicional, en la que las variables y la propia plantilla tienen que declararse por separado.

// Uso de caracteres especiales en las cadenas #00aae4
// Además de los caracteres ordinarios, también puede incluir caracteres especiales en las cadenas, como se muestra en el siguiente ejemplo.

console.log("Una linea \n Otra linea");

// La siguiente tabla enumera los caracteres especiales que se pueden utilizar en las cadenas de JavaScript.

// Carácter Significado
// \0 Byte nulo
// \b Retroceso
// \f Alimentación de formularios
// \n Nueva línea
// \r Retorno de carro
// \t Tabulador
// \v Tabulador vertical
// \' Apóstrofe o comilla simple
// \"	Comillas dobles
// \\ Carácter de barra invertida
// \XXX El carácter con la codificación Latin-1 especificado por hasta tres dígitos octales XXX entre 0 y 377. Por ejemplo, \251 es la secuencia octal para el símbolo de copyright.
// \xXX El carácter con la codificación Latin-1 especificado por los dos dígitos hexadecimales XX entre 00 y FF. Por ejemplo, \xA9 es la secuencia hexadecimal para el símbolo de copyright.
// \uXXXX El carácter Unicode especificado por los cuatro dígitos hexadecimales XXXX. Por ejemplo, \u00A9 es la secuencia Unicode para el símbolo de copyright. Consulte las secuencias de escape de Unicode.
// \u{XXXXX} Escapes de puntos de código Unicode. Por ejemplo, \u{2F804} es lo mismo que los escapes Unicode simples \uD87E\uDC04.

// Escapar caracteres #00aae4
// En el caso de los caracteres que no aparecen en la tabla, se ignora la barra invertida que los precede, pero este uso está obsoleto y debe evitarse.

// Puede insertar una comilla dentro de una cadena precediéndola de una barra invertida. Esto se conoce como escape de la comilla. Por ejemplo:

const nota = "Esta es una \"nota\"";

console.log(nota); // Esta es una "nota" 

// Para incluir una barra invertida literal dentro de una cadena, debe escapar el carácter de la barra invertida. Por ejemplo, para asignar la ruta del archivo c:\temp a una cadena, utilice lo siguiente:

const ruta = "c:\\temp";

console.log(ruta); // c:\temp 

// También puede escapar de los saltos de línea precediéndolos de una barra invertida. Tanto la barra invertida como el salto de línea se eliminan del valor de la cadena.

const cadena = "Esta cadena \
se rompe \
en varias \
lineas."

console.log(cadena); // Esta cadena se rompe en varias lineas.
