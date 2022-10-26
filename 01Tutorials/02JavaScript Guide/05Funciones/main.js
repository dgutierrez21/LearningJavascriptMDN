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

// Alcance y pila de funciones #008000

// Recursión #00aae4
// Una función puede referirse y llamarse a sí misma. Una función puede referirse a sí misma de tres maneras:

// 1. El nombre de la función

// 2. arguments.callee

// 3. Una variable de alcance que hace referencia a la función

// Por ejemplo, considere la siguiente definición de función:

const foo = function bar() {
  // las declaraciones van aquí
};

// Dentro del cuerpo de la función, todo lo siguiente es equivalente:

// 1. bar()

// 2. arguments.callee()

// 3. foo()

// Una función que se llama a sí misma se denomina función recursiva. En cierto modo, la recursión es análoga a un bucle. Ambas ejecutan el mismo código varias veces, y ambas requieren una condición (para evitar un bucle infinito, o mejor dicho, una recursión infinita en este caso).

// Por ejemplo, considere el siguiente bucle:

let x3 = 0;

// "x < 10" es la condición del bucle
while (x < 10) {
  // hacer cosas
  x++;
}

// Se puede convertir en una declaración de función recursiva, seguida de una llamada a esa función:

let resultadoBucle = "";

function bucle(x) {
  // "x >= 10" es la condición de salida (equivalente a "!(x < 10)")

  if (x === 11) {
    console.log(resultadoBucle);
    return console.log("El bucle ha terminado");
  } else if (x >= 10) {
    return console.log("Ingrese un número menor a 10");
  }

  // hacer cosas
  resultadoBucle += `| ${x} |`;

  bucle(x + 1); // La llamada recursiva
}

bucle(1);

// Sin embargo, algunos algoritmos no pueden ser simples bucles iterativos. Por ejemplo, obtener todos los nodos de una estructura de árbol (como el DOM) es más fácil a través de la recursión:

function caminarArbol(nodo) {
  if (nodo === null) {
    return;
  }

  // hacer algo con el nodo
  for (let i = 0; i < nodo.childNodes.length; i++) {
    caminarArbol(nodo.childNodes[i]);
  }
}

// En comparación con el bucle de función, aquí cada llamada recursiva hace muchas llamadas recursivas.

// Es posible convertir cualquier algoritmo recursivo en uno no recursivo, pero la lógica suele ser mucho más compleja, y hacerlo requiere el uso de una pila.

// De hecho, la propia recursión utiliza una pila: la pila de funciones. El comportamiento de la pila se puede ver en el siguiente ejemplo:

function foo2(i) {
  if (i < 0) {
    return;
  }

  console.log(`inicio: ${i}`);
  foo2(i - 1);
  console.log(`fin: ${i}`);
}

foo2(3);

// // Salida:

// // inicio: 3
// // inicio: 2
// // inicio: 1
// // inicio: 0
// // fin: 0
// // fin: 1
// // fin: 2
// // fin: 3

// Funciones anidadas y cierres #008000
// Se puede anidar una función dentro de otra función. La función anidada (interna) es privada para la función que la contiene (externa).

// También forma un cierre. Un cierre es una expresión (más comúnmente, una función) que puede tener variables libres junto con un entorno que vincula esas variables (que "cierra" la expresión).

// Dado que una función anidada es un cierre, esto significa que una función anidada puede "heredar" los argumentos y variables de su función contenedora. En otras palabras, la función interna contiene el ámbito de la función externa.

// En resumen:

// ---Sólo se puede acceder a la función interna desde las sentencias de la función externa.

// ---La función interna forma un cierre: la función interna puede utilizar los argumentos y variables de la función externa, mientras que la función externa no puede utilizar los argumentos y variables de la función interna.

// El siguiente ejemplo muestra funciones anidadas:

function aniadirCuadrado(a, b) {
  function cuadrado(x) {
    return x * x;
  }

  return cuadrado(a) + cuadrado(b);
}

const a2 = aniadirCuadrado(2, 3); // devuelve 13
const b2 = aniadirCuadrado(3, 4); // devuelve 25
const c2 = aniadirCuadrado(4, 5); // devuelve 25

// Dado que la función interna forma un cierre, puedes llamar a la función externa y especificar los argumentos tanto de la función externa como de la interna:

function exterior(x) {
  function interior(y) {
    return x + y;
  }

  return interior;
}

const fnInterior = exterior(3); // // Piensa en ello como: dame una función que sume 3 a lo que le des

console.log(fnInterior);

const resultadoCl = fnInterior(5); // devuelve 8

console.log(resultadoCl);

const resultadoCl01 = exterior(3)(5); // devuelve 8

console.log(resultadoCl01);

// Preservación de las variables #008000
// Observa cómo se preserva x cuando se devuelve interior. Un cierre debe preservar los argumentos y variables en todos los ámbitos a los que hace referencia. Como cada llamada proporciona argumentos potencialmente diferentes, se crea un nuevo cierre para cada llamada a exterior. La memoria puede ser liberada sólo cuando el interior devuelto ya no es accesible.

// Esto no es diferente de almacenar referencias en otros objetos, pero a menudo es menos obvio porque uno no establece las referencias directamente y no puede inspeccionarlas.

// Funciones anidadas por múltiplos #008000
// Las funciones pueden estar anidadas de forma múltiple. Por ejemplo:

// ---Una función (A) contiene una función (B), que a su vez contiene una función (C).

// ---Ambas funciones, B y C, forman aquí cierres. Por lo tanto, B puede acceder a A, y C puede acceder a B.

// ---Además, como C puede acceder a B, que a su vez puede acceder a A, C también puede acceder a A.

// Así, los cierres pueden contener múltiples ámbitos; contienen recursivamente el ámbito de las funciones que lo contienen. Esto se llama encadenamiento de ámbitos. (La razón por la que se llama "encadenamiento" se explica más adelante).

// Considere el siguiente ejemplo:

function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }

    C(3);
  }

  B(2);
}

A(1);

//  logs 6 (1 + 2 + 3)

// En este ejemplo, C accede a la y de B y a la x de A.

// Esto puede hacerse porque

// 1. B forma un cierre que incluye a A (es decir, B puede acceder a los argumentos y variables de A).

// 2. C forma un cierre que incluye a B.

// 3. Como el cierre de C incluye a B y el cierre de B incluye a A, entonces el cierre de C también incluye a A. Esto significa que C puede acceder tanto a los argumentos como a las variables de B y A. En otras palabras, C encadena los ámbitos de B y A, en ese orden.

// Sin embargo, lo contrario no es cierto. A no puede acceder a C, porque A no puede acceder a ningún argumento o variable de B, del que C es una variable. Por lo tanto, C sigue siendo privado sólo para B.

// Conflictos de nombres #008000
// Cuando dos argumentos o variables en los ámbitos de un cierre tienen el mismo nombre, existe un conflicto de nombres. Los ámbitos más anidados tienen prioridad. Así, el ámbito más interno tiene la mayor precedencia, mientras que el ámbito más externo tiene la menor. Esta es la cadena de ámbitos. El primero en la cadena es el ámbito más interno, y el último es el ámbito más externo. Considere lo siguiente:

function exterior2() {
  const x = 5;

  function interior(x) {
    return x * 2;
  }

  return interior;
}

console.log(exterior2()(10)); // devuelve 20 en lugar de 10

// El conflicto de nombres se produce en la sentencia return x * 2 y es entre el parámetro x de interior y la variable x de exterior. La cadena de alcance aquí es {interior, exterior, objeto global}. Por lo tanto, la x de interior tiene prioridad sobre la x de exterior, y se devuelve 20 (la x de interior) en lugar de 10 (la x de exterior).

// Cierres ( Closures ) #008000
// Los cierres son una de las características más potentes de JavaScript. JavaScript permite el anidamiento de funciones y otorga a la función interna acceso completo a todas las variables y funciones definidas dentro de la función externa (y a todas las demás variables y funciones a las que la función externa tiene acceso).

// Sin embargo, la función externa no tiene acceso a las variables y funciones definidas dentro de la función interna. Esto proporciona una especie de encapsulación para las variables de la función interna.

// Además, como la función interna tiene acceso al ámbito de la función externa, las variables y funciones definidas en la función externa vivirán más tiempo que la duración de la ejecución de la función externa, si la función interna consigue sobrevivir más allá de la vida de la función externa. Un cierre se crea cuando la función interna se pone de alguna manera a disposición de cualquier ámbito fuera de la función externa.

const mascota = function (nombre) {
  // La función externa define una variable llamada "nombre"

  const obtenerNombre = function () {
    // La función interna tiene acceso a la variable "nombre" de la función externa

    return nombre;
  };

  return obtenerNombre; // Devuelve la función interna, exponiéndola así a los ámbitos externos
};

const miMascota = mascota("Vivie");

console.log(miMascota()); // devuelve "Vivie"

// Puede ser mucho más complejo que el código anterior. Se puede devolver un objeto que contenga métodos para manipular las variables internas de la función externa.

const crearMascota = function (nombreMascota) {
  let sexoMascota;

  const objMascota = {
    // setNombre(nuevoNombre) es equivalente a setNombre: function (nuevoNombre)
    // en este contexto

    setNombre(nuevoNombreMascota) {
      nombreMascota = nuevoNombreMascota;
    },

    getNombre() {
      return nombreMascota;
    },

    getSexo() {
      return sexoMascota;
    },

    setSexo(nuevoSexoMascota) {
      if (
        typeof nuevoSexoMascota === "string" &&
        (nuevoSexoMascota.toLowerCase() === "masculino" ||
          nuevoSexoMascota.toLowerCase() === "femenino")
      ) {
        sexoMascota = nuevoSexoMascota;
      }
    },
  };

  return objMascota;
};

const nuevaMascota = crearMascota("Lola");
console.log(nuevaMascota.getNombre());

nuevaMascota.setNombre("Oliver");
nuevaMascota.setSexo("Masculino");

console.log(nuevaMascota.getNombre());
console.log(nuevaMascota.getSexo());

// En el código anterior, la variable nombre de la función externa es accesible a las funciones internas, y no hay otra forma de acceder a las variables internas que a través de las funciones internas. Las variables internas de las funciones internas actúan como almacenes seguros para los argumentos y variables externas. Contienen datos "persistentes" y "encapsulados" para que las funciones internas trabajen con ellos. Las funciones ni siquiera tienen que ser asignadas a una variable, o tener un nombre.

const getCodigo = (function () {
  const apiCodigo = "392823"; // Un código que no queremos que los forasteros puedan modificar...

  return function () {
    return apiCodigo;
  };
})();

console.log(getCodigo());

// Nota: ¡Hay una serie de trampas a las que hay que prestar atención cuando se utilizan cierres!

// Si una función cerrada define una variable con el mismo nombre que una variable en el ámbito externo, entonces no hay manera de referirse a la variable en el ámbito externo de nuevo. (La variable de ámbito interno "anula" a la externa, hasta que el programa salga del ámbito interno. Se puede considerar como un conflicto de nombres).

/*

const createPet = function (name) {  // The outer function defines a variable called "name".
  return {
    setName(name) {    // The enclosed function also defines a variable called "name".
      name = name;               // How do we access the "name" defined by the outer function?
    }
  }
}

*/

// Uso del objeto arguments #008000
// Los argumentos de una función se mantienen en un objeto tipo array. Dentro de una función, se pueden direccionar los argumentos que se le pasan de la siguiente manera

// arguments[i]

// donde i es el número ordinal del argumento, empezando por 0. Así, el primer argumento pasado a una función sería arguments[0]. El número total de argumentos se indica con arguments.length.

// Utilizando el objeto arguments, se puede llamar a una función con más argumentos de los que está formalmente declarado que acepta. Esto suele ser útil si no se sabe de antemano cuántos argumentos se pasarán a la función. Puede utilizar arguments.length para determinar el número de argumentos que realmente se pasarán a la función, y luego acceder a cada argumento utilizando el objeto arguments.

// Por ejemplo, considere una función que concatena varias cadenas. El único argumento formal de la función es una cadena que especifica los caracteres que separan los elementos a concatenar. La función se define de la siguiente manera:

function myConcatenacion(separador) {
  let resultado = ""; // inicializar la lista
  // iterar a través de los argumentos

  for (let i = 1; i < arguments.length; i++) {
    if (i === arguments.length - 1) {
      resultado += arguments[i];
    } else {
      resultado += arguments[i] + separador;
    }
  }

  return resultado;
}

// Puedes pasar cualquier número de argumentos a esta función, y ésta concatena cada argumento en una cadena "lista":

// // devuelve "rojo, naranja, azul, "

console.log(myConcatenacion(": ", "Rojo", "Naranja", "Azul", "Celeste"));

// // devuelve "elefante; jirafa; león; guepardo; "

console.log(myConcatenacion(", ", "Elefante", "Girafa", "Leon", "Leopardo"));

// Nota: La variable de los argumentos es "similar a un array", pero no es un array. Es similar a un array porque tiene un índice numerado y una propiedad de longitud. Sin embargo, no posee todos los métodos de manipulación de arrays.

// Consulte el objeto Function en la referencia de JavaScript para obtener más información.

// Parámetros de las funciones #008000
// Existen dos tipos especiales de sintaxis de parámetros: los parámetros por defecto y los parámetros de reposo.

// Parámetros por defecto #00aae4
// En JavaScript, los parámetros de las funciones tienen por defecto un valor indefinido. Sin embargo, en algunas situaciones puede ser útil establecer un valor por defecto diferente. Esto es exactamente lo que hacen los parámetros por defecto.

// En el pasado, la estrategia general para establecer parámetros por defecto consistía en comprobar los valores de los parámetros en el cuerpo de la función y asignarles un valor si no estaban definidos.

// En el siguiente ejemplo, si no se proporciona ningún valor para b, su valor sería indefinido al evaluar a*b, y una llamada a multiplicar normalmente habría devuelto NaN. Sin embargo, esto se evita con la segunda línea de este ejemplo:

function multiplicar2(a, b) {
  b = typeof b !== "undefined" ? b : 2;

  return a * b;
}

console.log(multiplicar2(5));

// Con los parámetros por defecto, ya no es necesaria la comprobación manual en el cuerpo de la función. Puedes poner 1 como valor por defecto para b en la cabeza de la función:

function multiplicar3(a, b = 2) {
  return a * b;
}

console.log(multiplicar3(5));

// Para más detalles, vea los parámetros por defecto en la referencia.

// Parámetros de reposo ( Rest ) #00aae4
// La sintaxis de los parámetros de reposo nos permite representar un número indefinido de argumentos como un array.

// En el siguiente ejemplo, la función multiplicar utiliza los parámetros de reposo para recoger los argumentos desde el segundo hasta el final. A continuación, la función los multiplica por el primer argumento.

function multiplicar4(multiplicador, ...losArgumentos) {
  return losArgumentos.map((x) => multiplicador * x);
}

const arr = multiplicar4(2, 1, 2, 3);

console.log(arr);

// Funciones de flecha #008000
// Una expresión de función de flecha (también llamada flecha gorda para distinguirla de una hipotética sintaxis -> en el futuro JavaScript) tiene una sintaxis más corta en comparación con las expresiones de función y no tiene su propio this, argumentos, super, o new.target. Las funciones flecha son siempre anónimas.

// Dos factores influyeron en la introducción de las funciones de flecha: las funciones más cortas y la no vinculación de this.  #FF0000

// Funciones más cortas #00aae4
// En algunos patrones funcionales, las funciones más cortas son bienvenidas. Compara:

const arrA = ["Boro", "Carbono", "Nitrógeno", "Oxigeno"];

// Expresión de función
const a3 = arrA.map(function (s) {
  return s.length;
});

console.log(a3);

// Función de flecha
const a4 = arrA.map((s) => s.length);

console.log(a4);

// No separar this #00aae4
// Hasta las funciones de flecha, cada nueva función definía su propio valor de this (un nuevo objeto en el caso de un constructor, undefined en las llamadas a funciones de modo estricto, el objeto base si la función se llama como un "método de objeto", etc.). Esto resultó ser menos que ideal con un estilo de programación orientado a objetos.

function Persona() {
  // El constructor de Persona() define a `this` como a sí mismo.
  this.edad = 0;

  setInterval(function crecer() {
    // En modo no estricto, la función crecer() define `this`
    // como el objeto global, que es diferente del `this
    // definido por el constructor Person().
    this.edad++;
  }, 1000);
}

const p = new Persona();

// En ECMAScript 3/5, este problema se solucionó asignando el valor de this a una variable que podía cerrarse por encima.

function Persona2() {
  const self = this;
  // Algunos eligen "this" en lugar de "self".
  // Elige uno y sé coherente.

  self.edad = 0;

  setInterval(function crecer() {
    // La llamada de retorno se refiere a la variable `self` de la cual
    // el valor es el objeto esperado.
    self.edad++;
  }, 1000);
}

// Alternativamente, se podría crear una función vinculada para que el valor apropiado de this se pasara a la función growUp().

// Una función de flecha no tiene su propio this; se utiliza el valor de this del contexto de ejecución que la rodea. Así, en el siguiente código, el this dentro de la función que se pasa a setInterval tiene el mismo valor que el this en la función que lo rodea:

function Persona3() {
  this.edad = 0;

  setInterval(() => {
    this.edad++; // // `this` se refiere correctamente al objeto persona3
  }, 1000);
}

const p1 = new Persona3();
