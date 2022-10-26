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
