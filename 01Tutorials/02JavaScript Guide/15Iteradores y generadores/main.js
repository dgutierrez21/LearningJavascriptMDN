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
