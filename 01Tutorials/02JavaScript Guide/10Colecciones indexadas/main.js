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

// El método shift() elimina el primer elemento de una matriz y devuelve ese elemento.

const miMatriz7 = ["1", "2", "3"];

const primero = miMatriz7.shift();

console.log(miMatriz7);

console.log(primero); // 1

// // miMatriz es ahora ["2", "3"], primero es "1"

// El método unshift() añade uno o más elementos al frente de un array y devuelve la nueva longitud del array.

const miMatriz8 = ["1", "2", "3"];

const arrUnshift = miMatriz8.unshift("4", "5");

console.log(miMatriz8);

// // miMatriz se convierte en ["4", "5", "1", "2", "3"]

console.log(arrUnshift); // 5

// El método slice() extrae una sección de un array y devuelve un nuevo array.

const miMatriz9 = ["a", "b", "c", "d", "e"];

const arrSlice = miMatriz9.slice(1, 4); // comienza en el índice 1 y extrae todos los elementos hasta el índice 3, devolviendo ["b", "c", "d"]

console.log(arrSlice);

// El método at() devuelve el elemento en el índice especificado en el array, o indefinido si el índice está fuera de rango. Se utiliza sobre todo para los índices negativos que acceden a los elementos desde el final de la matriz.

const miMatriz10 = ["a", "b", "c", "d", "e"];

const arrAt = miMatriz10.at(-2); // "d", el penúltimo elemento de myArray

console.log(arrAt); // d

// El método splice() elimina elementos de una matriz y (opcionalmente) los reemplaza. Devuelve los elementos que se han eliminado de la matriz.

const miMatriz11 = ["1", "2", "3", "4", "5"];

const arrSplice = miMatriz11.splice(1, 3, "a", "b", "c", "d");

console.log(miMatriz11); // (6) ['1', 'a', 'b', 'c', 'd', '5']

console.log(arrSplice); // (3) ['2', '3', '4']

// // Este código comenzó en el índice uno (o donde estaba el "2"),
// // eliminó 3 elementos allí, y luego insertó todos los elementos consecutivos
// // elementos consecutivos en su lugar.

// El método reverse() transpone los elementos de un array, en su lugar: el primer elemento del array se convierte en el último y el último en el primero. Devuelve una referencia al array.

const miMatriz12 = ["1", "2", "3"];

const arrReverse = miMatriz12.reverse();

// // transpone el array para que miArray = ["3", "2", "1"]

console.log(miMatriz12);

console.log(arrReverse);

// El método flat() devuelve un nuevo array con todos los elementos del subarray concatenados en él recursivamente hasta la profundidad especificada.

let miMatriz13 = [1, 2, [3, 4]];
console.log(miMatriz13);

miMatriz13 = miMatriz13.flat();
console.log(miMatriz13);

// // miMatriz es ahora [1, 2, 3, 4], ya que la submatriz [3, 4] está aplanada

// El método sort() ordena los elementos de un array en su lugar(https://en.wikipedia.org/wiki/In-place_algorithm), y devuelve una referencia al array.

const miMatriz14 = ["A", "Z", "Viento", "Lluvia", "Fuego"];

console.log(miMatriz14);

miMatriz14.sort();

console.log(miMatriz14);

// // ordena el array de forma que miMatriz = ["A", Fuego", "Lluvia", "Viento", "Z"]

// sort() también puede tomar una función de devolución de llamada para determinar cómo se comparan los elementos del array.

// El método sort (y otros más abajo) que toman una llamada de retorno se conocen como métodos iterativos, porque iteran sobre todo el array de alguna manera. Cada uno toma un segundo argumento opcional llamado thisObject. Si se proporciona, thisObject se convierte en el valor de la palabra clave this dentro del cuerpo de la función callback. Si no se proporciona, al igual que en otros casos en los que se invoca una función fuera de un contexto de objeto explícito, esto se referirá al objeto global (ventana) cuando se utilice la función de flecha como devolución de llamada, o indefinido cuando se utilice la función normal como devolución de llamada.

// La función callback es llamada con dos argumentos, que son elementos del array.

// La función siguiente compara dos valores y devuelve uno de los tres valores:

// Por ejemplo, lo siguiente ordenará por la última letra de una cadena:

// Definición y uso
//  sort() clasifica los elementos de una matriz.

//  sort() sobrescribe la matriz original.

//  sort() clasifica los elementos como cadenas en orden alfabético y ascendente.

// compareFn(a, b) valor de retorno |	ordenar orden
// > 0 |	ordenar a después b
// < 0 |	ordenar a antes b
// = = = 0 |	mantener el orden original de a y b

const miMatriz15 = ["a", "z", "Viento", "Lluvia", "Fuego"];
console.log(miMatriz15);

const ordenarUltimaLetra = (a, b) => {
  if (a[a.length - 1] < b[b.length - 1]) {
    return -1;
  }

  if (a[a.length - 1] > b[b.length - 1]) {
    return 1;
  }

  if (a[a.length - 1] === b[b.length - 1]) {
    return 0;
  }
};

miMatriz15.sort(ordenarUltimaLetra);
console.log(miMatriz15);

// 1. a("a") < b("z") = -1 == ordena a antes de b === ["a", "z", "Viento", "Lluvia", "Fuego"]

// 2. a("z") > b("Viento(o)") = 1 == ordena a despues que b === ["a", "Viento", "z", "Lluvia", "Fuego"]

// 3. a("a") < b("viento(o)") = -1 == ordena a antes de b === ["a", "Viento", "z", "Lluvia", "Fuego"]

// 4. a("z") > b("Lluvia(a)") = 1 == ordena a despues de b === ["a", "Viento", "Lluvia", "z", "Fuego"]

// 5. a("Viento(o)") > b("Lluvia") = 1 == ordena a despues de b === ["a", "Lluvia", "Viento", "z", "Fuego"]

// 6. a("a") === b("Lluvia(a)") = 0 == mantener el orden en el que se encuentran === ["a", "Lluvia", "Viento", "z", "Fuego"]

// 7. a("z") > b("Fuego(o)") = 1 == ordena a despues de b === ["a", "Lluvia", "Viento", "Fuego", "z"]

// 8. a("viento(o)") === b("Fuego(o)") = 0 == mantener el orden en el que se encuentran === ["a", "Lluvia", "Viento", "Fuego", "z"]

// // ordena el array de forma que miMatriz = (5) ['a', 'Lluvia', 'Viento', 'Fuego', 'z']

// si a es menor que b según el sistema de ordenación, devuelve -1 (o cualquier número negativo)

// si a es mayor que b según el sistema de ordenación, devuelve 1 (o cualquier número positivo)

// si a y b se consideran equivalentes, devuelve 0.

// El método indexOf() busca en el array el elemento de búsqueda y devuelve el índice de la primera coincidencia.

// Parámetros
// searchElement
// Elemento que se va a ubicar en la matriz.

// fromIndex Opcional
// Índice en el que se va a iniciar la búsqueda. Si el índice es mayor o igual que la longitud de la matriz, se devuelve -1, lo que significa que no se buscará la matriz. Si el valor de índice proporcionado es un número negativo, se toma como el desplazamiento desde el final de la matriz. Nota: si el índice proporcionado es negativo, la matriz se sigue buscando de adelante hacia atrás. Si el índice proporcionado es 0, se buscará en toda la matriz. Valor predeterminado: 0 (se busca en toda la matriz).

// Valor devuelto
// El primer índice del elemento en la matriz; -1 si no se encuentra.

const miMatriz16 = ["a", "b", "a", "b", "a", "b"];

console.log(miMatriz16.indexOf("b")); // 1

// // Ahora inténtalo de nuevo, empezando por la última coincidencia

console.log(miMatriz16.indexOf("b", 2)); // 3

console.log(miMatriz16.indexOf("b", -1)); // 5
console.log(miMatriz16.indexOf("z")); // -1, porque no se encontró 'z'

// El método lastIndexOf() funciona como indexOf, pero empieza por el final y busca hacia atrás.

const miMatriz17 = ["a", "b", "c", "d", "a", "b"];

console.log(miMatriz17.lastIndexOf("b")); // 5

// // Ahora inténtalo de nuevo, empezando desde antes de la última coincidencia

console.log(miMatriz17.lastIndexOf("b", 4)); // 1
console.log(miMatriz17.lastIndexOf("z")); // -1

// El método forEach() ejecuta el callback en cada elemento del array y devuelve undefined.

const miMatriz18 = ["a", "b", "c"];

const arrForEach = miMatriz18.forEach((elemento) => {
  console.log(elemento);
});

console.log(arrForEach); // undefined

// // Registros:
// // a
// // b
// // c

// El método map() crea una nueva matriz rellenada con los resultados de llamar a una función proporcionada en cada elemento de la matriz de llamada.

const miMatriz19 = ["a", "b", "c"];

const arrMap = miMatriz19.map((elemento) => elemento.toUpperCase());

console.log(arrMap);

// ['A', 'B', 'C']

// El método flatMap() ejecuta map() seguido de un flat() de profundidad 1.

const miMatriz20 = ["a", "b", "c"];

const arrFlatMap = miMatriz20.flatMap((elemento) => [
  elemento.toUpperCase(),
  elemento.toLowerCase(),
]);

console.log(arrFlatMap); // ['A', 'a', 'B', 'b', 'C', 'c']

// El método filter() devuelve un nuevo array que contiene los elementos para los que la llamada de retorno devolvió true.

const miMatriz21 = ["a", 10, "b", 20, "c", 30];

const arrFilter = miMatriz21.filter((elemento) => typeof elemento === "number");

console.log(arrFilter); // [10, 20, 30]

// El método find() devuelve el primer elemento cuya devolución de llamada haya sido verdadera.

const miMatriz22 = ["a", 10, "b", 20, "c", 30];

const arrFind = miMatriz22.find((elemento) => typeof elemento === "number");

console.log(arrFind); // 10

// El método findLast() devuelve el último elemento cuya devolución de llamada haya sido verdadera.

const miMatriz23 = ["a", 10, "b", 20, "c", 30];

const arrFindLast = miMatriz23.findLast(
  (elemento) => typeof elemento === "number"
);

console.log(arrFindLast); // 30

// El método findIndex() devuelve el índice del primer elemento para el que la devolución de llamada devolvió true.

const miMatriz24 = ["a", 10, "b", 20, "c", 30];

const arrFindIndex = miMatriz24.findIndex(
  (elemento) => typeof elemento === "number"
);

console.log(arrFindIndex); // 1

// El método findLastIndex() devuelve el índice del último elemento para el que la devolución de llamada devolvió true.

const miMatriz25 = ["a", 10, "b", 20, "c", 30];

const arrFindLastIndex = miMatriz25.findLastIndex(
  (elemento) => typeof elemento === "number"
);

console.log(arrFindLastIndex); // 5

// El método every() devuelve true si el callback devuelve true para cada elemento del array.

function esUnNumero(valor) {
  return typeof valor === "number";
}

const miMatriz26 = [1, 2, 3],
  arrEvery = miMatriz26.every(esUnNumero);

console.log(arrEvery); // true

const miMatriz27 = ["a", 5, "b"];

const arrEvery2 = miMatriz27.every(esUnNumero);

console.log(arrEvery2); // false

// El método some() devuelve true si el callback devuelve true para al menos un elemento del array.

const arrSome = miMatriz27.some(esUnNumero);

console.log(arrSome); // true

const miMatriz28 = ["a", "b", "c"];

const arrSome2 = miMatriz28.some(esUnNumero);

console.log(arrSome2); // false

// El método reduce() aplica callback(accumulator, currentValue, currentIndex, array) para cada valor del array con el fin de reducir la lista de elementos a un único valor. La función reduce devuelve el valor final devuelto por la función callback.

// Si se especifica initialValue, se llama a la función callback con initialValue como primer parámetro y el valor del primer elemento del array como segundo parámetro.

// Si no se especifica initialValue, los dos primeros valores de parámetro de la devolución de llamada serán el primer y segundo elemento del array. En cada llamada posterior, el valor del primer parámetro será el que devolvió la llamada anterior, y el valor del segundo parámetro será el siguiente valor del array.

// Si la devolución de llamada necesita acceder al índice del elemento que se está procesando, o acceder a todo el array, están disponibles como parámetros opcionales.

const miMatriz29 = [10, 20, 30];

const total = miMatriz29.reduce(
  (acumulador, valorActual) => acumulador + valorActual,
  0
);

console.log(total); // 60

// ejemplo 2

const miMatriz30 = [0, 1, 2, 3, 4];

const arrReduce = miMatriz30.reduce(
  (valorAnterior, valorActual, indice, array) => {
    console.log({ valorAnterior, valorActual });
    return valorAnterior + valorActual;
  }
);

console.log(arrReduce);

// ejemplo 3

const miMatriz31 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const valorInicial = 0;

const sumaConElInicial = miMatriz31.reduce((valorAnterior, valorActual) => {
  console.log({ valorAnterior, valorActual });
  return valorAnterior + valorActual;
}, valorInicial);

console.log(sumaConElInicial); // 10

// Nota: Hay pocas veces que se deba utilizar un reduce, si se puede evitar usar un reduce es mejor. Fuentes: https://youtu.be/S1ZXSoAxEBg #FF0000

// El método reduceRight() funciona como reduce(), pero empieza por el último elemento.

// reduce y reduceDerecha son los menos obvios de los métodos iterativos de array. Deben usarse para algoritmos que combinan dos valores recursivamente para reducir una secuencia a un solo valor.

// Matrices dispersas #008000
// Las matrices pueden contener "ranuras vacías", que no son lo mismo que las ranuras rellenas con el valor indefinido. Las ranuras vacías se pueden crear de una de las siguientes maneras:

// // Constructor de arrays:
const arrVacio = new Array(5); // [ <5 elementos vacíos> ]

console.log(arrVacio);

// // Comas consecutivas en el literal del array:
const arrVacio2 = [1, 2, , , 5]; // [ 1, 2, <2 elementos vacíos>, 5 ]

console.log(arrVacio2);

// // Establecer directamente una ranura con índice mayor que array.length:
const arrVacio3 = [1, 2];
arrVacio3[4] = 5; // [ 1, 2, <2 elementos vacíos>, 5 ]

console.log(arrVacio3);

// // Alargando un array estableciendo directamente .length:
const arrVacio4 = [1, 2];
arrVacio4.length = 5; // [ 1, 2, <3 elementos vacíos> ]

console.log(arrVacio4);

// // Borrando un elemento:
const arrVacio5 = [1, 2, 3, 4, 5];
delete arrVacio5[2]; // [ 1, 2, <1 elemento vacío>, 4, 5 ]

console.log(arrVacio5);

// En algunas operaciones, los espacios vacíos se comportan como si estuvieran llenos de indefinidos.

const arrVacio6 = [1, 2, , , 5]; // Crear un array disperso

// // Acceso indexado
console.log(arrVacio6[2]); // indefinido

for (const elemento of arrVacio6) {
  console.log(elemento);
}

// // Logs: 1 2 undefined undefined 5

// // Repartición
const otroArr = [...arrVacio6]; // "another" es [ 1, 2, undefined, undefined, 5 ]

console.log(otroArr);

// Pero en otros (sobre todo en los métodos de iteración de arrays), se saltan las ranuras vacías.

const mapeado = arrVacio6.map((elemento) => elemento + 1); // [ 2, 3, <2 elementos vacíos>, 6 ]

console.log(mapeado); // (5) [2, 3, empty × 2, 6]

arrVacio6.forEach((e) => console.log(e)); // 1 2 5
const filtrar = arrVacio6.filter(() => true); // [ 1, 2, 5 ]
console.log(filtrar);

const tieneFalso = arrVacio6.some((k) => !k); // false
console.log(tieneFalso);

// // Enumeración de propiedades
const claves = Object.keys(arrVacio6); // [ '0', '1', '4' ]
console.log(claves);

for (const clave of claves) {
  console.log(clave);
}

// // Registra: '0' '1' '4'

console.log("*************************");

// // La propagación en un objeto utiliza la enumeración de propiedades, no el iterador del array

const propagarObjeto = { ...arrVacio6 }; // { '0': 1, '1': 2, '4': 5 }

console.log(propagarObjeto);

for (const prop in propagarObjeto) {
  console.log(`${prop}: ${propagarObjeto[prop]}`);
}

// Para ver una lista completa de cómo se comportan los métodos de los arrays con arrays dispersos, consulte la página de referencia de Array.
