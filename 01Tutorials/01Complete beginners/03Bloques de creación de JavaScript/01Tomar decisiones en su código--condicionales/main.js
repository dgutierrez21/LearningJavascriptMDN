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

// Un ejemplo real #00aae4
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

// instrucciones switch #008000
// if...else instrucciones else hacen bien el trabajo de habilitar el código condicional, pero no están exentas de desventajas. Son principalmente buenos para los casos en los que tiene un par de opciones, y cada una requiere una cantidad razonable de código para ejecutarse, y / o las condiciones son complejas (por ejemplo, múltiples operadores lógicos). Para los casos en los que solo desea establecer una variable en una determinada elección de valor o imprimir una instrucción en particular dependiendo de una condición, la sintaxis puede ser un poco engorrosa, especialmente si tiene una gran cantidad de opciones.

// En tal caso, las instrucciones switch son su amiga: toman una sola expresión / valor como entrada y luego revisan varias opciones hasta que encuentran una que coincida con ese valor, ejecutando el código correspondiente que lo acompaña. Aquí hay un poco más de pseudocódigo, para que te hagas una idea:

/*

switch (expression) {
  case choice1:
    ejecute este codigo
    break;

  case choice2:
    ejecute este codigo en su lugar
    break;

  // incluya todos los casos que desee

  default:
    En realidad, basta con ejecutar este código
}

*/

// Aquí tenemos:

// 1. El switch palabra clave, seguido de un conjunto de paréntesis.

// 2. Expresión o valor dentro de los paréntesis.

// 3. El case de la palabra clave, seguido de una elección de que la expresión/valor podría ser, seguido de dos puntos.

// 4. Algún código para ejecutar si la opción coincide con la expresión.

// 5. Una declaración break, seguida de un punto y coma. Si la opción anterior coincide con la expresión/valor, el explorador deja de ejecutar el bloque de código aquí y pasa a cualquier código que aparezca debajo de la instrucción switch.

// 6. Tantos otros casos (viñetas 3-5) como quieras.

// 7. La palabra clave default, seguida exactamente del mismo patrón de código que uno de los casos (viñetas 3-5), excepto que default no tiene una opción después de él, y no necesita la break ya que no hay nada que ejecutar después de esto en el bloque de todos modos. Esta es la opción predeterminada que se ejecuta si ninguna de las opciones coincide.

// Nota: No tiene que incluir la sección default: puede omitirla de forma segura si no hay posibilidad de que la expresión termine siendo igual a un valor desconocido. Sin embargo, si existe la posibilidad de esto, debe incluirlo para manejar casos desconocidos.

// Un ejemplo de switch #00aae4
// Echemos un vistazo a un ejemplo real: reescribiremos nuestra aplicación de pronóstico del tiempo para usar una instrucción de cambio en su lugar:

const select2 = document.querySelector(".pronosticoTiempo2 select"),
  para2 = document.querySelector(".pronosticoTiempo2 p");

select2.addEventListener("change", setTiempo2);

function setTiempo2() {
  const eleccion = select2.value;

  switch (eleccion) {
    case "soleado":
      para2.textContent =
        "Hoy hace buen tiempo y está soleado. Ponte pantalones cortos. Ve a la playa, o al parque, y toma un helado.";
      break;
    case "lluvioso":
      para2.textContent =
        "Está lloviendo fuera; llévate un chubasquero y un paraguas, y no te quedes fuera mucho tiempo.";
      break;
    case "nevado":
      para2.textContent =
        "La nieve está cayendo, ¡está helada! Lo mejor es quedarse en casa con una taza de chocolate caliente, o ir a construir un muñeco de nieve.";
      break;
    case "nublado":
      para2.textContent =
        "No llueve, pero el cielo está gris y sombrío; podría cambiar en cualquier momento, así que llévate un chubasquero por si acaso.";
      break;
    default:
      para2.textContent = "";
      break;
  }
}

// Operador ternario #008000
// Hay un último fragmento de sintaxis que queremos presentarte antes de que juegues con algunos ejemplos. El operador ternario o condicional es un pequeño bit de sintaxis que prueba una condición y devuelve un valor/expresión si es true, y otro si es false; esto puede ser útil en algunas situaciones y puede ocupar mucho menos código que un if...else block si tiene dos opciones que se eligen entre a través de una condición true/false. El pseudocódigo se ve así:

// codición ? ejecute este codigo : ejecute este codigo en su lugar

// Así que veamos un ejemplo simple:

let esUnCumpleanios = true;

const saludo = esUnCumpleanios
  ? "Feliz cumpleaños, Sra. Smith, esperamos que tenga un gran día."
  : "Buenas noches Sra. Smith.";

console.log(saludo);

// Aquí tenemos una variable llamada isBirthday: si esto es true, le damos a nuestro invitado un mensaje de feliz cumpleaños; si no, le damos el saludo diario estándar.

// Ejemplo de operador ternario #00aae4
// El operador ternario no es solo para establecer valores de variables; también puede ejecutar funciones o líneas de código, lo que desee. El siguiente ejemplo en vivo muestra un selector de tema simple donde el estilo para el sitio se aplica utilizando un operador ternario.

// ver html...

const seleccionTema = document.querySelector(".seleccionDeTema select");

function actualizacion(bgColor, textColor) {
  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
}

seleccionTema.addEventListener("change", () =>
  seleccionTema.value === "oscuro"
    ? actualizacion("black", "white")
    : actualizacion("white", "black")
);

// Aquí tenemos un elemento <select> para elegir un tema (blanco o negro), además de un simple <h1> para mostrar el título de un sitio web. También tenemos una función llamada update(), que toma dos colores como parámetros (entradas). El color de fondo del sitio web se establece en el primer color proporcionado y su color de texto se establece en el segundo color proporcionado.

// Finalmente, también tenemos un detector de eventos onchange que sirve para ejecutar una función que contiene un operador ternario. Comienza con una condición de prueba— select.value === 'black'. Si esto devuelve true, ejecutamos la función update() con parámetros de negro y blanco, lo que significa que terminamos con un color de fondo de negro y un color de texto de blanco. Si devuelve false, ejecutamos la función update() con parámetros de blanco y negro, lo que significa que los colores del sitio están invertidos.

// Aprendizaje activo: un calendario sencillo #008000
// En este ejemplo, nos ayudarás a terminar una aplicación de calendario simple. En el código que tienes:

// Un elemento <select> para permitir al usuario elegir entre diferentes meses.

// Un onchange para detectar cuándo se cambia el valor seleccionado en el menú <select>.

// Función denominada createCalendar() que dibuja el calendario y muestra el mes correcto en el elemento <h1>.

// Necesitamos que escriba una instrucción condicional dentro de la función onchange, justo debajo del comentario // ADD CONDITIONAL HERE. Debería:

// 1. Mire el mes seleccionado (almacenado en la variable choice. Este será el valor del elemento <select> después de que cambie el valor, por ejemplo, "enero").
// 2. Establezca una variable denominada days para que sea igual al número de días del mes seleccionado. Para ello tendrás que buscar el número de días en cada mes del año. Puede ignorar los años bisiestos para los fines de este ejemplo.

// Consejos:

// Se recomienda usar OR lógico para agrupar varios meses en una sola condición; muchos de ellos comparten el mismo número de días.

// Piense en qué número de días es el más común y úselo como valor predeterminado.

const seleccionCalendario = document.querySelector(".calendario select"),
  listaCalendario = document.querySelector(".listaCalendario"),
  parrafoMes = document.querySelector(".calendario .p_result");

seleccionCalendario.addEventListener("change", () => {
  const eleccion = seleccionCalendario.value;

  let dias;

  // añadir la condicion aquí
  if (eleccion === "febrero") {
    dias = 28;
  } else if (
    eleccion === "abril" ||
    eleccion === "junio" ||
    eleccion === "septiembre" ||
    eleccion === "noviembre"
  ) {
    dias = 30;
  } else {
    dias = 31;
  }

  crearCalendario(dias, eleccion);
});

function crearCalendario(dias, eleccion) {
  listaCalendario.innerHTML = "";
  parrafoMes.textContent = eleccion;
  for (let i = 1; i <= dias; i++) {
    const elementoLista = document.createElement("li");
    elementoLista.textContent = i;
    listaCalendario.appendChild(elementoLista);
  }
}

crearCalendario(31, "enero");

// Aprendizaje activo: más opciones de color #008000
// En este ejemplo, tomará el ejemplo del operador ternario que vimos anteriormente y convertirá el operador ternario en una instrucción de cambio para permitirnos aplicar más opciones al sitio web simple. Mira el <select>, esta vez verás que no tiene dos opciones de tema, sino cinco. Debe agregar una instrucción switch justo debajo del comentario // ADD SWITCH STATEMENT:

// Debe aceptar la variable choice como su expresión de entrada.
// Para cada caso, la elección debe ser igual a uno de los <option> valueque se pueden seleccionar, es decir, white, black, purple, yellow o psychedelic.
// Para cada caso, se debe ejecutar la función update() y pasar dos valores de color, el primero para el color de fondo y el segundo para el color del texto. Recuerde que los valores de color son cadenas, por lo que deben estar envueltos entre comillas.

const seleccionTema2 = document.querySelector(".cambioColor select"),
  body = document.body;

seleccionTema2.addEventListener("change", () => {
  const cambio = seleccionTema2.value;

  // AÑADIR DECLARACIÓN DE SWITCH
  switch (cambio) {
    case "oscuro":
      cambioColor2("black", "white");
      break;
    case "purpura":
      cambioColor2("purple", "white");
      break;
    case "amarillo":
      cambioColor2("yellow", "black");
      break;
    case "psicodelico":
      cambioColor2("lime", "black");
      break;
    default:
      cambioColor2("white", "black");
  }
});

function cambioColor2(bgcolor, colorTexto) {
  body.style.backgroundColor = bgcolor;
  body.style.color = colorTexto;
}
