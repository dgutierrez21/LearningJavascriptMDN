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

// ver imagen...

// Operadores a nivel de bits #008000
// Un operador a nivel de bits trata sus operandos como un conjunto de 32 bits (ceros y unos), en lugar de como números decimales, hexadecimales u octales. Por ejemplo, el número decimal nueve tiene una representación binaria de 1001. Los operadores "bitwise" realizan sus operaciones sobre dichas representaciones binarias, pero devuelven valores numéricos estándar de JavaScript.

// La siguiente tabla resume los operadores bitwise de JavaScript.

// ver imagen...

// Operadores lógicos a nivel de bits #00aae4
// Conceptualmente, los operadores lógicos a nivel de bits funcionan como sigue:

// Los operandos se convierten en enteros de treinta y dos bits y se expresan mediante una serie de bits (ceros y unos). Los números con más de 32 bits descartan sus bits más significativos. Por ejemplo, el siguiente número entero con más de 32 bits se convertirá en un entero de 32 bits:

// Antes: 1110 0110 1111 1010 0000 0000 0000 0110 0000 0001

// Después: 1010 0000 0000 0000 0110 0000 0000 0001

// Cada bit del primer operando se empareja con el bit correspondiente del segundo operando: el primer bit con el primer bit, el segundo bit con el segundo bit, y así sucesivamente.
// El operador se aplica a cada par de bits, y el resultado se construye a nivel de bits.

// Por ejemplo, la representación binaria de nueve es 1001, y la representación binaria de quince es 1111. Por lo tanto, cuando se aplican los operadores a nivel de bits a estos valores, los resultados son los siguientes:

// ver imagen...

// Tenga en cuenta que los 32 bits se invierten utilizando el operador NOT bit a bit, y que los valores con el bit más significativo (más a la izquierda) establecido en 1 representan números negativos (representación del complemento de dos). ~x evalúa con el mismo valor que --x - 1.

// Operadores de desplazamiento a nivel de bits #00aae4
// Los operadores de desplazamiento a nivel de bit toman dos operandos: el primero es una cantidad que se va a desplazar, y el segundo especifica el número de posiciones de bit en las que se va a desplazar el primer operando. El sentido de la operación de desplazamiento está controlado por el operador utilizado.

// Los operadores de desplazamiento convierten sus operandos en enteros de treinta y dos bits y devuelven un resultado de tipo Number o BigInt: concretamente, si el tipo del operando izquierdo es BigInt, devuelven BigInt; en caso contrario, devuelven Number.

// Los operadores de desplazamiento se enumeran en la siguiente tabla.

// ver imagen...

// Operadores lógicos #008000
// Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos); cuando lo hacen, devuelven un valor booleano. Sin embargo, los operadores && y || devuelven en realidad el valor de uno de los operandos especificados, por lo que si estos operadores se utilizan con valores no booleanos, pueden devolver un valor no booleano. Los operadores lógicos se describen en la siguiente tabla.

// ver imagen...

// Ejemplos de expresiones que se pueden convertir en falsas son las que se evalúan como null, 0, NaN, la cadena vacía (""), o undefined.

// El siguiente código muestra ejemplos del operador && (AND lógico).

console.log(true && true); // devuelve true
console.log(true && false); // devuelce false
console.log(false && true); // devuelve false
console.log(false && 3 === 4); // devuelve false

console.log("Gato" && "Perro"); // Perro
console.log(3 === 4 && "Gato"); // false
console.log("Gato" && false); // false

// El siguiente código muestra ejemplos del operador || (OR lógico).

console.log(true || true); // devuelve true
console.log(false || true); // devuelve true
console.log(true || false); // true
console.log(false || 3 === 4); // false

console.log("Gato" || "Perro"); // Gato
console.log(false || "Gato"); // Gato
console.log("Gato" || false); // Gato

// El siguiente código muestra ejemplos del operador ! (lógico NOT).

console.log(!true); // false
console.log(!false); // true
console.log(!"Cat"); // false

// Evaluación en cortocircuito #00aae4
// A medida que las expresiones lógicas se evalúan de izquierda a derecha, se comprueba su posible evaluación en "cortocircuito" mediante las siguientes reglas:

// false && "cualquier cosa" es un cortocircuito evaluado a false.

// true || "cualquier cosa" se evalúa en cortocircuito a true.

// Las reglas de la lógica garantizan que estas evaluaciones son siempre correctas. Tenga en cuenta que la parte de "cualquier cosa" de las expresiones anteriores no se evalúa, por lo que cualquier efecto secundario de hacerlo no tiene efecto.

// Tenga en cuenta que para el segundo caso, en el código moderno puede utilizar el operador de coalescencia Nullish (??) que funciona como ||, pero sólo devuelve la segunda expresión, cuando la primera es "nullish", es decir, nula o indefinida. Por lo tanto, es la mejor alternativa para proporcionar valores por defecto, cuando valores como '' o 0 son valores válidos para la primera expresión, también.

// Operadores BigInt #008000
// La mayoría de los operadores que se pueden utilizar entre números también se pueden utilizar entre valores BigInt.

// // Suma de BigInt
const a = 1n + 2n; // 3n

console.log(a);

// // La división con BigInts redondea hacia cero
const b = 1n / 2n; // 0n

console.log(b);

// Las operaciones bit a bit con BigInts no truncan ningún lado
const c = 40000000000000000n >> 2n; // 10000000000000000n

console.log(c);

// Una excepción es el desplazamiento a la derecha sin signo (>>>), que no está definido para los valores BigInt. Esto se debe a que un BigInt no tiene un ancho fijo, por lo que técnicamente no tiene un "bit más alto".

// const d = 8n >>> 2n; // TypeError: Los BigInts no tienen desplazamiento a la derecha sin signo, utilice >> en su lugar

// Los BigInts y los números no son mutuamente reemplazables - no puedes mezclarlos en los cálculos. #FF0000

// const a2 = 1n + 2; // TypeError: No se puede mezclar BigInt y otros tipos

// Esto se debe a que BigInt no es ni un subconjunto ni un superconjunto de los números. Los BigInt tienen mayor precisión que los números al representar enteros grandes, pero no pueden representar decimales, por lo que la conversión implícita en cualquiera de los dos lados podría perder precisión. Utilice la conversión explícita para indicar si desea que la operación sea una operación numérica o una BigInt.

const a3 = Number(1n) + 2; // 3
console.log(a3);

const b3 = 1n + BigInt(2); // 3n
console.log(b3);

// Puedes comparar BigInts con números.

console.log(1n > 2); // false
console.log(3 > 2n); // true

// Operadores de cadena #008000
// Además de los operadores de comparación, que pueden utilizarse en valores de cadena, el operador de concatenación (+) concatena dos valores de cadena, devolviendo otra cadena que es la unión de las dos cadenas operativas.

// Por ejemplo,

console.log("Mi " + "Cadena");

console.log("Hola " + "Mundo.");

// El operador abreviado de asignación += también puede utilizarse para concatenar cadenas.

// Por ejemplo,

let alfabeto = 27;

let miCadena = "Alfa";

if (alfabeto === 27) {
  miCadena += "beto"; // evalúa a "alphabet" y asigna este valor a mystring.
  console.log(miCadena);
} else {
  console.log(
    "El valor introducido no es el alfabeto o el alfabeto no esta completo."
  );
}

// Operador condicional (ternario) #008000
// El operador condicional es el único operador de JavaScript que toma tres operandos. El operador puede tener uno de dos valores en función de una condición. La sintaxis es

// condición ? val1 : val2

// Si la condición es verdadera, el operador tiene el valor de val1. En caso contrario, tiene el valor de val2. Puede utilizar el operador condicional en cualquier lugar en el que utilice un operador estándar.

// Por ejemplo

let edad = 18;

const estado = edad > 17 ? "Es una persona adulta" : "Es una persona menor";

console.log(estado);

// Esta sentencia asigna el valor "Es una persona adulta" a la variable estado si la edad es mayor a 17 años. En caso contrario, asigna el valor "Es una persona menor" a la variable estado.
