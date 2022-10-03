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

// Funciones versus métodos #008000
// Las funciones que forman parte de objetos se denominan métodos. Todavía no necesita aprender sobre el funcionamiento interno de los objetos JavaScript estructurados: puede esperar hasta nuestro módulo posterior que le enseñará todo sobre el funcionamiento interno de los objetos y cómo crear el suyo propio. Por ahora, solo queríamos aclarar cualquier posible confusión de método versus función: es probable que cumpla con ambos términos al observar los recursos relacionados disponibles en la Web.

// El código incorporado que hemos utilizado hasta ahora viene en ambas formas: funciones y métodos. Puede consultar la lista completa de las funciones integradas, así como los objetos integrados y sus métodos correspondientes aquí. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

// También ha visto muchas funciones personalizadas en el curso hasta ahora: funciones definidas en su código, no dentro del navegador. Cada vez que veías un nombre personalizado con paréntesis justo después de él, estabas usando una función personalizada. En nuestros círculos de lienzo aleatorios.html ejemplo (consulte también el código fuente completo) de nuestro artículo de bucles, incluimos una función draw() personalizada que se veía así:

function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

// Esta función dibuja 100 círculos aleatorios dentro de un elemento <canvas>. Cada vez que queramos hacer eso, podemos simplemente invocar la función con esto:

// draw();

// en lugar de tener que escribir todo ese código de nuevo cada vez que queremos repetirlo. Y las funciones pueden contener el código que desee, incluso puede llamar a otras funciones desde dentro de las funciones. La función anterior, por ejemplo, llama a la función random() tres veces, que se define mediante el siguiente código:

function random(number) {
  return Math.floor(Math.random() * number);
}

console.log(random(10));
console.log(random(5));

// Invocar funciones #008000
// Probablemente ya lo tenga claro, pero por si acaso, para usar realmente una función después de que se haya definido, debe ejecutarla o invocarla. Esto se hace incluyendo el nombre de la función en el código en algún lugar, seguido de paréntesis.

function miFuncion() {
  console.log("Hola Mundo desde una función.");
}

miFuncion();
// llama a la función una vez

// Nota: Esta forma de crear una función también se conoce como declaración de función. Siempre se eleva, por lo que puede llamar a la función por encima de la definición de la función y funcionará bien.

// Parámetros de función #008000
// Algunas funciones requieren que se especifiquen parámetros cuando los invoca: estos son valores que deben incluirse dentro de los paréntesis de funciones, que debe hacer su trabajo correctamente.

// Nota: Los parámetros a veces se denominan argumentos, propiedades o incluso atributos.

// Por ejemplo, la función Math.random() integrada del navegador no requiere ningún parámetro. Cuando se llama, siempre devuelve un número aleatorio entre 0 y 1:

const miNumero2 = Math.random() * 1000;
const miNumero3 = Math.floor(miNumero2);

console.log(miNumero2);
console.log(miNumero3);

// Sin embargo, la función string replace() integrada del navegador necesita dos parámetros: la subcadena que se encuentra en la cadena principal y la subcadena para reemplazar esa cadena con:

const texto = "Esta es una cadena de prueba";

const miNuevaCadena = texto.replace("cadena", "funcion");

console.log(miNuevaCadena);

// Nota: Cuando necesite especificar varios parámetros, se separan por comas.

// Parámetros opcionales #00aae4
// A veces, los parámetros son opcionales, no es necesario especificarlos. Si no lo hace, la función generalmente adoptará algún tipo de comportamiento predeterminado. Por ejemplo, el parámetro de la función join() de la matriz es opcional:

const miMatriz2 = ["Este", "es", "una", "matriz"];

console.log(miMatriz2.join(" "));
console.log(miMatriz2.join()); // agrega coma de forma predeterminada

// Si no se incluye ningún parámetro para especificar un carácter de unión/delimitación, se utiliza una coma de forma predeterminada.

// Parámetros predeterminados #00aae4
// Si está escribiendo una función y desea admitir parámetros opcionales, puede especificar valores predeterminados agregando = después del nombre del parámetro, seguido del valor predeterminado:

function porcentajeDeCantidad(porcentaje = 50, cantidad = 10) {
  let por = `0.${porcentaje}`;
  let resolver = cantidad * Number(por);
  let resultado = `El ${porcentaje}% de ${cantidad} es: ${resolver.toFixed()}`;
  console.log(resultado);
}

porcentajeDeCantidad(); // Ejecutando funcion con parametros predeterminados

let miPorcentaje = 50;
let miCantidad = 100000;

porcentajeDeCantidad(miPorcentaje, miCantidad); //// Ejecutando funcion con parametros ingresados mediante variables
