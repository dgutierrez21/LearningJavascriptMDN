// String.prototype.includes()
// El método includes() realiza una búsqueda con distinción entre mayúsculas y minúsculas para determinar si se puede encontrar una cadena dentro de otra cadena, devolviendo true o false según corresponda.

// Sintaxis
// includes(searchString)
// includes(searchString, position)
// Copiar en el portapapeles
// Parámetros
// searchString
// Una cadena que se va a buscar dentro de str. No puede ser un regex.

// position Opcional
// La posición dentro de la cadena en la que se va a empezar a buscar searchString. (El valor predeterminado es 0.)

// Valor devuelto
// true si la cadena de búsqueda se encuentra en cualquier lugar dentro de la cadena especificada, incluso cuando searchString es una cadena vacía; de lo contrario, false.

// Excepciones
// TypeError
// Si searchString es un regex.

// Descripción
// Este método permite determinar si una cadena incluye o no otra cadena.

const palabra = "zorro";

console.log(
  `La palabra "${palabra}" ${
    string.includes(palabra) ? "Sí" : "No"
  } en la está en la frase`
);

// El método includes() distingue entre mayúsculas y minúsculas. Por ejemplo, la siguiente expresión devuelve false:

console.log(
  `La palabra "Zorro" ${
    string.includes("Zorro") ? "Sí" : "No"
  } en la está en la frase`
);
