// Expresiones regulares #ff0

// Las expresiones regulares son patrones que se utilizan para hacer coincidir combinaciones de caracteres en las cadenas. En JavaScript, las expresiones regulares son también objetos. Estos patrones se utilizan con los métodos exec() y test() de RegExp, y con los métodos match(), matchAll(), replace(), replaceAll(), search() y split() de String. Este capítulo describe las expresiones regulares de JavaScript.

// Creación de una expresión regular #008000
// Una expresión regular se construye de dos maneras:

// Utilizando un literal de expresión regular, que consiste en un patrón encerrado entre barras, como se indica a continuación:

const re = /ab+c/;

console.log(re);

// Los literales de expresión regular proporcionan la compilación de la expresión regular cuando se carga el script. Si la expresión regular permanece constante, su uso puede mejorar el rendimiento.

// O llamando a la función constructora del objeto RegExp, como sigue

const re1 = new RegExp("ab+c");

console.log(re1);

// El uso de la función constructora proporciona la compilación en tiempo de ejecución de la expresión regular. Utilice la función constructora cuando sepa que el patrón de la expresión regular va a cambiar, o cuando no conozca el patrón y lo obtenga de otra fuente, como la entrada del usuario.

// Escribir un patrón de expresión regular #008000
// Un patrón de expresión regular está compuesto por caracteres simples, como /abc/, o por una combinación de caracteres simples y especiales, como /ab*c/ o /Capítulo (\d+)\d*/. El último ejemplo incluye paréntesis, que se utilizan como dispositivo de memoria. La coincidencia hecha con esta parte del patrón se recuerda para su uso posterior, como se describe en Uso de grupos.

// Nota: Si ya está familiarizado con las formas de una expresión regular, también puede leer la hoja de trucos para una búsqueda rápida de un patrón/construcción específico.

// Uso de patrones simples #00aae4
// Los patrones simples se construyen con caracteres para los que se desea encontrar una coincidencia directa. Por ejemplo, el patrón /abc/ coincide con combinaciones de caracteres en cadenas sólo cuando se produce la secuencia exacta "abc" (todos los caracteres juntos y en ese orden). Una coincidencia de este tipo tendría éxito en las cadenas "Hola, ¿conoces tus abc?" y "Los últimos diseños de aviones evolucionaron a partir de los slabcraft". En ambos casos la coincidencia es con la subcadena "abc". No hay coincidencia en la cadena "Agarra el cangrejo" porque aunque contiene la subcadena "ab c", no contiene la subcadena exacta "abc".

// Uso de caracteres especiales #00aae4
// Cuando la búsqueda de una coincidencia requiere algo más que una coincidencia directa, como encontrar una o más b, o encontrar espacios en blanco, puede incluir caracteres especiales en el patrón. Por ejemplo, para buscar una sola "a" seguida de cero o más "b" seguidas de "c", se utilizaría el patrón /ab*c/: el * después de la "b" significa "0 o más apariciones del elemento anterior". En la cadena "cbbabbbbcdebc", este patrón coincidirá con la subcadena "abbbbc".

// En las páginas siguientes se ofrece una lista de los distintos caracteres especiales que corresponden a cada categoría, junto con descripciones y ejemplos.

// Aserciones #00aae4
// Las aserciones incluyen los límites, que indican el comienzo y el final de las líneas y las palabras, y otros patrones que indican de alguna manera que es posible una coincidencia (incluyendo las expresiones de búsqueda, de búsqueda posterior y condicional).

// Clases de caracteres #00aae4
// Distingue diferentes tipos de caracteres. Por ejemplo, distinguir entre letras y dígitos.

// Grupos y retro-referencias #00aae4
// Los grupos agrupan múltiples patrones como un todo, y los grupos de captura proporcionan información adicional de subencuadre cuando se utiliza un patrón de expresión regular para comparar con una cadena. Las retro-referencias hacen referencia a un grupo previamente capturado en la misma expresión regular.

// Cuantificadores #00aae4
// Indican el número de caracteres o expresiones que deben coincidir.

// Escapes de propiedades Unicode #00aae4
// Distinguen según las propiedades de los caracteres unicode, por ejemplo, letras mayúsculas y minúsculas, símbolos matemáticos y signos de puntuación.

// Si desea ver todos los caracteres especiales que pueden utilizarse en las expresiones regulares en una sola tabla, consulte lo siguiente:

// ver imagen...

// Nota: También está disponible una hoja de trucos más grande (solo agregando partes de esos artículos individuales). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet

// Escapando #00aae4
// Si necesitas utilizar alguno de los caracteres especiales de forma literal (buscando un "*", por ejemplo), debes escaparlo poniendo una barra invertida delante de él. Por ejemplo, para buscar una "a" seguida de un "*" seguido de una "b", debe utilizar /a\*b/ - la barra invertida "escapa" del "*", haciéndolo literal en lugar de especial.

// Del mismo modo, si está escribiendo un literal de expresión regular y necesita que coincida con una barra ("/"), tiene que escaparla (de lo contrario, termina el patrón). Por ejemplo, para buscar la cadena "/ejemplo/" seguida de uno o más caracteres alfabéticos, utilizaría /\/ejemplo\/[a-z]+/i-las barras invertidas antes de cada barra las hacen literales.

// Para que coincida con una barra invertida literal, debe escapar la barra invertida. Por ejemplo, para que coincida con la cadena "C:\", en la que "C" puede ser cualquier letra, se utilizaría /[A-Z]:\\/ - la primera barra invertida escapa a la que le sigue, por lo que la expresión busca una única barra invertida literal.

// Si usa el constructor RegExp con un literal de cadena, recuerde que la barra invertida es un escape en los literales de cadena, así que para usarla en la expresión regular, necesita escaparla al nivel del literal de cadena. /a\*b/ y new RegExp("a\\*b") crean la misma expresión, que busca "a" seguido de un literal "*" seguido de "b".

// Si las cadenas de escape no forman ya parte de su patrón, puede añadirlas utilizando String.prototype.replace():

function escapeRegExp(cadena) {
  return cadena.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  // $& significa toda la cadena coincidente
}

// La "g" después de la expresión regular es una opción o bandera que realiza una búsqueda global, buscando en toda la cadena y devolviendo todas las coincidencias. Se explica en detalle más adelante en Búsqueda avanzada con banderas.

// ¿Por qué no está incorporado en JavaScript? Hay una propuesta para añadir tal función a RegExp.

// Uso de paréntesis #00aae4
// Los paréntesis alrededor de cualquier parte del patrón de expresión regular hacen que se recuerde esa parte de la subcadena coincidente. Una vez recordada, la subcadena puede ser recuperada para otros usos. Vea Grupos y referencias anteriores para más detalles.

// Uso de expresiones regulares en JavaScript #008000
// Las expresiones regulares se utilizan con los métodos RegExp test() y exec() y con los métodos String match(), replace(), search() y split().

// ver imagen...

// Cuando quiera saber si un patrón se encuentra en una cadena, utilice los métodos test() o search(); para obtener más información (pero una ejecución más lenta) utilice los métodos exec() o match(). Si utiliza exec() o match() y si la coincidencia tiene éxito, estos métodos devuelven un array y actualizan las propiedades del objeto de expresión regular asociado y también del objeto de expresión regular predefinido, RegExp. Si la coincidencia falla, el método exec() devuelve null (que coacciona a false).

// En el siguiente ejemplo, el script utiliza el método exec() para encontrar una coincidencia en una cadena.

const miRe = /d(b+)d/g;

const miArray = miRe.exec("cdbbdbsbz");

console.log(miArray);

// Si no necesitas acceder a las propiedades de la expresión regular, una forma alternativa de crear miMatriz es con este script

const miArray2 = /d(b+)d/g.exec("cdbbdbsbz");

console.log(miArray2);

// (Vea Uso de la bandera de búsqueda global con exec() para más información sobre los diferentes comportamientos).

// Si quiere construir la expresión regular a partir de una cadena, otra alternativa es este script

const miRe2 = new RegExp("d(b+)d", "g"),
  miArray3 = miRe2.exec("cdbbdbsbz");

console.log(miArray3);

// Con estos scripts, la coincidencia tiene éxito y devuelve el array y actualiza las propiedades que se muestran en la siguiente tabla.

// ver imagen...

// Como se muestra en la segunda forma de este ejemplo, puede utilizar una expresión regular creada con un inicializador de objetos sin asignarla a una variable. Sin embargo, si lo hace, cada ocurrencia es una nueva expresión regular. Por esta razón, si utiliza esta forma sin asignarla a una variable, no podrá acceder posteriormente a las propiedades de esa expresión regular. Por ejemplo, suponga que tiene este script

const miRe3 = /d(b+)d/g;
const myArray3 = miRe3.exec("cdbbdbsbz");
console.log(`El valor de lastIndex es ${miRe3.lastIndex}`);

// // "El valor de lastIndex es 5"

// Sin embargo, si tienes este script

const myArray4 = /d(b+)d/g.exec("cdbbdbsbz");
console.log(`El valor de lastIndex es ${/d(b+)d/g.lastIndex}`);

// // "El valor de lastIndex es 0"

// Las apariciones de /d(b+)d/g en las dos sentencias son objetos de expresión regular diferentes y por lo tanto tienen valores diferentes para su propiedad lastIndex. Si necesita acceder a las propiedades de una expresión regular creada con un inicializador de objetos, debe asignarla primero a una variable.

// Búsqueda avanzada con banderas #00aae4
// Las expresiones regulares tienen banderas opcionales que permiten funcionalidades como la búsqueda global y la búsqueda sin distinción de mayúsculas y minúsculas. Estos indicadores pueden utilizarse por separado o juntos en cualquier orden, y se incluyen como parte de la expresión regular.

// ver imagen...

// Para incluir una bandera con la expresión regular, utilice esta sintaxis

// const re = /patrón/banderas;

// const re = new RegExp('patrón', 'banderas');

// Tenga en cuenta que las banderas son una parte integral de una expresión regular. No se pueden añadir o eliminar posteriormente.

// Por ejemplo, re = /\w+\s/g crea una expresión regular que busca uno o más caracteres seguidos de un espacio, y busca esta combinación en toda la cadena.

const re2 = /\w+\s/g;
const str = "fee fi fo fum";
const miArray4 = str.match(re2);
console.log(miArray4);

// // ["fee ", "fi ", "fo "]

// Podrías reemplazar la línea

// const re = /\w+\s/g;

// por:

const re3 = new RegExp("w+\\s", "g");

// La bandera m se utiliza para especificar que una cadena de entrada multilínea debe ser tratada como varias líneas. Si se utiliza la bandera m, ^ y $ coinciden con el inicio o el final de cualquier línea dentro de la cadena de entrada en lugar del inicio o el final de toda la cadena.

// Uso del indicador de búsqueda global con exec() #00aae4
// El método RegExp.prototype.exec() con la bandera g devuelve cada coincidencia y su posición de forma iterativa.

const str2 = "fee fi fo fum";
const re4 = /\w+\s/g;

console.log(re4.exec(str2)); // ["fee ", index: 0, input: "fee fi fo fum"]
console.log(re4.exec(str2)); // ["fi ", index: 4, input: "fee fi fo fum"]
console.log(re4.exec(str2)); // ["fo ", index: 7, input: "fee fi fo fum"]
console.log(re4.exec(str2)); // null

// En cambio, el método String.prototype.match() devuelve todas las coincidencias a la vez, pero sin su posición.

console.log(str.match(re4)); // ["fee ", "fi ", "fo "]

// Uso de expresiones regulares unicode #00aae4
// La bandera "u" se utiliza para crear expresiones regulares "unicode"; es decir, expresiones regulares que admiten coincidencias con texto unicode. Esto se consigue principalmente mediante el uso de escapes de propiedades Unicode, que sólo son compatibles con las expresiones regulares "unicode".

// Por ejemplo, la siguiente expresión regular podría utilizarse para comparar con una "palabra" unicode arbitraria:

// /\p{L}*/u

// Hay otras diferencias entre las expresiones regulares unicode y no unicode que hay que tener en cuenta:

// Las expresiones regulares Unicode no admiten los llamados "escapes de identidad"; es decir, patrones en los que no se necesita una barra invertida de escape y que se ignoran de hecho. Por ejemplo, /\a/ es una expresión regular válida que coincide con la letra 'a', pero /\a/u no lo es.

// Las llaves deben escaparse cuando no se utilizan como cuantificadores. Por ejemplo, /{/ es una expresión regular válida que coincide con la llave '{', pero /{/u no lo es.

// El carácter - se interpreta de forma diferente dentro de las clases de caracteres. En particular, para las expresiones regulares Unicode, - se interpreta como un literal - (y no como parte de un rango) sólo si aparece al principio o al final de la clase de caracteres. Por ejemplo, /[\w-:]/ es una expresión regular válida que coincide con un carácter de palabra, un - o :, pero /[\w-:]/u es una expresión regular inválida, ya que \w a : no es un rango de caracteres bien definido.

// Las expresiones regulares Unicode también tienen un comportamiento de ejecución diferente. RegExp.prototype.unicode contiene más explicaciones sobre esto.

// Ejemplos #008000
// Nota: También hay varios ejemplos disponibles en:

// Las páginas de referencia para exec(), test(), match(), matchAll(), search(), replace(), split().
// Los artículos de la guía: clases de caracteres, aserciones, grupos y retro-referencias, cuantificadores, escapes de propiedades Unicode

// Uso de caracteres especiales para verificar la entrada #00aae4
// En el siguiente ejemplo, se espera que el usuario introduzca un número de teléfono. Cuando el usuario pulsa el botón "Check", el script comprueba la validez del número. Si el número es válido (coincide con la secuencia de caracteres especificada por la expresión regular), el script muestra un mensaje de agradecimiento al usuario y confirma el número. Si el número no es válido, el script informa al usuario de que el número de teléfono no es válido.

// La expresión regular busca

// el comienzo de la línea de datos: ^

// seguido de tres caracteres numéricos \d{3} O | un paréntesis izquierdo \(, seguido de tres caracteres numéricos \d{3}, seguido de un paréntesis cerrado \), en un grupo no capturado (?:)

// seguido de un guión, una barra inclinada o un punto decimal en un grupo de captura ()

// seguido de tres dígitos \d{3}

// seguido de la coincidencia recordada en el (primer) grupo de captura \1

// seguido de cuatro dígitos \d{4}

// seguido del final de la línea de datos: $

// ver html...

const form = document.querySelector("#form"),
  input = document.querySelector("#telefono"),
  salida = document.querySelector("#salida");

const re5 = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function pruebaInformación(entradaTelefono) {
  const bien = re5.exec(entradaTelefono.value);

  console.log(bien);

  salida.textContent = bien
    ? `Gracias, su numero de telefono es ${bien[0]}`
    : `${entradaTelefono.value} no es un número de teléfono con código de área! `;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  pruebaInformación(input);
});

// Herramientas para RegExp #008000

// RegExr

// https://regexr.com/

// Una herramienta en línea para aprender, construir y probar expresiones regulares.

// Probador Regex

// https://regex101.com/

// Un generador / depurador de regex en línea

// Tutorial interactivo de Regex

// https://regexlearn.com/

// Un tutorial interactivo en línea, Cheatsheet, & Playground.

// Visualizador Regex

// https://extendsclass.com/regex-tester.html

// Un probador de regex visual en línea.
