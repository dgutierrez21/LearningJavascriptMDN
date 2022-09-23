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
