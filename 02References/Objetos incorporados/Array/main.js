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
