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

const enviarAdivinanza = document.querySelector("enviarAdivinanza"),
  campoAdivinanza = document.querySelector("campoAdivinanza");

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

function checkAdivinanza() {
  alert("Soy un marcador de posición");
}

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
