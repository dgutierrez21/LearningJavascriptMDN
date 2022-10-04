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

// Aprendizaje activo: nuestra propia función de valor de retorno #008000
// Vamos a intentar escribir nuestras propias funciones con valores de retorno.

// 1. En primer lugar, haga una copia local del archivo de .html de la biblioteca de funciones de GitHub. Esta es una página HTML simple que contiene un campo <input> y un párrafo. También hay un elemento <script>, en el que hemos almacenado una referencia a ambos elementos HTML en dos variables. Esta pequeña página le permitirá ingresar un número en el cuadro de texto y mostrar diferentes números relacionados con él en el párrafo a continuación.

const input = document.querySelector(".numberInput"),
  para = document.querySelector("p");

// 2. Agreguemos algunas funciones útiles a este elemento <script>. Debajo de las dos líneas existentes de JavaScript, agregue las siguientes definiciones de funciones:

function alCuadrado(num) {
  return num * num;
}

function alCubo(num) {
  return num * num * num;
}

function factorial(num) {
  if (num < 0) {
    return undefined;
  }

  if (num === 0) {
    return 1;
  }

  let x = num - 1;

  while (x > 1) {
    num *= x;

    x--;
  }

  return num;
}

// Las funciones squared() y cubed() son bastante obvias: devuelven el cuadrado o cubo del número que se dio como parámetro. La función factorial() devuelve el factorial del número dado.

input.addEventListener("change", () => {
  const num = parseFloat(input.value);

  if (isNaN(num)) {
    para.textContent = "Tienes que introducir un número.";
  } else {
    para.textContent = `El numero ${num} al cuadrado es: ${alCuadrado(num)}, `;
    para.textContent += `El numero ${num} al cubo es: ${alCubo(num)}, `;
    para.textContent += `El factorial de ${num} es : ${factorial(num)}`;
  }
});

// Aquí estamos agregando un oyente al evento change. Se ejecuta cada vez que el evento change se activa en la entrada de texto, es decir, cuando se ingresa un nuevo valor en la input texto y se envía (por ejemplo, ingrese un valor, luego desenfoque la entrada presionando Tab o Return). Cuando se ejecuta esta función anónima, el valor de la input se almacena en la constante num. A continuación, hacemos una prueba condicional. Si el valor introducido no es un número, se imprime un mensaje de error en el párrafo. La prueba analiza si la expresión isNaN(num) devuelve true. La función isNaN() prueba si el valor num no es un número; si es así, devuelve true y, si no, devuelve false. Si la prueba devuelve false, el valor num es un número. Por lo tanto, se imprime una oración dentro del elemento de párrafo que indica los valores cuadrados, cúbicos y factoriales del número. La oración llama a las funciones squared(), cubed() y factorial() para calcular los valores requeridos.

// Guarde su código, cárguelo en un navegador y pruébelo.