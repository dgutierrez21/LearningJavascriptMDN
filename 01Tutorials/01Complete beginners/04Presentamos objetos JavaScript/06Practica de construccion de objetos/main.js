// Práctica de construcción de objetos #ff0

// Vamos a rebotar algunas bolas #008000
// En este artículo escribiremos una demo clásica de "bolas rebotando", para mostrarle lo útiles que pueden ser los objetos en JavaScript. Nuestras pequeñas bolas rebotarán en la pantalla y cambiarán de color cuando se toquen entre sí. El ejemplo terminado se verá un poco como esto:

// ver en la carpeta img...

// Este ejemplo hará uso de la API de Canvas para dibujar las bolas en la pantalla y la API requestAnimationFrame para animar toda la pantalla: no necesita tener ningún conocimiento previo de estas API, y esperamos que para cuando haya terminado este artículo esté interesado en explorarlas más. En el camino, haremos uso de algunos objetos ingeniosos y le mostraremos un par de técnicas agradables como rebotar bolas en las paredes y verificar si se han golpeado entre sí (también conocida como detección de colisiones).).

// Empezar #008000
// Para empezar, haga copias locales de index.html, style.css y main.js. Estos contienen lo siguiente, respectivamente:

//--- Un documento HTML muy simple con un elemento <h1>, un elemento <canvas> para dibujar nuestras bolas y elementos para aplicar nuestro CSS y JavaScript a nuestro HTML.

// ---Algunos estilos muy simples, que sirven principalmente para peinar y posicionar el <h1>, y deshacerse de cualquier barra de desplazamiento o margen alrededor del borde de la página (para que se vea bien y ordenada).

// ---Algún JavaScript que sirva para configurar el elemento <canvas> y proporcionar una función general que vamos a utilizar.
// La primera parte del guión se ve así:

// configuración canvas

const canvas = document.querySelector("canvas"),
  ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth),
  height = (canvas.height = window.innerHeight);

// Este script obtiene una referencia al elemento <canvas> y luego llama al método getContext() para darnos un contexto en el que podemos comenzar a dibujar. La constante resultante (ctx) es el objeto que representa directamente el área de dibujo del lienzo y nos permite dibujar formas 2D sobre él.

// A continuación, establecemos constantes llamadas width y height, y el ancho y el alto del elemento canvas (representado por las propiedades width y canvas.height) para que coincida con el ancho y el alto de la ventana gráfica del navegador (el área en la que aparece la página web, esto se puede obtener de las propiedades Window.innerWidth y heightcanvas.width Window.innerWidth).Window.innerHeight canvas.height
// Tenga en cuenta que estamos encadenando múltiples asignaciones juntas, para que todas las variables se configuren más rápido, esto está perfectamente bien.

// Entonces tenemos dos funciones auxiliares:

// función para generar un número aleatorio

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// función para generar un color aleatorio

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// La función random() toma dos números como argumentos y devuelve un número aleatorio en el rango entre los dos. La función randomRGB() genera un color aleatorio representado como una cadena rgb()

// Modelando una pelota en nuestro programa #008000

// Nuestro programa contará con muchas bolas rebotando alrededor de la pantalla. Dado que todas estas bolas se comportarán de la misma manera, tiene sentido representarlas con un objeto. Comencemos agregando la siguiente definición de clase al final de nuestro código.

class Forma {
  constructor(x, y, velX, VelY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.VelY = VelY;
  }
}

class Bolas extends Forma {
  constructor(x, y, velX, VelY, color, tamanio) {
    super(x, y, velX, VelY);
    this.color = color;
    this.tamanio = tamanio;
    this.existe = true;
  }

  dibujar() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.tamanio, 0, 2 * Math.PI);
    ctx.fill();
  }

  actualizacion() {
    if (this.x + this.tamanio >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.tamanio <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.tamanio >= height) {
      this.VelY = -this.VelY;
    }

    if (this.y - this.tamanio <= 0) {
      this.VelY = -this.VelY;
    }

    this.x += this.velX;
    this.y += this.VelY;
  }

  detectarColision() {
    for (const bola of bolas) {
      if (this !== bola && this.existe) {
        const dx = this.x - bola.x;
        const dy = this.y - bola.y;

        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.tamanio + bola.tamanio) {
          bola.color = this.color = randomRGB();
        }
      }
    }
  }
}

class CirculoDelMal extends Forma {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = "white";
    this.tamanio = 10;

    window.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "a":
          this.x -= this.velX;
          break;
        case "d":
          this.x += this.velX;
          break;
        case "w":
          this.y -= this.VelY;
          break;
        case "s":
          this.y += this.VelY;
          break;
      }
    });
  }

  dibujar() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.tamanio, 0, 2 * Math.PI);
    ctx.lineWidth = 3;
    ctx.stroke();
  }

  comprobarLimites() {
    if (this.x + this.tamanio >= width) {
      this.x -= this.tamanio;
    }

    if (this.x - this.tamanio <= 0) {
      this.x += this.tamanio;
    }

    if (this.y + this.tamanio >= height) {
      this.y -= this.tamanio;
    }

    if (this.y - this.tamanio <= 0) {
      this.y += this.tamanio;
    }
  }

  detectarColision() {
    for (const bola of bolas) {
      if (this.existe) {
        const dx = this.x - bola.x;
        const dy = this.y - bola.y;

        const distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia < this.tamanio + bola.tamanio) {
          this.existe = false;
        }
      }
    }
  }
}

// Hasta ahora esta clase solo contiene un constructor, en el que podemos inicializar las propiedades que necesita cada bola para funcionar en nuestro programa:

//--- x y: las coordenadas horizontales y verticales donde comienza la bola en la pantalla. Esto puede variar entre 0 (esquina superior izquierda) hasta el ancho y alto de la ventana gráfica del navegador (esquina inferior derecha).

// ---velocidad horizontal y vertical (velX y velY): a cada bola se le asigna una velocidad horizontal y vertical; en términos reales, estos valores se agregan regularmente a los valores y x / y cuando animamos las bolas, para moverlas tanto en cada cuadro.

// ---color: cada bola tiene un color.

// ---size: cada bola tiene un tamaño, este es su radio, en píxeles.

// Esto maneja las propiedades, pero ¿qué pasa con los métodos? Queremos que nuestras pelotas realmente hagan algo en nuestro programa.

// Dibujar la pelota #00aae4
// En primer lugar, agregue el siguiente método draw() a la clase Ball:

// ver clase...

// Usando esta función, podemos decirle a la bola que se dibuje en la pantalla, llamando a una serie de miembros del contexto de lienzo 2D que definimos anteriormente (ctx). El contexto es como el papel, y ahora queremos ordenar a nuestro bolígrafo que dibuje algo en él:

// ---Primero, usamos beginPath() para indicar que queremos dibujar una forma en el papel.

// ---A continuación, usamos fillStyle para definir qué color queremos que sea la forma: la establecemos en la propiedad de color de nuestra bola.

// ---A continuación, usamos el método arc() para trazar una forma de arco en el papel. Sus parámetros son:

// ---La x posición x e y del centro del arco: estamos especificando las propiedades x e y de la y bola.

// ---El radio del arco, en este caso, la propiedad de size de la bola.

// ---Los dos últimos parámetros especifican el número inicial y final de grados alrededor del círculo entre el que se dibuja el arco. Aquí especificamos 0 grados, y 2 * PI, que es el equivalente a 360 grados en radianes (molestamente, tienes que especificar esto en radianes). Eso nos da un círculo completo. Si hubiera especificado solo 1 * PI obtendría un semicírculo (180 grados).

// ---Por último, usamos el método fill(), que básicamente dice "terminar de dibujar la ruta que comenzamos con beginPath(), y llenar el área que ocupa con el color que especificamos anteriormente en fill() fillStyle."

// Ya puede comenzar a probar su objeto.

// Guarde el código hasta ahora y cargue el archivo HTML en un navegador.

// Abra la consola JavaScript del explorador y, a continuación, actualice la página para que el tamaño del lienzo cambie a la ventana gráfica visible más pequeña que queda cuando se abre la consola.

// Escriba lo siguiente para crear una nueva instancia de bola

const testBola = new Bolas(50, 100, 4, 4, "blue", 30);

// Intente llamar a sus miembros:

testBola.x;
testBola.tamanio;
testBola.color;
testBola.dibujar();

// Cuando entres en la última línea, deberías ver que la bola se dibuja en algún lugar del lienzo.

// Actualización de los datos del balón #00aae4
// Podemos dibujar la pelota en posición, pero para mover realmente la pelota, necesitamos una función de actualización de algún tipo. Agregue el código siguiente dentro de la definición de clase para Ball:

// ver clase bolas...

// Las primeras cuatro partes de la función comprueban si la bola ha alcanzado el borde del lienzo. Si es así, invertimos la polaridad de la velocidad relevante para hacer que la bola viaje en la dirección opuesta. Entonces, por ejemplo, si la bola viajaba hacia arriba (velY negativo), entonces la velocidad vertical cambia para que comience a viajar hacia abajo en su lugar (velY).

// ---En los cuatro casos, estamos comprobando para ver:

// ---Si la coordenada x es mayor que el ancho del lienzo (la bola se sale del borde derecho).

// ---si la coordenada x es menor que 0 (la bola se sale del borde izquierdo).

// ---si la coordenada y es mayor que la altura del lienzo (la bola se sale del borde inferior).

// ---si la coordenada y es menor que 0 (la bola se sale del borde superior).

// En cada caso, incluimos el size de la pelota en el cálculo porque las coordenadas x / y están en el centro de la pelota, pero queremos que el borde de la pelota rebote en el perímetro, no queremos que la pelota se vaya a la mitad de la pantalla antes de que comience a rebotar.

// Las dos últimas líneas agregan el valor velX a la coordenada x y el valor velY a la coordenada y: la bola se mueve en efecto cada vez que se llama a este método.

// Esto servirá por ahora; ¡Sigamos con un poco de animación!

// Animando la pelota #008000
// Ahora hagamos que esto sea divertido. Ahora vamos a empezar a añadir bolas al lienzo, y animarlas.

// Primero, necesitamos crear un lugar para almacenar todas nuestras bolas y luego poblarlas. Lo siguiente hará este trabajo: agréguelo a la parte inferior de su código ahora:

const bolas = [];

while (bolas.length < 25) {
  const tamanio = random(10, 20);
  const bola = new Bolas(
    // la posición de la bola siempre se dibuja al menos a un ancho de bola
    // del borde del lienzo, para evitar errores de dibujo

    random(0 + tamanio, width - tamanio),
    random(0 + tamanio, height - tamanio),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    tamanio
  );

  bolas.push(bola);
}

// El bucle while crea una nueva instancia de nuestra Ball() utilizando valores aleatorios generados con nuestras funciones random() y randomRGB() luego push() al final de nuestra matriz de bolas, pero solo mientras el número de bolas en la matriz es inferior a 25. Entonces, cuando tengamos 25 bolas en la matriz, no se empujarán más bolas. Puede intentar variar el número en balls.length < 25 para obtener más o menos bolas en la matriz. Dependiendo de la potencia de procesamiento que tenga su computadora / navegador, ¡especificar varios miles de bolas podría ralentizar bastante la animación!

// A continuación, agregue lo siguiente al final del código:

const nuevoCirculoDelMal = new CirculoDelMal(
  random(0, width),
  random(0, height)
);

function bucle() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  for (const bola of bolas) {
    if (bola.existe) {
      bola.dibujar();
      bola.actualizacion();
      bola.detectarColision();
    }
  }

  nuevoCirculoDelMal.dibujar();
  nuevoCirculoDelMal.comprobarLimites();
  nuevoCirculoDelMal.detectarColision();

  requestAnimationFrame(bucle);
}

// Todos los programas que animan cosas generalmente implican un bucle de animación, que sirve para actualizar la información en el programa y luego renderizar la vista resultante en cada fotograma de la animación; Esta es la base de la mayoría de los juegos y otros programas similares. Nuestra función loop() hace lo siguiente:

// ---Establece el color de relleno del lienzo en negro semitransparente y, a continuación, dibuja un rectángulo del color en todo el ancho y alto del lienzo, utilizando fillRect()los cuatro parámetros proporcionan una coordenada inicial y un ancho y alto para el rectángulo dibujado). Esto sirve para cubrir el dibujo del fotograma anterior antes de dibujar el siguiente. Si no haces esto, ¡verás largas serpientes abriéndose paso alrededor del lienzo en lugar de bolas moviéndose! El color del relleno se establece en semitransparente, rgba(0,0,0,0.25) para permitir que los fotogramas anteriores brillen ligeramente, produciendo los pequeños rastros detrás de las bolas a medida que se mueven. Si cambiaste 0.25 a 1, ya no los verás en absoluto. Intente variar este número para ver el efecto que tiene.

// ---Recorre todas las bolas de la matriz de balls y ejecuta la función draw() y update() de cada bola para dibujar cada una en la pantalla, luego realiza las actualizaciones necesarias para la posición y la velocidad a tiempo para el siguiente cuadro.draw()

// ---Ejecuta la función de nuevo mediante el método requestAnimationFrame() cuando este método se ejecuta repetidamente y se pasa el mismo nombre de función, ejecuta esa función un número determinado de veces por segundo para crear una animación suave. Esto generalmente se hace de forma recursiva, lo que significa que la función se llama a sí misma cada vez que se ejecuta, por lo que se ejecuta una y otra vez.

// Finalmente, agregue la siguiente línea a la parte inferior de su código: debemos llamar a la función una vez para comenzar la animación.

bucle();

// Adición de detección de colisiones #008000
// Ahora, para un poco de diversión, agreguemos un poco de detección de colisiones a nuestro programa, para que nuestras bolas sepan cuándo han golpeado otra bola.

// En primer lugar, agregue la siguiente definición de método a la clase Ball.

// ver clase la bolas...

// Este método es un poco complejo, así que no te preocupes si no entiendes exactamente cómo funciona por ahora. A continuación se explica:

// ---Para cada bola, necesitamos revisar cada otra bola para ver si ha chocado con la bola actual. Para ello, iniciamos otro for...of bucle a bucle a través de todas las bolas en la matriz balls[]].

// ---Inmediatamente dentro del bucle for, usamos una instrucción if para verificar si la bola actual que se está atravesando es la misma bola que la que estamos verificando actualmente. ¡No queremos comprobar si una pelota ha chocado consigo misma! Para hacer esto, verificamos si la bola actual (es decir, la bola cuyo método collisionDetect se está invocando) es la misma que la bola de bucle (es decir, la bola a la que se hace referencia por la iteración actual del bucle for en el método collisionDetect). Luego usamos ! para negar la comprobación, de modo que el código dentro de la if solo se ejecute si no son iguales.

// ---Luego usamos un algoritmo común para verificar la colisión de dos círculos. Básicamente estamos comprobando si alguna de las áreas de los dos círculos se superpone. Esto se explica con más detalle en la detección de colisiones 2D.

// ---Si se detecta una colisión, se ejecuta el código dentro de la instrucción if interna. En este caso, solo establecemos la propiedad de color de ambos círculos en un nuevo color aleatorio. Podríamos haber hecho algo mucho más complejo, como hacer que las bolas rebotaran entre sí de manera realista, pero eso habría sido mucho más complejo de implementar. Para tales simulaciones de física, los desarrolladores tienden a usar juegos o bibliotecas de física como PhysicsJS, matter.js, Phaser, etc.
// También debe llamar a este método en cada fotograma de la animación. Actualice la función loop() para llamar a ball.collisionDetect() después de ball.update():

// ver funcion bucle...

// Guarda y actualiza la demo de nuevo, ¡y verás que tus bolas cambian de color cuando choquen!
