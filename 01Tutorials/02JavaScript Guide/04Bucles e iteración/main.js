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

const btn = document.querySelector(".ejemplo1 button");

btn.addEventListener("click", () => {
  const tiposMusica = document.querySelector("#tiposMusica");
  console.log(tiposMusica);
  console.log(`Has seleccionado ${cuantos(tiposMusica)} opción(es).`);
});

// Sentencia do...while #008000
// La sentencia do...while se repite hasta que una condición especificada se evalúa como falsa.

// Una sentencia do...while tiene el siguiente aspecto:

// do
//   declaración
// while (condición);

// La sentencia do siempre se ejecuta una vez antes de comprobar la condición. (Para ejecutar varias sentencias, utilice una sentencia de bloque ({ }) para agruparlas).

// Si la condición es verdadera, la sentencia se ejecuta de nuevo. Al final de cada ejecución, se comprueba la condición. Cuando la condición es falsa, la ejecución se detiene y el control pasa a la sentencia siguiente a do...while.

// Ejemplo
// En el siguiente ejemplo, el bucle do itera al menos una vez y se reitera hasta que i ya no es menor que 5.

let z = 0;

do {
  z += 1;
  console.log(z);
} while (z < 5);

// ejemplo 2

let z2 = 10;

do {
  console.log(z2);
} while (z2 < 5);

// sentencia while #008000
// Una sentencia while ejecuta sus sentencias mientras una condición especificada se evalúe como verdadera. Una sentencia while tiene el siguiente aspecto

// while (condición)
//   sentencia

// Si la condición se vuelve falsa, la sentencia dentro del bucle deja de ejecutarse y el control pasa a la sentencia que sigue al bucle.

// La prueba de la condición ocurre antes de que se ejecute la sentencia en el bucle. Si la condición vuelve a ser verdadera, la sentencia se ejecuta y la condición se comprueba de nuevo. Si la condición es falsa, la ejecución se detiene y el control pasa a la sentencia que sigue al while.

// Para ejecutar varias sentencias, utilice una sentencia de bloque ({ }) para agruparlas.

// Ejemplo 1
// El siguiente bucle while itera mientras n sea menor que 3:

let n = 0,
  x2 = 0;

while (n < 3) {
  n++;

  console.log(`${n} + ${x2} = ${n + x2}`);
  x2 += n;
}

console.log(`El resultado es: ${x2}`);

// En cada iteración, el bucle incrementa n y añade ese valor a x. Por tanto, x y n toman los siguientes valores:

// Después de la primera pasada: n = 1 y x = 1
// Después de la segunda pasada: n = 2 y x = 3
// Después de la tercera pasada: n = 3 y x = 6
// Después de completar la tercera pasada, la condición n < 3 ya no es verdadera, por lo que el bucle termina.

// Ejemplo 2

// Evite los bucles infinitos. Asegúrate de que la condición de un bucle se convierta en falsa, de lo contrario, el bucle nunca terminará. Las sentencias en el siguiente bucle while se ejecutan para siempre porque la condición nunca se vuelve falsa:

/*

// ¡Los bucles infinitos son malos!
while (true) {
  console.log('Hello, world!');
}

*/

// sentencia labeled #008000
// Una etiqueta proporciona a una sentencia un identificador que le permite referirse a ella en otra parte de su programa. Por ejemplo, puede utilizar una etiqueta para identificar un bucle, y luego utilizar las sentencias break o continue para indicar si el programa debe interrumpir el bucle o continuar su ejecución.

// La sintaxis de la sentencia label tiene el siguiente aspecto

// label:
//   sentencia

// El valor de label puede ser cualquier identificador de JavaScript que no sea una palabra reservada. La sentencia que se identifica con una etiqueta puede ser cualquier sentencia.

// Ejemplo
// En este ejemplo, la etiqueta markLoop identifica un bucle while.

/*

markLoop:
while (theMark) {
  doSomething();
}

*/

// sentencia break #008000
// Utilice la sentencia break para terminar un bucle, un switch o junto con una sentencia labeled.

// Cuando se utiliza break sin una etiqueta, termina el bucle while, do-while, for o switch más interno inmediatamente y transfiere el control a la siguiente sentencia.
// Cuando se utiliza break con una etiqueta, termina la sentencia etiquetada especificada.
// La sintaxis de la sentencia break es la siguiente

// break;
// break label;

// La primera forma de la sintaxis termina el bucle o conmutador más interno.

// La segunda forma de la sintaxis termina la sentencia etiquetada adjunta especificada.

// Ejemplo 1
// El siguiente ejemplo itera a través de los elementos de un array hasta encontrar el índice de un elemento cuyo valor es theValue:

const array = ["234", 45, "ElValor", "Pollo"];

for (let i = 0; i < array.length; i++) {
  if (array[i] === "ElValor") {
    break;
  }
  console.log(array[i]);
}

// Ejemplo 2: Romper con una etiqueta(label)

let x3 = 0;
let z3 = 0;

etiquetaCancelarBucles: while (true) {
  console.log(`Otro bucle: `, x3);
  x3 += 1;
  z3 = 1;

  while (true) {
    console.log(`bucle interior: `, z3);
    z3 += 1;

    if (z3 === 10 && x3 === 10) {
      break etiquetaCancelarBucles;
    } else if (z3 === 10) {
      break;
    }
  }
}

// sentencia continue #008000
// La sentencia continue puede utilizarse para reiniciar una sentencia while, do-while, for o label.

// Cuando se utiliza continue sin una etiqueta, termina la iteración actual de la sentencia while, do-while o for más interna y continúa la ejecución del bucle con la siguiente iteración. A diferencia de la sentencia break, continue no termina la ejecución del bucle por completo. En un bucle while, salta de nuevo a la condición. En un bucle for, salta a la expresión de incremento.
// Cuando se utiliza continue con una etiqueta, se aplica a la sentencia de bucle identificada con esa etiqueta.
// La sintaxis de la sentencia continue es la siguiente

// continue;
// continue label;

// Ejemplo 1
// El siguiente ejemplo muestra un bucle while con una sentencia continue que se ejecuta cuando el valor de i es 3. Así, n toma los valores 1, 3, 7 y 12.

let i = 0,
  h = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  h += i;
  console.log(h); // //1,3,7,12
}

// Si comentas el continue;, el bucle se ejecutaría hasta el final y verías 1,3,6,10,15.

// Ejemplo 2
// Una sentencia etiquetada como comprobardyj contiene una sentencia etiquetada como comprobarj. Si se encuentra continue, el programa termina la iteración actual de comprobarj y comienza la siguiente iteración. Cada vez que se encuentra continue, comprobarj se reitera hasta que su condición devuelva false. Cuando se devuelve false, el resto de la sentencia comprobardyj se completa, y comprobardyj se reitera hasta que su condición devuelva false. Cuando se devuelve false, el programa continúa en la sentencia que sigue a comprobardyj.

// Si continue tuviera la etiqueta comprobardyj, el programa continuaría en la parte superior de la sentencia comprobardyj.

let d = 0,
  j = 10;

comprobardyj: while (d < 4) {
  console.log(d);
  d += 1;

  comprobarj: while (j > 4) {
    console.log(j);
    j -= 1;

    if (j % 2 === 0) {
      continue comprobarj;
    }

    console.log(j, " es extraño.");
  }

  console.log("d = ", d);
  console.log("j = ", j);
}
