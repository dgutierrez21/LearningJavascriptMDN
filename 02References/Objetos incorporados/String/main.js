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
