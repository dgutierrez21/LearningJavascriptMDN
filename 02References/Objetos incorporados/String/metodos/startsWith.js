// String.prototype.startsWith()
// El método startsWith() determina si una cadena comienza con los caracteres de una cadena especificada, devolviendo true o false según corresponda.

// Sintaxis
// startsWith(searchString)
// startsWith(searchString, position)
//
// Parámetros
// searchString
// Los caracteres que se van a buscar al principio de esta cadena. No puede ser un regex.

// position Opcional
// La posición inicial en la que se espera encontrar searchString (el índice del primer carácter de searchString).searchString El valor predeterminado es 0.

// Valor devuelto
// true si los caracteres especificados se encuentran al principio de la cadena, incluso cuando searchString es una cadena vacía; de lo contrario, false.

// Excepciones
// TypeError
// Si searchString es un regex.

// Descripción
// Este método permite determinar si una cadena comienza o no con otra cadena. Este método distingue entre mayúsculas y minúsculas.

// Ejemplos
// Uso de startsWith()

const str = "Ser o no ser, esa es la cuestión.";

console.log(str.startsWith("Ser")); // true
const indexCuestion = str.indexOf("cuestión");
console.log(str.startsWith("cuestión")); // false

console.log(str.startsWith("cuestión", indexCuestion)); // true
