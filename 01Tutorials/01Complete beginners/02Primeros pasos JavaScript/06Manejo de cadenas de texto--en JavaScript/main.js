// Manejo de texto: cadenas en JavaScript #008000

// A continuación, dirigiremos nuestra atención a las cadenas: así es como se llaman las piezas de texto en la programación. En este artículo, veremos todas las cosas comunes que realmente debe saber sobre las cadenas al aprender JavaScript, como crear cadenas, escapar de las comillas en las cadenas y unir las cadenas.

// El poder de las palabras #008000
// Las palabras son muy importantes para los humanos, son una gran parte de cómo nos comunicamos. Dado que la Web es un medio en gran parte basado en texto diseñado para permitir que los humanos se comuniquen y compartan información, es útil para nosotros tener control sobre las palabras que aparecen en ella. HTML proporciona estructura y significado a nuestro texto, CSS nos permite diseñarlo con precisión, y JavaScript contiene una serie de características para manipular cadenas, crear mensajes de bienvenida personalizados e indicaciones, mostrar las etiquetas de texto correctas cuando sea necesario, ordenar los términos en el orden deseado y mucho más.

// Casi todos los programas que le hemos mostrado hasta ahora en el curso han involucrado alguna manipulación de cadenas.

// Cadenas: lo básico #008000
// Las cadenas se tratan de manera similar a los números a primera vista, pero cuando profundizas, comenzarás a ver algunas diferencias notables. Comencemos ingresando algunas líneas básicas en la consola del desarrollador del navegador para familiarizarnos.

// Creación de una cadena
// Para empezar, introduzca las siguientes líneas:

const string = "La revolución no será televisada.";

console.log(string);

// Al igual que hicimos con los números, estamos declarando una variable, inicializándola con un valor de cadena y luego devolviendo el valor. La única diferencia aquí es que al escribir una cadena, debe rodear el valor con comillas.
// Si no hace esto, o se pierde una de las citas, obtendrá un error. Intente introducir las siguientes líneas:

// const cadenaMal1 = esto es una prueba; // Uncaught SyntaxError: Unexpected identifier 'es' (at main.js:23:25)

// const cadenaMal2 = "esto es una prueba; // Uncaught SyntaxError: Invalid or unexpected token (at main.js:25:20)

// const cadenaMal2 = esto es una prueba"; // Uncaught SyntaxError: Unexpected identifier 'es' (at main.js:27:25)

// Estas líneas no funcionan porque se supone que cualquier texto sin comillas a su alrededor es un nombre de variable, un nombre de propiedad, una palabra reservada o similar. Si el navegador no puede encontrarlo, se genera un error (por ejemplo, "falta; antes de la declaración"). Si el navegador puede ver dónde comienza una cadena, pero no puede encontrar el final de la cadena, como se indica en la 2ª cita, se queja con un error (con "literal de cadena sin terminar"). Si su programa está generando tales errores, regrese y verifique todas sus cadenas para asegurarse de que no le falten comillas.

// Lo siguiente funcionará si definió previamente la string: pruébela ahora:

const cadenaBuena = string;

console.log(cadenaBuena);

// badString ahora está configurado para tener el mismo valor string.

// Comillas simples vs. comillas dobles
// En JavaScript, puede elegir comillas simples o comillas dobles para envolver sus cadenas. Ambos de los siguientes funcionarán bien:

const comillasSimples = 'Comillas simples';

const comillasDobles = "Comillas dobles";

console.log(comillasDobles);
console.log(comillasSimples);

// Hay muy poca diferencia entre los dos, y lo que usas se debe a la preferencia personal. Sin embargo, debe elegir uno y apegarse a él; El código entrecomillado de manera diferente puede ser confuso, ¡especialmente si usa dos comillas diferentes en la misma cadena! Lo siguiente devolverá un error:

// const comillasMal = '¿Qué es lo que pasa?"; // Uncaught SyntaxError: Invalid or unexpected token (at main.js:48:21)

// El navegador pensará que la cadena no se ha cerrado porque el otro tipo de cita que no está utilizando para contener sus cadenas puede aparecer en la cadena. Por ejemplo, ambos están bien:

const csCd = '¿Comerías una "cena de pescado"?';

const cdCs = "I'm feeling blue";

console.log(csCd);
console.log(cdCs);

// Sin embargo, no puede incluir la misma comillas dentro de la cadena si se usa para contenerlas. Lo siguiente será un error, ya que confunde al navegador en cuanto a dónde termina la cadena:

// const  bocaGrande = 'I' ve got no right to take my place...'; // Uncaught SyntaxError: Unexpected identifier 've' (at main.js:64:25)
