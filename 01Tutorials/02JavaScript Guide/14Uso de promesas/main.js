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
