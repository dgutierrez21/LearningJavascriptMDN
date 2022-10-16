// Introducción a JavaScript asincrónico #ff0

// En este artículo, explicaremos qué es la programación asincrónica, por qué la necesitamos y discutiremos brevemente algunas de las formas en que las funciones asincrónicas se han implementado históricamente en JavaScript.

// La programación asincrónica es una técnica que permite al programa iniciar una tarea potencialmente de larga ejecución y seguir respondiendo a otros eventos mientras se ejecuta esa tarea, en lugar de tener que esperar hasta que esa tarea haya finalizado. Una vez finalizada esa tarea, se presenta el resultado del programa.

// Muchas funciones proporcionadas por los navegadores, especialmente las más interesantes, pueden llevar mucho tiempo y, por lo tanto, son asíncronas. Por ejemplo:

// ---Realizar solicitudes HTTP usando fetch()

// ---Acceso a la cámara o micrófono de un usuario mediante getUserMedia

// ---Pedir a un usuario que seleccione archivos mediante showOpenFilePicker()

// Por lo tanto, aunque es posible que no tenga que implementar sus propias funciones asincrónicas muy a menudo, es muy probable que necesite usarlas correctamente.

// En este artículo, comenzaremos analizando el problema con las funciones síncronas de larga ejecución, que hacen que la programación asíncrona sea una necesidad.

// Programación síncrona #008000
// Considere el siguiente código:

const nombre = "Miriam";

const saludo = `Hola, mi nombre es ${nombre}`;

console.log(saludo);

// Este código:

// 1. Declara una cadena llamada name.
// 2. Declara otra cadena llamada greeting, que usa name.
// 3. Envía el saludo a la consola de JavaScript.

// Debemos tener en cuenta aquí que el navegador efectivamente recorre el programa una línea a la vez, en el orden en que lo escribimos. En cada punto, el navegador espera a que la línea termine su trabajo antes de pasar a la siguiente línea. Tiene que hacer esto porque cada línea depende del trabajo realizado en las líneas anteriores.

// Eso hace que este sea un programa sincrónico. Seguiría siendo sincrónica incluso si llamáramos a una función separada, como esta:

function hacerElSaludo(nombre) {
  return `Hola, mi nombre es ${nombre}`;
}

const nombre2 = "Pierce";

const saludo2 = hacerElSaludo(nombre2);

console.log(saludo2);

// Aquí, makeGreeting() es una función sincrónica porque el autor de la llamada tiene que esperar a que la función termine su trabajo y devuelva un valor antes de que el llamador pueda continuar.

// Una función síncrona de larga duración #00aae4
// ¿Qué pasa si la función síncrona tarda mucho tiempo?

// El siguiente programa utiliza un algoritmo muy ineficiente para generar múltiples números primos grandes cuando un usuario hace clic en el botón "Generar números primos". Cuanto mayor sea el número de primos especificados por un usuario, más tiempo tardará la operación.

// ver html...

const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `¡Terminó de generar ${quota.value} números primos!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});

// Intente hacer clic en "Generar primos". Dependiendo de qué tan rápido sea su computadora, probablemente pasarán unos segundos antes de que el programa muestre el mensaje "¡Terminado!".

// El problema con las funciones síncronas de larga duración #00aae4
// El siguiente ejemplo es igual que el anterior, excepto que agregamos un cuadro de texto para que lo escribas. Esta vez, haga clic en "Generar primos" e intente escribir en el cuadro de texto inmediatamente después.

// Encontrará que mientras nuestra función generatePrimes() se está ejecutando, nuestro programa no responde por completo: no puede escribir nada, hacer clic en nada o hacer cualquier otra cosa.

// Este es el problema básico con las funciones síncronas de larga ejecución. Lo que necesitamos es una manera para que nuestro programa:

// 1. Inicie una operación de ejecución prolongada llamando a una función.

// 2. Haga que esa función inicie la operación y regrese inmediatamente, para que nuestro programa aún pueda responder a otros eventos.

// 3. Notifíquenos con el resultado de la operación cuando finalmente se complete.

// Eso es precisamente lo que pueden hacer las funciones asíncronas. El resto de este módulo explica cómo se implementan en JavaScript.

// Controladores de eventos #008000
// La descripción que acabamos de ver de las funciones asincrónicas podría recordarle a los controladores de eventos, y si lo hace, tendría razón. Los controladores de eventos son realmente una forma de programación asincrónica: se proporciona una función (el controlador de eventos) a la que se llamará, no de inmediato, sino siempre que ocurra el evento. Si "el evento" es "la operación asincrónica se ha completado", ese evento podría usarse para notificar al autor de la llamada sobre el resultado de una llamada de función asincrónica.

// Algunas de las primeras API asincrónicas usaban eventos de esta manera. La API XMLHttpRequest permite realizar solicitudes HTTP a un servidor remoto mediante JavaScript. Dado que esto puede tardar mucho tiempo, es una API asincrónica y se le notifica sobre el progreso y la finalización final de una solicitud adjuntando detectores de eventos al objeto XMLHttpRequest.

// El siguiente ejemplo muestra esto en acción. Presione "Haga clic para iniciar la solicitud" para enviar una solicitud. Creamos un nuevo XMLHttpRequest y escuchamos su evento loadend. El controlador registra un mensaje "¡Terminado!" junto con el código de estado.

// Después de agregar el detector de eventos, enviamos la solicitud. Tenga en cuenta que después de esto, podemos registrar "Solicitud XHR iniciada": es decir, nuestro programa puede continuar ejecutándose mientras la solicitud está en curso, y se llamará a nuestro controlador de eventos cuando se complete la solicitud.

// ver html...

const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Terminado con el estado: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json"
  );

  xhr.send();

  log.textContent = `${log.textContent} Inicio de la solicitud de XHR\n`;
});

document.querySelector("#reload2").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});

// Esto es igual que los controladores de eventos que hemos encontrado en un módulo anterior, excepto que en lugar de que el evento sea una acción del usuario, como el usuario haciendo clic en un botón, el evento es un cambio en el estado de algún objeto.
