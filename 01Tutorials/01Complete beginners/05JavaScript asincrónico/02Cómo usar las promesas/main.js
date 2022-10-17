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
