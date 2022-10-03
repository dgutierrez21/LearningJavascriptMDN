// Funciones: bloques de código reutilizables #ff0

// Otro concepto esencial en la codificación son las funciones, que le permiten almacenar una pieza de código que realiza una sola tarea dentro de un bloque definido, y luego llamar a ese código cuando lo necesite utilizando un solo comando corto, en lugar de tener que escribir el mismo código varias veces. En este artículo exploraremos conceptos fundamentales detrás de funciones como la sintaxis básica, cómo invocarlas y definirlas, el alcance y los parámetros.

// ¿Dónde puedo encontrar funciones? #008000
// En JavaScript, encontrarás funciones en todas partes. De hecho, hemos estado usando funciones durante todo el curso hasta ahora; simplemente no hemos estado hablando mucho de ellos. Sin embargo, ahora es el momento de que comencemos a hablar de funciones explícitamente y realmente exploremos su sintaxis.

// Prácticamente cada vez que hace uso de una estructura de JavaScript que presenta un par de paréntesis, () y no está utilizando una estructura de lenguaje incorporada común como un bucle for, while o do ... while bucle, o if... else declaración, usted está haciendo uso de una función.

// Funciones de navegador integradas #008000
// Hemos utilizado mucho las funciones integradas en el navegador en este curso.

// Cada vez que manipulamos una cadena de texto, por ejemplo:

const miTexto = "Esta es mi cadena";
const nuevaCadena = miTexto.replace("cadena", "pizza");

console.log(nuevaCadena);

// O cada vez que manipulamos una matriz:

const miMatriz = ["A", "mi", "me", "gusta", "el", "chocolate"];

const cadenaHecha = miMatriz.join(" ");

console.log(cadenaHecha);

// O cada vez que generamos un número aleatorio:

const miNumero = Math.floor(Math.random() * 100);

console.log(miNumero);

// Estábamos usando una función!

// El lenguaje JavaScript tiene muchas funciones integradas para permitirle hacer cosas útiles sin tener que escribir todo ese código usted mismo. De hecho, parte del código al que está llamando cuando invoca (una palabra elegante para ejecutar o ejecutar) una función de navegador incorporada no se puede escribir en JavaScript: muchas de estas funciones llaman a partes del código del navegador en segundo plano, que está escrito en gran parte en lenguajes de sistema de bajo nivel como C ++, no en lenguajes web como JavaScript.

// Tenga en cuenta que algunas funciones integradas del navegador no forman parte del lenguaje JavaScript principal; algunas se definen como parte de las API del navegador, que se basan en el lenguaje predeterminado para proporcionar aún más funcionalidad (consulte esta sección inicial de nuestro curso para obtener más descripciones). Veremos el uso de las API del navegador con más detalle en un módulo posterior.
