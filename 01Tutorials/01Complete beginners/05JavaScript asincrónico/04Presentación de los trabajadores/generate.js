// Escucha los mensajes del hilo principal.
// Si el comando del mensaje es "generar", llama a `generarPrimos()`.

addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generarPrimos(message.data.quota);
  }
});

// Generar primos (muy ineficiente)
function generarPrimos(quota) {
  function esPrimo(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }

    return true;
  }

  const primos = [],
    maximo = 1000000;

  while (primos.length < quota) {
    const candidato = Math.floor(Math.random() * (maximo + 1));

    if (esPrimo(candidato)) {
      primos.push(candidato);
    }
  }

  // Cuando hayamos terminado, envía un mensaje al hilo principal,
  // incluyendo el número de primos que hemos generado.

  postMessage(primos.length);
}

// Recuerda que esto se ejecuta tan pronto como el script principal crea el trabajador.

// Lo primero que hace el trabajador es empezar a escuchar los mensajes del script principal. Lo hace usando addEventListener(), que es una función global en un worker. Dentro del manejador de eventos de mensajes, la propiedad data del evento contiene una copia del argumento pasado desde el script principal. Si el script principal pasó el comando generate, llamamos a generatePrimes(), pasando el valor de la cuota del evento del mensaje.

// La función generatePrimes() es igual que la versión sincrónica, excepto que en lugar de devolver un valor, enviamos un mensaje al script principal cuando hemos terminado. Para ello utilizamos la función postMessage(), que al igual que addEventListener() es una función global en un worker. Como ya vimos, el script principal está a la escucha de este mensaje y actualizará el DOM cuando reciba el mensaje.

// Nota: Para ejecutar este sitio, tendrás que ejecutar un servidor web local, porque las URLs file:// no están permitidas para cargar workers. Consulta nuestra guía para configurar un servidor de pruebas local. Una vez hecho esto, deberías poder hacer clic en "Generar primes" y hacer que tu página principal responda.
