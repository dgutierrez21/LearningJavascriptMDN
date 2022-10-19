// Gramática y tipos #ff0

// Este capítulo analiza la gramática básica de JavaScript, las declaraciones de variables, los tipos de datos y los literales.

// Conceptos básicos #008000
// JavaScript toma prestada la mayor parte de su sintaxis de Java, C y C++, pero también ha recibido la influencia de Awk, Perl y Python.

// JavaScript distingue entre mayúsculas y minúsculas y utiliza el conjunto de caracteres Unicode. Por ejemplo, la palabra Früh (que significa "temprano" en alemán) puede utilizarse como nombre de variable.

const Früh = "foobar";

console.log(Früh);

// Pero, la variable früh no es la misma que Früh porque JavaScript distingue entre mayúsculas y minúsculas.

const früh = "foobar2345";

console.log(früh);

// En JavaScript, las instrucciones se llaman sentencias y se separan con punto y coma (;).

// El punto y coma no es necesario después de una sentencia si se escribe en su propia línea. Pero si se desea más de una sentencia en una línea, entonces deben estar separadas por punto y coma.

// Nota: ECMAScript también tiene reglas para la inserción automática de punto y coma (ASI) para terminar las sentencias. (Para más información, consulte la referencia detallada sobre la gramática léxica de JavaScript).

// Sin embargo, se considera una buena práctica escribir siempre un punto y coma después de una sentencia, incluso cuando no es estrictamente necesario. Esta práctica reduce las posibilidades de que se introduzcan errores en el código.

// El texto fuente del script de JavaScript se escanea de izquierda a derecha, y se convierte en una secuencia de elementos de entrada que son tokens, caracteres de control, terminadores de línea, comentarios o espacios en blanco. (Los espacios, los tabuladores y los caracteres de nueva línea se consideran espacios en blanco).

// Comentarios #008000
// La sintaxis de los comentarios es la misma que en C++ y en muchos otros lenguajes:

// un comentario de una línea

/* esto es un comentario más largo,
    un comentario de varias líneas
 */

//     No se pueden anidar comentarios en bloque. Esto sucede a menudo cuando se incluye accidentalmente una secuencia */ en el comentario, que terminará el comentario.

// /* Sin embargo, no puede anidar comentarios */ SyntaxError */
// En este caso, debe romper el patrón */. Por ejemplo, insertando una barra invertida:

// /* Puede /* anidar comentarios *\/ escapando de las barras inclinadas */

// Los comentarios se comportan como espacios en blanco, y se descartan durante la ejecución del script.

// Nota: También puede ver un tercer tipo de sintaxis de comentario al principio de algunos archivos JavaScript, que se parece a esto: #!/usr/bin/env node.

// Esto se denomina sintaxis de comentario hashbang, y es un comentario especial que se utiliza para especificar la ruta de acceso a un motor JavaScript concreto que debe ejecutar el script. Ver Comentarios Hashbang para más detalles.
