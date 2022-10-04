// Valores devueltos de la función #ff0

// Hay un último concepto esencial sobre las funciones que debemos discutir: los valores de retorno. Algunas funciones no devuelven un valor significativo, pero otras sí. Es importante comprender cuáles son sus valores, cómo usarlos en el código y cómo hacer que las funciones devuelvan valores útiles. Cubriremos todo esto a continuación.

// ¿Qué son los valores devueltos? #008000
// Los valores devueltos son exactamente lo que parecen: los valores que devuelve una función cuando se completa. Ya has cumplido con los valores de retorno varias veces, aunque es posible que no hayas pensado en ellos explícitamente.

const miTexto = "El clima esta frío";

const nuevaCadena = miTexto.replace("frío", "caliente");

console.log(nuevaCadena);

// La función replace() se invoca en la cadena myText y se le pasan dos parámetros:

// 1. la subcadena a encontrar ('frío').
// 2. la cuerda con la que se va a sustituir ('caliente').

// Cuando la función se completa (termina de ejecutarse), devuelve un valor, que es una nueva cadena con el reemplazo realizado. En el código anterior, el resultado de este valor devuelto se guarda en la variable newString.

// Si observa la página de referencia de MDN de la función replace()), verá una sección llamada valor devuelto. Es muy útil conocer y entender qué valores devuelven las funciones, por lo que intentamos incluir esta información siempre que sea posible.

// Algunas funciones no devuelven ningún valor. (En estos casos, nuestras páginas de referencia enumeran el valor devuelto como void o undefined). Por ejemplo, en la función displayMessage() que creamos en el artículo anterior, no se devuelve ningún valor específico cuando se invoca la función. Simplemente hace que aparezca un cuadro en algún lugar de la pantalla, ¡eso es todo!

// Generalmente, se utiliza un valor devuelto cuando la función es un paso intermedio en un cálculo de algún tipo. Desea llegar a un resultado final, que implica algunos valores que deben ser calculados por una función. Después de que la función calcula el valor, puede devolver el resultado para que pueda almacenarse en una variable; y puede utilizar esta variable en la siguiente etapa del cálculo.

// Uso de valores devueltos en sus propias funciones #00aae4
// Para devolver un valor de una función personalizada, debe usar la palabra clave return. Vimos esto en acción recientemente en nuestros círculos de lienzo aleatorios.html ejemplo. Nuestra función draw() dibuja 100 círculos aleatorios en algún lugar <canvas>:

// function draw() {
//   ctx.clearRect(0, 0, WIDTH, HEIGHT);
//   for (let i = 0; i < 100; i++) {
//     ctx.beginPath();
//     ctx.fillStyle = "rgba(255,0,0,0.5)";
//     ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//     ctx.fill();
//   }
// }

// Dentro de cada iteración de bucle, se realizan tres llamadas a la función random() para generar un valor aleatorio para la coordenada x, la coordenada y el radio del círculo actual, respectivamente. La función random() toma un parámetro, un número entero, y devuelve un número aleatorio entero entre 0 y ese número. Se ve así:

// function random(number) {
//   return Math.floor(Math.random() * number);
// }

// Esto podría escribirse de la siguiente manera:

// function random(number) {
//   const result = Math.floor(Math.random() * number);
//   return result;
// }

// Pero la primera versión es más rápida de escribir y más compacta.

// Estamos devolviendo el resultado del cálculo Math.floor(Math.random() * number) cada vez que se llama a la función. Este valor devuelto aparece en el punto en que se llamó a la función y el código continúa.

// Entonces, cuando ejecute lo siguiente:

// ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);

// Si las tres llamadas random() devuelven los valores 500, 200 y 35, respectivamente, la línea se ejecutaría como si fuera esto:

// ctx.arc(500, 200, 35, 0, 2 * Math.PI);

// Las llamadas a la función en la línea se ejecutan primero, y sus valores devueltos se sustituyen por las llamadas a la función, antes de que la línea en sí se ejecute.
