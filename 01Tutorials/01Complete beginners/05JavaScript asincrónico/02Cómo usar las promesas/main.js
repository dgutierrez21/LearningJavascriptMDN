// Cómo usar las promesas #ff0

// Las promesas son la base de la programación asíncrona en JavaScript moderno. Una promesa es un objeto devuelto por una función asincrónica, que representa el estado actual de la operación. En el momento en que se devuelve la promesa al autor de la llamada, la operación a menudo no ha finalizado, pero el objeto de promesa proporciona métodos para controlar el éxito o el error final de la operación.

// En el último artículo, hablamos sobre el uso de devoluciones de llamada para implementar funciones asíncronas. Con ese diseño, se llama a la función asíncrona, pasando la función de devolución de llamada. La función vuelve inmediatamente y llama a la devolución de llamada cuando finaliza la operación.

// Con una API basada en promesas, la función asincrónica inicia la operación y devuelve un objeto Promise. A continuación, puede adjuntar controladores a este objeto de promesa y estos controladores se ejecutarán cuando la operación se haya realizado correctamente o haya fallado.

// Uso de la API fetch()#008000

// En este ejemplo, descargaremos el archivo JSON de https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json y registraremos cierta información al respecto.

// Para ello, haremos una petición HTTP al servidor. En una solicitud HTTP, enviamos un mensaje de solicitud a un servidor remoto y nos devuelve una respuesta. En este caso, enviaremos una solicitud para obtener un archivo JSON del servidor. ¿Recuerdas en el último artículo, donde hicimos solicitudes HTTP usando la API XMLHttpRequest? Bueno, en este artículo, usaremos la API fetch() que es el reemplazo moderno basado en promesas para XMLHttpRequest.

// Copie esto en la consola JavaScript de su navegador:

const fetchPromesa = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromesa);

fetchPromesa.then((respuesta) => {
  console.log(`Respuesta recibida: ${respuesta.status}`);
  console.log(fetchPromesa);
});

console.log("Respuesta Iniciada.");

// Aquí estamos:

// 1. llamar a la API fetchfetch() y asignar el valor devuelto a la variable fetchPromise

// 2. inmediatamente después, registrando la variable fetchPromise. Esto debería generar algo como: Promise Promise { <state>: "pending" }, diciéndonos que tenemos un objeto Promise y que tiene un state cuyo valor es "pending" El estado ""pending" significa que la operación de recuperación aún está en curso.

// 3. pasando una función handler al método then() de Promise. Cuando (y si) la operación fetch se realiza correctamente, la promesa llamará a nuestro controlador, pasando un objeto Response, que contiene la respuesta del servidor.

// 4. Registrar un mensaje que indica que hemos iniciado la solicitud.

// Tenga en cuenta que la Started request… se registra antes de recibir la respuesta. A diferencia de una función sincrónica, fetch() devuelve mientras la solicitud aún está en curso, lo que permite que nuestro programa siga respondiendo. La respuesta muestra el código de estado 200 (OK), lo que significa que nuestra solicitud se realizó correctamente.

// Esto probablemente se parece mucho al ejemplo del último artículo, donde agregamos controladores de eventos al objeto XMLHttpRequest. En lugar de eso, estamos pasando un controlador al método then() de la promesa devuelta.

// Encadenamiento de promesas #008000
// Con la API fetch() una vez que obtiene un objeto Response, debe llamar a otra función para obtener los datos de respuesta. En este caso, queremos obtener los datos de respuesta como JSON, por lo que llamaríamos al método json() del objeto Response. Resulta que json() también es asíncrono. Así que este es un caso en el que tenemos que llamar a dos funciones asíncronas sucesivas.

// Prueba esto:

const fetchPromesa2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromesa2.then((respuesta) => {
  const jsonPromesa = respuesta.json();

  jsonPromesa.then((datos) => {
    console.log(datos[0].name);
  });
});

// En este ejemplo, como antes, agregamos un controlador then()() a la promesa devuelta por fetch(). Pero esta vez, nuestro controlador llama a response.json(), y luego pasa un nuevo controlador then()() a la promesa devuelta por response.json() response.json().

// Esto debería registrar "frijoles horneados" (el nombre del primer producto listado en "products.json").

// ¡Pero espera! ¿Recuerdas el último artículo, donde dijimos que al llamar a una devolución de llamada dentro de otra devolución de llamada, obtuvimos sucesivamente más niveles de código anidados? ¿Y dijimos que este "infierno de devolución de llamada" hizo que nuestro código fuera difícil de entender? ¿No es esto lo mismo, solo que con then()

// Lo es, por supuesto. Pero la característica elegante de las promesas es que then() devuelve una promesa, que se completará con el resultado de la función que se le ha pasado. Esto significa que podemos (y ciertamente debemos) reescribir el código anterior de esta manera:

const fetchPromesa3 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromesa3
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos[1].name);
  });

// En lugar de llamar al segundo then() dentro del controlador para el primer then(), podemos devolver la promesa devuelta por json()(), y llamar al segundo then() then() en ese valor devuelto.then() Esto se llama encadenamiento de promesas y significa que podemos evitar niveles cada vez mayores de sangría cuando necesitamos realizar llamadas de función asíncronas consecutivas.

// Antes de pasar al siguiente paso, hay una pieza más para agregar. Necesitamos verificar que el servidor aceptó y pudo manejar la solicitud, antes de intentar leerla. Haremos esto verificando el código de estado en la respuesta y arrojando un error si no estaba "OK":

const fetchPromesa4 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromesa4
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    return respuesta.json();
  })
  .then((datos) => {
    console.log(datos[3].name);
  });

//   Detección de errores #008000
// Esto nos lleva a la última pieza: ¿cómo manejamos los errores? La API fetch() puede lanzar un error por muchas razones (por ejemplo, porque no había conectividad de red o la URL estaba malformada de alguna manera) y nosotros mismos lanzamos un error si el servidor devuelve un error.

// En el último artículo, vimos que el manejo de errores puede volverse muy difícil con las devoluciones de llamada anidadas, haciéndonos manejar errores en cada nivel de anidación.

// Para soportar el manejo de errores, los objetos Promise proporcionan un método catch(). Es muy parecido a then(): lo llamas y le pasas una función manejadora. Sin embargo, mientras que el manejador pasado a then() es llamado cuando la operación asíncrona tiene éxito, el manejador pasado a catch() es llamado cuando la operación asíncrona falla.

// Si añades catch() al final de una cadena de promesas, entonces se llamará cuando cualquiera de las llamadas a la función asíncrona falle. Así que puedes implementar una operación como varias llamadas a funciones asíncronas consecutivas, y tener un único lugar para manejar todos los errores.

// Prueba esta versión de nuestro código fetch(). Hemos añadido un manejador de errores usando catch(), y también hemos modificado la URL para que la petición falle.

const fetchPromesa5 = fetch(
  "mala-suerte://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

fetchPromesa5
  .then((respuesta) => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    return respuesta.json();
  })
  .then((datos) => {
    console.log(datos[0].name);
  })
  .catch((error) => {
    console.error(`No se pudieron conseguir los productos: ${error}`); // Output: Fetch API cannot load bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json. URL scheme "bad-scheme" is not supported.
  });

// Intente ejecutar esta versión: debería ver el error registrado por nuestro controlador catch()

// Terminología de las promesas #008000
// Las promesas tienen una terminología bastante específica que conviene aclarar.

// En primer lugar, una promesa puede estar en uno de estos tres estados

// pending: la promesa ha sido creada, y la función asíncrona a la que está asociada aún no ha tenido éxito ni ha fallado. Este es el estado en el que se encuentra tu promesa cuando es devuelta por una llamada a fetch(), y la petición aún se está realizando.
// fulfilled: la función asíncrona ha tenido éxito. Cuando una promesa se cumple, se llama a su manejador then().
// rejected: la función asíncrona ha fallado. Cuando una promesa es rechazada, se llama a su manejador catch().
// Tenga en cuenta que lo que significa "se ha cumplido" o "ha fallado" aquí depende de la API en cuestión: por ejemplo, fetch() considera que una petición se ha cumplido si el servidor ha devuelto un error como 404 Not Found, pero no si un error de red ha impedido el envío de la petición.

// A veces, usamos el término resuelto para cubrir tanto lo cumplido como lo rechazado.

// Una promesa se resuelve si está resuelta, o si ha sido "bloqueada" para seguir el estado de otra promesa.

// El artículo "Hablemos de cómo hablar de las promesas" ofrece una gran explicación de los detalles de esta terminología.

// Combinar varias promesas #008000
// La cadena de promesas es lo que necesitas cuando tu operación consiste en varias funciones asíncronas, y necesitas que cada una se complete antes de iniciar la siguiente. Pero hay otras formas en las que puedes necesitar combinar llamadas a funciones asíncronas, y la API Promise proporciona algunos ayudantes para ellas.

// A veces, necesitas que todas las promesas se cumplan, pero no dependen unas de otras. En un caso así, es mucho más eficiente iniciarlas todas juntas, y luego ser notificado cuando se hayan cumplido todas. El método Promise.all() es lo que necesitas aquí. Toma un array de promesas y devuelve una única promesa.

// La promesa devuelta por Promise.all() se:

// ---se cumple cuando y si todas las promesas del array se cumplen. En este caso, el manejador then() es llamado con un array de todas las respuestas, en el mismo orden en que las promesas fueron pasadas a all().

// ---rechazado cuando y si alguna de las promesas del array es rechazada. En este caso, el manejador catch() es llamado con el error lanzado por la promesa que fue rechazada.

// Por ejemplo:

const fetchPromesa6 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

const fetchPromesa7 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);

const fetchPromesa8 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromesa6, fetchPromesa7, fetchPromesa8])
  .then((respuestas) => {
    for (const respuesta of respuestas) {
      console.log(`${respuesta.url}: ${respuesta.status}`);
    }
  })
  .catch((error) => {
    console.log(`Fallo en la búsqueda: ${error}`);
  });

// Aquí, estamos haciendo tres peticiones fetch() a tres URLs diferentes. Si todas tienen éxito, registraremos el estado de la respuesta de cada una. Si alguna de ellas falla, entonces registraremos el fallo.

// Con las URLs que hemos proporcionado, todas las peticiones deberían cumplirse, aunque para la segunda, el servidor devolverá 404 (Not Found) en lugar de 200 (OK) porque el archivo solicitado no existe. Así que la salida debería ser:

// Si probamos el mismo código con una URL mal formada, así:

const fetchPromesa9 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

const fetchPromesa10 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);

const fetchPromesa11 = fetch(
  "mala-suerte://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.all([fetchPromesa9, fetchPromesa10, fetchPromesa11])
  .then((respuestas) => {
    for (const respuesta of respuestas) {
      console.log(`${respuesta.url}: ${respuesta.status}`);
    }
  })
  .catch((error) => {
    console.log(`Fallo en la búsqueda: ${error}`);
  });

//   Entonces podemos esperar que el controlador catch() se ejecute, y deberíamos ver algo como:

// Failed to fetch: TypeError: Failed to fetch

// A veces, es posible que necesites que se cumpla cualquiera de un conjunto de promesas, y no te importa cuál. En ese caso, se necesita Promise.any(). Es como Promise.all(), salvo que se cumple en cuanto se cumple cualquiera del conjunto de promesas, o se rechaza si se rechazan todas:

const fetchPromesa12 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

const fetchPromesa13 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);

const fetchPromesa14 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"
);

Promise.any([fetchPromesa12, fetchPromesa13, fetchPromesa14])
  .then((respuesta) => {
    console.log(`${respuesta.url}: ${respuesta.status}`);
  })
  .catch((error) => {
    console.log(`Fallo en la búsqueda: ${error}`);
  });

// Ten en cuenta que en este caso no podemos predecir qué petición de obtención se completará primero.

// Estas son sólo dos de las funciones adicionales de Promise para combinar múltiples promesas. Para conocer el resto, consulta la documentación de referencia de Promise.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// async y await #008000
// La palabra clave async ofrece una forma más sencilla de trabajar con código asíncrono basado en promesas. Añadir async al principio de una función la convierte en una función asíncrona:

async function miFuncion() {
  // Está es una función asíncronica
}

// Dentro de una función asíncrona, puedes utilizar la palabra clave await antes de una llamada a una función que devuelva una promesa. Esto hace que el código espere en ese punto hasta que la promesa se resuelva, momento en el que el valor cumplido de la promesa se trata como un valor de retorno, o se lanza el valor rechazado.

// Esto permite escribir código que utiliza funciones asíncronas pero que parece código síncrono. Por ejemplo, podríamos utilizarlo para reescribir nuestro ejemplo de fetch:

async function fetchProductos() {
  try {
    // después de esta línea, nuestra función esperará a que se resuelva la llamada `fetch()`.
    // la llamada `fetch()` devolverá una respuesta o lanzará un error

    const respuesta = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    // después de esta línea, nuestra función esperará a que se resuelva la llamada `response.json()`.
    // la llamada `response.json()` devolverá el objeto JSON analizado o lanzará un error

    const datos = await respuesta.json();
    console.log(datos[0].name);
  } catch (error) {
    console.error(`No se pudieron conseguir los productos: ${error}`);
  }
}

fetchProductos();

// Aquí, estamos llamando a await fetch(), y en lugar de obtener una Promise, nuestro llamador obtiene un objeto Response completamente completo, ¡tal como si fetch() fuera una función sincrónica!

// Incluso podemos usar un bloque try...catch para manejar los errores, exactamente como lo haríamos si el código fuera sincrónico.

// Tenga en cuenta que las funciones asíncronas siempre devuelven una promesa, por lo que no puede hacer algo como

async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
// console.log(promise[0].name); // "promise" es un objeto Promise, por lo que no funcionará

// En su lugar, tendrías que hacer algo como:

async function fetchProductos2() {
  try {
    const respuesta = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    return datos;
  } catch (error) {
    console.error(`No se ha podido conseguir los productos: ${error}`);
  }
}

const promesa = fetchProductos2();

promesa.then((datos) => console.log(datos[4].name));

// Además, ten en cuenta que sólo puedes usar await dentro de una función asíncrona, a menos que tu código esté en un módulo JavaScript. Eso significa que no puedes hacer esto en un script normal:

try {
  // el uso de await fuera de una función async sólo está permitido en un módulo

  // Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (at main.js:329:20)

  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
}

// Probablemente usarás mucho las funciones asíncronas donde de otra manera podrías usar cadenas de promesas, y hacen que trabajar con promesas sea mucho más intuitivo.

// Ten en cuenta que, al igual que una cadena de promesas, await obliga a que las operaciones asíncronas se completen en serie. Esto es necesario si el resultado de la siguiente operación depende del resultado de la última, pero si ese no es el caso entonces algo como Promise.all() será más performante.
