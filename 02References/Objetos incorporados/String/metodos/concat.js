// String.prototype.concat()
// El método concat() concatena los argumentos de cadena a la cadena de llamada y devuelve una nueva cadena.

// Parámetros
// strN
// Una o más cadenas para concatenar a str.

// Valor devuelto
// Una nueva cadena que contiene el texto combinado de las cadenas proporcionadas.

// Descripción
// La función concat() concatena los argumentos de cadena a la cadena de llamada y devuelve una nueva cadena. Los cambios en la cadena original o en la cadena devuelta no afectan a la otra.

// Si los argumentos no son del tipo string, se convierten en valores de cadena antes de concatenar.

// El método concat() es muy similar a los operadores de concatenación de suma/cadena (+, +=), excepto que concat() coacciona concat() sus argumentos directamente a las cadenas, mientras que la adición coacciona sus operandos a primitivas primero. Para obtener más información, consulte la página de referencia del operador +.

const str1 = "Hola";
const str2 = "Mundo";

console.log(str1.concat(" ", str2));

console.log(str1.concat(" Pedro", ", Que tengas un buen día."));

console.log(str1.concat(" ", null));
console.log(str1.concat(" ", true));
