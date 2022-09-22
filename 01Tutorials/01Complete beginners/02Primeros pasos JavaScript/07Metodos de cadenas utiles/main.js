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

