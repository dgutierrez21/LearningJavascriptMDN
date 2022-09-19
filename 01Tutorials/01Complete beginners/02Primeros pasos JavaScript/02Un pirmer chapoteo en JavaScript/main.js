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
