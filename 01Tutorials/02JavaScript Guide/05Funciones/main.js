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
