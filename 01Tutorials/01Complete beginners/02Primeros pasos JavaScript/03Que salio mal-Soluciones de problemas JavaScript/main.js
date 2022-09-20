// ¿Qué salió mal? Solución de problemas de JavaScript #008000
// Cuando construiste el juego "Adivina el número" en el artículo anterior, es posible que hayas descubierto que no funcionó. Nunca temas: este artículo tiene como objetivo salvarte de arrancarte el pelo por tales problemas al proporcionarte algunos consejos sobre cómo encontrar y corregir errores en los programas JavaScript.

// Tipos de error #008000
// En términos generales, cuando haces algo mal en el código, hay dos tipos principales de errores que encontrarás:

// Errores de sintaxis: Estos son errores ortográficos en su código que en realidad hacen que el programa no se ejecute en absoluto, o deje de funcionar a mitad de camino; por lo general, también se le proporcionarán algunos mensajes de error. Por lo general, estos están bien para solucionar, siempre y cuando esté familiarizado con las herramientas adecuadas y sepa lo que significan los mensajes de error.

// Errores lógicos: Estos son errores en los que la sintaxis es realmente correcta pero el código no es lo que pretendía que fuera, lo que significa que el programa se ejecuta correctamente pero da resultados incorrectos. A menudo son más difíciles de corregir que los errores de sintaxis, ya que generalmente no hay un mensaje de error que lo dirija a la fuente del error.

// De acuerdo, así que no es tan simple: hay algunos otros diferenciadores a medida que profundizas. Pero las clasificaciones anteriores funcionarán en esta etapa temprana de su carrera. Veremos ambos tipos en el futuro.

// Un ejemplo erróneo #008000
// Para comenzar, volvamos a nuestro juego de adivinanzas de números, excepto que esta vez exploraremos una versión que tiene algunos errores deliberados introducidos. Vaya a GitHub y hágase una copia local de los errores de juego de números.html (véalo en vivo aquí).

// Para comenzar, abra la copia local dentro de su editor de texto favorito y su navegador.

// Intenta jugar el juego: notarás que cuando presionas el botón "Enviar conjetura", ¡no funciona!

// Nota: Es posible que tenga su propia versión del ejemplo del juego que no funciona, ¡que es posible que desee solucionar! Todavía nos gustaría que trabajaras en el artículo con nuestra versión, para que puedas aprender las técnicas que estamos enseñando aquí. Luego puedes volver atrás e intentar arreglar tu ejemplo.

// En este punto, consultemos la consola del desarrollador para ver si informa algún error de sintaxis, luego intente solucionarlos. Aprenderá cómo a continuación.

// Corrección de errores de sintaxis #008000
// Anteriormente en el curso, le pedimos que escribiera algunos comandos simples de JavaScript en la consola de JavaScript de las herramientas de desarrollo (si no puede recordar cómo abrir esto en su navegador, siga el enlace anterior para averiguar cómo). Lo que es aún más útil es que la consola le da mensajes de error cada vez que existe un error de sintaxis dentro del JavaScript que se alimenta en el motor JavaScript del navegador. Ahora vamos a cazar.

// Ve a la pestaña en la que tienes number-game-errors.html abrir y abre tu consola de JavaScript. Debería ver un mensaje de error a lo largo de las siguientes líneas:

// Este es un error bastante fácil de rastrear, y el navegador le brinda varios bits útiles de información para ayudarlo (la captura de pantalla anterior es de Firefox, pero otros navegadores proporcionan información similar). De izquierda a derecha, tenemos:

// Una "x" roja para indicar que se trata de un error.

// Un mensaje de error para indicar qué ha salido mal: "TypeError: guessSubmit.addeventListener no es una función"

// Un enlace "Más información" que enlaza a través de una página de MDN que explica lo que significa este error con mayor detalle.

// El nombre del archivo JavaScript, que enlaza a través de la pestaña Depurador de las herramientas de desarrollo. Si sigues este enlace, verás la línea exacta donde se resalta el error.

// El número de línea donde está el error y el número de caracteres en esa línea donde se ve el error por primera vez. En este caso, tenemos la línea 86, el carácter número 3.

// Si nos fijamos en la línea 86 en nuestro editor de código, encontraremos esta línea:

// El mensaje de error dice "guessSubmit.addeventListener no es una función", lo que significa que la función a la que estamos llamando no es reconocida por el intérprete de JavaScript. A menudo, este mensaje de error en realidad significa que hemos escrito algo mal. Si no está seguro de la ortografía correcta de una pieza de sintaxis, a menudo es bueno buscar la característica en MDN. La mejor manera de hacer esto actualmente es buscar "mdn name-of-feature" con su motor de búsqueda favorito. Aquí hay un acceso directo para ahorrarle algo de tiempo en esta instancia: addEventListener().

// Entonces, mirando esta página, el error parece ser que hemos escrito mal el nombre de la función. Recuerde que JavaScript distingue entre mayúsculas y minúsculas, por lo que cualquier ligera diferencia en la ortografía o la carcasa causará un error. Cambiar addeventListener a addEventListener debería solucionar esto. Haz esto ahora.

// Nota: Consulte nuestra página TypeError: "x" no es una función de referencia para obtener más detalles sobre este error.

// Errores de sintaxis ronda dos #00aae4
// Guarde su página y actualice, y debería ver que el error ha desaparecido.
// Ahora, si intenta ingresar una suposición y presiona el botón Enviar suposición, ¡verá otro error!

// Esta vez el error que se informa es "TypeError: lowOrHi is null", en la línea 78.

// Nota: Null es un valor especial que significa "nada" o "ningún valor". Así que lowOrHi ha sido declarado e inicializado, pero no con ningún valor significativo, no tiene ningún tipo o valor.

// Nota: Este error no apareció tan pronto como se cargó la página porque este error se produjo dentro de una función (dentro del bloque checkGuess() { }). Como aprenderá con más detalle en nuestro artículo de funciones posterior, el código dentro de las funciones se ejecuta en un ámbito separado que las funciones de código externo. En este caso, el código no se ejecutó y el error no se produjo hasta que la función checkGuess() fue ejecutada por la línea 86.

// Echa un vistazo a la línea 78 y verás el siguiente código:

// lowOrHi.textContent = "Last guess was too high!";

// Esta línea intenta establecer la propiedad textContent de la constante lowOrHi una cadena de texto, pero no funciona porque lowOrHi no contiene lo que se supone que debe contener. Veamos por qué es esto: intente buscar otras instancias de lowOrHi en el código. La primera instancia que encontrará en JavaScript está en la línea 49:

// const lowOrHi = document.querySelector("lowOrHi");

// En este punto estamos intentando que la variable contenga una referencia a un elemento en el HTML del documento. Vamos a comprobar si el valor es null después de que se haya ejecutado esta línea. Añádase el código siguiente en la línea 50:

// Nota: console.log() es una función de depuración realmente útil que imprime un valor en la consola. Por lo tanto, imprimirá el valor de lowOrHi en la consola tan pronto como hayamos intentado configurarlo en la línea 49.

// Guarde y actualice, y ahora debería ver el resultado console.log() en su consola.

// Efectivamente, el valor de lowOrHi es null en este punto, por lo que definitivamente hay un problema con la línea 49.
// Pensemos en cuál podría ser el problema. La línea 49 utiliza un método document.querySelector() para obtener una referencia a un elemento seleccionándolo con un selector CSS. Buscando más arriba en nuestro archivo, podemos encontrar el párrafo en cuestión:

// Pensemos en cuál podría ser el problema. La línea 49 utiliza un método document.querySelector() para obtener una referencia a un elemento seleccionándolo con un selector CSS. Buscando más arriba en nuestro archivo, podemos encontrar el párrafo en cuestión:

// <p class="lowOrHi"></p>

// Por lo tanto, necesitamos un selector de clases aquí, que comienza con un punto (.), pero el selector que se pasa al método querySelector() en la línea 49 no tiene punto. ¡Este podría ser el problema! Intente cambiar lowOrHi a .lowOrHi en la línea 49.

// Intente guardar y actualizar de nuevo, y la console.log() debería devolver el elemento <p> que queremos. ¡Ufff! ¡Otro error corregido! Puede eliminar la línea console.log() ahora o mantenerla para que haga referencia más adelante, su elección.

// Nota: Consulte nuestra página de referencia TypeError: "x" es (no) "y" para obtener más detalles sobre este error.

// Errores de sintaxis ronda tres #00aae4
// Ahora, si intentas jugar el juego de nuevo, deberías tener más éxito: el juego debería funcionar absolutamente bien, hasta que termines el juego, ya sea adivinando el número correcto o quedándote sin conjeturas.

// En ese momento, el juego vuelve a fallar, y se escupe el mismo error que obtuvimos al principio: "TypeError: resetButton.addeventListener no es una función". Sin embargo, esta vez aparece como proveniente de la línea 94.

// Mirando la línea número 94, es fácil ver que hemos cometido el mismo error aquí. De nuevo, solo necesitamos cambiar addeventListener a addEventListener. Haz esto ahora.

// Un error lógico #008000
// En este punto, el juego debería funcionar bien, sin embargo, después de jugar un par de veces, sin duda notará que el número "aleatorio" que debe adivinar siempre es 1. ¡Definitivamente no es exactamente cómo queremos que se desarrolle el juego!

// Definitivamente hay un problema en la lógica del juego en alguna parte: el juego no devuelve un error; simplemente no está jugando bien.

// Busque la variable randomNumber y las líneas donde se establece por primera vez el número aleatorio. La instancia que almacena el número aleatorio que queremos adivinar al inicio del juego debe estar alrededor de la línea número 45:

// let randomNumber = Math.floor(Math.random()) + 1;

// Y el que genera el número aleatorio antes de cada juego posterior es alrededor de la línea 113:

// randomNumber = Math.floor(Math.random()) + 1;

// Para verificar si estas líneas son realmente el problema, pasemos a nuestra consola de amigosconsole.log() nuevamente: inserte la siguiente línea directamente debajo de cada una de las dos líneas anteriores:

// Guarde y actualice, luego juegue algunos juegos: verá que randomNumber es igual a 1 en cada punto donde se registra en la consola.

// Trabajando a través de la lógica #00aae4
// Para solucionar esto, consideremos cómo funciona esta línea. Primero, invocamos Math.random(), que genera un número decimal aleatorio entre 0 y 1, por ejemplo, 0.5675493843.

// Math.random();

// A continuación, pasamos el resultado de invocar Math.random() a través Math.floor(), que redondea el número que se le ha pasado al número entero más cercano. Luego agregamos 1 a ese resultado:

// Math.floor(Math.random()) + 1;

// Redondear un número decimal aleatorio entre 0 y 1 hacia abajo siempre devolverá 0, por lo que agregarle 1 siempre devolverá 1. Necesitamos multiplicar el número aleatorio por 100 antes de redondearlo hacia abajo. Lo siguiente nos daría un número aleatorio entre 0 y 99:

// Math.floor(Math.random() * 100);

// De ahí que queramos añadir 1, para darnos un número aleatorio entre 1 y 100:

// Math.floor(Math.random() * 100) + 1;

// Intente actualizar ambas líneas de esta manera, luego guarde y actualice: ¡el juego ahora debería jugarse como lo pretendemos!
