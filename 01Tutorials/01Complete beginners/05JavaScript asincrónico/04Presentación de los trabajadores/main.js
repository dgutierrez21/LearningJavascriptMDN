// Presentación de los trabajadores #ff0

// En este último artículo de nuestro módulo "JavaScript asíncrono", presentaremos los trabajadores, que permiten ejecutar algunas tareas en un hilo de ejecución independiente.

// Prerrequisitos: Conocimientos básicos de informática, una comprensión razonable de los fundamentos de JavaScript, incluyendo el manejo de eventos.
// Objetivo:	Entender cómo utilizar los web workers.
// En el primer artículo de este módulo, vimos lo que ocurre cuando tienes una tarea sincrónica de larga duración en tu programa: toda la ventana deja de responder. Fundamentalmente, la razón de esto es que el programa es de un solo hilo. Un hilo es una secuencia de instrucciones que sigue un programa. Debido a que el programa consiste en un solo hilo, sólo puede hacer una cosa a la vez: así que si está esperando a que regrese nuestra llamada sincrónica de larga duración, no puede hacer nada más.

// Los trabajadores le dan la posibilidad de ejecutar algunas tareas en un hilo diferente, de modo que puede iniciar la tarea, y luego continuar con otro procesamiento (como el manejo de las acciones del usuario).

// Pero esto tiene un precio. Con el código multihilo, nunca sabes cuándo tu hilo se suspenderá y el otro hilo tendrá la oportunidad de ejecutarse. Por lo tanto, si ambos hilos tienen acceso a las mismas variables, es posible que una variable cambie inesperadamente en cualquier momento, y esto causa errores que son difíciles de encontrar.

// Para evitar estos problemas en la web, tu código principal y tu código worker nunca tienen acceso directo a las variables del otro. Los trabajadores y el código principal se ejecutan en mundos completamente separados, y sólo interactúan enviándose mensajes. En particular, esto significa que los workers no pueden acceder al DOM (la ventana, el documento, los elementos de la página, etc.).

// Hay tres tipos diferentes de workers:

// ---trabajadores dedicados

// ---trabajadores compartidos

// ---trabajadores de servicio

// En este artículo, veremos un ejemplo del primer tipo de trabajador, y luego discutiremos brevemente los otros dos.

// Usando web workers #008000
// ¿Recuerdas que en el primer artículo teníamos una página que calculaba números primos? Vamos a utilizar un trabajador para ejecutar el cálculo de los números primos, para que nuestra página siga respondiendo a las acciones del usuario.

// El generador síncrono de números primos #00aae4
// Veamos primero el JavaScript de nuestro ejemplo anterior:

/*

function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector(
    "#output"
  ).textContent = `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

*/

// En este programa, después de llamar a generatePrimes(), el programa se queda totalmente sin respuesta.

// Primera generación con un trabajador #00aae4

// Para este ejemplo, comience haciendo una copia local de los archivos en https://github.com/mdn/learning-area/blob/main/javascript/asynchronous/workers/start. Hay cuatro archivos en este directorio:

// índice.html
// estilo.css
// principal.js
// generar.js
// El archivo "índice.html" y los archivos "estilo.css" ya están completos:

// Los archivos "main.js" y "generate.js" están vacíos. Vamos a añadir el código principal a "main.js", y el código del trabajador a "generate.js".

// Así que primero, podemos ver que el código del trabajador se mantiene en un script separado del código principal. También podemos ver, mirando a "index.html" arriba, que sólo el código principal está incluido en un elemento <script>.

// Ahora copia el siguiente código en "main.js":

// Crear un nuevo trabajador, dándole el código en "generate.js"

const trabajador = new Worker("./generate.js");

// Cuando el usuario hace clic en "Generar primos", envía un mensaje al trabajador.
// El comando del mensaje es "generar", y el mensaje también contiene "cuota",
// que es el número de primos a generar.

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  trabajador.postMessage({
    command: "generate",
    quota,
  });
});

// Cuando el trabajador envía un mensaje de vuelta al hilo principal,
// actualiza la caja de salida con un mensaje para el usuario, incluyendo el número de
// primos que se generaron, tomados de los datos del mensaje.

trabajador.addEventListener("message", (message) => {
  document.querySelector(
    "#output"
  ).textContent = `Terminado de generar ${message.data} números primos!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Intenta escribir aquí inmediatamente después de pulsar "Generar primos"';
  document.location.reload();
});

// ---Primero, creamos el trabajador usando el constructor Worker(). Le pasamos una URL que apunta al script del trabajador. Tan pronto como se crea el trabajador, se ejecuta el script del trabajador.

// ---A continuación, como en la versión sincrónica, añadimos un manejador de eventos de clic al botón "Generar primos". Pero ahora, en lugar de llamar a la función generatePrimes(), enviamos un mensaje al trabajador utilizando worker.postMessage(). Este mensaje puede tomar un argumento, y en este caso, estamos pasando un objeto JSON que contiene dos propiedades

// command: una cadena que identifica lo que queremos que haga el worker (en caso de que nuestro worker pueda hacer más de una cosa)

// quota: el número de primos a generar.

// ---A continuación, añadimos un manejador de eventos de mensaje al trabajador. Esto es para que el trabajador nos diga cuando ha terminado, y nos pase los datos resultantes. Nuestro manejador toma los datos de la propiedad data del mensaje, y los escribe en el elemento de salida (los datos son exactamente los mismos que la cuota, así que esto es un poco inútil, pero muestra el principio).

// ---Finalmente, implementamos el manejador de eventos de clic para el botón "Recargar". Esto es exactamente lo mismo que en la versión sincrónica.
// Ahora el código del trabajador. Copia el siguiente código en "generate.js":

// ver archivo generate.js

// Otros tipos de trabajadores #008000
// El trabajador que acabamos de crear es lo que se llama un trabajador dedicado. Esto significa que es utilizado por una sola instancia de script.

// Sin embargo, hay otros tipos de workers:

// ---Los trabajadores compartidos pueden ser compartidos por varios scripts que se ejecutan en diferentes ventanas.

// ---Los service workers actúan como servidores proxy, almacenando en caché los recursos para que las aplicaciones web puedan funcionar cuando el usuario está desconectado. Son un componente clave de las aplicaciones web progresivas.

// Conclusión #008000
// En este artículo hemos introducido los web workers, que permiten a una aplicación web descargar tareas a un hilo separado. El hilo principal y el worker no comparten directamente ninguna variable, sino que se comunican enviando mensajes, que son recibidos por el otro lado como eventos de mensaje.

// Los workers pueden ser una forma efectiva de mantener la respuesta de la aplicación principal, aunque no pueden acceder a todas las APIs que la aplicación principal puede, y en particular no pueden acceder al DOM.
