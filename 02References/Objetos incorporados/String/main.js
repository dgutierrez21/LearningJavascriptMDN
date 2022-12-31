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
