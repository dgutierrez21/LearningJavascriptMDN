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
