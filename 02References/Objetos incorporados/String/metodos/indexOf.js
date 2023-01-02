// String.prototype.indexOf()
// El método indexOf() dado un argumento: una subcadena para buscar, busca toda la cadena de llamada y devuelve el índice de la primera aparición de la subcadena especificada. Dado un segundo argumento: un número, el método devuelve la primera aparición de la subcadena especificada en un índice mayor o igual que el número especificado.

// Sintaxis
// indexOf(searchString)
// indexOf(searchString, position)

// Parámetros
// searchString
// Subcadena para buscar, forzada a una cadena.

// Si se llama al método sin argumentos, searchString se convierte en "undefined" Por lo tanto, "undefined""undefined".indexOf() devuelve 0 — porque la subcadena "undefined" se encuentra en la posición 0 en la cadena 0 "undefined""undefined" Pero "undefine""undefine".indexOf(), devuelve -1 — porque la subcadena ""undefined"" no se encuentra en la cadena ""undefine".

// position Opcional
// El método devuelve el índice de la primera aparición de la subcadena especificada en una posición mayor o igual que la position, cuyo valor predeterminado es 0. Si la position es mayor que la longitud de la cadena de llamada, el método no busca la cadena de llamada en absoluto. Si la posición es menor que cero, el método se comporta como lo haría si position la position fuera 0.

// 'hello world hello'.indexOf('o', -5) devuelve 4 — porque hace que el método se comporte como si el segundo argumento fuera 0, y la primera aparición de o en una posición mayor o igual a 0 está en 0 la posición 4 4.
// 'hello world hello'.indexOf('world', 12), 12) devuelve -1 — porque, si bien es cierto que el world de la subcadena ocurre en el índice 6, esa posición no es mayor ni igual que 12.
// 'hello world hello'.indexOf('o', 99) devuelve -1 — porque 99 es mayor que la longitud de 'hello world hello'.indexOf('o', 99) lo que hace que el método no busque la cadena en absoluto.hello world hello
// Valor devuelto
// El índice de la primera aparición de searchString encontrado, o -1 si no se encuentra.

// Valor devuelto cuando se utiliza una cadena de búsqueda vacía
// La búsqueda de una cadena de búsqueda vacía produce resultados extraños. Sin un segundo argumento, o con un segundo argumento cuyo valor sea menor que la longitud de la cadena de llamada, el valor devuelto es el mismo que el valor del segundo argumento:

// "hello world".indexOf(""); // returns 0
// "hello world".indexOf("", 0); // returns 0
// "hello world".indexOf("", 3); // returns 3
// "hello world".indexOf("", 8); // returns 8

// Sin embargo, con un segundo argumento cuyo valor es mayor o igual que la longitud de la cadena, el valor devuelto es la longitud de la cadena:

// "hello world".indexOf("", 11); // returns 11
// "hello world".indexOf("", 13); // returns 11
// "hello world".indexOf("", 22); // returns 11

// En el primer caso, el método se comporta como si encontrara una cadena vacía justo después de la posición especificada en el segundo argumento. En este último caso, el método se comporta como si encontrara una cadena vacía al final de la cadena de llamada.

// Descripción
// Las cadenas están indexadas a cero: el índice del primer carácter de una cadena es 0 y el índice del último carácter de una cadena es la longitud de la cadena menos 1.

// "Blue Whale".indexOf("Blue"); // returns  0
// "Blue Whale".indexOf("Blute"); // returns -1
// "Blue Whale".indexOf("Whale", 0); // returns  5
// "Blue Whale".indexOf("Whale", 5); // returns  5
// "Blue Whale".indexOf("Whale", 7); // returns -1
// "Blue Whale".indexOf(""); // returns  0
// "Blue Whale".indexOf("", 9); // returns  9
// "Blue Whale".indexOf("", 10); // returns 10
// "Blue Whale".indexOf("", 11); // returns 10
// El método indexOf() distingue entre mayúsculas y minúsculas. Por ejemplo, la siguiente expresión devuelve -1:

// "Blue Whale".indexOf("blue"); // returns -1
//
// Comprobación de ocurrencias
// Al comprobar si una subcadena específica se produce dentro de una cadena, la forma correcta de comprobar es comprobar si el valor devuelto es -1:

// "Blue Whale".indexOf("Blue") !== -1; // true; found 'Blue' in 'Blue Whale'
// "Blue Whale".indexOf("Bloe") !== -1; // false; no 'Bloe' in 'Blue Whale'

// Ejemplos

console.log(string);
console.log(string.indexOf("zorro"));
console.log(string.indexOf("gato"));

// distinción entre mayúsculas y minúsculas

console.log(string.indexOf("Zorro"));

// Uso de indexOf() para contar las apariciones de una letra en una cadena

// En el ejemplo siguiente se establece el count del número de apariciones de la letra e en la cadena str:

const str = "Ser o no ser, esa es la cuestión.";

let posicion = str.indexOf("e");

let cuenta = 0;

while (posicion !== -1) {
  console.log("posición", posicion);
  console.log("cuenta", cuenta);
  cuenta++;

  posicion = str.indexOf("e", posicion + 1);
}

console.log(cuenta);
