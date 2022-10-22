// Bucles e iteración #ff0

// Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente. Este capítulo de la Guía de JavaScript presenta las diferentes sentencias de iteración disponibles en JavaScript.

// Puedes pensar en un bucle como una versión informática del juego en el que le dices a alguien que dé X pasos en una dirección y luego Y pasos en otra. Por ejemplo, la idea "Ve cinco pasos hacia el este" podría expresarse así como un bucle:

for (let paso = 0; paso < 5; paso++) {
  // Se ejecuta 5 veces, con los valores del paso 0 al 4.
  console.log("Caminando hacia el este un paso.");
}

// Hay muchos tipos diferentes de bucles, pero todos hacen esencialmente lo mismo: repiten una acción un cierto número de veces. (¡Nótese que es posible que ese número sea cero!)

// Los distintos mecanismos de bucle ofrecen diferentes maneras de determinar los puntos de inicio y final del bucle. Hay varias situaciones en las que un tipo de bucle es más útil que los otros.

// Las sentencias para bucles que ofrece JavaScript son:

// sentencia for
// sentencia do...while
// sentencia while
// sentencia labeled
// sentencia break
// sentencia continue
// sentencia for...in
// sentencia for...of

// Declaración for #008000
// Un bucle for se repite hasta que una condición especificada se evalúa como falsa. El bucle for de JavaScript es similar al bucle for de Java y C.

// Una sentencia for tiene el siguiente aspecto

// for ([expresióninicial]; [expresióncondición]; [expresiónincremento])
//   declaración

// Cuando un bucle for se ejecuta, ocurre lo siguiente:

// 1. Se ejecuta la expresión inicializadora initialExpression, si la hay. Esta expresión suele inicializar uno o varios contadores del bucle, pero la sintaxis permite una expresión de cualquier grado de complejidad. Esta expresión también puede declarar variables.

// 2. Se evalúa la expresión conditionExpression. Si el valor de conditionExpression es verdadero, las declaraciones del bucle se ejecutan. En caso contrario, el bucle for termina. (Si la expresión conditionExpression se omite por completo, se asume que la condición es verdadera).

// 3. La sentencia se ejecuta. Para ejecutar varias sentencias, utilice una sentencia de bloque ({ }) para agruparlas.
// 4. Si está presente, se ejecuta la expresión de actualización incrementExpression.
// 5. El control vuelve al paso 2.

// EJEMPLO
// En el siguiente ejemplo, la función contiene una sentencia for que cuenta el número de opciones seleccionadas en una lista de desplazamiento (un elemento <select> que permite múltiples selecciones)

// ver html...

// JavaScript #00aae4
// Aquí, la sentencia for declara la variable i y la inicializa a 0. Comprueba que i es menor que el número de opciones en el elemento <select>, realiza la sentencia if siguiente, e incrementa i en 1 después de cada pasada por el bucle.

function cuantos(seleccionarObjeto) {
  let numeroSeleccionado = 0;
  for (let i = 0; i < seleccionarObjeto.options.length; i++) {
    if (seleccionarObjeto.options[i].selected) {
      numeroSeleccionado++;
    }
  }

  return numeroSeleccionado;
}

const btn = addEventListener("click", () => {
  const tiposMusica = document.querySelector("#tiposMusica");
  console.log(`Has seleccionado ${cuantos(tiposMusica)} opción(es).`);
});
