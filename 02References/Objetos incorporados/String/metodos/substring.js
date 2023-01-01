// String.prototype.substring()
// El método substring() devuelve la parte de la cadena desde el índice inicial hasta y excluyendo el índice final, o hasta el final de la string si no se proporciona ningún índice final.

// Sintaxis
// substring(indexStart)
// substring(indexStart, indexEnd)
// Copiar en el portapapeles
// Parámetros
// indexStart
// Índice del primer carácter que se va a incluir en la subcadena devuelta.

// indexEnd opcional
// Índice del primer carácter que se va a excluir de la subcadena devuelta.

// Valor devuelto
// Una nueva cadena que contiene la parte especificada de la cadena especificada.

// Descripción
// substring() extrae caracteres de indexStart hasta, pero sin incluir indexEnd. En particular:

// Si se omite indexEnd, substring() extrae caracteres al final de la cadena.
// Si indexStart es igual a indexEnd, substring() devuelve una cadena vacía.
// Si indexStart es mayor que indexEnd, entonces el efecto de substring() es como si los dos argumentos se intercambiaran; Vea el ejemplo a continuación.
// Cualquier valor de argumento que sea menor que 0 0 o mayor que str.length se trata como si fuera 0 y str.length, respectivamentestr.length
// Cualquier valor de argumento que sea NaN se trata como si fuera 0.

// Ejemplos

console.log(string);
const nuevaCadena = string.substring(0, 8);

console.log(nuevaCadena);

const nuevaCadena2 = string.substring(string.length, string.length - 17);

console.log(nuevaCadena2);

const nuevaCadena3 = string.substring();

console.log(nuevaCadena3);

const nuevaCadena4 = string.substring(0, 0);

console.log(nuevaCadena4); // cadena vacía
