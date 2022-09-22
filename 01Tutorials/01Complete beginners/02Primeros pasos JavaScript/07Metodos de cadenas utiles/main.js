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

// Búsqueda de la posición de una subcadena en una cadena #008000
// Puede encontrar la posición de una subcadena dentro de una cadena más grande mediante el método indexOf()). Este método toma dos parámetros: la subcadena que desea buscar y un parámetro opcional que especifica el punto de partida de la búsqueda.

// Si la cadena contiene la subcadena, indexOf() devuelve el índice de la primera aparición de la subcadena. Si la cadena no contiene la subcadena, indexOf() devuelve -1.

const tagLine = "MDN - Resources for developers, by developers";

console.log(tagLine.indexOf("developers")); // 20

// A partir de 0, si cuenta el número de caracteres (incluido el espacio en blanco) desde el principio de la cadena, la primera aparición de la subcadena "developers" está en el índice 20.

console.log(tagLine.indexOf("x")); // -1

// Esto, por otro lado, devuelve -1 porque el carácter x no está presente en la cadena.

// Entonces, ahora que sabes cómo encontrar la primera ocurrencia de una subcadena, ¿cómo haces para encontrar ocurrencias posteriores? Puede hacerlo pasando un valor que sea mayor que el índice de la aparición anterior como segundo parámetro del método.

const tagLine2 = "MDN - Resources for developers, by developers";

const primeraAparicion = tagLine2.indexOf("developers"),
  segundaAparicion = tagLine2.indexOf("developers", primeraAparicion + 1);

console.log(primeraAparicion);
console.log(segundaAparicion);

// Aquí estamos diciendo el método para buscar la subcadena "developers" a partir del índice 21 (firstOccurrence + 1), y devuelve el índice 35.

// Extracción de una subcadena de una cadena #008000
// Puede extraer una subcadena de una cadena mediante el método slice()). Lo pasas:

// el índice en el que se va a empezar a extraer
// el índice en el que se va a dejar de extraer. Esto es exclusivo, lo que significa que el carácter de este índice no se incluye en la subcadena extraída.
// Por ejemplo:

const navegador5 = "mozilla";

console.log(navegador5.slice(1, 4));

// El carácter en el índice 1 es "o" y el carácter en el índice 4 es "l" Así que extraemos todos los caracteres comenzando en "o" y terminando justo antes "l" dándonos "ozi".

// Si sabe que desea extraer todos los caracteres restantes de una cadena después de un determinado carácter, no tiene que incluir el segundo parámetro. En su lugar, solo necesita incluir la posición del carácter desde donde desea extraer los caracteres restantes en una cadena. Pruebe lo siguiente:

console.log(navegador5.slice(4));

// Esto devuelve "lla": esto se debe a que la posición del carácter de 4 es la letra "l" y debido a que no incluyó un segundo parámetro, la subcadena que se devolvió fue todos los caracteres restantes de la cadena.

// Nota: slice() también tiene otras opciones; estudie la página slice() para ver qué más puede averiguar. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice

// Cambio de caso #008000
// Los métodos de cadena toLowerCase() y toUpperCase() toman una cadena y convierten todos los caracteres en minúsculas o mayúsculas, respectivamente. Esto puede ser útil, por ejemplo, si desea normalizar todos los datos introducidos por el usuario antes de almacenarlos en una base de datos.

// Intentemos ingresar las siguientes líneas para ver qué sucede:

const radData = "Mi NoMbRe Es MuD";

console.log(radData.toLocaleLowerCase());
console.log(radData.toUpperCase());

// Actualización de partes de una cadena #008000
// Puede reemplazar una subcadena dentro de una cadena por otra subcadena mediante el método replace()).

// En este ejemplo, proporcionamos dos parámetros: la cadena que queremos reemplazar y la cadena con la que queremos reemplazarla:

const appGoogle = "Google Calendar";

const updated = appGoogle.replace("Calendar", "Chrome");

console.log(updated);
console.log(appGoogle);

// Tenga en cuenta que replace(), al igual que muchos métodos de cadena, no cambia la cadena a la que se llamó, sino que devuelve una nueva cadena. Si desea actualizar la variable browserType original, tendría que hacer algo como esto:

let navegador6 = "mozilla";

navegador6 = navegador6.replace("moz", "van");

console.log(navegador6);

// También tenga en cuenta que ahora tenemos que declarar navegador6 usando let, no const, porque lo estamos reasignando.

// Tenga en cuenta que replace() en este formulario solo cambia la primera aparición de la subcadena. Si desea cambiar todas las apariciones, puede utilizar replaceAll():

let quote = "ser o no ser";

quote = quote.replaceAll("ser", "código");

console.log(quote);

// Ejemplos de aprendizaje activo #008000
// En esta sección, le pediremos que pruebe a escribir código de manipulación de cadenas. En cada ejercicio a continuación, tenemos una matriz de cadenas y un bucle que procesa cada valor de la matriz y lo muestra en una lista con viñetas. No necesita comprender las matrices o bucles en este momento, estos se explicarán en artículos futuros. Todo lo que necesita hacer en cada caso es escribir el código que generará las cadenas en el formato en el que las queremos.

// Cada ejemplo viene con un botón "Restablecer", que puede usar para restablecer el código si comete un error y no puede volver a funcionar, y un botón "Mostrar solución" que puede presionar para ver una posible respuesta si realmente se atasca.
