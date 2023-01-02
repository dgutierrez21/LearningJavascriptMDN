// String.prototype.lastIndexOf()
// El método lastIndexOf() dado un argumento: una subcadena para buscar, busca toda la cadena de llamada y devuelve el índice de la última aparición de la subcadena especificada. Dado un segundo argumento: un número, el método devuelve la última aparición de la subcadena especificada en un índice menor o igual que el número especificado.

// Sintaxis
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// Parámetros
// searchString
// Subcadena para buscar, forzada a una cadena.

// Si se llama al método sin argumentos, searchString se convierte en "undefined" Por lo tanto, "undefined""undefined".lastIndexOf() devuelve 0 0 — porque la subcadena "undefined" se encuentra en la posición 0 en la cadena "undefined""undefined" Pero "undefine""undefine".lastIndexOf(), devuelve -1 — porque la subcadena ""undefined"" no se encuentra en la cadena ""undefine".

// position Opcional
// El método devuelve el índice de la última aparición de la subcadena especificada en una posición menor o igual que la position, cuyo valor predeterminado es +Infinity. Si la position es mayor que la longitud de la cadena de llamada, el método busca en toda la cadena. Si la position es menor que 0, el comportamiento es el mismo que para 0, es decir, el método busca la subcadena especificada solo en el índice 00 0.

// 'hello world hello'.lastIndexOf('world', 4), 4) devuelve -1 — porque, aunque el world de la subcadena aparece en el índice 6, esa posición no es menor ni igual que 4.
// 'hello world hello'.lastIndexOf('hello', 99) 99) devuelve 12 — porque la última aparición de hello en una posición menor o igual que 99 está en la posición 12 12.
// 'hello world hello'.lastIndexOf('hello', 0) y ''hello world hello'.lastIndexOf('hello', -5) ambos devuelven 0, porque ambos hacen que el método solo busque hello en el índice 'hello world hello'.lastIndexOf('hello', 0) 0 0.
// Valor devuelto
// El índice de la última aparición de searchString encontrado, o -1 si no se encuentra.

// Descripción
// Las cadenas están indexadas a cero: el índice del primer carácter de una cadena es 0 y el índice del último carácter de una cadena es la longitud de la cadena menos 1.

// "canal".lastIndexOf("a"); // returns 3
// "canal".lastIndexOf("a", 2); // returns 1
// "canal".lastIndexOf("a", 0); // returns -1
// "canal".lastIndexOf("x"); // returns -1
// "canal".lastIndexOf("c", -5); // returns 0
// "canal".lastIndexOf("c", 0); // returns 0
// "canal".lastIndexOf(""); // returns 5
// "canal".lastIndexOf("", 2); // returns 2

// Distinción entre mayúsculas y minúsculas
// El método lastIndexOf() distingue entre mayúsculas y minúsculas. Por ejemplo, la siguiente expresión devuelve -1:

// "Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1

// Ejemplos

console.log(string);
console.log(string.length);

console.log(string.indexOf("o"));
console.log(string.lastIndexOf("o"));
