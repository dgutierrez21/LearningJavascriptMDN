// Funciones #008000

// Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento -un conjunto de sentencias que realizan una tarea o calculan un valor-, pero para que un procedimiento pueda calificarse como función, debe tomar alguna entrada y devolver una salida en la que haya alguna relación obvia entre la entrada y la salida. Para utilizar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

// Consulte también el exhaustivo capítulo de referencia sobre las funciones de JavaScript para conocer los detalles.

// Definición de funciones #008000
// Declaraciones de funciones
// Una definición de función (también llamada declaración de función, o declaración de función) consiste en la palabra clave function, seguida de:

// ---El nombre de la función.

// ---Una lista de parámetros de la función, encerrados entre paréntesis y separados por comas.

// ---Las sentencias JavaScript que definen la función, encerradas entre llaves, { /* ... */ }.

// Por ejemplo, el siguiente código define una función simple llamada cuadrado:

function cuadradro(numero) {
  return numero * numero;
}

console.log(cuadradro(5));

// La función cuadrado toma un parámetro, llamado número. La función consta de una sentencia que dice que devuelve el parámetro de la función (es decir, number) multiplicado por sí mismo. La sentencia return especifica el valor devuelto por la función:

// return número * número;

// Los parámetros se pasan esencialmente a las funciones por valor - así que si el código dentro del cuerpo de una función asigna un valor completamente nuevo a un parámetro que se pasó a la función, el cambio no se refleja globalmente o en el código que llamó a esa función.

// Cuando se pasa un objeto como parámetro, si la función cambia las propiedades del objeto, ese cambio es visible fuera de la función, como se muestra en el siguiente ejemplo:

function miFuncion(elObjeto) {
  elObjeto.marca = "Toyota";
}

const miCarro = {
  marca: "Honda",
  modelo: "Accord",
  anio: 1998,
};

// x obtiene el valor "Honda"
const x = miCarro.marca;

console.log(x);

// la propiedad marca es modificada por la función
miFuncion(miCarro);

// y obtiene el valor "Toyota"
const y = miCarro.marca;

console.log(y);

// Cuando se pasa un array como parámetro, si la función cambia alguno de los valores del array, ese cambio es visible fuera de la función, como se muestra en el siguiente ejemplo:

function miFuncion2(elArray) {
  elArray[1] = 30;
}

const array = [45, 65, 23];

console.log(array[1]); // 65;

miFuncion2(array);

console.log(array[1]); // 30

// Expresiones de función #008000
// Mientras que la declaración de función anterior es sintácticamente una declaración, las funciones también pueden crearse mediante una expresión de función.

// Una función de este tipo puede ser anónima; no es necesario que tenga un nombre. Por ejemplo, la función cuadrado podría haberse definido como

const ExCuadrado = function (numero) {
  return numero * numero;
};

const x2 = ExCuadrado(10);

console.log(x2); // 100

// Sin embargo, se puede proporcionar un nombre con una expresión de función. Proporcionar un nombre permite que la función se refiera a sí misma, y también hace más fácil identificar la función en las trazas de pila de un depurador:

const factorial = function fac(num) {
  return num < 2 ? 1 : num * fac(num - 1);
};

console.log(factorial(5));

// Las expresiones de función son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función map que debe recibir una función como primer argumento y un array como segundo argumento:

function map(fun, arr) {
  const resultado = new Array(arr.length);

  for (let i = 0; i < arr.length; i++) {
    resultado[i] = fun(arr[i]);
  }

  return resultado;
}

// En el siguiente código, la función recibe una función definida por una expresión de función y la ejecuta para cada elemento del array recibido como segundo argumento:

const f = function (x) {
  return x * x * x;
};

const numeros = [1, 2, 3, 5];

const cubo = map(f, numeros);

console.log(cubo);

// En JavaScript, una función puede definirse en base a una condición. Por ejemplo, la siguiente definición de función define myFunc sólo si num es igual a 0:

let miFunc, num;

if (num === 0) {
  miFunc = function (elObjeto) {
    elObjeto.marca = "Toyota";
  };
}

// Además de definir funciones como las descritas aquí, también puedes utilizar el constructor Function para crear funciones a partir de una cadena en tiempo de ejecución, de forma similar a eval().

// Un método es una función que es una propiedad de un objeto. Lea más sobre los objetos y los métodos en Trabajar con objetos.

// Llamada a funciones #008000
// Definir una función no la ejecuta. Al definirla se nombra la función y se especifica lo que debe hacerse cuando se llama a la función.

// La llamada a la función ejecuta realmente las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función cuadrado, podrías llamarla de la siguiente manera

let resultadoCuadrado = cuadradro(3);

console.log(resultadoCuadrado);

// La sentencia anterior llama a la función con un argumento de 3. La función ejecuta sus sentencias y devuelve el valor 9.

// Las funciones deben estar en el ámbito cuando son llamadas, pero la declaración de la función puede ser elevada (aparecer debajo de la llamada en el código), como en este ejemplo:

console.log(cuadrado2(6));

function cuadrado2(num) {
  return num * num;
}

// El ámbito de una función es la función en la que se declara (o todo el programa, si se declara en el nivel superior).

// Nota: Esto sólo funciona cuando se define la función utilizando la sintaxis anterior (es decir, función funcNombre(){}). El código siguiente no funcionará.

/*

console.log(cuadrado3(6)); // Uncaught ReferenceError: Cannot access 'cuadrado3' before initialization

const cuadrado3 = function (num) {
  return num * num;
};

*/

// Esto significa que la elevación de funciones sólo funciona con declaraciones de funciones, no con expresiones de funciones.

// Los argumentos de una función no se limitan a cadenas y números. Se pueden pasar objetos enteros a una función. La función showProps() (definida en Working with objects) es un ejemplo de función que toma un objeto como argumento.

// Una función puede llamarse a sí misma. Por ejemplo, aquí hay una función que calcula factoriales recursivamente:

function factorial2(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * factorial2(numero - 1);
  }
}

// Entonces podrías calcular los factoriales de 1 a 5 de la siguiente manera:

const a = factorial2(1);
const b = factorial2(2);
const c = factorial2(3);
const d = factorial2(4);
const e = factorial2(5);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Hay otras formas de llamar a las funciones. A menudo hay casos en los que se necesita llamar a una función de forma dinámica, o el número de argumentos de una función varía, o en los que el contexto de la llamada a la función debe establecerse en un objeto específico determinado en tiempo de ejecución.

// Resulta que las funciones son en sí mismas objetos, y a su vez, estos objetos tienen métodos. (Véase el objeto Function.) Los métodos call() y apply() pueden utilizarse para lograr este objetivo.

// Ámbito(Scope) de la función #008000
// Las variables definidas dentro de una función no pueden ser accedidas desde ningún lugar fuera de la función, porque la variable está definida sólo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que está definida.

// En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función también puede acceder a todas las variables definidas en su función padre, y a cualquier otra variable a la que la función padre tenga acceso.

// // Las siguientes variables están definidas en el ámbito global

const num1 = 20;
const num2 = 3;
const nombre = "Aonghus";

// // Esta función se define en el ámbito global

function multiplicar() {
  return num1 * num2;
}

const resultado = multiplicar(); // devuleve 60

console.log(resultado);

// // Un ejemplo de función anidada

function obtenerPuntuacion() {
  const num1 = 2,
    num2 = 3;

  function aniadir() {
    return `${nombre} marcó ${num1 + num2}`;
  }

  return aniadir();
}

const resultadoOP = obtenerPuntuacion(); // Devuelve "Aonghus marcó 5"

console.log(resultadoOP);
