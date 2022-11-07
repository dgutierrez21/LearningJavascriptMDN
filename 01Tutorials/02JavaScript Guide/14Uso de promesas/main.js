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
