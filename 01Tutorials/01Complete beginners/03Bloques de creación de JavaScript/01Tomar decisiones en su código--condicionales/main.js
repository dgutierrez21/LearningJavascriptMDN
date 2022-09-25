// Tomar decisiones en el código: condicionales #008000

// En cualquier lenguaje de programación, el código necesita tomar decisiones y llevar a cabo acciones en consecuencia dependiendo de las diferentes entradas. Por ejemplo, en un juego, si el número de vidas del jugador es 0, entonces se acabó el juego. En una aplicación meteorológica, si se está mirando por la mañana, muestre un gráfico del amanecer; mostrar estrellas y una luna si es de noche. En este artículo, exploraremos cómo funcionan las llamadas declaraciones condicionales en JavaScript.

// ¡Puedes tenerlo con una condición! #008000
// Los seres humanos (y otros animales) toman decisiones todo el tiempo que afectan sus vidas, desde pequeñas ("¿debo comer una galleta o dos?") hasta grandes ("¿debo quedarme en mi país de origen y trabajar en la granja de mi padre, o debo mudarme a Estados Unidos y estudiar astrofísica?")

// Las declaraciones condicionales nos permiten representar dicha toma de decisiones en JavaScript, desde la elección que se debe hacer (por ejemplo, "una galleta o dos"), hasta el resultado resultante de esas elecciones (tal vez el resultado de "comió una galleta" podría ser "todavía sentía hambre", y el resultado de "comió dos galletas" podría ser "se sintió lleno, pero mamá me regañó por comer todas las galletas").

// Declaración if...else #008000

// Veamos, con mucho, el tipo más común de declaración condicional que usará en JavaScript: el humilde if...else.

// Sintaxis Basica if...else #00aae4

/*
if (condition) {
    código a ejecutar si la condición es verdadera
} else {
    ejecuta otro código en su lugar
}
*/

// Aquí tenemos:

// 1. La palabra clave if va seguida de algunos paréntesis.

// 2. Una condición para probar, colocada dentro de los paréntesis (típicamente "¿es este valor más grande que este otro valor?", o "¿existe este valor?"). La condición hace uso de los operadores de comparación que discutimos en el último módulo y devuelve true o false.

// 3. Un conjunto de llaves rizadas, dentro de las cuales tenemos algún código: este puede ser cualquier código que nos guste, y solo se ejecuta si la condición devuelve true.

// 4. La palabra clave else.

// 5. Otro conjunto de llaves rizadas, dentro del cual tenemos algo más de código, este puede ser cualquier código que nos guste, y solo se ejecuta si la condición no es true, o en otras palabras, la condición es false.

// Este código es bastante legible por humanos: dice "si la condición devuelve true, ejecute el código A, de lo contrario ejecute el código B"

// Debe tener en cuenta que no tiene que incluir el else y el segundo bloque de corsé rizado, lo siguiente también es un código perfectamente legal:

/*

if (condition) {
  código a ejecutar si la condición es verdadera
}
*/

/* ejecutar algún otro código */

// Sin embargo, debe tener cuidado aquí: en este caso, el segundo bloque de código no está controlado por la instrucción condicional, por lo que siempre se ejecuta, independientemente de si la condición devuelve true o false. Esto no es necesariamente algo malo, pero puede que no sea lo que quieres, a menudo quieres ejecutar un bloque de código u otro, no ambos.

// Como punto final, aunque no se recomienda, a veces puede ver if...else declaraciones escritas sin los brackets rizados:

/*

if (condition) código a ejecutar si la condición es verdadera 
else ejecutar otro código en su lugar

*/

// Esta sintaxis es perfectamente válida, pero es mucho más fácil entender el código si se utilizan las llaves para delimitar los bloques de código, y se utilizan varias líneas y sangrías.

// Un ejemplo real #008000
// Para entender mejor esta sintaxis, consideremos un ejemplo real. Imagínese a un niño al que su madre o su padre le piden ayuda con una tarea. El padre podría decir "¡Hola cariño! Si me ayudas yendo y haciendo las compras, te daré una asignación adicional para que puedas pagar ese juguete que querías". En JavaScript, podríamos representar esto así:

let comprasRealizadas = false;

let asignacionParaHijo;

if (comprasRealizadas === true) {
  asignacionParaHijo = 10;
} else {
  asignacionParaHijo = 5;
}

console.log(asignacionParaHijo);

// Este código como se muestra siempre da como resultado que la variable shoppingDone regrese false, lo que significa decepción para nuestro pobre hijo. Dependería de nosotros proporcionar un mecanismo para que el padre establezca la variable shoppingDone en true si el niño hizo las compras.

// else if #00aae4

// El último ejemplo nos proporcionó dos opciones, o resultados, pero ¿qué pasa si queremos más de dos?

// Hay una manera de encadenar opciones / resultados adicionales a su if...else — usando else if. Cada opción adicional requiere un bloque adicional para poner entre if () { } y else { } — echa un vistazo al siguiente ejemplo más involucrado, que podría ser parte de una aplicación simple de pronóstico del tiempo:

const select = document.querySelector(".pronosticoTiempo select");
const para = document.querySelector(".pronosticoTiempo p");

select.addEventListener("change", setTiempo);

function setTiempo() {
  const eleccion = select.value;
  let temperatura = 35;

  if (eleccion === "soleado" && temperatura < 35) {
    para.textContent = `Afuera hace ${temperatura} grados - agradable y soleado. Vamos a la playa, o al parque, a tomar un helado.`;
  } else if (eleccion === "soleado" && temperatura >= 35) {
    para.textContent = `Hace ${temperatura} grados afuera - ¡REALMENTE CALIENTE! Si quieres salir a la calle, asegúrate de ponerte crema solar.`;
  } else if (eleccion === "lluvioso") {
    para.textContent =
      "Está lloviendo fuera; llévate un chubasquero y un paraguas, y no te quedes fuera mucho tiempo.";
  } else if (eleccion === "nevado") {
    para.textContent =
      "La nieve está cayendo, ¡está helada! Lo mejor es quedarse en casa con una taza de chocolate caliente, o ir a construir un muñeco de nieve.";
  } else if (eleccion == "nublado") {
    para.textContent =
      "No llueve, pero el cielo está gris y sombrío; podría cambiar en cualquier momento, así que llévate un chubasquero por si acaso.";
  } else {
    para.textContent = "";
  }
}

// 1. Aquí tenemos un elemento HTML <select> que nos permite tomar diferentes decisiones climáticas y un párrafo simple.

// 2. En JavaScript, estamos almacenando una referencia a los elementos <select> y <p>, y agregando un detector de eventos al elemento <select> para que cuando se cambie su valor, se ejecute la función setWeather()).

// 3. Cuando se ejecuta esta función, primero establecemos una variable llamada choice en el valor actual seleccionado en el elemento <select>. Luego usamos una declaración condicional para mostrar texto diferente dentro del párrafo dependiendo de cuál sea el valor de choice. Observe cómo todas las condiciones se prueban en else if () { } blocks, excepto la primera, que se prueba en un bloque if () { }.

// 4. La última opción, dentro del bloque else { }, es básicamente una opción de "último recurso": el código dentro de él se ejecutará si ninguna de las condiciones true. En este caso, sirve para vaciar el texto del párrafo si no se selecciona nada, por ejemplo, si un usuario decide volver a seleccionar la opción de marcador de posición "--Hacer una elección--" que se muestra al principio.

// Una nota sobre los operadores de comparación #00aae4
// Los operadores de comparación se utilizan para probar las condiciones dentro de nuestras declaraciones condicionales. Primero analizamos los operadores de comparación en nuestro artículo Matemáticas básicas en JavaScript: números y operadores. Nuestras opciones son:

// === y !== — prueba si un valor es idéntico o no idéntico a otro.
// < y >: pruebe si un valor es menor o mayor que otro.
// <= y >= — prueba si un valor es menor o igual que, o mayor o igual a, otro.

// Queríamos hacer una mención especial a las pruebas de valores booleanos (true / false) y un patrón común que encontrará una y otra vez. Cualquier valor que no sea false, undefined, null, 0, NaN o una cadena vacía ('') en realidad devuelve true cuando se prueba como una instrucción condicional, por lo tanto, puede usar un nombre de variable por sí solo para probar si es true o incluso si existe (es decir, no está indefinido). Así, por ejemplo:

let queso = "Cheddar";

if (queso) {
  console.log("Sí. Queso disponible para hacer tostadas con queso.");
} else {
  console.log("Hoy no hay queso en las tostadas para ti.");
}

// Y, volviendo a nuestro ejemplo anterior sobre el niño haciendo una tarea para sus padres, podría escribirlo así:

let comprasRealizadas2 = false,
  asignacionParaHijo2;

// No necesitamos especificar explícitamente 'comprasRealizadas2 === true'

if (comprasRealizadas2) {
  asignacionParaHijo2 = 10;
} else {
  asignacionParaHijo2 = 5;
}

console.log(asignacionParaHijo2);

// Anidación if...else #00aae4
// Está perfectamente bien poner uno if...else declaración dentro de otra, para anidarlos. Por ejemplo, podríamos actualizar nuestra aplicación de pronóstico del tiempo para mostrar un conjunto adicional de opciones dependiendo de cuál sea la temperatura:

// ver ejemplo anterior de una aplicación simple de pronóstico del tiempo:linea 90

// A pesar de que todo el código funciona en conjunto, cada if...else declaración funciona completamente independientemente de la otra.

// Operadores lógicos: AND, OR y NOT #00aae4
// Si desea probar múltiples condiciones sin escribir anidadas if...else statements, los operadores lógicos pueden ayudarle. Cuando se usan en condiciones, los dos primeros hacen lo siguiente:

// && — Y; permite encadenar dos o más expresiones para que todas ellas tengan que evaluarse individualmente como true para que toda la expresión devuelva true.
// || — O BIEN; permite encadenar dos o más expresiones para que una o varias de ellas tengan que evaluarse individualmente como true para que toda la expresión devuelva true.

// Para darle un ejemplo AND, el fragmento de código de ejemplo anterior se puede reescribir a esto:

// ver ejemplo anterior de una aplicación simple de pronóstico del tiempo:linea 90

// Así, por ejemplo, el primer bloque de código solo se ejecutará si choice === 'sunny' y temperature < 86 true.

// Veamos un ejemplo rápido de OR:

const FurgonetaDeHeladosEnElExterior = true;
const estadoCasa = "en llamas";

if (FurgonetaDeHeladosEnElExterior || estadoCasa === "en llamas") {
  console.log("Debes salir de la casa rápidamente.");
} else {
  console.log("Probablemente debería quedarse dentro entonces.");
}

// El último tipo de operador lógico, NOT, expresado por el operador !, se puede usar para negar una expresión. Vamos a combinarlo con OR en el ejemplo anterior:

if (!(FurgonetaDeHeladosEnElExterior || estadoCasa == "on fire")) {
  console.log("Probablemente debería quedarse dentro entonces.");
} else {
  console.log("Debes salir de la casa rápidamente.");
}

// En este fragmento de código, si la instrucción OR devuelve true, el operador NOT la negará para que la expresión general devuelva false.

// Puede combinar tantas declaraciones lógicas como desee, en cualquier estructura. En el ejemplo siguiente se ejecuta el código en su interior sólo si ambas instrucciones OR devuelven true, lo que significa que la instrucción AND general devolverá true:

const nombreUsuario = "Steve",
  conectado = true,
  x = 5,
  y = 10,
  z = 7;

if ((x === 5 || y > 3 || z <= 10) && (conectado || nombreUsuario === "Steve")) {
  console.log("Los datos han sido verificados correctamente");
}

// Un error común al usar el operador OR lógico en sentencias condicionales es intentar indicar la variable cuyo valor está comprobando una vez, y luego dar una lista de valores que podría ser devolver true, separados por operadores || (OR). Por ejemplo:

/*

if (x === 5 || 7 || 10 || 20) {
  // run my code
}

*/

// En este caso, la condición dentro de if () siempre se evaluará a true ya que 7 (o cualquier otro valor distinto de cero) siempre se evalúa a true. Esta condición en realidad está diciendo "si x es igual a 5, o 7 es verdadero, que siempre lo es". ¡Esto lógicamente no es lo que queremos! Para que esto funcione, debe especificar una prueba completa a cada lado de cada operador de quirófano:

/*

if (x === 5 || x === 7 || x === 10 || x === 20) {
  // run my code
}

*/
