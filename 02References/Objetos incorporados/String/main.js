// String #ff0

// El objeto String se utiliza para representar y manipular una secuencia de caracteres.

// Descripción #008000
// Las cadenas son útiles para contener datos que se pueden representar en forma de texto. Algunas de las operaciones más utilizadas en las cadenas son comprobar su length, construirlas y concatenarlas utilizando los operadores de cadena + y +=, comprobar la existencia o ubicación de subcadenas con el método indexOf() o extraer subcadenas con el método indexOf()substring()

// Creación de cadenas #00aae4
// Las cadenas se pueden crear como primitivas, a partir de literales de cadena o como objetos, utilizando el constructor String()

const string1 = "Una cadena primitiva";

const string2 = "También una cadena primitiva";

const string3 = `Otro cadena primitiva`;

// utilizando constructor
const string4 = String("Un objeto cadena");

// Las primitivas de cadena y los objetos de cadena comparten muchos comportamientos, pero tienen otras diferencias y advertencias importantes. Consulte "Primitivas de cadena y objetos de cadena" a continuación.

// Los literales de cadena se pueden especificar usando comillas simples o dobles, que se tratan de manera idéntica, o usando el carácter de marca de retroceso `. Este último formulario especifica un literal de plantilla: con este formulario puede interpolar expresiones.

// Acceso a caracteres #00aae4
// Hay dos formas de acceder a un carácter individual en una cadena. El primero es el método charAt()

const caracter = "Gato".charAt(1);
console.log(caracter);

// La otra forma es tratar la cadena como un objeto similar a una matriz, donde los caracteres individuales corresponden a un índice numérico:

const caracter2 = "Gato"[2];
console.log(caracter2);

// Cuando se utiliza la notación entre corchetes para el acceso a caracteres, intentar eliminar o asignar un valor a estas propiedades no se realizará correctamente. Las propiedades implicadas no son ni escriturables ni configurables. (Consulte Object.defineProperty() para obtener más información.)

// Comparación de cadenas #00aae4
// En C, la función strcmp() se utiliza para comparar cadenas. En JavaScript, solo usa los operadores menor que y mayor que:

const a = "a",
  b = "b";

if (a < b) {
  console.log(`${a} es inferior a ${b}`);
} else if (a > b) {
  console.log(`${a} es superior a ${b}`);
} else {
  console.log(`${a} y ${b} son iguales`);
}

// Tenga en cuenta que todos los operadores de comparación, incluidos === y ===, comparan cadenas con distinción entre mayúsculas y minúsculas.== Una forma común de comparar cadenas sin distinción entre mayúsculas y minúsculas es convertir ambas a las mismas mayúsculas y minúsculas (superior o inferior) antes de compararlas.

function sonIguales(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(sonIguales("HOLA", "hola"));

// La elección de si transformar por toUpperCase() es en su mayoría arbitraria, y ninguno de los dos es completamente robusto cuando se extiende más allá del alfabeto latino.toLowerCase() Por ejemplo, la letra minúscula alemana ß y ss se transforman en SS por toUpperCase()(), mientras que la letra turca ı sería falsamente reportada como desigual a I por toLowerCase() a menos que se use específicamente toLocaleLowerCase("tr").

const areEqualInUpperCase = (str1, str2) =>
  str1.toUpperCase() === str2.toUpperCase();
const areEqualInLowerCase = (str1, str2) =>
  str1.toLowerCase() === str2.toLowerCase();

console.log(areEqualInUpperCase("ß", "ss")); // true; debería ser false
console.log(areEqualInLowerCase("ı", "I")); // false; debería ser true

// Una solución sólida y con reconocimiento regional para probar la igualdad que no distingue entre mayúsculas y minúsculas es usar la API Intl.Collator o el método localeCompare()() de la cadena (comparten la misma interfaz) con la opción de sensitivity establecida en ""accent"" o ""base".

const sonIguales2 = (str1, str2, locale = "en-US") =>
  str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0;

console.log(sonIguales2("ß", "ss", "de")); // false
console.log(sonIguales2("ı", "I", "tr")); // true

// El método localeCompare() permite la comparación de cadenas de manera similar a strcmp() permite ordenar cadenas de una manera compatible con la configuración regional.

// cadena primitivas y objetos String #00aae4
// Tenga en cuenta que JavaScript distingue entre objetos String y valores de cadena primitivos. (Lo mismo ocurre con Boolean y Numbers.)

// Los literales de cadena (indicados entre comillas dobles o simples) y las cadenas devueltas por llamadas de String en un contexto no constructor (es decir, llamadas sin usar la new palabra clave) son cadenas primitivas. En contextos en los que se va a invocar un método en una cadena primitiva o se produce una búsqueda de propiedades, JavaScript ajustará automáticamente la primitiva de cadena y llamará al método o realizará la búsqueda de propiedades en el objeto contenedor.

const strPrim = "foo"; // Un literal es una cadena primitiva
const strPrim2 = String(1); // Se convierte en la cadena primitiva "1".
const strPrim3 = String(true); // Se convierte en la cadena primitiva "true".
const strObj = new String(strPrim); // String con new devuelve un objeto envoltorio de cadena.

console.log(typeof strPrim); // "cadena"
console.log(typeof strPrim2); // "cadena".
console.log(typeof strPrim3); // "cadena".
console.log(typeof strObj); // "objeto".

// Advertencia: Rara vez deberías encontrarte usando String como constructor.

// Las primitivas String y los objetos String también dan resultados diferentes cuando se usa eval(). Las primitivas pasadas a eval se tratan como código fuente; String se tratan como todos los demás objetos, devolviendo el objeto. Por ejemplo:

const s1 = "2 + 2"; // crea una primitiva String
const s2 = new String("2 + 2"); // crea un objeto String
console.log(eval(s1)); // devuelve el número 4
console.log(eval(s2)); // devuelve la cadena "2 + 2"

// Por estas razones, el código puede romperse cuando encuentra objetos String cuando espera una cadena primitiva en su lugar, aunque generalmente, los autores no necesitan preocuparse por la distinción.

// Un objeto String siempre se puede convertir a su homólogo primitivo con el método valueOf()

console.log(eval(s2.valueOf())); // devuelve en número 4

// Coerción de cuerdas #00aae4
// Muchas operaciones integradas que esperan cadenas primero obligan sus argumentos a cadenas (que es en gran parte la razón por la cual String se comportan de manera similar a las primitivas de cadena). La operación se puede resumir de la siguiente manera:

// Las cadenas se devuelven tal cual.

// undefined se convierte en ""undefined".

// null se convierte en ""null".

// true se convierte en ""true"; false falso se convierte en ""false".

// Los números se convierten con el mismo algoritmo que toString(10).

// Los BigInts se convierten con el mismo algoritmo que toString(10).

// Los símbolos arrojan un TypeError.

// Los objetos se convierten primero en una primitiva llamando a sus métodos [@@toPrimitive]() (con ""string" como sugerencia), toString() y valueOf() en ese orden. La primitiva resultante se convierte en una cadena.

// Hay varias maneras de lograr casi el mismo efecto en JavaScript.

// Literal de plantilla: '`${x}` realiza exactamente los pasos de coerción de cadena explicados anteriormente para la expresión incrustada.

// La función String(String()(x) usa el mismo algoritmo para convertir x, excepto que Symbols no arroja un TypeError, sino que devuelve "Symbol(description)" description es la descripción del Symbol. String(x)

// El uso del operador +: """ + x coacciona su operando a una primitiva en lugar de una cadena y, para algunos objetos, tiene comportamientos completamente diferentes de la coerción de cadena normal.+ Consulte su página de referencia para obtener más detalles.

// Dependiendo de su caso de uso, es posible que desee usar '`${x}` (para imitar el comportamiento incorporado) o String(xString(x)para manejar los valores de los símbolos sin generar un error), pero no debe usar """ + x.

// Secuencias de escape #00aae4
// Los caracteres especiales se pueden codificar mediante secuencias de escape:

// Secuencia de escape	Punto de código Unicode
// \0	carácter nulo (U+0000 NULL)
// \'	comillas simples (U+0027 APOSTROPHE)
// \"	comillas dobles (U+0022 COMILLAS)
// \\	barra diagonal inversa (U+005C REVERSE SOLIDUS)
// \n	newline (U+000A LINE FEED; LF)
// \r	retorno de carro (U+000D RETORNO DE CARRO; CR)
// \v	tabulación vertical (tabulación de línea U+000B)
// \t	(TABULACIÓN DE CARACTERES U+0009)
// \b	retroceso (U+0008 RETROCESO)
// \f	alimentación de formulario (U+000C FEED DE FORMULARIO)
// \uXXXX ... donde XXXX es exactamente 4 dígitos hexadecimales en el rango 0000–FFFF; por ejemplo, \\u000A es lo mismo que \n (AVANCE DE LÍNEA); \u0021 es !	Punto de código Unicode entre UU+0000 y U+FFFF (el plano multilingüe básico Unicode)
// \u{X}... \u{XXXXXX} ... donde X... XXXXXX es de 1 a 6 dígitos hexadecimales en el rango 0 a 10FFFF; por ejemplo, \\u{A} es lo mismo que \n (AVANCE DE LÍNEA); \u{21} es !	Punto de código Unicode entre U+U+0000U+10FFFF (la totalidad de Unicode)
// \xXX ... donde XX es exactamente 2 dígitos hexadecimales en el rango 00–FF; por ejemplo, \\x0A es lo mismo que \n (AVANCE DE LÍNEA); \x21 es !	Punto de código Unicode entre U+U+0000 (los bloques Basic Latin y Latin-1 Supplement; equivalente a ISO-8859-1)U+00FF

// Cadenas literales largas #00aae4
// A veces, su código incluirá cadenas que son muy largas. En lugar de tener líneas que continúan sin fin, o se envuelven al capricho de su editor, es posible que desee dividir específicamente la cadena en varias líneas en el código fuente sin afectar el contenido real de la cadena.

// Puede usar el operador + para agregar varias cadenas juntas, como esta:

const cadenaLarga =
  "Esta es una cadena muy larga que necesita " +
  "envolverse en varias líneas porque " +
  "de lo contrario mi código es ilegible";

console.log(cadenaLarga);

// O bien, puede usar el carácter de barra diagonal inversa (\) al final de cada línea para indicar que la cadena continuará en la línea siguiente. Asegúrese de que no haya espacio ni ningún otro carácter después de la barra diagonal inversa (excepto un salto de línea) o como sangría; de lo contrario no funcionará.

const cadenaLarga2 =
  "Esta es una cadena muy larga que necesita \
envolver a través de múltiples líneas porque \
de lo contrario mi código es ilegible";

console.log(cadenaLarga2);

// Ambos métodos anteriores dan como resultado cadenas idénticas.

// Constructor #008000

// String()
// Crea un nuevo objeto String. Realiza la conversión de tipos cuando se llama como una función, en lugar de como un constructor, que suele ser más útil.

// Métodos estáticos #008000
// String.fromCharCode()
// Devuelve una cadena creada mediante la secuencia especificada de valores Unicode.

// String.fromCodePoint()
// Devuelve una cadena creada mediante la secuencia especificada de puntos de código.

// String.raw()
// Devuelve una cadena creada a partir de una cadena de plantilla sin formato.

// Propiedades de instancia #008000
// String.prototype.length
// Refleja la length de la cadena. Sólo lectura.

// Métodos de instancia #008000
// String.prototype.at()
// Devuelve el carácter (exactamente una unidad de código UTF-16) en el index especificado. Acepta enteros negativos, que cuentan hacia atrás desde el último carácter de cadena.

// String.prototype.charAt()
// Devuelve el carácter (exactamente una unidad de código UTF-16) en el índice especificadoindex.

// String.prototype.charCodeAt()
// Devuelve un número que es el valor de la unidad de código UTF-16 en el index.

// String.prototype.codePointAt()
// Devuelve un número entero no negativo que es el valor de punto de código del punto de código codificado en UTF-16 que comienza en el pos especificado..

// String.prototype.concat()
// Combina el texto de dos (o más) cadenas y devuelve una nueva cadena.

// String.prototype.includes()
// Determina si la cadena de llamada contiene searchString.

// String.prototype.endsWith()
// Determina si una cadena termina con los caracteres de la cadena searchString.

// String.prototype.indexOf()
// Devuelve el índice dentro del objeto String que llama de la primera aparición de searchValue, o -1 si no se encuentra.

// String.prototype.lastIndexOf()
// Devuelve el índice dentro del objeto String que realiza la llamada de la última aparición de searchValue, o -1 si no se encuentra.

// String.prototype.localeCompare()
// Devuelve un número que indica si la cadena de referencia compareString viene antes, después o es equivalente a la cadena especificada en el orden de clasificación.

// String.prototype.match()
// Se utiliza para hacer coincidir la expresión regular regexp con una cadena.

// String.prototype.matchAll()
// Devuelve un iterador de todas las coincidencias de regexp.

// String.prototype.normalize()
// Devuelve el formulario de normalización Unicode del valor de cadena de llamada.

// String.prototype.padEnd()
// Rellena la cadena actual desde el final con una cadena determinada y devuelve una nueva cadena de la longitud targetLength.

// String.prototype.padStart()
// Rellena la cadena actual desde el principio con una cadena determinada y devuelve una nueva cadena de la longitud targetLength.

// String.prototype.repeat()
// Devuelve una cadena que consta de los elementos del objeto repetidos tiempos de count.

// String.prototype.replace()
// Se utiliza para reemplazar las apariciones de searchFor mediante replaceWith. searchFor puede ser una cadena o una expresión regular, y replaceWith puede ser una cadena o función.

// String.prototype.replaceAll()
// Se usa para reemplazar todas las apariciones de searchFor usando replaceWith. searchFor puede ser una cadena o una expresión regular, y replaceWith puede ser una cadena o función.

// String.prototype.search()
// Busque una coincidencia entre una expresión regular regexp y la cadena de llamada.

// String.prototype.slice()
// Extrae una sección de una cadena y devuelve una nueva.

// String.prototype.split()
// Devuelve una matriz de cadenas rellenadas dividiendo la cadena de llamada en las apariciones de la subcadena sep.

// String.prototype.startsWith()
// Determina si la cadena de llamada comienza con los caracteres de string searchString.

// String.prototype.substring()
// Devuelve una nueva cadena que contiene caracteres de la cadena de llamada desde (o entre) el índice (o índices) especificados.

// String.prototype.toLocaleLowerCase()
// Los caracteres de una cadena se convierten a minúsculas respetando la configuración regional actual.

// Para la mayoría de los idiomas, esto devolverá lo mismo que toLowerCase().

// String.prototype.toLocaleUpperCase( [locale, ...locales])
// Los caracteres dentro de una cadena se convierten a mayúsculas respetando la configuración regional actual.

// Para la mayoría de los idiomas, esto devolverá lo mismo que toUpperCase().

// String.prototype.toLowerCase()
// Devuelve el valor de cadena de llamada convertido a minúsculas.

// String.prototype.toString()
// Devuelve una cadena que representa el objeto especificado. Reemplaza el método Object.prototype.toString()

// String.prototype.toUpperCase()
// Devuelve el valor de cadena de llamada convertido a mayúsculas.

// String.prototype.trim()
// Recorta los espacios en blanco desde el principio y el final de la cadena.

// String.prototype.trimStart()
// Recorta el espacio en blanco desde el principio de la cadena.

// String.prototype.trimEnd()
// Recorta el espacio en blanco del extremo de la cadena.

// String.prototype.valueOf()
// Devuelve el valor primitivo del objeto especificado. Reemplaza el método Object.prototype.valueOf()

// String.prototype[@@iterator]()
// Devuelve un nuevo objeto iterador que itera sobre los puntos de código de un valor String y devuelve cada punto de código como un valor String.
