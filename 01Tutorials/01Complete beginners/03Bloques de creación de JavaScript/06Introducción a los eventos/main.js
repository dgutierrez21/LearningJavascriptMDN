// Introducción a los eventos #ff0
// Los eventos son acciones u ocurrencias que ocurren en el sistema que está programando, que el sistema le informa para que su código pueda reaccionar a ellos.

// Por ejemplo, si el usuario hace clic en un botón de una página web, es posible que desee reaccionar a esa acción mostrando un cuadro de información. En este artículo, discutimos algunos conceptos importantes que rodean a los eventos y observamos cómo funcionan en los navegadores. Este no será un estudio exhaustivo; justo lo que necesitas saber en esta etapa.

// Una serie de eventos afortunados #008000
// Como se mencionó anteriormente, los eventos son acciones u ocurrencias que ocurren en el sistema que está programando: el sistema produce (o "dispara") una señal de algún tipo cuando ocurre un evento y proporciona un mecanismo por el cual se puede realizar automáticamente una acción (es decir, algún código en ejecución) cuando ocurre el evento. Por ejemplo, en un aeropuerto, cuando la pista está despejada para el despegue, se comunica una señal al piloto. Como resultado, el avión puede despegar con seguridad.

// En el caso de la Web, los eventos se disparan dentro de la ventana del navegador, y tienden a adjuntarse a un elemento específico que reside en ella. Puede ser un solo elemento, un conjunto de elementos, el documento HTML cargado en la pestaña actual o toda la ventana del navegador. Hay muchos tipos diferentes de eventos que pueden ocurrir.

// Por ejemplo:

// El usuario selecciona, hace clic o coloca el cursor sobre un determinado elemento.

// El usuario elige una tecla en el teclado.

// El usuario cambia el tamaño o cierra la ventana del navegador.

// Una página web termina de cargarse.

// Se envía un formulario.

// Un vídeo se reproduce, se pausa o finaliza.

// Se produce un error.

// Puede deducir de esto (y de echar un vistazo a la referencia del evento MDN) que hay muchos eventos que se pueden disparar. https://developer.mozilla.org/en-US/docs/Web/Events

// Para reaccionar a un evento, se le adjunta un controlador de eventos. Este es un bloque de código (generalmente una función de JavaScript que usted como programador crea) que se ejecuta cuando se activa el evento. Cuando se define un bloque de código de este tipo para que se ejecute en respuesta a un evento, decimos que estamos registrando un controlador de eventos. Nota: Los controladores de eventos a veces se llaman oyentes de eventos: son prácticamente intercambiables para nuestros propósitos, aunque estrictamente hablando, funcionan juntos. El agente de escucha escucha el evento que ocurre y el controlador es el código que se ejecuta en respuesta a que ocurra.

// Nota: Los eventos web no forman parte del lenguaje JavaScript principal: se definen como parte de las API integradas en el navegador.

// Un ejemplo sencillo #00aae4
// Veamos un ejemplo simple de lo que queremos decir aquí. En el siguiente ejemplo, tenemos un solo <button>, que cuando se presiona, hace que el fondo cambie a un color aleatorio:

// ver html...

// el javascript se ve así:

const btnCambiarTema = document.querySelector(".btnCambiarTema");

function ramdom(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

btnCambiarTema.addEventListener("click", () => {
  const color = `rgb(${ramdom(255)}, ${ramdom(255)}, ${ramdom(255)})`;
  document.body.style.backgroundColor = color;
});

// En este código, almacenamos una referencia al elemento <button> dentro de una constante llamada btn, utilizando la función Document.querySelector()).

// También definimos una función que devuelve un número aleatorio.

// La tercera parte del código es donde definimos y registramos el controlador de eventos. El elemento <button> tiene un evento llamado 'click' que se activa cuando el usuario hace clic en el botón. Los objetos que pueden desencadenar eventos tienen un método addEventListener() que toma al menos dos argumentos: el nombre del evento y una función para controlar el evento. Así que llamamos al método addEventListener() del botón, pasando:

// --la cadena 'click', para indicar que queremos escuchar el evento click

// --una función a la que llamar cuando ocurre el evento. En nuestro caso, la función genera un color RGB aleatorio y establece la página <body> background-color igual a ese color.

// No se trata solo de páginas web #00aae4
// Los eventos no son exclusivos de JavaScript: la mayoría de los lenguajes de programación tienen algún tipo de modelo de eventos, y la forma en que funciona el modelo a menudo difiere de la forma en que funciona JavaScript. De hecho, el modelo de eventos en JavaScript para páginas web difiere del modelo de eventos para JavaScript, ya que se utiliza en otros entornos.

// Por ejemplo, Node.js es un tiempo de ejecución de JavaScript muy popular que permite a los desarrolladores usar JavaScript para crear aplicaciones de red y del lado del servidor. El modelo de eventos Node.js se basa en que los oyentes escuchen eventos y los emisores emitan eventos periódicamente: no suena tan diferente, pero el código es bastante diferente, haciendo uso de funciones como on() para registrar un oyente de eventos y once() para registrar un detector de eventos que se da de baja después de que se haya ejecutado una vez. Los documentos del evento HTTP connect proporcionan un buen ejemplo.

// También puede usar JavaScript para crear complementos entre navegadores (mejoras en la funcionalidad del navegador) utilizando una tecnología llamada WebExtensions. El modelo de eventos es similar al modelo de eventos web, pero un poco diferente: las propiedades de los oyentes de eventos están cubiertas por camellos (como onMessage en lugar de onmessage) y deben combinarse con la función addListener. Consulte la página runtime.onMessage para ver un ejemplo.

// No necesita entender nada sobre otros entornos similares en esta etapa de su aprendizaje; solo queríamos dejar claro que los eventos pueden diferir en diferentes entornos de programación.

// Uso de addEventListener() #008000
// El mecanismo recomendado para agregar controladores de eventos en páginas web es el método addEventListener()):

/*

const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

*/

// Dentro de la función addEventListener() especificamos dos parámetros: el nombre del evento para el que queremos registrar este controlador y el código que comprende la función de controlador que queremos ejecutar en respuesta a él.

// Está bien hacer que la función del controlador sea una función con nombre separada, como esta:

const btnCambiarTema2 = document.querySelector(".btnCambiarTema2");

function ramdom2(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

function cambiarFondo() {
  const colorFondo = `rgb(${ramdom2(255)}, ${ramdom2(255)}, ${ramdom2(255)})`;

  document.body.style.backgroundColor = colorFondo;
}

btnCambiarTema2.addEventListener("click", cambiarFondo);

// Escuchar otros eventos #00aae4
// Hay muchos eventos diferentes que pueden ser disparados por un elemento de botón. Experimentemos.

// Primero, haga una copia local de random-color-addeventlistener.html y ábrala en su navegador. Es solo una copia del simple ejemplo de color aleatorio con el que ya hemos jugado. Ahora intente cambiar el click a los siguientes valores diferentes a su vez y observe los resultados en el ejemplo:

// focus y blur: el color cambia cuando el botón está enfocado y desenfocado; intente presionar la pestaña para enfocar el botón y presione la pestaña nuevamente para enfocar lejos del botón. A menudo se utilizan para mostrar información sobre cómo rellenar campos de formulario cuando están enfocados, o para mostrar un mensaje de error si un campo de formulario se rellena con un valor incorrecto.

document
  .querySelector(".btnCambiarTema3")
  .addEventListener("focus", cambiarFondo);

document
  .querySelector(".btnCambiarTema4")
  .addEventListener("blur", cambiarFondo);

// dblclick — El color cambia sólo cuando se hace doble clic en el botón.

document
  .querySelector(".btnCambiarTema5")
  .addEventListener("dblclick", cambiarFondo);

// mouseover y mouseout — El color cambia cuando el puntero del mouse se desplaza sobre el botón, o cuando el puntero se mueve fuera del botón, respectivamente.

document
  .querySelector(".btnCambiarTema6")
  .addEventListener("mouseover", cambiarFondo);

// contextmenu -- se activa cuando el usuario intenta abrir un menú contextual. Este evento normalmente se desencadena haciendo clic en el botón derecho del mouse o presionando la tecla del menú contextual.

document
  .querySelector(".btnCambiarTema7")
  .addEventListener("contextmenu", cambiarFondo);

// Algunos eventos, como click, están disponibles en casi cualquier elemento. Otros son más específicos y solo útiles en ciertas situaciones: por ejemplo, el evento play solo está disponible en algunos elementos, como <video>.

// Eliminación de oyentes #00aae4
// Si ha agregado un controlador de eventos mediante addEventListener(), puede volver a quitarlo mediante el método removeEventListener()). Por ejemplo, esto quitaría el changeBackground()) cuando se haga doble click en el segundo boton:

btnCambiarTema2.addEventListener("dblclick", () => {
  btnCambiarTema2.removeEventListener("click", cambiarFondo);
});

// Los controladores de eventos también se pueden quitar pasando un AbortSignal a addEventListener() y, a continuación, llamando posteriormente a abort() en el controlador propietario de AbortSignal. Por ejemplo, para agregar un controlador de eventos que podemos eliminar con un AbortSignal:

const btnCambiarTema8 = document.querySelector(".btnCambiarTema8");

const controller = new AbortController();

btnCambiarTema8.addEventListener(
  "click",
  () => {
    const rndCol = `rgb(${ramdom2(255)}, ${ramdom2(255)}, ${ramdom2(255)})`;
    document.body.style.backgroundColor = rndCol;
  },
  { signal: controller.signal }
); // pasar una AbortSignal a este manejador

// A continuación, el controlador de eventos creado por el código anterior se puede quitar de la siguiente manera:

btnCambiarTema8.addEventListener("dblclick", () => {
  controller.abort();
}); // elimina cualquier/todos los manejadores de eventos asociados a este controlador

// Para programas simples y pequeños, no es necesario limpiar controladores de eventos antiguos y no utilizados, pero para programas más grandes y complejos, puede mejorar la eficiencia. Además, la capacidad de eliminar controladores de eventos le permite tener el mismo botón realizando diferentes acciones en diferentes circunstancias: todo lo que tiene que hacer es agregar o quitar controladores.

// Agregar varios agentes de escucha para un solo evento #00aae4
// Al realizar más de una llamada a addEventListener(), proporcionando diferentes controladores, puede tener varios controladores para un solo evento:

// myElement.addEventListener('click', functionA);
// myElement.addEventListener('click', functionB);

// Ambas funciones se ejecutarían ahora cuando se haga clic en el elemento.

// Aprende más #00aae4
// Hay otras potentes funciones y opciones disponibles con addEventListener().

// Estos están un poco fuera del alcance de este artículo, pero si desea leerlos, visite las páginas addEventListener() y removeEventListener()).

// Otros mecanismos de escucha de eventos #008000
// Se recomienda utilizar addEventListener() para registrar controladores de eventos. Es el método más poderoso y se escala mejor con programas más complejos. Sin embargo, hay otras dos formas de registrar controladores de eventos que puede ver: propiedades de controlador de eventos y controladores de eventos en línea.

// Propiedades del controlador de eventos #00aae4
// Los objetos (como los botones) que pueden desencadenar eventos también suelen tener propiedades cuyo nombre está on seguido del nombre del evento. Por ejemplo, los elementos tienen una propiedad onclick. Esto se denomina propiedad de controlador de eventos. Para escuchar el evento, puede asignar la función de controlador a la propiedad.

// Por ejemplo, podríamos reescribir el ejemplo de color aleatorio de esta manera:

const btn9 = document.querySelector(".btn9");

function random(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

btn9.onclick = () => {
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = color;
};

// También puede establecer la propiedad handler en una función con nombre:

const btn10 = document.querySelector(".btn10");

function cambiarFondo2() {
  const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = color;
}

btn10.onclick = cambiarFondo2;

// Con las propiedades del controlador de eventos, no puede agregar más de un controlador para un solo evento. Por ejemplo, puede llamar a addEventListener('click', handler) en un elemento varias veces, con diferentes funciones especificadas en el segundo argumento:

// element.addEventListener('click', function1);
// element.addEventListener('click', function2);
// Copiar en el portapapeles

// Esto es imposible con las propiedades del controlador de eventos porque cualquier intento posterior de establecer la propiedad sobrescribirá los anteriores:

// element.onclick = function1;
// element.onclick = function2;

// Controladores de eventos en línea: no los use #00aae4
// También es posible que veas un patrón como este en el código:

// <button onclick="bgChange()">Press me</button>

// function bgChange() {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// }

// El método más antiguo de registro de controladores de eventos que se encuentra en la Web involucraba atributos HTML de controladores de eventos (o controladores de eventos en línea) como el que se muestra arriba: el valor del atributo es literalmente el código JavaScript que desea ejecutar cuando se produce el evento. El ejemplo anterior invoca una función definida dentro de un elemento <script> en la misma página, pero también puede insertar JavaScript directamente dentro del atributo, por ejemplo:

// <button onclick="alert('Hello, this is my old-fashioned event handler!');">
//   Press me
// </button>

// Puede encontrar equivalentes de atributos HTML para muchas de las propiedades del controlador de eventos; sin embargo, no debe usarlos, ya que se consideran una mala práctica. Puede parecer fácil usar un atributo de controlador de eventos si está haciendo algo realmente rápido, pero rápidamente se vuelven inmanejables e ineficientes.

// Para empezar, no es una buena idea mezclar su HTML y su JavaScript, ya que se vuelve difícil de leer. Mantener su JavaScript separado es una buena práctica, y si está en un archivo separado, puede aplicarlo a varios documentos HTML.

// Incluso en un solo archivo, los controladores de eventos en línea no son una buena idea. Un botón está bien, pero ¿qué pasaría si tuvieras 100 botones? Tendría que agregar 100 atributos al archivo; se convertiría rápidamente en una pesadilla de mantenimiento. Con JavaScript, puede agregar fácilmente una función de controlador de eventos a todos los botones de la página sin importar cuántos haya, usando algo como esto:

const botones = document.querySelectorAll(".btnContainer button");

for (const boton of botones) {
  boton.addEventListener("click", cambiarFondo);
}

// Finalmente, muchas configuraciones de servidor comunes no permitirán JavaScript en línea, como medida de seguridad.

// Nunca debe usar los atributos del controlador de eventos HTML: están desactualizados y su uso es una mala práctica. #FF0000

// Objetos de evento #008000
// A veces, dentro de una función de controlador de eventos, verá un parámetro especificado con un nombre como event, evt o e. Esto se denomina objeto de evento y se pasa automáticamente a los controladores de eventos para proporcionar características e información adicionales. Por ejemplo, reescribamos ligeramente nuestro ejemplo de color aleatorio:

const btn23 = document.querySelector(".btn23");

function cambiarFondo3(e) {
  const colorFondo = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  e.target.style.backgroundColor = colorFondo;
  console.log(e);
}

btn23.addEventListener("click", cambiarFondo3);

// Aquí puede ver que estamos incluyendo un objeto de evento, e, en la función, y en la función que establece un estilo de color de fondo en e.target, que es el botón en sí. target target del objeto de evento es siempre una referencia al elemento en el que se produjo el evento. Entonces, en este ejemplo, estamos estableciendo un color de fondo aleatorio en el botón, no en la página.

// Nota: Puede usar cualquier nombre que desee para el objeto de evento; solo necesita elegir un nombre que luego pueda usar para hacer referencia a él dentro de la función de controlador de eventos. e/evt/event es el más utilizado por los desarrolladores porque son cortos y fáciles de recordar. Siempre es bueno ser consistente, contigo mismo y con los demás si es posible.

// Propiedades adicionales de los objetos de evento #00aae4
// La mayoría de los objetos de evento tienen un conjunto estándar de propiedades y métodos disponibles en el objeto de evento; consulte la Event para obtener una lista completa. https://developer.mozilla.org/en-US/docs/Web/API/Event

// Algunos objetos de evento agregan propiedades adicionales que son relevantes para ese tipo particular de evento. Por ejemplo, el evento keydown activa cuando el usuario presiona una tecla. Su objeto de evento es un KeyboardEvent, que es un objeto Event especializado con una propiedad key que le indica qué tecla se presionó:

const input = document.querySelector(".cajaDeTexto");

const output = document.querySelector(".output");

input.addEventListener("keydown", (e) => {
  output.textContent = `Ha presionado la tecla ${e.key}`;
});

// Prevención del comportamiento predeterminado #008000
// A veces, se encontrará con una situación en la que desea evitar que un evento haga lo que hace de forma predeterminada. El ejemplo más común es el de un formulario web, por ejemplo, un formulario de registro personalizado. Cuando completa los detalles y hace clic en el botón Enviar, el comportamiento natural es que los datos se envíen a una página específica en el servidor para su procesamiento, y que el navegador se redirija a una página de "mensaje de éxito" de algún tipo (o la misma página, si no se especifica otra).

// El problema viene cuando el usuario no ha enviado los datos correctamente: como desarrollador, desea evitar el envío al servidor y dar un mensaje de error que diga qué está mal y qué se debe hacer para corregir las cosas. Algunos navegadores admiten funciones de validación automática de datos de formularios, pero como muchos no lo hacen, se recomienda no confiar en ellas e implementar sus propias comprobaciones de validación. Veamos un ejemplo simple.

// Primero, un formulario HTML simple que requiere que ingrese su nombre y apellido:

// ver html...

// Ahora algo de JavaScript: aquí implementamos una comprobación muy simple dentro de un controlador para el evento submit (el evento submit se activa en un formulario cuando se envía) que prueba si los campos de texto están vacíos. Si lo son, llamamos a la función preventDefault() en el objeto de evento, que detiene el envío del formulario, y luego mostramos un mensaje de error en el párrafo debajo de nuestro formulario para decirle al usuario lo que está mal:

const form = document.querySelector(".formularioContacto"),
  nombre = document.querySelector("#nombre"),
  apellido = document.querySelector("#apellido"),
  parrafo = document.querySelector(".pMsjForm");

form.addEventListener("submit", (e) => {
  if (nombre.value === "" || apellido.value === "") {
    e.preventDefault(); //  cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.

    // Por ejemplo, esto puede ser útil cuando:

    // Al hacer clic en el botón "Enviar", evite que envíe un formulario
    // Al hacer clic en un enlace, evite que el enlace siga la URL

    parrafo.textContent = "Tienes que rellenar los dos nombres.";
  }
});

// Obviamente, esta es una validación de formulario bastante débil, no impediría que el usuario valide el formulario con espacios o números ingresados en los campos, por ejemplo, pero está bien para fines de ejemplo.

// Burbujeo y captura de eventos #008000
// El burbujeo y la captura de eventos son términos que describen fases en la forma en que el explorador maneja los eventos dirigidos a elementos anidados.

// Establecer un agente de escucha en un elemento primario #00aae4
// Considere una página web como esta:

// Aquí el botón está dentro de otro elemento, un elemento <div>. Decimos que el elemento <div> aquí es el padre del elemento que contiene. ¿Qué sucede si agregamos un controlador de eventos click al padre y luego hacemos clic en el botón?

const contPagSalida = document.querySelector(".contPag pre");

function manejarClick(e) {
  contPagSalida.textContent += `Has hecho click en un elemento ${e.currentTarget.tagName}\n`;
  console.log(e);
  console.log(e.currentTarget);
  console.log(e.currentTarget.tagName);
}

const contPag = document.querySelector(".contPag");

contPag.addEventListener("click", manejarClick);

// Verás que el padre activa un evento de clic cuando el usuario hace clic en el botón:

// You clicked on a DIV element
// Esto tiene sentido: el botón está dentro de la <div>, por lo que cuando haces clic en el botón también estás haciendo clic implícitamente en el elemento que está dentro.

// ---La propiedad de solo lectura currentTarget de la interfaz Event identifica el destino actual del evento, a medida que el evento atraviesa el DOM. Siempre se refiere al elemento al que se ha unido el controlador de eventos, a diferencia Event.target, que identifica el elemento en el que se produjo el evento y que puede ser su descendiente.

// ---La propiedad de solo lectura tagName de la interfaz Element devuelve el nombre de etiqueta del elemento al que se llama.

// Ejemplo burbujeante #00aae4
// ¿Qué sucede si agregamos detectores de eventos al botón y al padre?

// ver html...

// Intentemos agregar controladores de eventos click al botón, su elemento primario (el <div>

const contPag2 = document.querySelector(".contPag2"),
  btnPag2 = document.querySelector(".contPag2 button"),
  contPagSalida2 = document.querySelector(".contPag2 pre");

function mostrarMensaje(e) {
  contPagSalida2.textContent += `Ha hecho click en un elemento ${e.currentTarget.tagName}\n`;
}

contPag2.addEventListener("click", mostrarMensaje);
btnPag2.addEventListener("click", mostrarMensaje);

// Verás que los dos elementos activan un evento de clic cuando el usuario hace clic en el botón:

// En este caso:

// el clic en el botón se activa primero
// seguido del clic en su padre (el elemento <div>)

// Describimos esto diciendo que el evento burbujea desde el elemento más interno en el que se hizo clic.

// Este comportamiento puede ser útil y también puede causar problemas inesperados. En la siguiente sección, veremos un problema que causa y encontraremos la solución.

// Ejemplo de reproductor de vídeo #00aae4

// En este ejemplo se muestra y oculta un <div> con un elemento <video> en su interior:

// ver html...

// Cuando se hace clic en el <button>, se muestra el video, cambiando el atributo de clase en el <div> de hidden a showing (el CSS del ejemplo contiene estas dos clases, que colocan el cuadro fuera de la pantalla y en la pantalla, respectivamente):

const bntRv = document.querySelector(".btnRv"),
  contenedorVideo = document.querySelector(".contenedorRV div");

function mostrarVideo() {
  if (contenedorVideo.getAttribute("class", "oculto")) {
    contenedorVideo.setAttribute("class", "mostrando");
  }
}

bntRv.addEventListener("click", mostrarVideo);

contenedorVideo.addEventListener("click", () =>
  contenedorVideo.setAttribute("class", "oculto")
);

const video = document.querySelector(".contenedorVideo video");

video.addEventListener("click", () => video.play());
