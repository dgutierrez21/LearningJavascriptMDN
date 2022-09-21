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

const comillasSimples = "Comillas simples";

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

// Esto nos lleva muy bien a nuestro siguiente tema.

// Carácter de escape en una cadena #008000
// Para corregir nuestra línea de código de problema anterior, necesitamos escapar de la marca de comillas del problema. Escapar de los caracteres significa que les hacemos algo para asegurarnos de que se reconozcan como texto, no como parte del código. En JavaScript, hacemos esto colocando una barra diagonal inversa justo antes del personaje. Prueba esto:

const bocaGrande = "I've got no right to take my place...";

console.log(bocaGrande);

// Esto funciona bien. Puede escapar de otros caracteres de la misma manera, por ejemplo, \", y además hay algunos códigos especiales. Consulte https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#escape_sequences para obtener más detalles.

// Concatenar cadenas #008000
// Concatenar solo significa "unirse". Para unir cadenas en JavaScript, puede usar un tipo diferente de cadena, llamado literal de plantilla.

// Un literal de plantilla se parece a una cadena normal, pero en lugar de usar comillas simples o dobles (' o "), se usan caracteres de retroceso (`):

const saludo = `Hola`;

// Esto puede funcionar igual que una cadena normal, excepto que puede incluir variables en ella, envueltas dentro de caracteres ${ }, y el valor de la variable se insertará en el resultado:

const nombre = "Chris";

const saludo2 = `Hola, ${nombre}`;

console.log(saludo2);

// Puede utilizar la misma técnica para unir dos variables:

const uno = "Hola, ";

const dos = "cómo estas?";

const union = `${uno}${dos}`;

console.log(union);

// Concatenación en contexto #00aae4
// Echemos un vistazo a la concatenación que se utiliza en acción:

const btn1 = document.querySelector(".btn_1");

function saludar() {
  const nombre = prompt("Cual es tu nombre?");
  alert(`Hola ${nombre}, me alegro de verte.`);
}

btn1.addEventListener("click", saludar);

// Aquí estamos usando la función window.prompt() que le pide al usuario que responda una pregunta a través de un cuadro de diálogo emergente y luego almacena el texto que ingresa dentro de una variable determinada, en este caso name. Luego usamos la función window.alert() para mostrar otra ventana emergente que contiene una cadena que inserta el nombre en un mensaje de saludo genérico.

// Concatenación usando "+" #00aae4
// También puede concatenar cadenas utilizando el operador +:

const saludo3 = "Hola";

const nombre2 = "Hector";

console.log(saludo3 + ", " + nombre2);

// Sin embargo, los literales de plantilla generalmente le dan código más legible:

const saludo4 = "Hola";

const nombre4 = "Roberto";

console.log(`${saludo4}, ${nombre4}`);

// Números vs. cadenas #008000
// Entonces, ¿qué sucede cuando intentamos combinar una cadena y un número? Vamos a probarlo en nuestra consola:

const nombre5 = "Front";

const numero = 243;

console.log(`${nombre5} ${numero}`);

// Puede esperar que esto devuelva un error, pero funciona bien. Tratar de representar una cadena como un número realmente no tiene sentido, pero representar un número como una cadena sí, por lo que el navegador convierte el número en una cadena y concatena las dos cadenas.

// Si tiene una variable numérica que desea convertir en una cadena pero no cambiar de otro modo, o una variable de cadena que desea convertir en un número pero no cambiar de otro modo, puede utilizar las dos construcciones siguientes:

// El objeto Number convierte todo lo que se le pasa en un número, si puede. Pruebe lo siguiente:

const miString = "123";

const miNumero = Number(miString);

console.log(typeof miNumero);

// Por el contrario, cada número tiene un método llamado toString() que lo convierte en la cadena equivalente. Prueba esto:

const miNumero2 = 123;

const miString2 = miNumero2.toString();

console.log(typeof miString2);

// Estas construcciones pueden ser realmente útiles en algunas situaciones. Por ejemplo, si un usuario introduce un número en el campo de texto de un formulario, se trata de una cadena. Sin embargo, si desea agregar este número a algo, necesitará que sea un número, por lo que puede pasarlo a través Number() para manejar esto. Hicimos exactamente esto en nuestro juego de adivinanzas numéricas, en la línea 59.
