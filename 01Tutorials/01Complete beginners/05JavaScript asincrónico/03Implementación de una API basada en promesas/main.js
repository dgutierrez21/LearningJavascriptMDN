// Cómo implementar una API basada en promesas #008000

// En el último artículo discutimos cómo usar API que devuelven promesas. En este artículo veremos el otro lado: cómo implementar API que devuelvan promesas. Esta es una tarea mucho menos común que usar API basadas en promesas, pero aún así vale la pena conocerla.

// Generalmente, cuando implementas una API basada en promesas, estarás envolviendo una operación asíncrona, que puede usar eventos, o callbacks simples, o un modelo de paso de mensajes. Tendrás que organizar un objeto Promise para manejar el éxito o el fracaso de esa operación de forma adecuada.

// Implementación de una API de alarma() #008000
// En este ejemplo implementaremos una API de alarma basada en promesas, llamada alarm(). Tomará como argumentos el nombre de la persona a despertar y un retraso en milisegundos a esperar antes de despertar a la persona. Después del retardo, la función enviará un mensaje "¡Despierta!", incluyendo el nombre de la persona que necesitamos despertar.

// Envolviendo setTimeout() #00aae4
// Utilizaremos la API setTimeout() para implementar nuestra función alarm(). La API setTimeout() toma como argumentos una función de devolución de llamada y un retraso, dado en milisegundos. Cuando se llama a setTimeout(), se inicia un temporizador ajustado al retardo dado, y cuando el tiempo expira, llama a la función dada.

// En el ejemplo siguiente, llamamos a setTimeout() con una función de devolución de llamada y un retardo de 1000 milisegundos:

const btnAlarma = document.querySelector(".contenedorAlarma .btn"),
  outputAlarma = document.querySelector(".contenedorAlarma .output");

function ponerAlarma() {
  setTimeout(() => {
    outputAlarma.textContent = "¡Despierta!";
  }, 1000);
}

btnAlarma.addEventListener("click", ponerAlarma);

// El constructor Promise() #00aae4
// Nuestra función alarm() devolverá una promesa que se cumplirá cuando el temporizador expire. Pasará un mensaje "¡Despierta!" al manejador then(), y rechazará la promesa si el llamador proporciona un valor de retraso negativo.

// El componente clave aquí es el constructor Promise(). El constructor Promise() toma una única función como argumento. Llamaremos a esta función el ejecutor. Cuando se crea una nueva promesa se suministra la implementación del ejecutor.

// Esta función ejecutora toma dos argumentos, que también son funciones, y que se llaman convencionalmente resolver y rechazar. En la implementación del ejecutor, se llama a la función asíncrona subyacente. Si la función asíncrona tiene éxito, se llama a resolver, y si falla, se llama a rechazar. Si la función ejecutora arroja un error, se llama automáticamente a reject. Puedes pasar un único parámetro de cualquier tipo a resolve y reject.

// Así que podemos implementar alarm() así:

function alarma(persona, retraso) {
  return new Promise((resolver, rechazar) => {
    if (retraso < 0) {
      throw new Error("El retardo de la alarma no debe ser negativo");
    }

    setTimeout(() => {
      resolver(`Despierta, ${persona}`);
    }, retraso);
  });
}

// Esta función crea y devuelve una nueva promesa. Dentro del ejecutor de la promesa, nosotros

// ---comprobamos que el retraso no es negativo, y lanzamos un error si lo es.

// ---llamamos a setTimeout(), pasando un callback y un delay. El callback será llamado cuando el temporizador expire, y en el callback llamamos a resolve, pasando nuestro mensaje "Wake up!".
