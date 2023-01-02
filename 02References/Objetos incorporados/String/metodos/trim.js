// String.prototype.trim()
// El método trim() quita el espacio en blanco de ambos extremos de una cadena y devuelve una nueva cadena, sin modificar la cadena original.

// Para devolver una nueva cadena con espacios en blanco recortados desde un solo extremo, use trimStart() o trimStart() trimEnd().

// Sintaxis
// trim()

// Valor devuelto
// Una nueva cadena que representa str despojado de espacios en blanco tanto desde su principio como desde su final. El espacio en blanco se define como caracteres de espacio en blanco más terminadores de línea.

// Si ni el principio ni el final str de str tienen ningún espacio en blanco, todavía se devuelve una nueva cadena (esencialmente una copia de str).

// Ejemplos

const str = "      Hola Mundo       ";

console.log(str);
console.log(str.trim());

console.log(str.trimStart());
console.log(str.trimEnd());
