// Un primer chapuzón en JavaScript #ff0

// Ahora que has aprendido algo sobre la teoría de JavaScript y lo que puedes hacer con él, te vamos a dar una idea de cómo es el proceso de creación de un programa JavaScript simple, guiándote a través de un tutorial práctico. Aquí construirás un simple juego de "Adivina el número", paso a paso.

// Queremos establecer expectativas muy claras aquí: no se espera que aprenda JavaScript al final de este artículo, ni siquiera entienda todo el código que le pedimos que escriba. En su lugar, queremos darle una idea de cómo funcionan juntas las características de JavaScript y cómo se siente escribir JavaScript. En artículos posteriores, volverá a visitar todas las características que se muestran aquí con mucho más detalle, ¡así que no se preocupe si no lo entiende todo de inmediato!

// Nota: Muchas de las características de código que verá en JavaScript son las mismas que en otros lenguajes de programación: funciones, bucles, etc. La sintaxis del código se ve diferente, pero los conceptos siguen siendo en gran medida los mismos.

// Pensar como un programador #008000

// Una de las cosas más difíciles de aprender en programación no es la sintaxis que necesita aprender, sino cómo aplicarla para resolver problemas del mundo real. Debe comenzar a pensar como un programador: esto generalmente implica mirar las descripciones de lo que su programa necesita hacer, determinar qué características de código se necesitan para lograr esas cosas y cómo hacer que funcionen juntas.

// Esto requiere una mezcla de trabajo duro, experiencia con la sintaxis de programación y práctica, además de un poco de creatividad. Cuanto más codifiques, mejor lo conseguirás. No podemos prometer que desarrollarás el "cerebro del programador" en cinco minutos, pero te daremos muchas oportunidades para practicar el pensamiento como un programador durante todo el curso.

// Con eso en mente, veamos el ejemplo que construiremos en este artículo y revisemos el proceso general de diseccionarlo en tareas tangibles.

// Ejemplo — Adivina el juego de números #008000
// En este artículo te mostraremos cómo construir el juego simple que puedes ver a continuación:

// ir a el siguiente enlace para ver el juego https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash#example_%E2%80%94_guess_the_number_game

// Pruebe a jugarlo: familiarícese con el juego antes de seguir adelante.

// Imaginemos que tu jefe te ha dado el siguiente resumen para crear este juego:

// Quiero que crees un juego simple de adivinar el tipo de número. Debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador a adivinar el número en 10 turnos. Después de cada turno, se le debe decir al jugador si está bien o mal, y si está equivocado, si la suposición fue demasiado baja o demasiado alta. También debe decirle al jugador qué números adivinó previamente. El juego terminará una vez que el jugador adivine correctamente, o una vez que se quede sin turnos. Cuando el juego termina, el jugador debe tener la opción de comenzar a jugar de nuevo.

// Al ver este resumen, lo primero que podemos hacer es comenzar a dividirlo en tareas simples y procesables, en la mayor medida posible de una mentalidad de programador:

// 1. Genera un número aleatorio entre 1 y 100.

// 2. Registre el número de turno en el que está el reproductor. Comience el 1.

// 3. Proporcione al jugador una forma de adivinar cuál es el número.

// 4. Una vez que se haya enviado una suposición, regístrela primero en algún lugar para que el usuario pueda ver sus conjeturas anteriores.

// 5. A continuación, verifique si es el número correcto.

// 6. Si es correcto:
// 6.1 Mostrar mensaje de felicitación.
// 6.2 Evitar que el jugador pueda ingresar más conjeturas (esto arruinaría el juego).
// 6.3 Control de pantalla que permite al jugador reiniciar el juego.

// 7. Si está mal y el jugador ha girado a la izquierda:
// 7.1 Dígale al jugador que está equivocado y si su suposición fue demasiado alta o demasiado baja.
// 7.2 Permítales ingresar otra suposición.
// 7.3 Incremente el número de turno en 1.

// 8. Si está mal y el jugador no tiene turnos a la izquierda:
// 8.1 Dígale al jugador que ha terminado el juego.
// 8.2 Evitar que el jugador pueda ingresar más conjeturas (esto arruinaría el juego).
// 9.3 Control de pantalla que permite al jugador reiniciar el juego.

// 9. Una vez que el juego se reinicie, asegúrate de que la lógica del juego y la interfaz de usuario estén completamente restablecidas, luego vuelve al paso 1.

// Avancemos ahora, viendo cómo podemos convertir estos pasos en código, construyendo el ejemplo y explorando las características de JavaScript a medida que avanzamos.

// Configuración inicial #00aae4
// Para comenzar este tutorial, nos gustaría que hicieras una copia local del archivo number-guessing-game-start.html (véalo en vivo aquí). Ábrelo tanto en tu editor de texto como en tu navegador web. Por el momento, verá un encabezado simple, un párrafo de instrucciones y un formulario para ingresar una suposición, pero el formulario actualmente no hará nada.

// El lugar donde agregaremos todo nuestro código es dentro del elemento <script> en la parte inferior del HTML:

// Añadir variables para almacenar nuestros datos #00aae4
// Empecemos. En primer lugar, agregue las siguientes líneas dentro de su elemento <script>:

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const adivinanzas = document.querySelector(".adivinanzas"),
  ultimoResultado = document.querySelector(".ultimoResultado"),
  bajoOAlto = document.querySelector(".bajoOAlto");

const enviarAdivinanza = document.querySelector(".enviarAdivinanza"),
  campoAdivinanza = document.querySelector(".campoAdivinanza");

let contadorAdivinanza = 1,
  resetButton;

// Esta sección del código configura las variables y constantes que necesitamos para almacenar los datos que utilizará nuestro programa.

// Las variables son básicamente nombres para valores (como números o cadenas de texto). Se crea una variable con la palabra clave let seguida de un nombre para la variable.

// Las constantes también se usan para nombrar valores, pero a diferencia de las variables, no se puede cambiar el valor una vez establecido. En este caso, estamos utilizando constantes para almacenar referencias a partes de nuestra interfaz de usuario. El texto dentro de algunos de estos elementos puede cambiar, pero cada constante siempre hace referencia al mismo elemento HTML con el que se inicializó. Se crea una constante con la palabra clave const un nombre para la constante.

// Puede asignar un valor a su variable o constante con un signo igual (=) seguido del valor que desea darle.

// En nuestro ejemplo:

// A la primera variable, numeroAleatorio, se le asigna un número aleatorio entre 1 y 100, calculado utilizando un algoritmo matemático.

// Las tres primeras constantes se hacen cada una para almacenar una referencia a los párrafos de resultados en nuestro HTML, y se utilizan para insertar valores en los párrafos más adelante en el código (nótese cómo están dentro de un elemento <div>, que a su vez se utiliza para seleccionar los tres más adelante para el restablecimiento, cuando reiniciamos el juego):

// Las dos constantes siguientes almacenan referencias a la entrada de texto del formulario y al botón enviar y se utilizan para controlar el envío de la suposición más adelante.

// Nuestras dos últimas variables almacenan un recuento de conjeturas de 1 (utilizado para realizar un seguimiento de cuántas conjeturas ha tenido el jugador) y una referencia a un botón de reinicio que aún no existe (pero que lo hará más adelante).

// Funciones #00aae4
// A continuación, agregue lo siguiente debajo de su JavaScript anterior:

// function checkAdivinanza() {
//   alert("Soy un marcador de posición");
// }

// Las funciones son bloques de código reutilizables que puede escribir una vez y ejecutarse una y otra vez, ahorrando la necesidad de seguir repitiendo código todo el tiempo. Esto es realmente útil. Hay varias formas de definir funciones, pero por ahora nos concentraremos en un tipo simple. Aquí hemos definido una función usando la function de palabra clave, seguida de un nombre, con paréntesis puestos después de ella. Después de eso, ponemos dos brackets rizados ({ }). Dentro de las llaves rizadas va todo el código que queremos ejecutar cada vez que llamamos a la función.

// Cuando queremos ejecutar el código, escribimos el nombre de la función seguido de los paréntesis.

// Vamos a intentarlo ahora. Guarde su código y actualice la página en su navegador. A continuación, vaya a la consola de JavaScript de herramientas de desarrollo e introduzca la siguiente línea:

// checkGuess();

// Después de presionar Return/Enter, debería ver aparecer una alerta que dice que I am a placeholder; hemos definido una función en nuestro código que crea una alerta cada vez que la llamamos.

// Operadores #00aae4
// Los operadores de JavaScript nos permiten realizar pruebas, hacer matemáticas, unir cadenas y otras cosas por el estilo.

// Si aún no lo ha hecho, guarde el código, actualice la página en su navegador y abra la consola de JavaScript de herramientas de desarrollo. Luego podemos intentar escribir los ejemplos que se muestran a continuación: escriba cada uno desde las columnas "Ejemplo" exactamente como se muestra, presionando Return/Enter después de cada uno, y ver qué resultados devuelven.

// Primero veamos los operadores aritméticos, por ejemplo:

// +	Adición	6 + 9
// -	Sustracción	20 - 15
// *	Multiplicación	3 * 7
// /	División	10 / 5

// También puede usar el operador + para unir cadenas de texto (en programación, esto se llama concatenación). Intente ingresar las siguientes líneas, una a la vez:

// const name = "Bingo";
// name;
// const hello = " says hello!";
// hello;
// const greeting = name + hello;
// greeting;

// También hay algunos operadores de acceso directo disponibles, llamados operadores de asignación aumentada. Por ejemplo, si desea agregar una nueva cadena de texto a una existente y devolver el resultado, puede hacer lo siguiente:

// let name1 = "Bingo";
// name1 += " says hello!";

// Esto es equivalente a

// let name2 = "Bingo";
// name2 = name2 + " says hello!";

// Cuando estamos ejecutando pruebas verdaderas/falsas (por ejemplo, dentro de condicionales, ver más abajo) usamos operadores de comparación. Por ejemplo:

// ver imagen...

// Condicionales #00aae4
// Volviendo a nuestra función checkAdivinanza() creo que es seguro decir que no queremos que simplemente escupa un mensaje de marcador de posición. Queremos que compruebe si la suposición de un jugador es correcta o no, y responder adecuadamente.

// En este punto, reemplace su función checkAdivinanza() actual con esta versión en su lugar:

function checkAdivinanza() {
  const usuarioAdivinanza = Number(campoAdivinanza.value);
  if (contadorAdivinanza === 1) {
    adivinanzas.textContent = "Adivinanzas anteriores: ";
  }

  adivinanzas.textContent += `${usuarioAdivinanza} `;

  if (usuarioAdivinanza === numeroAleatorio) {
    ultimoResultado.textContent = "¡Enhorabuena! Has acertado.";
    ultimoResultado.style.backgroundColor = "green";
    bajoOAlto.textContent = "";
    setJuegoTerminado();
  } else if (contadorAdivinanza === 10) {
    ultimoResultado.textContent = "SE ACABÓ EL JUEGO.";
    bajoOAlto.textContent = "";
    setJuegoTerminado();
  } else {
    ultimoResultado.textContent = "Equivocado.";
    ultimoResultado.style.backgroundColor = "red";
    if (usuarioAdivinanza < numeroAleatorio) {
      bajoOAlto.textContent = "¡La última suposición fue demasiado baja!";
    } else if (usuarioAdivinanza > numeroAleatorio) {
      bajoOAlto.textContent = "'¡La última suposición era demasiado alta!";
    }
  }

  contadorAdivinanza++;
  campoAdivinanza.value = "";
  campoAdivinanza.focus();
}

// Esto es mucho código, ¡sobrino! Repasemos cada sección y expliquemos lo que hace.

// La primera línea declara una variable denominada userGuess y establece su valor en el valor actual introducido dentro del campo de texto. También ejecutamos este valor a través del constructor Number() integrado, solo para asegurarnos de que el valor sea definitivamente un número. Como no estamos cambiando esta variable, la declararemos usando const.

// A continuación, encontramos nuestro primer bloque de código condicional. Un bloque de código condicional le permite ejecutar código de forma selectiva, dependiendo de si una determinada condición es verdadera o no. Se parece un poco a una función, pero no lo es. La forma más simple de bloque condicional comienza con la palabra clave if, luego algunos paréntesis, luego algunos brackets rizados. Dentro de los paréntesis, incluimos una prueba. Si la prueba devuelve true, ejecutamos el código dentro de las llaves rizadas. Si no, no lo hacemos, y pasamos al siguiente bit de código. En este caso, la prueba está probando si la variable guessCount es igual a 1 (es decir, si este es el primer intento del jugador o no):

// guessCount === 1

// Si es así, hacemos que el contenido del texto del párrafo de conjeturas sea igual a Previous guesses:. Si no, no lo hacemos.

// La línea 6 agrega el valor userGuess actual al final del párrafo de guesses, más un espacio en blanco para que haya un espacio entre cada conjetura que se muestra.

// El siguiente bloque hace algunas comprobaciones:

// El primero if (){ } comprueba si la suposición del usuario es igual al randomNumber en la parte superior de nuestro JavaScript. Si es así, el jugador ha adivinado correctamente y el juego está ganado, por lo que le mostramos un mensaje de felicitación con un bonito color verde, borramos el contenido del cuadro de información de conjeturas Baja / Alta y ejecutamos una función llamada setGameOver(), que discutiremos más adelante.

// Ahora hemos encadenado otra prueba al final de la última usando una estructura else if (){ }. Este comprueba si este turno es el último turno del usuario. Si es así, el programa hace lo mismo que en el bloque anterior, excepto con un mensaje de juego en lugar de un mensaje de felicitación.

// El bloque final encadenado al final de este código (el else { }) contiene código que solo se ejecuta si ninguna de las otras dos pruebas devuelve true (es decir, el jugador no adivinó bien, pero le quedan más conjeturas). En este caso les decimos que están equivocados, luego realizamos otra prueba condicional para comprobar si la conjetura era mayor o menor que la respuesta, mostrando un mensaje adicional según corresponda para decirles más alto o más bajo.

// Las últimas tres líneas de la función (líneas 26-28 anteriores) nos preparan para la siguiente suposición que se enviará. Agregamos 1 a la variable guessCount para que el jugador use su turno (++ es una operación de incremento, incremento en 1), y vaciamos el valor del campo de texto del formulario y lo enfocamos nuevamente, listo para que se ingrese la siguiente suposición.

// Eventos #00aae4
// En este punto, tenemos una función checkAdivinanza() bien implementada, pero no hará nada porque aún no la hemos llamado. Idealmente, queremos llamarlo cuando se presiona el botón "Enviar conjetura", y para hacer esto necesitamos usar un evento. Los eventos son cosas que suceden en el navegador (un botón en el que se hace clic, una página que se carga, una reproducción de video, etc.) en respuesta a la cual podemos ejecutar bloques de código. Los detectores de eventos observan eventos específicos y llaman a controladores de eventos, que son bloques de código que se ejecutan en respuesta a un evento que se activa.

// Agregue la siguiente línea debajo de la función checkAdivinanza()):

enviarAdivinanza.addEventListener("click", checkAdivinanza);

// Aquí estamos agregando un detector de eventos al botón guessSubmit. Este es un método que toma dos valores de entrada (llamados argumentos): el tipo de evento que estamos escuchando (en este casoclick) como una cadena y el código que queremos ejecutar cuando ocurra el evento (en este caso, la función checkGuess()). Tenga en cuenta que no es necesario especificar los paréntesis al escribirlo dentro de addEventListener().

// Intente guardar y actualizar su código ahora, y su ejemplo debería funcionar, hasta cierto punto. El único problema ahora es que si adivinas la respuesta correcta o te quedas sin conjeturas, el juego se romperá porque aún no hemos definido la función setGameOver() que se supone que se ejecutará una vez que termine el juego. Agreguemos nuestro código faltante ahora y completemos la funcionalidad de ejemplo.

// Finalización de la funcionalidad del juego #00aae4
// Agreguemos esa función setGameOver() a la parte inferior de nuestro código y luego recorrámosla. Agregue esto ahora, debajo del resto de su JavaScript:

function setJuegoTerminado() {
  const container = document.querySelector(".container");

  campoAdivinanza.disabled = true;
  enviarAdivinanza.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Iniciar Nuevo Juego";
  container.appendChild(resetButton);
  resetButton.addEventListener("click", reiniciarJuego);
}

// Las dos primeras líneas deshabilitan la entrada de texto del formulario y el botón estableciendo sus propiedades deshabilitadas true. Esto es necesario, porque si no lo hiciéramos, el usuario podría enviar más conjeturas después de que termine el juego, lo que arruinaría las cosas.

// Las siguientes tres líneas generan un nuevo elemento <button>, establecen su etiqueta de texto en "Iniciar nuevo juego" y lo agregan a la parte inferior de nuestro HTML existente.

// La línea final establece un detector de eventos en nuestro nuevo botón para que cuando se haga clic en él, se ejecute una función llamada resetGame()).

// ¡Ahora también tenemos que definir esta función! Agregue el siguiente código, de nuevo a la parte inferior de su JavaScript:

function reiniciarJuego() {
  contadorAdivinanza = 1;

  const reiniciarParrafos = document.querySelectorAll(".containerResultados p");
  for (const reiniciarParrafo of reiniciarParrafos) {
    reiniciarParrafo.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  campoAdivinanza.disabled = false;
  enviarAdivinanza.disabled = false;
  campoAdivinanza.value = "";
  campoAdivinanza.focus();

  ultimoResultado.style.backgroundColor = "white";

  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}

// Este bloque de código bastante largo restablece completamente todo a cómo estaba al comienzo del juego, para que el jugador pueda intentarlo de nuevo. Eso:

// Vuelve a reducir guessCount a 1.

// Vacía todo el texto de los párrafos de información. Seleccionamos todos los párrafos dentro <div class="resultParas"></div>, luego recorremos cada uno, estableciendo su textContent en '' (una cadena vacía).

// Elimina el botón de reinicio de nuestro código.

// Habilita los elementos del formulario y vacía y enfoca el campo de texto, listo para que se introduzca una nueva suposición.

// Quita el color de fondo del último lastResult.

// ¡Genera un nuevo número aleatorio para que no vuelvas a adivinar el mismo número!

// En este punto, deberías tener un juego completamente funcional (simple), ¡felicidades!

// Todo lo que nos queda por hacer ahora en este artículo es hablar sobre algunas otras características importantes del código que ya ha visto, aunque es posible que no se haya dado cuenta.

// Bucles #008000
// Una parte del código anterior que necesitamos echar un vistazo más detallado es el para... de bucle. Los bucles son un concepto muy importante en la programación, que le permiten seguir ejecutando una pieza de código una y otra vez, hasta que se cumpla una cierta condición.

// Para empezar, vaya de nuevo a la consola de JavaScript de las herramientas de desarrollo de su navegador e introduzca lo siguiente:

const fruits = ["apples", "bananas", "cherries"];

for (const fruit of fruits) {
  console.log(fruit);
}

// ¿¿Qué pasó?? Las cadenas 'apples', 'bananas', 'cherries' se imprimieron en su consola.

// Esto se debe al bucle. La línea const fruits = ['apples', 'bananas', 'cherries']; crea una matriz. Trabajaremos a través de una guía completa de Matrices más adelante en este módulo, pero por ahora: una matriz es una colección de elementos (en este caso cadenas).

// A for...of bucle le da una forma de obtener cada elemento en la matriz y ejecutar algo de JavaScript en él. La línea for (const fruit of fruits) dice:

// Consigue el primer artículo en fruits.
// Establezca la variable fruit ese elemento y, a continuación, ejecute el código entre los corchetes {}.
// Obtenga el siguiente elemento en fruits y repita 2, hasta que llegue al final de las fruits.
// En este caso, el código dentro de los corchetes está escribiendo fruit en la consola.

// Ahora veamos el bucle en nuestro juego de adivinanzas de números: lo siguiente se puede encontrar dentro de la función resetGame()):

/*

function reiniciarJuego() {
  const reiniciarParrafos = document.querySelectorAll(".containerResultados p");
  for (const reiniciarParrafo of reiniciarParrafos) {
    reiniciarParrafo.textContent = "";
  }
}

*/

// Este código crea una variable que contiene una lista de todos los párrafos dentro <div class="resultParas"> utilizando el método querySelectorAll() luego recorre cada uno de ellos, eliminando el contenido de texto de cada uno.

// Tenga en cuenta que aunque resetParas es una constante, podemos cambiar sus propiedades internas como textContent.

// Una pequeña discusión sobre objetos #008000
// Agreguemos una mejora final más antes de llegar a esta discusión. Agregue la siguiente línea justo debajo de la línea let resetButton; cerca de la parte superior de su JavaScript, luego guarde su archivo:

campoAdivinanza.focus();

// Esta línea utiliza el método focus() para colocar automáticamente el cursor de texto en el campo <input> tan pronto como se cargue la página, lo que significa que el usuario puede comenzar a escribir su primera suposición de inmediato, sin tener que hacer clic primero en el campo de formulario. Es solo una pequeña adición, pero mejora la usabilidad, dando al usuario una buena pista visual sobre lo que tiene que hacer para jugar el juego.

// Analicemos lo que está sucediendo aquí con un poco más de detalle. En JavaScript, la mayoría de los elementos que manipulará en su código son objetos. Un objeto es una colección de funcionalidad relacionada almacenada en una sola agrupación. Puedes crear tus propios objetos, pero eso es bastante avanzado y no lo cubriremos hasta mucho más adelante en el curso. Por ahora, solo discutiremos brevemente los objetos incorporados que contiene su navegador, que le permiten hacer muchas cosas útiles.

// En este caso particular, primero creamos una constante guessField que almacena una referencia al campo de formulario de entrada de texto en nuestro HTML: la siguiente línea se puede encontrar entre nuestras declaraciones cerca de la parte superior del código:

// campoAdivinanza = document.querySelector(".campoAdivinanza");

// Para obtener esta referencia, utilizamos el método querySelector() del objeto document. querySelector() toma una pieza de información: un selector CSS que selecciona el elemento al que desea una referencia.

// Debido a que guessField ahora contiene una referencia a un elemento <input>, ahora tiene acceso a una serie de propiedades (básicamente variables almacenadas dentro de objetos, algunas de las cuales no pueden cambiar sus valores) y métodos (básicamente funciones almacenadas dentro de objetos). Un método disponible para los elementos de entrada es focus(), por lo que ahora podemos usar esta línea para enfocar la entrada de texto:

// guessField.focus();

// Las variables que no contengan referencias a elementos de formulario no tendrán focus() disponible para ellos. Por ejemplo, la constante adivinanzas contiene una referencia a un elemento <p> y la variable contadorAdivinanza contiene un número.
