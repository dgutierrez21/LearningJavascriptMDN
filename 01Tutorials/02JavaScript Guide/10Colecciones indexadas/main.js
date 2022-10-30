// Colecciones indexadas #ff0

// Un array es una lista ordenada de valores a la que se hace referencia con un nombre y un índice.

// Por ejemplo, considere un array llamado emp, que contiene los nombres de los empleados indexados por su número de empleado. Así, emp[0] sería el empleado número cero, emp[1] el empleado número uno, y así sucesivamente.

// JavaScript no tiene un tipo de datos de matriz explícito. Sin embargo, puede utilizar el objeto Array predefinido y sus métodos para trabajar con arrays en sus aplicaciones. El objeto Array tiene métodos para manipular arrays de varias maneras, como unirlos, invertirlos y ordenarlos. Tiene una propiedad para determinar la longitud de la matriz y otras propiedades para su uso con expresiones regulares.

// Creación de una matriz #008000
// Las siguientes sentencias crean arrays equivalentes:

// const arr1 = new Array(elemento0, elemento1, /* ... ,*/ elementoN);

// const arr2 = Array(elemento0, elemento1, /* ... ,*/ elementoN);

// const arr3 = [elemento0, elemento1, /* ... ,*/ elementoN];

// element0, element1, ..., elementN es una lista de valores para los elementos del array. Cuando se especifican estos valores, el array se inicializa con ellos como elementos del array. La propiedad de longitud del array se establece en el número de argumentos.

// La sintaxis de corchetes se llama "literal de array" o "inicializador de array". Es más corta que otras formas de creación de arrays, por lo que generalmente se prefiere. Ver Literales de matrices para más detalles.

// Para crear un array con una longitud distinta de cero, pero sin ningún elemento, se puede utilizar cualquiera de las siguientes opciones:

// // Esto...
// const arr1 = new Array(arrayLength;

// // ...da como resultado el mismo array que este
// const arr2 = Array(arrayLength);

// // Esto tiene exactamente el mismo efecto
// const arr3 = [];
// arr3.length = arrayLength;

// Nota: En el código anterior, arrayLength debe ser un Número. De lo contrario, se creará un array con un solo elemento (el valor proporcionado). La llamada a arr.length devolverá arrayLength, pero el array no contendrá ningún elemento. Un bucle for...in no encontrará ninguna propiedad en el array.

const arrLong = 1;

const arr = [];
arr.length = arrLong;

console.log(arr); // empty

// Además de una variable recién definida como se muestra arriba, los arrays también pueden ser asignados como una propiedad de un objeto nuevo o existente:

const obj = {};
// // ...
obj.prop = ["elemento1", "elemento2", "elemento3"];

console.log(obj.prop);

// // O
// const obj = { prop: [elemento0, elemento1, /* ... ,*/ elementoN] };

// Si desea inicializar un array con un solo elemento, y el elemento resulta ser un Número, debe utilizar la sintaxis de corchetes. Cuando se pasa un único valor Number al constructor o función Array(), se interpreta como un arrayLength, no como un único elemento.

// // Esto crea un array con un solo elemento: el número 42.
const arr2 = [42];
console.log(arr2);

// // Esto crea un array sin elementos y con arr.length establecido en 42.

const arr3 = Array(42);

// // Esto es equivalente a:
// const arr = [];
// arr.length = 42;

// Llamar a Array(N) resulta en un RangeError, si N es un número no entero cuya porción fraccionaria es distinta de cero. El siguiente ejemplo ilustra este comportamiento.

// const arr4 = Array(9.3)  // RangeError: Longitud de matriz no válida

// Si su código necesita crear matrices con elementos individuales de un tipo de datos arbitrario, es más seguro utilizar literales de matrices. Como alternativa, cree primero un array vacío antes de añadirle un solo elemento.

// También puede utilizar el método estático Array.of para crear matrices con un solo elemento.

const arr5 = Array.of(9.5); // arr5 contiene un solo elemento 9.5

console.log(arr5);
