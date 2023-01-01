// String.prototype.charAt()
// El método charAt() del objeto String devuelve una nueva cadena que consta de la única unidad de código UTF-16 ubicada en el desplazamiento especificado en la cadena.

// Sintaxis
// charAt(index)
// Copiar en el portapapeles
// Parámetros
// index
// Un entero entre 0 y str.length - 1 Si el index no se puede convertir al entero o no se proporciona ningún index, el valor predeterminado es 0, por lo que se devuelve el primer carácter de str.

// Valor devuelto
// Una cadena que representa el carácter (exactamente una unidad de código UTF-16) en el index especificado. Si index está fuera del intervalo, charAt() devuelve una cadena vacía.

// Descripción
// Los caracteres de una cadena se indexan de izquierda a derecha. El índice del primer carácter es 0 y el índice del último carácter, en una cadena llamada stringName es stringName.length - 1 Si el index que proporciona está fuera de este intervalo, JavaScript devuelve una cadena vacía.

// Si no se proporciona ningún index a charAt(), el valor predeterminado es 0.

// Ejemplos
// Mostrar caracteres en diferentes ubicaciones de una cadena
// En el ejemplo siguiente se muestran caracteres en diferentes ubicaciones de la cadena "Brave new world"":

console.log(`El careacter el en indice 0 es ${string.charAt()}`);

console.log(`El careacter el en indice 1 es ${string.charAt(1)}`);

console.log(`El careacter el en indice 2 es ${string.charAt(2)}`);

console.log(`El careacter el en indice 3 es ${string.charAt(3)}`);

console.log(`El careacter el en indice 4 es ${string.charAt(4)}`);

console.log(`El careacter el en indice 5 es ${string.charAt(5)}`);

console.log(`El careacter el en indice 6 es ${string.charAt(6)}`);

console.log(`El careacter el en indice 7 es ${string.charAt(7)}`);
