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
