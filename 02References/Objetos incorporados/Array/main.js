// Arreglo #ff0
// El objeto Array, al igual que con las matrices en otros lenguajes de programación, permite almacenar una colección de varios elementos bajo un solo nombre de variable y tiene miembros para realizar operaciones de matriz comunes..

// Descripción #008000
// En JavaScript, las matrices no son primitivas, sino objetos Array con las siguientes características principales:

// Las matrices de JavaScript son redimensionables y pueden contener una combinación de diferentes tipos de datos. (Cuando esas características no sean deseables, use matrices con tipo en su lugar).

// Las matrices de JavaScript no son matrices asociativas y, por lo tanto, no se puede acceder a los elementos de matriz utilizando cadenas arbitrarias como índices, sino que se debe acceder mediante enteros no negativos (o su respectiva forma de cadena) como índices.

// Las matrices de JavaScript están indexadas a cero: el primer elemento de una matriz está en el índice 0, el segundo está en el índice 1, y así sucesivamente, y el último elemento está en el valor de la propiedad length de la matriz menos 11.

// Las operaciones de copia de matriz de JavaScript crean copias superficiales. (Todas las operaciones de copia integradas estándar con cualquier objeto JavaScript crean copias superficiales, en lugar de copias profundas.).

// Índices de matriz #00aae4
// Array objetos de matriz no pueden usar cadenas arbitrarias como índices de elementos (como en una matriz asociativa), pero deben usar enteros no negativos (o su respectiva forma de cadena). La configuración o el acceso a través de números no enteros no establecerá ni recuperará un elemento de la propia lista de matrices, sino que establecerá o accederá a una variable asociada con la colección de propiedades de objeto de esa matriz. Las propiedades de objeto de la matriz y la lista de elementos de la matriz son independientes, y las operaciones de recorrido y mutación de la matriz no se pueden aplicar a estas propiedades con nombre.

// Los elementos de matriz son propiedades de objeto de la misma manera que toString es una propiedad (para ser específicos, sin embargo, toString() es un método).toString Sin embargo, intentar acceder a un elemento de una matriz de la siguiente manera produce un error de sintaxis porque el nombre de la propiedad no es válido:

// console.log(arr.0); // a syntax error

// La sintaxis de JavaScript requiere que se tenga acceso a las propiedades que comienzan con un dígito mediante la notación entre corchetes en lugar de la notación de puntos. También es posible citar los índices de matriz (por ejemplo, años['2'] en lugar de years[2]), aunque generalmente no es necesario.

// El 2 JavaScript obliga a 2 en years[2] a formar una cadena a través de una conversión toString implícita. Como resultado, ''2'' y ''02' se referirían a dos ranuras diferentes en el objeto years, y el siguiente ejemplo podría ser true:

// console.log(years["2"] !== years["02"]);

// Sólo years['2'] es un índice de matriz real. years['02'] es una propiedad de cadena arbitraria que no se visitará en la iteración de la matriz.

// Relación entre longitud y propiedades numéricas #00aae4
// La propiedad length y las propiedades numéricas de una matriz JavaScript están conectadas.

// Varios de los métodos de matriz integrados (por ejemplo, join()(), slice()(), indexOf(), etc.) tienen en cuenta el valor de lengthla propiedad length de una matriz cuando se les llama.

// Otros métodos (por ejemplo, push(), splice(), etc.) también dan como resultado actualizaciones de la propiedad length de una matriz. push()

// const fruits = [];
// fruits.push("banana", "apple", "peach");
// console.log(fruits.length); // 3

// Al establecer una propiedad en una matriz JavaScript cuando la propiedad es un índice de matriz válido y ese índice está fuera de los límites actuales de la matriz, el motor actualizará lengthla propiedad length de la matriz en consecuencia:

// fruits[5] = "mango";
// console.log(fruits[5]); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6

// Aumento de la length.

// fruits.length = 10;
// console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 10
// console.log(fruits[8]); // undefined

// Sin embargo, al disminuir la propiedad length, se eliminan elementos.

// fruits.length = 2;
// console.log(Object.keys(fruits)); // ['0', '1']
// console.log(fruits.length); // 2

// Esto se explica con más detalle en la página https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length

// Métodos de matriz y ranuras vacías #00aae4
// Las ranuras vacías en matrices dispersas se comportan de manera incoherente entre los métodos de matriz. En general, los métodos más antiguos omitirán las ranuras vacías, mientras que los más nuevos los tratarán como undefined..

// Entre los métodos que iteran a través de varios elementos, los siguientes hacen una comprobación in de acceder al índice y no combinan ranuras vacías con undefined:

// concat()
// copyWithin()
// every()
// filter()
// flat()
// flatMap()
// forEach()
// indexOf()
// lastIndexOf()
// map()
// reduce()
// reduceRight()
// reverse()
// slice()
// some()
// sort()
// splice()
// Para saber exactamente cómo tratan las ranuras vacías, consulte la página de cada método.

// Estos métodos tratan las ranuras vacías como si no estuvieran undefined.:

// entries()
// fill()
// find()
// findIndex()
// findLast()
// findLastIndex()
// group() Experimental
// groupToMap() Experimental
// includes()
// join()
// keys()
// toLocaleString()
// values()

// Métodos de copia y métodos de mutación #00aae4
// Algunos métodos no mutan la matriz existente a la que se llamó al método, sino que devuelven una nueva matriz. Para ello, primero acceden a this.constructor[Symbol.species] para determinar el constructor que se usará para la nueva matriz. La matriz recién construida se rellena con elementos. La copia siempre ocurre superficialmente: el método nunca copia nada más allá de la matriz creada inicialmente. Los elementos de las matrices originales se copian en la nueva matriz de la siguiente manera:

// Objetos: la referencia del objeto se copia en la nueva matriz. Tanto la matriz original como la nueva hacen referencia al mismo objeto. Es decir, si se modifica un objeto al que se hace referencia, los cambios son visibles tanto para las matrices nuevas como para las originales.

// Tipos primitivos como cadenas, números y booleanos (no objetos String, Number y Boolean): sus valores se copian en la nueva matriz.
// Otros métodos mutan la matriz a la que se llamó al método, en cuyo caso su valor devuelto difiere según el método: a veces una referencia a la misma matriz, a veces la longitud de la nueva matriz.

// Los métodos siguientes crean nuevas matrices con @@species:

// concat()
// filter()
// flat()
// flatMap()
// map()
// slice()
// splice()) (para construir la matriz de elementos eliminados que se devuelve)
// Tenga en cuenta que group() y @@species groupToMap()group() no utilizan @@species para crear nuevas matrices para cada entrada de grupo, sino que siempre utilizan el constructor Array sin formato. Conceptualmente, tampoco están copiando métodos.

// Los métodos siguientes mutan la matriz original:

// copyWithin()
// fill()
// pop()
// push()
// reverse()
// shift()
// sort()
// splice()
// unshift()

// Métodos iterativos #00aae4
// Muchos métodos de matriz toman una función de devolución de llamada como argumento. La función de devolución de llamada se llama secuencialmente y como máximo una vez para cada elemento de la matriz, y el valor devuelto de la función de devolución de llamada se utiliza para determinar el valor devuelto del método. Todos comparten la misma firma:

// method(callbackFn, thisArg)
// Copiar en el portapapeles
// Donde callbackFn toma tres argumentos:

// element
// El elemento actual que se está procesando en la matriz.

// index
// El índice del elemento actual que se está procesando en la matriz.

// array
// La matriz a la que se llamó al método.

// Lo que se espera que devuelva callbackFn depende del método de matriz al que se llamó.

// El argumento thisArg (el valor predeterminado es undefined) se usará como el valor this al llamar a callbackFn. El valor this finalmente observable por callbackFn se determina de acuerdo con las reglas habituales: si callbackFn no es estricto, los valores primitivos se envuelven en objetos y undefined/null this sustituye por globalThis.callbackFn El argumento thisArg es irrelevante para cualquier callbackFn definido con una función de flecha, ya que las funciones de flecha no tienen this.

// Todos los métodos iterativos son copiadores y genéricos, aunque se comportan de manera diferente con ranuras vacías.

// Los siguientes métodos son iterativos:

// every()
// filter()
// find()
// findIndex()
// findLast()
// findLastIndex()
// flatMap()
// forEach()
// group()
// groupToMap()
// map()
// some()

// En particular, every()(), find(), findIndex(), findLast(), find()findLastIndex()findLast()) y some()findIndex() no siempre invocan callbackFn en cada elemento: detienen la iteración tan pronto como se determina el valor devuelto.

// Hay otros dos métodos que toman una función de devolución de llamada y la ejecutan como máximo una vez para cada elemento de la matriz, pero tienen firmas ligeramente diferentes de los métodos iterativos típicos (por ejemplo, no aceptan thisArg):

// reduce()
// reduceRight()

// El método sort() también toma una función de devolución de llamada, pero no es un método iterativo. Muta la matriz en contexto, no acepta thisArg y puede invocar la devolución de llamada varias veces en un índice.

// Métodos genéricos de matriz #00aae4
// Los métodos de matriz son siempre genéricos: no acceden a ningún dato interno del objeto de matriz. Solo acceden a los elementos de matriz a través de la propiedad length y los elementos indexados. Esto significa que también se les puede llamar en objetos similares a matrices.

// const arrayLike = {
//   0: "a",
//   1: "b",
//   length: 2,
// };
// console.log(Array.prototype.join.call(arrayLike, "+")); // 'a+b

// Normalización de la propiedad length #008000
// La propiedad length se convierte en un entero y luego se sujeta al rango entre 0 y 253 - 1. NaN se convierte en 0, por lo que incluso cuando length no está presente o no está undefined, se comporta como si tuviera valor 00.

// Array.prototype.flat.call({}); // []

// Algunos métodos de matriz establecen la propiedad length del objeto array. Siempre establecen el valor después de la normalización, por lo que length siempre termina como un número entero.

// const a = { length: 0.7 };
// Array.prototype.push.call(a);
// console.log(a.length); // 0

// Objetos similares a matrices #008000
// El término objeto similar a una matriz se refiere a cualquier objeto que no se produzca durante el proceso de conversión de length descrito anteriormente. En la práctica, se espera que dicho objeto tenga realmente una propiedad length y que tenga elementos indexados en el rango de 0 a length - 1. (Si no tiene todos los índices, será funcionalmente equivalente a una matriz dispersa..)

// Muchos objetos DOM son similares a matrices, por ejemplo, NodeList y HTMLCollection. El objeto arguments también es similar a una matriz. Puede llamar a métodos de matriz en ellos incluso si no tienen estos métodos.

// function f() {
//   console.log(Array.prototype.join.call(arguments, "+"));
// }

// f("a", "b"); // 'a+b'

// Constructor #008000

// Array()

// Crea un nuevo objeto Array.

// ejemplo

const frutas = new Array("Manzana", "Pera");

console.log(frutas.length); // 2
console.log(frutas[1]); // Pera

// Métodos estáticos #008000
// Array.from()
// Crea una nueva instancia de matriz a partir de un objeto similar a una Array o un objeto iterable.

// Array.isArray()
// Devuelve true si el argumento es una matriz, o false en caso contrario.

// Array.of()
// Crea una nueva instancia de Array con un número variable de argumentos, independientemente del número o tipo de argumentos.

// Propiedades de instancia #008000
// Array.prototype.length
// Refleja el número de elementos de una matriz.

// Métodos de instancia #008000
// Array.prototype.at()
// Devuelve el elemento de matriz en el índice especificado. Acepta enteros negativos, que cuentan hacia atrás desde el último elemento.

// Array.prototype.concat()
// Devuelve una nueva matriz que es la matriz que realiza la llamada unida con otras matrices y/o valores.

// Array.prototype.copyWithin()
// Copia una secuencia de elementos de matriz dentro de una matriz.

// Array.prototype.entries()
// Devuelve un nuevo objeto iterador de matriz que contiene los pares clave/valor para cada índice de una matriz.

// Array.prototype.every()
// Devuelve true si todos los elementos de la matriz de llamada satisfacen la función de prueba.

// Array.prototype.fill()
// Rellena todos los elementos de una matriz desde un índice inicial hasta un índice final con un valor estático.

// Array.prototype.filter()
// Devuelve una nueva matriz que contiene todos los elementos de la matriz de llamada para los que la función de filtrado proporcionada devuelve true.

// Array.prototype.find()
// Devuelve el valor del primer elemento de la matriz que satisface la función de prueba proporcionada, o undefined si no se encuentra ningún elemento adecuado.

// Array.prototype.findIndex()
// Devuelve el índice del primer elemento de la matriz que satisface la función de prueba proporcionada, o -1 si no se encontró ningún elemento apropiado.

// Array.prototype.findLast()
// Devuelve el valor del último elemento de la matriz que satisface la función de prueba proporcionada, o undefined si no se encuentra ningún elemento adecuado.

// Array.prototype.findLastIndex()
// Devuelve el índice del último elemento de la matriz que satisface la función de prueba proporcionada, o -1 si no se encontró ningún elemento apropiado.

// Array.prototype.flat()
// Devuelve una nueva matriz con todos los elementos de la submatriz concatenados en ella de forma recursiva hasta la profundidad especificada.

// Array.prototype.flatMap()
// Devuelve una nueva matriz formada aplicando una función de devolución de llamada determinada a cada elemento de la matriz de llamadas y, a continuación, acoplando el resultado en un nivel.

// Array.prototype.forEach()
// Llama a una función para cada elemento de la matriz de llamadas.

// Array.prototype.group() Experimental
// Agrupa los elementos de una matriz en un objeto según las cadenas devueltas por una función de prueba.

// Array.prototype.groupToMap() Experimental
// Agrupa los elementos de una matriz en un Map según los valores devueltos por una función de prueba.

// Array.prototype.includes()
// Determina si la matriz de llamadas contiene un valor, devolviendo true o false según corresponda.

// Array.prototype.indexOf()
// Devuelve el primer índice (mínimo) en el que se puede encontrar un elemento determinado en la matriz de llamadas.

// Array.prototype.join()
// Une todos los elementos de una matriz en una cadena.

// Array.prototype.keys()
// Devuelve un nuevo iterador de matriz que contiene las claves de cada índice de la matriz de llamadas.

// Array.prototype.lastIndexOf()
// Devuelve el último índice (mayor) en el que se puede encontrar un elemento determinado en la matriz de llamadas, o -1 si no se encuentra ninguno.

// Array.prototype.map()
// Devuelve una nueva matriz que contiene los resultados de invocar una función en cada elemento de la matriz de llamada.

// Array.prototype.pop()
// Quita el último elemento de una matriz y devuelve ese elemento.

// Array.prototype.push()
// Agrega uno o más elementos al final de una matriz y devuelve la nueva length de la matriz.

// Array.prototype.reduce()
// Ejecuta una función de devolución de llamada "reductor" suministrada por el usuario en cada elemento de la matriz (de izquierda a derecha), para reducirla a un solo valor.

// Array.prototype.reduceRight()
// Ejecuta una función de devolución de llamada "reductor" proporcionada por el usuario en cada elemento de la matriz (de derecha a izquierda), para reducirla a un solo valor.

// Array.prototype.reverse()
// Invierte el orden de los elementos de una matriz en su lugar. (El primero se convierte en el último, el último se convierte en el primero).

// Array.prototype.shift()
// Quita el primer elemento de una matriz y devuelve ese elemento.

// Array.prototype.slice()
// Extrae una sección de la matriz de llamadas y devuelve una nueva matriz.

// Array.prototype.some()
// Devuelve true si al menos un elemento de la matriz de llamada satisface la función de prueba proporcionada.

// Array.prototype.sort()
// Ordena los elementos de una matriz en su lugar y devuelve la matriz.

// Array.prototype.splice()
// Agrega y/o quita elementos de una matriz.

// Array.prototype.toLocaleString()
// Devuelve una cadena localizada que representa la matriz de llamada y sus elementos. Reemplaza el método Object.prototype.toLocaleString()

// Array.prototype.toString()
// Devuelve una cadena que representa la matriz de llamada y sus elementos. Reemplaza el método Object.prototype.toString()

// Array.prototype.unshift()
// Agrega uno o más elementos al frente de una matriz y devuelve la nueva length de la matriz.

// Array.prototype.values()
// Devuelve un nuevo objeto iterador de matriz que contiene los valores de cada índice de la matriz.

// Array.prototype[@@iterator]()
// Un alias para el método values() de forma predeterminada.

// Ejemplos #008000
// En esta sección se proporcionan algunos ejemplos de operaciones de matriz comunes en JavaScript.

// Crear una matriz #00aae4
// En este ejemplo se muestran tres formas de crear una nueva matriz: primero usando la notación literal de matriz, luego usando el constructor Array() y, finalmente, usando String.prototype.split() para construir la matriz a partir de una cadena.Array()

// Matriz de 'frutas2' creada usando notación literal de matriz.
const frutas2 = ["Banano", "Manzana"];

console.log(frutas2);
console.log(frutas2.length);

// Matriz 'fruits3' creada usando el constructor Array().
const frutas3 = new Array("Uva", "Mango");
console.log(frutas3);
console.log(frutas3.length);

// Matriz 'fruits4' creada usando String.prototype.split().

const frutas4 = "Naranja, Sandía".split(", ");

console.log(frutas4);
console.log(frutas4.length);

// Crear una cadena a partir de una matriz #00aae4
// En este ejemplo se utiliza el método join() para crear una cadena a partir de la matriz "mouses".

const teclados = [
  "Razer Basilisk V3",
  "Logitech G502 Lightspeed",
  "Razer DeathAdder V3 Pro",
];

const tecladosString = teclados.join(", ");

console.log(tecladosString);
console.log(tecladosString.length);

// Acceso a un elemento de matriz por su índice #00aae4
// En este ejemplo se muestra cómo tener acceso a los elementos de la matriz fruits especificando el número de índice de su posición en la matriz.

const colores = ["Rojo", "Azul", "Negro", "Blanco"];

// El índice del primer elemento de un array es siempre 0.
console.log(colores[0]); // Rojo

// El índice del segundo elemento de un array es siempre 1.
console.log(colores[1]); // Azul

// El índice del último elemento de un array es siempre uno
// menos que la longitud del array.

console.log(colores[colores.length - 1]); // Blanco

// Si el índice es mayor que la longitud del array
// devuelve 'undefined'.

console.log(colores[colores.length]); // undefined

// Buscar el índice de un elemento en una matriz #00aae4
// En este ejemplo se utiliza el método indexOf()() para buscar la posición (índice) de la cadena "Negro" en la matriz de colores2.

const colores2 = ["Rojo", "Azul", "Negro", "Blanco"];

console.log(colores2.indexOf("Negro")); // 2

// devuelve -1 si no esta presente

console.log(colores2.indexOf("Verde")); // -1

// Comprobar si una matriz contiene un elemento determinado #00aae4
// En este ejemplo se muestran dos formas de comprobar si la matriz colores contiene ""Banana"" y "Cherry": primero con el método includes()() y, a continuación, con el método indexOf() para probar un valor de índice que no sea -1.

const colores3 = ["Rojo", "Azul", "Negro", "Blanco"];

console.log(colores3.includes("Azul")); // true
console.log(colores3.includes("Verde")); // false

// Si indexOf() no devuelve -1, el array contiene el elemento dado.

console.log(colores3.indexOf("Verde") !== -1); // false
console.log(colores3.indexOf("Negro") !== -1); // true

// Anexar un elemento a una matriz #00aae4
// En este ejemplo se utiliza el método push() para anexar una nueva cadena a la matriz colores.

colores3.push("Morado");

console.log(colores3);

// Quitar el último elemento de una matriz #00aae4
// En este ejemplo se utiliza el método pop() para quitar el último elemento de la matriz fruits.

const frutas5 = ["Piña", "Melon", "Banano"];

const elementoElimado = frutas5.pop();

console.log(frutas5);
console.log(elementoElimado);

// Nota: pop() sólo se puede utilizar para eliminar el último elemento de una matriz. Para quitar varios elementos del final de una matriz, consulte el ejemplo siguiente.

// Quitar varios elementos del final de una matriz #00aae4
// En este ejemplo se utiliza el método splice() para quitar los 3 últimos elementos de la matriz fruits.

const animales =
  "León Africano · Conejo · Capibara · Avestruz · Serpiente de cascabel · Chachalaca · Puma · Oso polar";

const animalesArr = animales.split(" · ");

console.log(animalesArr);

const inicio = -3;

const elementosEliminados = animalesArr.splice(inicio);

console.log(animalesArr);

console.log(elementosEliminados);

// Truncar una matriz hasta sus primeros N elementos #00aae4
// En este ejemplo se usa el método splice() para truncar fruits hasta sus primeros 2 elementos.

const animales2 =
  "León Africano · Conejo · Capibara · Avestruz · Serpiente de cascabel · Chachalaca · Puma · Oso polar";

const animalesArr2 = animales2.split(" · ");

const resultadoA2 = animalesArr2.splice(3);

console.log(animalesArr2);
console.log(resultadoA2);

// Quitar el primer elemento de una matriz #00aae4
// En este ejemplo se utiliza el método shift() para quitar el primer elemento de la matriz fruits.

const animalesString =
  "León Africano · Conejo · Capibara · Avestruz · Serpiente de cascabel · Chachalaca · Puma · Oso polar";

const animalesArray = animalesString.split(" · ");

const animales3 = animalesArray;

console.log(animales3);

const eliminadoA3 = animales3.shift();

console.log(animales3);
console.log(eliminadoA3);

// Nota: shift() sólo se puede utilizar para eliminar el primer elemento de una matriz. Para quitar varios elementos del principio de una matriz, consulte el ejemplo siguiente.

// Quitar varios elementos del principio de una matriz #00aae4
// En este ejemplo se utiliza el método splice() para quitar los 3 primeros elementos de la matriz.

const animales4 = animalesArray;

const elementosEliminados4 = animales4.splice(0, 3);

console.log(animales4);

console.log(elementosEliminados4);
