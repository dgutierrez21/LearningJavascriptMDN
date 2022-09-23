// Matrices #ff0
// En el artículo final de este módulo, veremos las matrices, una forma ordenada de almacenar una lista de elementos de datos bajo un solo nombre de variable. Aquí veremos por qué esto es útil, luego exploramos cómo crear una matriz, recuperar, agregar y eliminar elementos almacenados en una matriz, y más.

// ¿Qué es una matriz? #008000
// Las matrices generalmente se describen como "objetos similares a listas"; son básicamente objetos individuales que contienen múltiples valores almacenados en una lista. Los objetos de matriz se pueden almacenar en variables y tratar de la misma manera que cualquier otro tipo de valor, la diferencia es que podemos acceder a cada valor dentro de la lista individualmente, y hacer cosas súper útiles y eficientes con la lista, como recorrerla y hacer lo mismo con cada valor. Tal vez tenemos una serie de artículos de productos y sus precios almacenados en una matriz, y queremos recorrerlos todos e imprimirlos en una factura, mientras totalizamos todos los precios juntos e imprimimos el precio total en la parte inferior.

// Si no tuviéramos matrices, tendríamos que almacenar cada elemento en una variable separada, luego llamar al código que hace la impresión y agregar por separado para cada elemento. Esto sería mucho más largo de escribir, menos eficiente y más propenso a errores. Si tuviéramos 10 artículos para agregar a la factura ya sería molesto, pero ¿qué pasa con 100 artículos, o 1000? Volveremos a este ejemplo más adelante en el artículo.

// Creación de matrices #008000
// Las matrices consisten en corchetes y elementos que están separados por comas.

// Supongamos que queremos almacenar una lista de la compra en una matriz. Pegue el código siguiente en la consola:

const compras = ["Leche", "Fideos", "Pan", "Queso"];

console.log(compras);

// En el ejemplo anterior, cada elemento es una cadena, pero en una matriz podemos almacenar varios tipos de datos: cadenas, números, objetos e incluso otras matrices. También podemos mezclar tipos de datos en una sola matriz: no tenemos que limitarnos a almacenar solo números en una matriz y en otra solo cadenas. Por ejemplo:

const secuencia = [1, 1, 3, 2, 5, 5];

console.log(secuencia);

const alAzar = ["Arbol", 456, [0, 1, 2]];

console.log(alAzar);

// Búsqueda de la longitud de una matriz #008000
// Puede averiguar la longitud de una matriz (cuántos elementos hay en ella) exactamente de la misma manera que averigua la longitud (en caracteres) de una cadena, utilizando la propiedad length. Pruebe lo siguiente:

const compras2 = ["Leche", "Fideos", "Pan", "Queso"];

console.log(compras2.length); // 4

// Acceso y modificación de elementos de matriz #008000
// Los elementos de una matriz están numerados, comenzando desde cero. Este número se denomina índice del elemento. Entonces, el primer elemento tiene índice 0, el segundo tiene índice 1, y así sucesivamente. Puede acceder a elementos individuales de la matriz mediante notación de corchetes y proporcionando el índice del elemento, de la misma manera que accedió a las letras de una cadena.

// Introduzca lo siguiente en la consola:

const compras3 = ["Leche", "Fideos", "Pan", "Queso"];

console.log(compras3[3]);

// También puede modificar un elemento de una matriz asignando un nuevo valor a un único elemento de matriz. Prueba esto:

compras3[1] = "Banano";

console.log(compras3);
console.log(compras3[1]);

// Nota: Lo hemos dicho antes, pero solo como recordatorio: ¡las computadoras comienzan a contar desde 0!

// Tenga en cuenta que una matriz dentro de una matriz se denomina matriz multidimensional. Puede acceder a un elemento dentro de una matriz que se encuentra dentro de otra matriz encadenando dos conjuntos de corchetes. Por ejemplo, para acceder a uno de los elementos dentro de la matriz que es el tercer elemento dentro de la matriz random (ver sección anterior), podríamos hacer algo como esto:

const alAzar2 = ["Arbol", 456, [0, "Lechuga", 2]];

console.log(alAzar2[2][1]);

// Búsqueda de elementos en una matriz #008000
// Esto está bien si conoces el índice de un artículo, pero ¿qué pasa si no lo haces? Puede encontrar el índice de un elemento determinado mediante el método indexOf()). Esto toma un elemento como argumento y devuelve el índice, o -1 si el elemento no se encontró en la matriz:

const lenguajesProgramacion = ["Swift", "C++", "Python"];

console.log(lenguajesProgramacion.indexOf("Python"));
console.log(lenguajesProgramacion.indexOf("Javascript"));

// Adición de elementos #008000
// Para añadir uno o más elementos al final de una matriz podemos usar push(). Tenga en cuenta que debe incluir uno o más elementos que desee agregar al final de la matriz.

const ciudades = ["Manchester", "Liverpool"];

ciudades.push("Cardiff");

console.log(ciudades);

ciudades.push("Brandford", "Brighton");

console.log(ciudades);

// La nueva longitud de la matriz se devuelve cuando se completa la llamada al método. Si desea almacenar la nueva longitud de matriz en una variable, puede hacer algo como esto:

const ciudades2 = ["Liverpool", "Manchester"];

const nuevaLongitud = ciudades2.push("Bristol");

console.log(ciudades2);
console.log(nuevaLongitud);

// Para agregar un elemento al inicio de la matriz, use unshift():

const ciudades3 = ["Bristol", "Manchester"];

ciudades3.unshift("Edinburgh");

console.log(ciudades3);

// Eliminación de elementos #008000
// Para quitar el último elemento de la matriz, utilice pop().

const paisesMasSeguros22 = [
  "Islandia",
  "Nueva Zelanda",
  "Irlanda",
  "Dinamarca",
];

paisesMasSeguros22.pop();

console.log(paisesMasSeguros22);

// El método pop() devuelve el elemento que se quitó. Para guardar ese elemento en una nueva variable, puede hacer lo siguiente:

const paisesMejoresSueldos22 = ["Suiza", "Islandia", "Dinamarca", "Noruega"];

const paisEliminado = paisesMejoresSueldos22.pop();

console.log(paisEliminado);

// Para quitar el primer elemento de una matriz, utilice shift():

paisesMejoresSueldos22.shift();

console.log(paisesMejoresSueldos22);

// Si conoce el índice de un elemento, puede quitarlo de la matriz mediante splice():

PaisesMejoresSalariosMinimosEuropa = [
  "Luxemburgo",
  "Irlandia",
  "Paises bajos",
  "Bélgica",
];

const index = PaisesMejoresSalariosMinimosEuropa.indexOf("Paises bajos");

if (index !== -1) {
  PaisesMejoresSalariosMinimosEuropa.splice(index, 1);
}

console.log(PaisesMejoresSalariosMinimosEuropa);

// En esta llamada a splice(), el primer argumento dice por dónde empezar a eliminar elementos, y el segundo argumento dice cuántos elementos deben eliminarse. Para que pueda eliminar más de un elemento:

if (index !== -1) {
  PaisesMejoresSalariosMinimosEuropa.splice(index, 2);
}

console.log(PaisesMejoresSalariosMinimosEuropa);

// Acceso a todos los elementos #008000
// Muy a menudo querrá acceder a todos los elementos de la matriz. Puede hacer esto usando el for...of la declaración:

const halcones = [
  "Halcón berigora",
  "Halcón pechirrojo",
  "Halcón Eleonor",
  "Halcón maorí",
];

for (const halcon of halcones) {
  console.log(halcon);
}

// A veces querrá hacer lo mismo con cada elemento de una matriz, dejándolo con una matriz que contiene los elementos modificados. Puede hacerlo usando map(). El siguiente código toma una matriz de números y duplica cada número:

function doble(numero) {
  return numero * 2;
}

const numeros = [5, 2, 7, 10];
const duplicado = numeros.map(doble);
console.log(numeros);
console.log(duplicado);

// Damos una función al map(), y map() llama a la función una vez por cada elemento de la matriz, pasando el elemento. A continuación, agrega el valor devuelto de cada llamada a la función a una nueva matriz y, finalmente, devuelve la nueva matriz.

// A veces querrá crear una nueva matriz que contenga solo los elementos de la matriz original que coincidan con alguna prueba. Puede hacerlo usando filter(). El código siguiente toma una matriz de cadenas y devuelve una matriz que contiene solo las cadenas que tienen más de 8 caracteres:

function esLargo(ciudad) {
  return ciudad.length > 8;
}

const ciudades4 = ["London", "Liverpool", "Totnes", "Edinburgh"];

const masLargo = ciudades4.filter(esLargo);

console.log(masLargo);

// Al igual que map(), damos una función al método filter() y filter() llama a esta función para cada elemento de la matriz, pasando el elemento. Si la función devuelve true, el elemento se agrega a una nueva matriz. Finalmente devuelve la nueva matriz.
