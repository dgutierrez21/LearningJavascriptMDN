// Métodos de cadena útiles #ff0
// Ahora que hemos analizado los conceptos básicos de las cadenas, subamos una marcha y comencemos a pensar en qué operaciones útiles podemos hacer en las cadenas con métodos incorporados, como encontrar la longitud de una cadena de texto, unir y dividir cadenas, sustituir un carácter en una cadena por otro y más.

// Cadenas como objetos #008000
// La mayoría de las cosas son objetos en JavaScript. Al crear una cadena, por ejemplo, mediante el uso de

const string = "Esta es mi cadena";

// la variable se convierte en una instancia de objeto de cadena y, como resultado, tiene un gran número de propiedades y métodos disponibles. ¡Puede ver esto si va a la página del objeto String y mira hacia abajo en la lista en el costado de la página!

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Ahora, antes de que tu cerebro comience a derretirse, ¡no te preocupes! Realmente no necesita saber sobre la mayoría de estos al principio de su viaje de aprendizaje. Pero hay algunos que potencialmente usará con bastante frecuencia que veremos aquí.

// Búsqueda de la longitud de una cadena #008000
// Esto es fácil: se utiliza la propiedad length. Intente introducir las siguientes líneas:

const navegador = "mozilla";

console.log(navegador.length);

// Esto debería devolver el número 7, porque "mozilla" tiene 7 caracteres. Esto es útil por muchas razones; por ejemplo, es posible que desee buscar las longitudes de una serie de nombres para que pueda mostrarlos en orden de longitud, o informar a un usuario de que un nombre de usuario que ha introducido en un campo de formulario es demasiado largo si tiene más de una longitud determinada.

// Recuperación de un carácter de cadena específico #008000
// En una nota relacionada, puede devolver cualquier carácter dentro de una cadena utilizando la notación entre corchetes, lo que significa que incluye corchetes ([]) al final del nombre de la variable. Dentro de los corchetes, incluye el número del carácter que desea devolver, por lo que, por ejemplo, para recuperar la primera letra, haría lo siguiente:

// browserType[0];

// Recuerde: ¡las computadoras cuentan desde 0, no desde 1!

// Para recuperar el último carácter de cualquier cadena, podríamos usar la siguiente línea, combinando esta técnica con la propiedad length que vimos anteriormente:

console.log(navegador[navegador.length - 1]);

// La longitud de la cadena "mozilla" es 7, pero debido a que el recuento comienza en 0, la posición del último carácter es 6; usando length-1 nos da el último carácter.

// Probar si una cadena contiene una subcadena #008000
// A veces querrás averiguar si una cadena más pequeña está presente dentro de una más grande (generalmente decimos si una subcadena está presente dentro de una cadena). Esto se puede hacer utilizando el método includes() que toma un solo parámetro: la subcadena que desea buscar.

// Devuelve true si la cadena contiene la subcadena false en caso contrario.

const navegador2 = "Google Chrome";

if (navegador2.includes("Google")) {
  console.log("Google Chrome es el navegador predeterminado.");
} else {
  console.log("Google Chrome NO es el navegador predeterminado.");
}

// A menudo querrá saber si una cadena comienza o termina con una subcadena en particular. Esta es una necesidad lo suficientemente común como para que haya dos métodos especiales para esto: startsWith() y endsWith():

const navegador3 = "Firefox developer edition";

if (navegador3.endsWith("edition")) {
  console.log("Estas usando el navegador para desarrolladores de mozilla");
} else {
  console.log("NO estas usando un navegador para desarrollador");
}

const navegador4 = "Safari";

if (navegador4.startsWith("Saf")) {
  console.log("Estas usando un navegador desarrollado por Apple.");
} else {
  console.log("NO estas usando un navegador desarrollado por Apple.");
}
