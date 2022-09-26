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

// El estándar para el bucle #008000
// En el ejemplo de "círculos de dibujo" anterior, no tiene una colección de elementos para recorrer: realmente solo desea ejecutar el mismo código 100 veces. En un caso como ese, debe usar el bucle for. Tiene la sintaxis siguiente:

/*

for (inicializador; condicion; expresion-final) {
    // código a ejecutar
}

*/

// Aquí tenemos:

// 1. La palabra clave for, seguida de algunos paréntesis.

// 2. Dentro de los paréntesis tenemos tres ítems, separados por punto y coma:

// 2.1 Un inicializador: generalmente es una variable establecida en un número, que se incrementa para contar el número de veces que se ha ejecutado el bucle. A veces también se le conoce como una variable de contador..

// 2.2 Una condición: define cuándo el bucle debe detener el bucle. Esta es generalmente una expresión que presenta un operador de comparación, una prueba para ver si se ha cumplido la condición de salida.

// 2.3 Una expresión final: siempre se evalúa (o ejecuta) cada vez que el bucle ha pasado por una iteración completa. Por lo general, sirve para aumentar (o en algunos casos disminuir) la variable contraria, para acercarla al punto en que la condición ya no es true.

// 3. Algunas llaves rizadas que contienen un bloque de código: este código se ejecutará cada vez que el bucle se repita.

// Cálculo de cuadrados #00aae4
// Veamos un ejemplo real para que podamos visualizar lo que estos hacen con mayor claridad.

const resultadoCuadrados = document.querySelector(".resultados");

function calcular() {
  for (let i = 1; i < 10; i++) {
    const nuevoResultado = `${i} x ${i} = ${i * i}`;
    resultadoCuadrados.textContent += `${nuevoResultado}\n`;
  }

  resultadoCuadrados.textContent += "\nFinalizado!";
}

const btnCalcular = document.querySelector(".calcular"),
  btnLimpiar = document.querySelector(".limpiar");

btnCalcular.addEventListener("click", calcular);

btnLimpiar.addEventListener(
  "click",
  () => (resultadoCuadrados.textContent = "")
);

// Este código calcula los cuadrados para los números del 1 al 9 y escribe el resultado. El núcleo del código es el bucle for que realiza el cálculo.

// Vamos a dividir la línea for (let i = 1; i < 10; i++) en sus tres partes:

// 1. let i = 1: la variable contraria, i, comienza en 1. Tenga en cuenta que tenemos que usar let para el contador, porque lo reasignamos cada vez que damos la vuelta al bucle.

// 2. i < 10: sigue dando vueltas alrededor del bucle mientras i menor de 10.

// 3. i++: añade uno a i cada vez que recorra el bucle.

// Dentro del bucle, calculamos el cuadrado del valor actual de i, es decir: i * i. Creamos una cadena que expresa el cálculo que hicimos y el resultado, y agregamos esta cadena al texto de salida. También agregamos \n, por lo que la siguiente cadena que agreguemos comenzará en una nueva línea. Así que:

// 1. Durante la primera ejecución, i = 1, por lo que agregaremos 1 x 1 = 1.

// 2. Durante la segunda ejecución, i = 2, por lo que agregaremos 2 x 2 = 4.

// 3. Y así sucesivamente...

// 4. Cuando i a ser igual a 10 dejaremos de ejecutar el bucle y pasaremos directamente al siguiente bit de código debajo del bucle, imprimiendo el mensaje Finished! en una nueva línea.

// Bucle a través de colecciones con un bucle for #00aae4
// Puede utilizar un bucle for iterar a través de una colección, en lugar de un for...of bucle.

// Veamos de nuevo nuestro for...of ejemplo anterior:

const animales5 = ["Venado", "Tigre", "Anaconda", "Leon"];

for (const animal of animales5) {
  console.log(animal);
}

// Podríamos reescribir ese código así:

for (let i = 0; i < animales5.length; i++) {
  console.log(animales5[i]);
}

// En este bucle estamos comenzando i en 0, y deteniéndonos cuando i la longitud de la matriz. Luego, dentro del bucle, estamos usando i para acceder a cada elemento de la matriz a su vez.

// Esto funciona muy bien, y en las primeras versiones de JavaScript, for...of no existía, por lo que esta era la forma estándar de iterar a través de una matriz. Sin embargo, ofrece más posibilidades de introducir errores en su código. Por ejemplo:

// puede comenzar i en 1, olvidando que el primer índice de matriz es cero, no 1.

// Puede detenerse en i <= cats.length, olvidando que el último índice de matriz está en length - 1.

// Por razones como esta, generalmente es mejor usar for...of si puedes.

// A veces todavía necesita usar un bucle for iterar a través de una matriz. Por ejemplo, en el siguiente código queremos registrar un mensaje que enumere a nuestros gatos:

const gatos = ["Felix", "Figaro", "Romeo", "Tom"];

let misGatosFavoritos = "Mis gatos se llaman ";

for (const gato of gatos) {
  misGatosFavoritos += `${gato}, `;
}

console.log(misGatosFavoritos);

// La oración de salida final no está muy bien formada:

// Preferimos que maneje al último gato de manera diferente, Pero para hacer esto necesitamos saber cuándo estamos en la iteración del bucle final, y para hacer eso podemos usar un bucle for y examinar el valor de i:

let misGatosFavoritos2 = "Mis gatos se llaman ";

for (let i = 0; i < gatos.length; i++) {
  if (i === gatos.length - 1) {
    misGatosFavoritos2 += `y ${gatos[i]}.`;
  } else if (i === gatos.length - 2) {
    misGatosFavoritos2 += `${gatos[i]} `;
  } else {
    misGatosFavoritos2 += `${gatos[i]}, `;
  }
}

console.log(misGatosFavoritos2);
