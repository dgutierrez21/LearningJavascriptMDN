// Tomar decisiones en el código: condicionales #008000

// En cualquier lenguaje de programación, el código necesita tomar decisiones y llevar a cabo acciones en consecuencia dependiendo de las diferentes entradas. Por ejemplo, en un juego, si el número de vidas del jugador es 0, entonces se acabó el juego. En una aplicación meteorológica, si se está mirando por la mañana, muestre un gráfico del amanecer; mostrar estrellas y una luna si es de noche. En este artículo, exploraremos cómo funcionan las llamadas declaraciones condicionales en JavaScript.

// ¡Puedes tenerlo con una condición! #008000
// Los seres humanos (y otros animales) toman decisiones todo el tiempo que afectan sus vidas, desde pequeñas ("¿debo comer una galleta o dos?") hasta grandes ("¿debo quedarme en mi país de origen y trabajar en la granja de mi padre, o debo mudarme a Estados Unidos y estudiar astrofísica?")

// Las declaraciones condicionales nos permiten representar dicha toma de decisiones en JavaScript, desde la elección que se debe hacer (por ejemplo, "una galleta o dos"), hasta el resultado resultante de esas elecciones (tal vez el resultado de "comió una galleta" podría ser "todavía sentía hambre", y el resultado de "comió dos galletas" podría ser "se sintió lleno, pero mamá me regañó por comer todas las galletas").

// Declaración if...else #008000

// Veamos, con mucho, el tipo más común de declaración condicional que usará en JavaScript: el humilde if...else.

// Sintaxis Basica if...else #00aae4

/*
if (condition) {
    código a ejecutar si la condición es verdadera
} else {
    ejecuta otro código en su lugar
}
*/

// Aquí tenemos:

// 1. La palabra clave if va seguida de algunos paréntesis.

// 2. Una condición para probar, colocada dentro de los paréntesis (típicamente "¿es este valor más grande que este otro valor?", o "¿existe este valor?"). La condición hace uso de los operadores de comparación que discutimos en el último módulo y devuelve true o false.

// 3. Un conjunto de llaves rizadas, dentro de las cuales tenemos algún código: este puede ser cualquier código que nos guste, y solo se ejecuta si la condición devuelve true.

// 4. La palabra clave else.

// 5. Otro conjunto de llaves rizadas, dentro del cual tenemos algo más de código, este puede ser cualquier código que nos guste, y solo se ejecuta si la condición no es true, o en otras palabras, la condición es false.

// Este código es bastante legible por humanos: dice "si la condición devuelve true, ejecute el código A, de lo contrario ejecute el código B"

// Debe tener en cuenta que no tiene que incluir el else y el segundo bloque de corsé rizado, lo siguiente también es un código perfectamente legal:

/*

if (condition) {
  código a ejecutar si la condición es verdadera
}
*/

/* ejecutar algún otro código */

// Sin embargo, debe tener cuidado aquí: en este caso, el segundo bloque de código no está controlado por la instrucción condicional, por lo que siempre se ejecuta, independientemente de si la condición devuelve true o false. Esto no es necesariamente algo malo, pero puede que no sea lo que quieres, a menudo quieres ejecutar un bloque de código u otro, no ambos.

// Como punto final, aunque no se recomienda, a veces puede ver if...else declaraciones escritas sin los brackets rizados:

/*

if (condition) código a ejecutar si la condición es verdadera 
else ejecutar otro código en su lugar

*/

// Esta sintaxis es perfectamente válida, pero es mucho más fácil entender el código si se utilizan las llaves para delimitar los bloques de código, y se utilizan varias líneas y sangrías.
