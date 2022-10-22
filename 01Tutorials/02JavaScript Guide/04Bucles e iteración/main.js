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
