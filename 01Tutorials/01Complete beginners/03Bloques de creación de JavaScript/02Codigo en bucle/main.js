// Código en bucle #ff0
// Los lenguajes de programación son muy útiles para completar rápidamente tareas repetitivas, desde múltiples cálculos básicos hasta casi cualquier otra situación en la que tenga muchos elementos de trabajo similares que completar. Aquí veremos las estructuras de bucle disponibles en JavaScript que manejan tales necesidades.

// ¿Por qué son útiles los bucles? #008000
// Los bucles se tratan de hacer lo mismo una y otra vez. A menudo, el código será ligeramente diferente cada vez alrededor del bucle, o se ejecutará el mismo código pero con diferentes variables.

// Ejemplo de código en bucle #00aae4
// Supongamos que quisiéramos dibujar 100 círculos aleatorios en un elemento <canvas> (presione el botón Actualizar para ejecutar el ejemplo una y otra vez para ver diferentes conjuntos aleatorios):

// ver html...

const btnCanvas = document.querySelector(".canvasContainer button"),
  canvas = document.querySelector(".canvasContainer canvas"),
  ctx = canvas.getContext("2d");

function random(numero) {
  return Math.floor(Math.random() * numero);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

btnCanvas.addEventListener("click", draw);

// Con y sin bucle #00aae4
// No tiene que entender todo el código por ahora, pero veamos la parte del código que realmente dibuja los 100 círculos:

/*

for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI
  );
  ctx.fill();
}

*/

// random(x)definido anteriormente en el código, devuelve un número entero entre 0 y x-1.

// Debería tener la idea básica: estamos utilizando un bucle para ejecutar 100 iteraciones de este código, cada una de las cuales dibuja un círculo en una posición aleatoria en la página. La cantidad de código necesario sería la misma si estuviéramos dibujando 100 círculos, 1000 o 10,000. Solo un número tiene que cambiar.

// Si no estuviéramos usando un bucle aquí, tendríamos que repetir el siguiente código para cada círculo que quisiéramos dibujar:

/*

ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI
);
ctx.fill();

*/

// Esto sería muy aburrido y difícil de mantener.

// Recorrer en bucle una colección #008000
// La mayoría de las veces, cuando usas un bucle, tendrás una colección de elementos y querrás hacer algo con cada elemento.

// Un tipo de colección es el Array, que conocimos en el capítulo Arrays de este curso. Pero también hay otras colecciones en JavaScript, incluyendo Set y Map.

// El for...of bucle #00aae4
// La herramienta básica para recorrer en bucle una colección es...for...of bucle:

const animales = ["Leopardo", "Jaguar", "Tigre", "Leon"];

for (const animal of animales) {
  console.log(animal);
}

// En este ejemplo, for (const animal of animales) dice:

// 1. animales la colección, obtenga el primer artículo de la colección.

// 2. Asígnelo a la variable animal y, a continuación, ejecute el código entre los corchetes rizados {}.

// 3. Obtén el siguiente elemento y repite el paso 2 hasta que hayas llegado al final de la colección.

// map() y filter() #00aae4
// JavaScript también tiene bucles más especializados para colecciones, y mencionaremos dos de ellos aquí.

// Puede usar map() para hacer algo con cada elemento de una colección y crear una nueva colección que contenga los elementos modificados:

function aMayuscula(string) {
  return string.toUpperCase();
}

const animales2 = ["Conejo", "Puma", "Aguila Real"];

const animalesMayuscula = animales2.map(aMayuscula);

console.log(animales2);
console.log(animalesMayuscula);

// Aquí pasamos una función a animales2.map(), y map() llama a la función una vez para cada elemento de la matriz, pasando el elemento. A continuación, agrega el valor devuelto de cada llamada a la función a una nueva matriz y, finalmente, devuelve la nueva matriz. En este caso la función que proporcionamos convierte el artículo en mayúsculas, por lo que la matriz resultante contiene todos nuestros animales en mayúsculas

// ["CONEJO", "PUMA", "AGUILA REAL"];

// Puede usar filter() para probar cada elemento de una colección y crear una nueva colección que contenga solo elementos que coincidan:

function animalesConA(animal) {
  return animal.startsWith("A");
}

const animales3 = ["Leon", "Puma", "Anaconda", "Abeja", "Avestruz", "Jaguar"];

const animalesFiltrados = animales3.filter(animalesConA);

console.log(animalesFiltrados);

// Esto se parece mucho a map(), excepto que la función que pasamos devuelve un booleano: si devuelve true, entonces el elemento se incluye en la nueva matriz. Nuestra función prueba que el elemento comienza con la letra "A", por lo que el resultado es una matriz que contiene solo animales cuyos nombres comienzan con "A":

// ["Anaconda", "Abeja", "Avestruz"];

// Tenga en cuenta que map() y filter() se usan a menudo con expresiones de función, que aprenderemos en el módulo https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions Usando expresiones de función podríamos reescribir el ejemplo anterior para que sea mucho más compacto:

const animales4 = ["Puma", "Ardilla", "Elefante"];

const filtrarAnimales = animales4.filter((animal) => animal.startsWith("A"));

console.log(filtrarAnimales);

// ["Ardilla"];
