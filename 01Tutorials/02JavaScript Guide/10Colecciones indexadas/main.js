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

// Referirse a los elementos del array #008000
// Dado que los elementos son también propiedades, puedes acceder a ellos utilizando los accesores de propiedades. Supongamos que defines el siguiente array:

const miArray = ["Viento", "Lluvia", "Fuego"];

// Puedes referirte al primer elemento del array como miArray[0], al segundo elemento del array como miArray[1], etc... El índice de los elementos empieza por cero.

console.log(miArray[0]); // Viento
console.log(miArray[1]);
console.log(miArray[2]);
console.log(miArray[3]); // undefined

// Ejemplo 2

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

// Nota: También puedes utilizar accesos a propiedades para acceder a otras propiedades del array, como con un objeto.

console.log(miArray["length"]); // 3

// Rellenar una matriz #008000
// Puedes rellenar un array asignando valores a sus elementos. Por ejemplo:

const empleados = [];
empleados[0] = "Casey Jones";
empleados[1] = "Phil Lesh";
empleados[2] = "August West";

console.log(empleados);

// Nota: Si se proporciona un valor no entero al operador de matriz en el código anterior, se creará una propiedad en el objeto que representa la matriz, en lugar de un elemento de la misma.

const arr6 = [];
arr6[3.4] = "Naranjas";

console.log(arr6.length);
console.log(arr6);
console.log(Object.hasOwn(arr6, 3.4)); // true

// También puedes rellenar un array cuando lo creas:

const miVar = "Mundo";

const miMatriz = new Array("Hola", miVar, 3.14159);

console.log(miMatriz);

// O

const miMatriz2 = ["Mango", "Manzana", "Naranja"];

console.log(miMatriz2);

// Entender la longitud #00aae4
// A nivel de implementación, las matrices de JavaScript almacenan sus elementos como propiedades de objetos estándar, utilizando el índice de la matriz como nombre de la propiedad.

// La propiedad length es especial. Su valor es siempre un número entero positivo mayor que el índice del último elemento, si existe. (En el ejemplo siguiente, 'Dusty' está indexado en 30, por lo que cats.length devuelve 30 + 1). #FF0000

// Recuerde que los índices de las matrices de JavaScript se basan en 0: empiezan en 0, no en 1. Esto significa que la propiedad length será uno más que el índice más alto almacenado en el array: #FF0000

const gatos = [];
gatos[30] = ["Dusty"];
console.log(gatos.length); // 31

// También puedes asignar a la propiedad length.

// Si escribes un valor más corto que el número de elementos almacenados, se trunca el array. Escribir 0 lo vacía por completo:

const gatos2 = ["Dusty", "Misty", "Twiggy"];
console.log(gatos2.length); // 3

gatos2.length = 2;
console.log(gatos2); // registra "Dusty, Misty" - Twiggy ha sido eliminado

gatos2.length = 0;
console.log(gatos2); // registra []; la matriz de gatos está vacía

gatos2.length = 3;
console.log(gatos2); // logs [ <3 elementos vacíos> ]

// Iterar sobre arrays #00aae4
// Una operación común es iterar sobre los valores de un array, procesando cada uno de ellos de alguna manera. La forma más sencilla de hacerlo es la siguiente:

const colores = ["Rojo", "Azul", "Verde"];

for (let i = 0; i < colores.length; i++) {
  console.log(`El elemento ${i + 1} es: ${colores[i]}`);
}

// Si sabes que ninguno de los elementos de tu matriz se evalúa como falso en un contexto booleano -si tu matriz consiste sólo en nodos DOM, por ejemplo- puedes usar un lenguaje más eficiente:

const divs = document.getElementsByTagName("div");

for (let i = 0, div; (div = divs[i]); i++) {
  /* Procesar div de alguna manera */
}

// Esto evita la sobrecarga de comprobar la longitud del array, y asegura que la variable div se reasigna al elemento actual cada vez que se pasa por el bucle para mayor comodidad.

// El método forEach() proporciona otra forma de iterar sobre un array:

const colores2 = ["Celeste", "Negro", "Blanco"];

colores2.forEach((color) => console.log(color));

// La función pasada a forEach se ejecuta una vez por cada elemento del array, con el elemento del array pasado como argumento de la función. Los valores no asignados no se iteran en un bucle forEach.

// Tenga en cuenta que los elementos de un array que se omiten cuando se define el array no se enumeran cuando se itera por forEach, pero se enumeran cuando se ha asignado manualmente undefined al elemento:

const matrizDispersa = ["Cuarto", "Primero", "Octavo"];

matrizDispersa.forEach((Elemento) => {
  console.log(Elemento);
});

const matrizOrdenada = ["Primero", "Segundo", "Tercero"];

matrizOrdenada.forEach((elemnto) => {
  console.log(elemnto);
});

// Dado que los elementos de las matrices de JavaScript se guardan como propiedades estándar de los objetos, no es aconsejable iterar a través de las matrices de JavaScript utilizando bucles for...in, porque los elementos normales y todas las propiedades enumerables serán listadas. #FF0000

// Métodos de la matriz #008000
// El objeto Array tiene los siguientes métodos:

// El método concat() une dos o más arrays y devuelve un nuevo array.

let miMatriz3 = ["1", "2", "3"];

miMatriz3 = miMatriz3.concat("a", "b", "c");

console.log(miMatriz3); // (6) ['1', '2', '3', 'a', 'b', 'c']

// El método join() une todos los elementos de un array en una cadena.

const miMatriz4 = ["Viento", "Lluvia", "Fuego"];

const lista = miMatriz4.join(" - ");

console.log(lista); // Viento - Lluvia - Fuego

// El método push() añade uno o más elementos al final de una matriz y devuelve la longitud resultante de la misma.

const miMatriz5 = ["1", "2"];

arrpush = miMatriz5.push("3");

console.log(miMatriz5); // (3) ['1', '2', '3']

console.log(arrpush); // 3

// El método pop() elimina el último elemento de un array y devuelve ese elemento.

// const miMatriz = ['1', '2', '3'];
// const last = myArray.pop();
// // miMatriz es ahora ["1", "2"], último = "3"

const miMatriz6 = ["1", "2", "3"];

const ultimo = miMatriz6.pop();

console.log(miMatriz6); // (2) ['1', '2']

console.log(ultimo); // 3
