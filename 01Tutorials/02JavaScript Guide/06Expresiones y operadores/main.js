// Expresiones y operadores #ff0

// Este capítulo describe las expresiones y operadores de JavaScript, incluyendo la asignación, la comparación, la aritmética, la lógica, la cadena, el ternario y más.

// A alto nivel, una expresión es una unidad válida de código que se resuelve con un valor. Hay dos tipos de expresiones: las que tienen efectos secundarios (como la asignación de valores) y las que se limitan a evaluar.

// La expresión x = 7 es un ejemplo del primer tipo. Esta expresión utiliza el operador = para asignar el valor siete a la variable x. La expresión en sí misma se evalúa a 7.

// La expresión 3 + 4 es un ejemplo del segundo tipo. Esta expresión utiliza el operador + para sumar 3 y 4 y produce un valor, 7. Sin embargo, si no forma parte finalmente de una construcción mayor (por ejemplo, una declaración de variable como const z = 3 + 4), su resultado se descartará inmediatamente - esto suele ser un error del programador porque la evaluación no produce ningún efecto.

// Como también ilustran los ejemplos anteriores, todas las expresiones complejas están unidas por operadores, como = y +. En esta sección, presentaremos los siguientes operadores:

// Operadores de asignación
// Operadores de comparación
// Operadores aritméticos
// Operadores a nivel de bits
// Operadores lógicos
// Operadores BigInt
// Operadores de cadena
// Operador condicional (ternario)
// Operador de coma
// Operadores unarios
// Operadores relacionales

// Estos operadores unen operandos formados por operadores de mayor precedencia o por una de las expresiones básicas. La lista completa y detallada de operadores y expresiones también está disponible en la referencia.

// La precedencia de los operadores determina el orden en que se aplican al evaluar una expresión. Por ejemplo

const x = 1 + 2 * 3;
const y = 2 * 3 + 1;

console.log(`x = ${x} | y = ${y}`);

// A pesar de que * y + vienen en órdenes diferentes, ambas expresiones darían como resultado 7 porque * tiene precedencia sobre +, por lo que la expresión unida a * siempre se evaluará primero. Puedes anular la precedencia de los operadores utilizando paréntesis (lo que crea una expresión agrupada - la expresión básica). Para ver una tabla completa de precedencia de operadores, así como varias advertencias, consulte la página de referencia de precedencia de operadores.

// JavaScript tiene operadores binarios y unarios, y un operador ternario especial, el operador condicional. Un operador binario requiere dos operandos, uno antes del operador y otro después del operador:

// operando1 operador operando2

// Por ejemplo, 3 + 4 o x * y. Esta forma se denomina operador binario infijo, porque el operador se coloca entre dos operandos. Todos los operadores binarios de JavaScript son infijos.

// Un operador unario requiere un único operando, ya sea antes o después del operador:

// operador operando
// operando operador

// Por ejemplo, x++ o ++x. La forma del operador operando se llama operador unario prefijo, y la forma del operador operando se llama operador unario postfijo. ++ y -- son los únicos operadores postfijos en JavaScript - todos los demás operadores, como !, typeof, etc. son prefijos.

// Operadores de asignación #008000
// Un operador de asignación asigna un valor a su operando izquierdo en función del valor de su operando derecho. El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. Es decir, x = f() es una expresión de asignación que asigna el valor de f() a x.

// También hay operadores de asignación compuestos que son una abreviatura de las operaciones que se enumeran en la siguiente tabla:

// Nombre Operador | abreviado | Significado
// Asignación x = f() | x = f()
// Asignación de suma x += f() | x = x + f()
// Asignación de sustracción x -= f() | x = x - f()
// Asignación de multiplicación x *= f() | x = x * f()
// Asignación de división x /= f() | x = x / f()
// Asignación del resto x %= f() | x = x % f()
// Asignación de exponenciación x **= f() | x = x ** f()
// Asignación de desplazamiento a la izquierda x <<= f() | x = x << f()
// Asignación de desplazamiento a la derecha x >>= f() | x = x >> f()
// Asignación de desplazamiento a la derecha sin signo x >>>= f() | x = x >>> f()
// Asignación AND a nivel de bits x &= f() | x = x & f()
// Asignación Bitwise XOR x ^= f() | x = x ^ f()
// Asignación Bitwise OR x |= f() --- x = x | f()
// Asignación lógica AND x &&= f() | x && (x = f())
// Asignación lógica OR x ||= f() --- x || (x = f())
// Asignación lógica nula x ??= f() | x ?? (x = f())

// Asignación a propiedades #008000
// Si una expresión se evalúa a un objeto, entonces el lado izquierdo de una expresión de asignación puede hacer asignaciones a propiedades de esa expresión. Por ejemplo

const obj = {};

obj.x = 3;

console.log(obj.x); // imprime 3
console.log(obj); // imprime el objeto

const key = "y";

obj[key] = 23;

console.log(obj[key]); // imprime 23
console.log(obj); // imprime {x: 3, y: 23}

// Si una expresión no se evalúa a un objeto, las asignaciones a las propiedades de esa expresión no se asignan:

const valor = 0;

valor.x = 3;

console.log(valor.x); // Imprime undefined
console.log(valor); // imprimer 0;

// En modo estricto, el código anterior lanza, porque no se pueden asignar propiedades a primitivas.

// Es un error asignar valores a propiedades no modificables o a propiedades de una expresión sin propiedades (null o undefined).

// Desestructuración #008000
// Para asignaciones más complejas, la sintaxis de asignación de desestructuración es una expresión de JavaScript que permite extraer datos de matrices u objetos utilizando una sintaxis que refleja la construcción de literales de matrices y objetos.

const foo = ["Uno", "Dos", "Tres"];

// sin desestructuración
const uno = foo[0];
const dos = foo[1];
const tres = foo[2];

// con desestruturación
const [uno1, dos2, tres3] = foo;

console.log(uno);
console.log(uno1);

// Evaluación y anidamiento #008000
// En general, las asignaciones se utilizan dentro de una declaración de variable (es decir, con const, let o var) o como declaraciones independientes).

function f() {
  return 456;
}

function g() {
  return 987;
}

// // Declara una variable x y la inicializa con el resultado de f().
// // El resultado de la expresión de asignación x = f() se descarta.
let x1 = f();

x1 = g(); // Reasigna la variable x al resultado de g().

console.log(x1);

// Sin embargo, al igual que otras expresiones, las expresiones de asignación como x = f() se evalúan en un valor de resultado. Aunque este valor resultante normalmente no se utiliza, puede ser utilizado por otra expresión.

// Encadenar asignaciones o anidarlas en otras expresiones puede dar lugar a un comportamiento sorprendente. Por esta razón, algunas guías de estilo de JavaScript desaconsejan encadenar o anidar asignaciones). No obstante, el encadenamiento y la anidación de asignaciones pueden producirse en ocasiones, por lo que es importante saber cómo funcionan.

// Al encadenar o anidar una expresión de asignación, su resultado puede ser asignado a otra variable. Se puede registrar, se puede poner dentro de un literal de matriz o de una llamada a una función, etc.

let x3;
const y3 = (x3 = f()); // O de forma equivalente: const y = x = f();

console.log(y3);
console.log((x3 = f())); //  // Registra el valor de retorno de la asignación x = f().

//  // Registra el valor de retorno directamente.

// // Una expresión de asignación puede ser anidada en cualquier lugar
// // donde generalmente se permiten las expresiones,
// // como los elementos de los literales de los arrays o como los argumentos de las llamadas a funciones.

console.log([0, (x3 = f()), 0]);
console.log(f(0, (x3 = f()), 0));

// El resultado de la evaluación coincide con la expresión a la derecha del signo = en la columna "Significado" de la tabla anterior. Esto significa que x = f() se evalúa en cualquier resultado de f(), x += f() se evalúa en la suma resultante x + f(), x **= f() se evalúa en la potencia resultante x ** y, y así sucesivamente.

// En el caso de las asignaciones lógicas, x &&= f(), x ||= f(), y x ??= f(), el valor de retorno es el de la operación lógica sin la asignación, por lo que x && f(), x || f(), y x ?? f(), respectivamente.

// Cuando se encadenan estas expresiones sin paréntesis u otros operadores de agrupación como los literales de matrices, las expresiones de asignación se agrupan de derecha a izquierda (son asociativas de derecha), pero se evalúan de izquierda a derecha.

// Tenga en cuenta que, para todos los operadores de asignación que no sean el propio =, los valores resultantes se basan siempre en los valores de los operandos antes de la operación.

// Por ejemplo, supongamos que se han declarado las siguientes funciones f y g y las variables x e y:

function f1() {
  console.log("F1");

  return 5;
}

function g1() {
  console.log("G1");

  return 10;
}

let x4, y4;

// Considera estos tres ejemplos:

y4 = x4 = f1();

console.log(y4);

y4 = [f1(), (x4 = g1())];

console.log(y4);

x4[f1()] = g1();

console.log(x4);

// Ejemplo de evaluación 1 #00aae4
// y = x = f() es equivalente a y = (x = f()), porque el operador de asignación = es asociativo a la derecha. Sin embargo, se evalúa de izquierda a derecha:

// La expresión de asignación y = x = f() comienza a evaluarse.

// La y en el lado izquierdo de esta asignación se evalúa como una referencia a la variable llamada y.

// La expresión de asignación x = f() comienza a evaluarse.

// La x en el lado izquierdo de esta asignación se evalúa como una referencia a la variable llamada x.

// La llamada a la función f() imprime "¡F!" en la consola y luego se evalúa al número 2.

// Ese resultado 2 de f() se asigna a x.

// La expresión de asignación x = f() ha terminado de evaluarse; su resultado es el nuevo valor de x, que es 2.
// Ese resultado 2, a su vez, también se asigna a y.

// La expresión de asignación y = x = f() ha terminado de evaluarse; su resultado es el nuevo valor de y - que resulta ser 2. x e y se asignan a 2, y la consola ha impreso "¡F!".

// Ejemplo de evaluación 2 #00aae4
// y = [ f(), x = g() ] también se evalúa de izquierda a derecha:

// La expresión de asignación y = [ f(), x = g() ] comienza a evaluarse.

// La y de la izquierda de esta asignación se evalúa en una referencia a la variable llamada y.

// El literal interno de la matriz [ f(), x = g() ] comienza a evaluarse.

// La llamada a la función f() imprime "F!" en la consola y luego se evalúa al número 2.

// La expresión de asignación x = g() comienza a evaluarse.
// La x en el lado izquierdo de esta asignación se evalúa como una referencia a la variable llamada x.

// La llamada a la función g() imprime "¡G!" en la consola y luego se evalúa al número 3.

// El resultado 3 de g() se asigna a x.

// La expresión de asignación x = g() ha terminado de evaluarse; su resultado es el nuevo valor de x, que es 3. Ese resultado 3 se convierte en el siguiente elemento del literal del array interno (después del 2 de f()).
// El literal de matriz interna [ f(), x = g() ] ha terminado de evaluarse; su resultado es una matriz con dos valores: [ 2, 3 ].

// Ese array [ 2, 3 ] se asigna ahora a y.

// La expresión de asignación y = [ f(), x = g() ] ha terminado de evaluarse; su resultado es el nuevo valor de y - que resulta ser [ 2, 3 ]. x está ahora asignado a 3, y está ahora asignado a [ 2, 3 ], y la consola ha impreso "¡F!" y luego "¡G!".

// Ejemplo de evaluación 3 #00aae4
// x[f()] = g() también se evalúa de izquierda a derecha. (Este ejemplo asume que x ya está asignada a algún objeto. Para más información sobre los objetos, lee Trabajar con objetos).

// La expresión de asignación x[f()] = g() comienza a evaluarse.

// El acceso a la propiedad x[f()] a la izquierda de esta asignación comienza a evaluarse.

// La x en este acceso de propiedad se evalúa en una referencia a la variable llamada x.

// Entonces la llamada a la función f() imprime "¡F!" en la consola y luego se evalúa al número 2.

// El acceso a la propiedad x[f()] en esta asignación ha terminado de evaluarse; su resultado es una referencia a la propiedad variable: x[2].

// Entonces la llamada a la función g() imprime "¡G!" en la consola y luego se evalúa al número 3.

// Ese 3 se asigna ahora a x[2]. (Este paso sólo tendrá éxito si x se asigna a un objeto).

// La expresión de asignación x[f()] = g() ha terminado de evaluarse; su resultado es el nuevo valor de x[2] - que resulta ser 3. x[2] está ahora asignado a 3, y la consola ha impreso "¡F!" y luego "¡G!".

// Evite las cadenas de asignaciones #FF0000
// Encadenar asignaciones o anidarlas en otras expresiones puede dar lugar a un comportamiento sorprendente. Por esta razón, se desaconseja encadenar asignaciones en la misma sentencia).

// En particular, poner una cadena de variables en una sentencia const, let o var a menudo no funciona. Sólo se declararía la variable más externa/izquierda; otras variables dentro de la cadena de asignación no son declaradas por la sentencia const/let/var. Por ejemplo

// const z = y = x = f();

// Esta sentencia aparentemente declara las variables x, y y z. Sin embargo, en realidad sólo declara la variable z. y y x son referencias inválidas a variables inexistentes (en modo estricto) o, peor aún, crearían implícitamente variables globales para x e y en modo descuidado.

// Operadores de comparación #008000
// Un operador de comparación compara sus operandos y devuelve un valor lógico en función de si la comparación es verdadera. Los operandos pueden ser valores numéricos, de cadena, lógicos o de objeto. Las cadenas se comparan basándose en el ordenamiento lexicográfico estándar, utilizando valores Unicode. En la mayoría de los casos, si los dos operandos no son del mismo tipo, JavaScript intenta convertirlos a un tipo apropiado para la comparación. Este comportamiento generalmente resulta en la comparación de los operandos numéricamente. Las únicas excepciones a la conversión de tipos en las comparaciones son los operadores === y !==, que realizan comparaciones estrictas de igualdad y desigualdad. Estos operadores no intentan convertir los operandos a tipos compatibles antes de comprobar la igualdad. La siguiente tabla describe los operadores de comparación en términos de este código de ejemplo:

const var1 = 3;
const var2 = 4;

// ver imagen...

// Operadores aritméticos #008000
// Un operador aritmético toma valores numéricos (ya sean literales o variables) como operandos y devuelve un único valor numérico. Los operadores aritméticos estándar son la suma (+), la resta (-), la multiplicación (*) y la división (/). Estos operadores funcionan como lo hacen en la mayoría de los lenguajes de programación cuando se utilizan con números de punto flotante (en particular, tenga en cuenta que la división por cero produce Infinito). Por ejemplo

console.log(1 / 2); // 0.5
console.log(1 / 2 === 1.0 / 2.0); // true

// Además de las operaciones aritméticas estándar (+, -, *, /), JavaScript proporciona los operadores aritméticos que aparecen en la siguiente tabla:

