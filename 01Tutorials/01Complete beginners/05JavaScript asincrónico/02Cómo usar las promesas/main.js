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
