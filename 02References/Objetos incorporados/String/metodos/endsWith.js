// String.prototype.endsWith()
// El método endsWith() determina si una cadena termina con los caracteres de una cadena especificada, devolviendo true o false según corresponda.

// Sintaxis
// endsWith(searchString)
// endsWith(searchString, endPosition)
// Copiar en el portapapeles
// Parámetros
// searchString
// Los caracteres que se buscarán al final de str. No puede ser un regex.

// endPosition opcional
// La posición final en la que se espera encontrar searchString (el índice del último carácter de searchString más 1).searchString El valor predeterminado es str.length.

// Valor devuelto
// true si los caracteres especificados se encuentran al final de la cadena, incluso cuando searchString es una cadena vacía; de lo contrario, false.

// Excepciones
// TypeError
// Si searchString es un regex.

// Descripción
// Este método permite determinar si una cadena termina o no con otra cadena. Este método distingue entre mayúsculas y minúsculas.

console.log(string);
console.log(string.endsWith("perezoso"));
console.log(
  `la cadena "${string}" ${
    string.endsWith("perezoso") ? "Sí" : "No"
  } termina con la cadena perezoso.`
);

// Distinción entre mayúsculas y minúsculas

console.log(string.endsWith("Perezoso"));

console.log(
  `la cadena "${string}" ${
    string.endsWith("Perezoso") ? "Sí" : "No"
  } termina con la cadena Perezoso.`
);
