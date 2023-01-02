// String.prototype.repeat()
// El método repeat() construye y devuelve una nueva cadena que contiene el número especificado de copias de la cadena en la que se llamó, concatenadas juntas.

// Sintaxis
// repeat(count)

// Parámetros
// count
// Un entero entre 0 y +Infinity, que indica el número de veces que se repetirá la cadena.

// Valor devuelto
// Una nueva cadena que contiene el número especificado de copias de la cadena especificada.

// Excepciones
// RangeError: el recuento de repeticiones no debe ser negativo.
// RangeError: el recuento de repeticiones debe ser menor que infinito y no desbordar el tamaño máximo de cadena.

// Ejemplos
// Uso de repeat()

const perroIndex = string.indexOf("perro");

const cadena = string.substring(perroIndex) + " / ";

const repetirCadena = cadena.repeat(5);

console.log(repetirCadena);
