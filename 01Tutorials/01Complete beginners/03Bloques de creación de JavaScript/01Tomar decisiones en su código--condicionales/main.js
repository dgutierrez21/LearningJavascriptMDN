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

  if (eleccion === "soleado") {
    para.textContent =
      "Hoy hace buen tiempo y está soleado. Ponte pantalones cortos. Ve a la playa, o al parque, y toma un helado.";
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
