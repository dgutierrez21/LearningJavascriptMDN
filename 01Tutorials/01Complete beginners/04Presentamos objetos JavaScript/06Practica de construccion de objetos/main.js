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

class Bolas {
  constructor(x, y, velX, VelY, color, tamanio) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.VelY = VelY;
    this.color = color;
    this.tamanio = tamanio;
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

    if (this.y - this.tamanio >= 0) {
      this.VelY = -this.VelY;
    }

    this.x += this.velX;
    this.y += this.VelY;
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
