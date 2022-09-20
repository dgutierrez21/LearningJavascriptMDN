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
