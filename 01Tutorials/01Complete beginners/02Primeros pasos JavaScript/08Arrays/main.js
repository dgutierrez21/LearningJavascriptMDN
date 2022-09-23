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

// Conversión entre cadenas y matrices #008000
// A menudo se le presentarán algunos datos sin procesar contenidos en una cadena larga grande, y es posible que desee separar los elementos útiles en una forma más útil y luego hacerles cosas, como mostrarlos en una tabla de datos. Para ello, podemos utilizar el método split()). En su forma más simple, esto toma un solo parámetro, el carácter en el que desea separar la cadena, y devuelve las subcadenas entre el separador como elementos en una matriz.

// Nota: De acuerdo, este es técnicamente un método de cadena, no un método de matriz, pero lo hemos puesto con matrices, ya que va bien aquí.

// Juguemos con esto, para ver cómo funciona. Primero, cree una cadena en la consola:

const datos = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

// Ahora vamos a dividirlo en cada coma:

const ciudades5 = datos.split(",");

console.log(ciudades5);

// Finalmente, intente encontrar la longitud de su nueva matriz y recuperar algunos elementos de ella:

console.log(ciudades5.length);
console.log(ciudades5[0]); // El primer elemento en la matriz
console.log(ciudades5[2]); // El tercer elemento en la matriz
console.log(ciudades5[ciudades5.length - 1]); // El ultimo elemento en la matriz

// También puede ir en sentido contrario utilizando el método join()). Pruebe lo siguiente:

const separacionComa = ciudades5.join(", ");

console.log(separacionComa);

// Otra forma de convertir una matriz en una cadena es utilizar el método toString()). toString() es posiblemente más simple que join() ya que no toma un parámetro, sino más limitante. Con join() puede especificar diferentes separadores, mientras que toString() siempre usa una coma. (Intente ejecutar el paso 4 con un carácter diferente al de una coma).

const nombrePerros = ["Jumpy", "Lorik", "Volter", "Dexter"];

console.log(nombrePerros.toString());

// Aprendizaje activo: Impresión de esos productos #008000
// Volvamos al ejemplo que describimos anteriormente: imprimir nombres de productos y precios en una factura, luego totalizar los precios e imprimirlos en la parte inferior. En el ejemplo editable a continuación hay comentarios que contienen números: cada uno de estos marca un lugar donde debe agregar algo al código. Son los siguientes:

// 1. Debajo del comentario // number 1 hay una serie de cadenas, cada una de las cuales contiene un nombre de producto y un precio separados por dos puntos. Nos gustaría que convirtiera esto en una matriz y la almacenara en una matriz llamada products.

// 2. Debajo del comentario // number 2, comience un for...of() bucle para recorrer cada elemento de la matriz de products.

// 3. Debajo del comentario // number 3 queremos que escriba una línea de código que divida el elemento de matriz actual (name:price) en dos elementos separados, uno que contenga solo el nombre y otro que contenga solo el precio. Si no está seguro de cómo hacerlo, consulte el artículo Métodos de cadena útiles para obtener ayuda, o incluso mejor, consulte la sección Conversión entre cadenas y matrices de este artículo.

// 4. Como parte de la línea de código anterior, también querrá convertir el precio de una cadena a un número. Si no recuerdas cómo hacerlo, consulta el primer artículo sobre cadenas.

// 5. Hay una variable llamada total que se crea y se le da un valor de 0 en la parte superior del código. Dentro del bucle (debajo // number 4) queremos que agregue una línea que agregue el precio actual del artículo a ese total en cada iteración del bucle, de modo que al final del código se imprima el total correcto en la factura. Es posible que necesite un operador de asignación para hacer esto.

// 6. Queremos que cambie la línea justo debajo // number 5 para que la variable itemText sea igual a "nombre actual del artículo - $current precio del artículo", por ejemplo, "Zapatos - $ 23.99" en cada caso, para que la información correcta para cada artículo se imprima en la factura. Esto es solo una simple concatenación de cadenas, que debería ser familiar para usted.

// 7. Finalmente, debajo del comentario // number 6, deberá agregar un } para marcar el final del for...of() bucle.

const listResult = document.querySelector(".list_result_1"),
  totalBox = document.querySelector(".p_total");

let total = 0;
listResult.innerHTML = "";
totalBox.textContent = "";

// numero 1

const productos = [
  "Underpants:6.99",
  "Socks:5.99",
  "T-shirt:14.99",
  "Trousers:31.99",
  "Shoes:23.99",
];

// numero 2

for (const producto of productos) {
  // numero 3
  // const indexColon = producto.indexOf(":"),
  //   nombre = producto.slice(0, indexColon),
  //   precio = Number(producto.slice(indexColon + 1)); // numero 4

  // solucion #2 para el punto numero 3 y 4
  const subMatriz = producto.split(":"),
    nombre = subMatriz[0],
    precio = Number(subMatriz[1]);

  // numero 5
  total += precio;

  // numero 6
  let itemText = `${nombre} - $${precio}`;

  const lisItem = document.createElement("li"),
    listItemParr = document.createElement("p");

  listItemParr.textContent = itemText;
  listResult.appendChild(lisItem);
  lisItem.appendChild(listItemParr);
}

totalBox.textContent = `Total: $${total.toFixed(2)}`;
