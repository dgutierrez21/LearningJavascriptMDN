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
