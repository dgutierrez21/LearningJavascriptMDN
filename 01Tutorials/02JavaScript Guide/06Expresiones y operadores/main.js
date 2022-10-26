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
