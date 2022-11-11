// Iteradores y generadores #008000

// Los iteradores y generadores introducen el concepto de iteración directamente en el núcleo del lenguaje y proporcionan un mecanismo para personalizar el comportamiento de los bucles for...of.

// Para más detalles, véase también

// Protocolos de iteración
// for...of
// función* y Generator
// yield y yield*

// Iteradores #008000
// En JavaScript un iterador es un objeto que define una secuencia y potencialmente un valor de retorno al terminar.

// Específicamente, un iterador es cualquier objeto que implementa el protocolo Iterator teniendo un método next() que devuelve un objeto con dos propiedades

// value
// El siguiente valor en la secuencia de iteración.

// done
// Es verdadero si el último valor de la secuencia ya ha sido consumido. Si value está presente junto a done, es el valor de retorno del iterador.

// Una vez creado, un objeto iterador puede ser iterado explícitamente llamando repetidamente a next(). Iterar sobre un iterador se dice que consume el iterador, porque generalmente sólo es posible hacerlo una vez. Después de que se haya obtenido un valor final, las llamadas adicionales a next() deben seguir devolviendo {done: verdadero}.

// El iterador más común en JavaScript es el iterador Array, que devuelve cada valor del array asociado en secuencia.

// Aunque es fácil imaginar que todos los iteradores podrían expresarse como arrays, esto no es cierto. Los arrays deben ser asignados en su totalidad, pero los iteradores se consumen sólo cuando es necesario. Debido a esto, los iteradores pueden expresar secuencias de tamaño ilimitado, como el rango de enteros entre 0 e Infinito.

// Aquí hay un ejemplo que puede hacer precisamente eso. Permite crear un simple iterador de rango que define una secuencia de enteros desde el inicio (inclusivo) hasta el final (exclusivo) espaciados por pasos. Su valor de retorno final es el tamaño de la secuencia creada, seguido por la variable iterationCount.

function hacerGeneradorDeRango(iniciar = 0, finalizar = Infinity, paso = 1) {
  let siguienteIndice = iniciar;
  let conteoIteracion = 0;

  const iteradorRango = {
    next() {
      let resultado;
      if (siguienteIndice < finalizar) {
        resultado = { valor: siguienteIndice, conteoIteracion: false };
        siguienteIndice += paso;
        conteoIteracion++;

        return resultado;
      }
      return { valor: conteoIteracion, done: true };
    },
  };

  return iteradorRango;
}

// El uso del iterador queda así

const it = hacerGeneradorDeRango(1, 10, 2);

let resultado = it.next();

while (!resultado.done) {
  console.log(resultado.valor); // 1 3 5 7 9
  resultado = it.next();
}

// [5 números devueltos, que tomaron intervalo entre: 0 a 10]

// Nota: No es posible saber reflexivamente si un objeto concreto es un iterador. Si necesita hacerlo, utilice Iterables.

// Funciones generadoras #008000
// Aunque los iteradores personalizados son una herramienta útil, su creación requiere una programación cuidadosa debido a la necesidad de mantener explícitamente su estado interno. Las funciones generadoras ofrecen una potente alternativa: permiten definir un algoritmo iterativo escribiendo una única función cuya ejecución no es continua. Las funciones generadoras se escriben utilizando la sintaxis function*.

// Cuando se llaman, las funciones generadoras no ejecutan inicialmente su código. En su lugar, devuelven un tipo especial de iterador, llamado Generador. Cuando se consume un valor llamando al "next" método del generador, la función generadora se ejecuta hasta que encuentra la palabra clave yield.

// La función puede ser llamada tantas veces como se desee, y devuelve un nuevo Generador cada vez. Cada generador sólo puede ser iterado una vez.

// Ahora podemos adaptar el ejemplo anterior. El comportamiento de este código es idéntico, pero la implementación es mucho más fácil de escribir y leer.

function* hacerIteradorDeRangoFunc(
  iniciar = 0,
  finalizar = Infinity,
  paso = 1
) {
  let contadorIteracion = 0;

  for (let i = iniciar; i < finalizar; i += paso) {
    contadorIteracion++;
    yield i;
  }

  return contadorIteracion;
}

let resultadoFunc = hacerIteradorDeRangoFunc(1, 10, 2);

console.log(resultadoFunc.next().value);

console.log(resultadoFunc.next().value);

console.log(resultadoFunc.next().value);

console.log(resultadoFunc.next().value);

console.log(resultadoFunc.next().value);

// Iterables #008000
// Un objeto es iterable si define su comportamiento de iteración, como por ejemplo qué valores se repiten en una construcción for...of. Algunos tipos incorporados, como Array o Map, tienen un comportamiento de iteración por defecto, mientras que otros tipos (como Object) no.

// Para ser iterable, un objeto debe implementar el método @@iterator. Esto significa que el objeto (o uno de los objetos de su cadena de prototipos) debe tener una propiedad con una clave Symbol.iterator.

// Puede ser posible iterar sobre un iterable más de una vez, o sólo una vez. Depende del programador saber cuál es el caso.

// Los iterables que sólo pueden iterar una vez (como los Generadores) suelen devolver esto desde su método @@iterator, mientras que los iterables que pueden ser iterados muchas veces deben devolver un nuevo iterador en cada invocación de @@iterator.

function* hacerIterador() {
  yield 1;
  yield 2;
}

const iterador = hacerIterador();

for (const elementoIterador of iterador) {
  console.log(elementoIterador);
}

// // Este ejemplo nos muestra que generator(iterator) es un objeto iterable
// // que tiene el método @@iterator que devuelve el it (él mismo),
// // y en consecuencia, el objeto it puede iterar sólo _una vez_.

// // Si cambiamos su método @@iterator por una función/generador
// // que devuelva un nuevo objeto iterador/generador, (it)
// // puede iterar muchas veces

iterador[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};

for (const elementoIterador of iterador) {
  console.log(elementoIterador);
}

// Iterables definidos por el usuario #00aae4
// Puedes hacer tus propios iterables así

const miIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

// Los iterables definidos por el usuario se pueden utilizar en los bucles for...of o en la sintaxis de propagación como es habitual.

for (const valor of miIterable) {
  console.log(valor);
}

// 1
// 2
// 3

console.log([...miIterable]); // [1, 2, 3]

// Iterables incorporados #00aae4
// String, Array, TypedArray, Map y Set son todos iterables incorporados, porque todos sus objetos prototipo tienen un método Symbol.iterator.

// Sintaxis que esperan iterables #00aae4
// Algunas sentencias y expresiones esperan iterables. Por ejemplo: los bucles for-of, yield*.

for (const valor of ["a", "b", "c"]) {
  console.log(valor);
}

// "a"
// "b"
// "c"

console.log([..."abc"]);
// ["a", "b", "c"]

function* generadora() {
  yield* ["a", "b", "c"];
}

console.log(generadora().next());
// { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);

console.log(a);
// a

// Generadores avanzados #008000
// Los generadores calculan sus valores de rendimiento bajo demanda, lo que les permite representar eficientemente secuencias que son caras de calcular (o incluso secuencias infinitas, como se ha demostrado anteriormente).

// El método next() también acepta un valor, que puede utilizarse para modificar el estado interno del generador. Un valor pasado a next() será recibido por yield .

// Nota: Un valor pasado a la primera invocación de next() es siempre ignorado.

// Aquí está el generador fibonacci usando next(x) para reiniciar la secuencia:

function* fibonacci() {
  let actual = 0,
    siguiente = 1;
  while (true) {
    const restablecer = yield actual;
    [actual, siguiente] = [siguiente, siguiente + actual];

    if (restablecer) {
      actual = 0;
      siguiente = 1;
    }
  }
}

const secuencia = fibonacci();

console.log(secuencia.next());

console.log(secuencia.next().value); // 0
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
console.log(secuencia.next().value); // 5
console.log(secuencia.next().value); // 8
console.log(secuencia.next(true).value); // 0
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 1
console.log(secuencia.next().value); // 2
console.log(secuencia.next().value); // 3
console.log(secuencia.next().value); // 5

// Puedes forzar a un generador a lanzar una excepción llamando a su método throw() y pasándole el valor de la excepción que debe lanzar. Esta excepción será lanzada desde el contexto actual suspendido del generador, como si el yield que está actualmente suspendido fuera en cambio una declaración de valor throw.

// Si la excepción no es capturada desde el generador, se propagará hacia arriba a través de la llamada a throw(), y las siguientes llamadas a next() harán que la propiedad done sea verdadera.

// Los generadores tienen un método return(value) que devuelve el valor dado y termina el propio generador.
