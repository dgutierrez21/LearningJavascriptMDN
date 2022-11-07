// Uso de las promesas #008000

// Una promesa es un objeto que representa la finalización o el fracaso de una operación asíncrona. Como la mayoría de la gente es consumidora de promesas ya creadas, esta guía explicará el consumo de promesas devueltas antes de explicar cómo crearlas.

// Esencialmente, una promesa es un objeto devuelto al que se adjuntan callbacks, en lugar de pasar callbacks a una función.

// Imagina una función, createAudioFileAsync(), que genera asincrónicamente un archivo de sonido dado un registro de configuración y dos funciones de callback, una llamada si el archivo de audio se crea con éxito, y la otra llamada si se produce un error.

// Este es un código que utiliza createAudioFileAsync():

function exitoDeDevolucionDellamada(resultado) {
  console.log(`Archivo de audio listo en la URL: ${resultado}`);
}

function fracasoDeDevolucionDeLlamada(error) {
  console.log(`Error generando archivo de audio: ${error}`);
}

/*

crearArchivoDeAudioAsinc(
  configuracionAudio,
  exitoDeDevolucionDellamada,
  fracasoDeDevolucionDeLlamada
);

*/

// Si createAudioFileAsync() se reescribiera para que devolviera una promesa, en su lugar se adjuntarían las llamadas de retorno:

/**

  crearArchivoDeAudioAsinc(configuracionAudio).then(
  exitoDeDevolucionDellamada,
  fracasoDeDevolucionDeLlamada);

 */

// Esta convención tiene varias ventajas. Vamos a explorar cada una de ellas.

// Garantías #008000
// A diferencia de las antiguas devoluciones de llamada pasadas, una promesa viene con algunas garantías:

// Las devoluciones de llamada añadidas con then() nunca serán invocadas antes de la finalización de la ejecución actual del bucle de eventos de JavaScript.

// Estas devoluciones de llamada serán invocadas incluso si fueron añadidas después del éxito o fracaso de la operación asíncrona que la promesa representa.

// Se pueden añadir múltiples retrollamadas llamando a then() varias veces. Serán invocadas una tras otra, en el orden en que fueron insertadas.

// Una de las cosas buenas de usar promesas es el encadenamiento.

// Encadenamiento #008000
// Una necesidad común es ejecutar dos o más operaciones asíncronas una detrás de otra, donde cada operación subsiguiente comienza cuando la operación anterior tiene éxito, con el resultado del paso anterior. Esto se consigue creando una cadena de promesas.

// Aquí está la magia: la función then() devuelve una nueva promesa, diferente de la original:

/*

const promesa = hacerAlgo();
const promesa2 = promesa.then(exitoDeDevolucionDellamada, fracasoDeDevolucionDeLlamada)

*/

// o

// const promesa2 = hacerAlgo().then(exitoDeDevolucionDellamada, fracasoDeDevolucionDeLlamada)

// Esta segunda promesa (promise2) representa la finalización no sólo de doSomething(), sino también de la successCallback o failureCallback que le pasaste, que pueden ser otras funciones asíncronas que devuelven una promesa. Cuando este es el caso, cualquier llamada de retorno añadida a promise2 se pone en cola detrás de la promesa devuelta por successCallback o failureCallback.

// Básicamente, cada promesa representa la finalización de otro paso asíncrono en la cadena.

// Antiguamente, hacer varias operaciones asíncronas seguidas llevaba a la clásica pirámide de callbacks de la perdición:

// doSomething(function (result) {
//   doSomethingElse(result, function (newResult) {
//     doThirdThing(newResult, function (finalResult) {
//       console.log(`Obtuve el resultado final: ${finalResult}`);
//     }, failureCallback);
//   }, failureCallback);
// }, failureCallback);

// *********************************************+

// Con las funciones modernas, adjuntamos nuestras callbacks a las promesas devueltas, formando una cadena de promesas:

// doSomething()
//   .then(function (resultado) {
//     return doSomethingElse(resultado);
//   })
//   .then(function (nuevoResultado) {
//     return doThirdThing(newResult);
//   })
//   .then(function (resultado final) {
//     console.log(`Obtuvo el resultado final: ${finalResult}`);
//   })
//   .catch(failureCallback);

// Los argumentos de then son opcionales, y catch(failureCallback) es la abreviatura de then(null, failureCallback). Puedes ver esto expresado con funciones de flecha en su lugar:

// doSomething()
//   .then((resultado) => doSomethingElse(resultado))
//   .then((nuevoResultado) => doThirdThing(nuevoResultado))
//   .then((resultado final) => {
//     console.log(`Obtuve el resultado final: ${finalResult}`);
//   })
//   .catch(failureCallback);

// Importante: Devuelve siempre los resultados, de lo contrario las devoluciones de llamada no capturarán el resultado de una promesa anterior (con funciones de flecha, () => x es la abreviatura de () => { return x; }). Si el manejador anterior inició una promesa pero no la devolvió, ya no hay forma de rastrear su liquidación, y se dice que la promesa está "flotando".

// doSomething()
//   .then((url) => {
//     // Me olvidé de devolver esto
//     fetch(url);
//   })
//   .then((resultado) => {
//     // el resultado es indefinido, porque no se devuelve nada del
//     // el manejador anterior.
//     // No hay forma de saber el valor de retorno de la llamada a fetch()
//     // de la llamada a fetch(), o si tuvo éxito.
//   });

// Esto puede ser peor si tiene condiciones de carrera - si la promesa del último manejador no es devuelta, el siguiente manejador será llamado antes de tiempo, y cualquier valor que lea puede estar incompleto.

// const listOfIngredients = [];

// hacerAlgo()
//   .then((url) => {
//     // Me olvidé de devolver esto
//     fetch(url)
//       .then((res) => res.json())
//       .then((datos) => {
//         listOfIngredients.push(data);
//       });
//   })
//   .then(() => {
//     console.log(listOfIngredients);
//     // Siempre [], porque la solicitud de obtención aún no se ha completado.
//   });

// Por lo tanto, como regla general, siempre que su operación encuentre una promesa, devuélvala y difiera su manejo al siguiente manejador then.

// const listOfIngredients = [];

// hacerAlgo()
//   .then((url) =>
//     fetch(url)
//       .then((res) => res.json())
//       .then((datos) => {
//         listOfIngredients.push(data);
//       })
//   )
//   .then(() => {
//     console.log(listOfIngredients);
//   });

// // O

// hacerAlgo()
//   .then((url) => fetch(url))
//   .then((res) => res.json())
//   .then((datos) => {
//     listOfIngredients.push(data);
//   })
//   .then(() => {
//     console.log(listOfIngredients);
//   });

// Encadenamiento después de catch #00aae4
// Es posible encadenar después de un fallo, es decir, un catch, lo que es útil para realizar nuevas acciones incluso después de que una acción haya fallado en la cadena. Lee el siguiente ejemplo:

new Promise((resolver, rechazar) => {
  console.log("Inicial");

  resolver();
})
  .then(() => {
    throw new Error("Algo falló");

    console.log("Hacer esto");
  })
  .catch(() => {
    console.error("Hacer eso");
  })
  .then(() => {
    console.log("Hacer esto, sin importar lo que haya pasado antes");
  });

// Esto producirá el siguiente texto:

// Inicial
// Hacer eso
// Hacer esto, sin importar lo que haya pasado antes

// Nota: El texto "Hacer esto" no se muestra porque el error "Algo falló" provocó un rechazo.

// Propagación de errores #008000
// Puede que recuerdes haber visto antes failureCallback tres veces en la pirámide de la perdición, en comparación con sólo una vez al final de la cadena de promesas:

// doSomething()
//   .then((resultado) => doSomethingElse(resultado))
//   .then((nuevoResultado) => hacerAlgoMás(nuevoResultado))
//   .then((resultadofinal) => console.log(`Obtuvo el resultado final: ${resultadofinal}`)
//   .catch(failureCallback);

// Si hay una excepción, el navegador buscará en la cadena los manejadores .catch() o onRejected. Esto es muy parecido a cómo funciona el código síncrono:

// try {
//   const result = syncDoSomething();
//   const newResult = syncDoSomethingElse(result);
//   const FinalResult = syncDoThirdThing(newResult);
//   console.log(`Obtuve el resultado final: ${finalResult}`);
// } catch (error) {
//   failureCallback(error);
// }

// Esta simetría con el código asíncrono culmina en la sintaxis async/await

// async function foo() {
//   try {
//     const result = await doSomething();
//     const newResult = await doSomethingElse(result);
//     const finalResult = await doThirdThing(newResult);
//     console.log(`Obtuvo el resultado final: ${finalResult}`);
//   } catch (error) {
//     failureCallback(error);
//   }
// }

// Se basa en las promesas, por ejemplo, doSomething() es la misma función que antes. Puedes leer más sobre la sintaxis aquí.

// Las promesas resuelven un defecto fundamental de la pirámide de devoluciones de llamada de la fatalidad, al capturar todos los errores, incluso las excepciones lanzadas y los errores de programación. Esto es esencial para la composición funcional de las operaciones asíncronas.

// Eventos de rechazo de promesas #008000
// Cada vez que se rechaza una promesa, se envía uno de los dos eventos al ámbito global (generalmente, se trata de la ventana o, si se utiliza en un web worker, del Worker o de otra interfaz basada en el worker). Los dos eventos son

// rejectionhandled
// Enviado cuando una promesa es rechazada, después de que ese rechazo haya sido manejado por la función reject del ejecutor.

// unhandledrejection
// Se envía cuando una promesa es rechazada pero no hay ningún controlador de rechazo disponible.

// En ambos casos, el evento (de tipo PromiseRejectionEvent) tiene como miembros una propiedad promise que indica la promesa que ha sido rechazada, y una propiedad reason que proporciona el motivo por el que la promesa ha sido rechazada.

// Esto hace posible ofrecer un manejo de errores para las promesas, así como ayudar a depurar los problemas con su manejo de promesas. Estos manejadores son globales por contexto, por lo que todos los errores irán a los mismos manejadores de eventos, independientemente de la fuente.

// Un caso de especial utilidad: al escribir código para Node.js, es común que los módulos que incluyas en tu proyecto puedan tener promesas rechazadas no manejadas, registradas en la consola por el tiempo de ejecución de Node.js. Puedes capturarlas para analizarlas y manejarlas en tu código -o simplemente para evitar que se desordenen en tu salida- añadiendo un manejador para el evento Node.js unhandledRejection (fíjate en la diferencia de mayúsculas en el nombre), así

// process.on("unhandledRejection", (reason, promise) => {
//   /* Puedes empezar aquí añadiendo código para examinar la
//    * valores "promise" y "reason". */
// });

// En el caso de Node.js, para evitar que el error se registre en la consola (la acción por defecto que se produciría en caso contrario), basta con añadir ese listener process.on(); no es necesario un método equivalente al preventDefault() del navegador.

// Sin embargo, si añades ese listener process.on pero no tienes también código dentro de él para manejar las promesas rechazadas, simplemente se tirarán al suelo y serán ignoradas silenciosamente. Así que lo ideal es añadir código dentro de ese listener para examinar cada promesa rechazada y asegurarse de que no ha sido causada por un error de código real.
