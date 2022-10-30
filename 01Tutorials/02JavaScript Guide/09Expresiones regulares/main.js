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
