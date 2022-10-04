// Crea tu propia función #ff0

// Con la mayor parte de la teoría esencial tratada en el artículo anterior, este artículo proporciona experiencia práctica. Aquí obtendrá algo de práctica para construir su propia función personalizada. En el camino, también explicaremos algunos detalles útiles para tratar con las funciones.

// Aprendizaje activo: construyamos una función #008000
// La función personalizada que vamos a construir se llamará displayMessage(). Mostrará un cuadro de mensaje personalizado en una página web y actuará como un reemplazo personalizado para la función alert() incorporada de un navegador. Hemos visto esto antes, pero vamos a refrescar nuestros recuerdos. Escriba lo siguiente en la consola JavaScript de su navegador, en cualquier página que desee:

// alert("Este es un mensaje");

// La función de alert toma un solo argumento: la cadena que se muestra en el cuadro de alerta. Intente variar la cadena para cambiar el mensaje.

// La función alert es limitada: puede alterar el mensaje, pero no puede variar fácilmente nada más, como el color, el icono o cualquier otra cosa. Construiremos uno que resultará ser más divertido.

// Nota: Este ejemplo debería funcionar bien en todos los navegadores modernos, pero el estilo puede parecer un poco divertido en navegadores un poco más antiguos. Te recomendamos que hagas este ejercicio en un navegador moderno como Firefox, Opera o Chrome.

// La función básica #008000
// Para empezar, vamos a armar una función básica.

// Nota: Para las convenciones de nomenclatura de funciones, debe seguir las mismas reglas que las convenciones de nomenclatura de variables. Esto está bien, ya que puede distinguirlos: los nombres de las funciones aparecen con paréntesis después de ellos y las variables no.

// 1. Comience accediendo al archivo function-start.html y haciendo una copia local. Verás que el HTML es simple: el cuerpo contiene un solo botón. También hemos proporcionado algunos CSS básicos para aplicar estilo al cuadro de mensaje personalizado y un elemento <script> vacío para colocar nuestro JavaScript.

// 2. A continuación, agregue lo siguiente dentro del <script>:

// 2.
function mostrarMensaje(msgText, msgType) {
  // 3.
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));

  if (msgType === "advertencia") {
    msg.style.backgroundImage = "url(./img/warning.png)";
    panel.style.backgroundColor = "red";
    msg.style.color = "white";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(./img/chat.png)";
    panel.style.backgroundColor = "aqua";
  } else {
    msg.style.paddingLeft = "20px";
  }
}

// 3. Finalmente, agregue el siguiente código dentro de las llaves rizadas:

// Esto es bastante código para pasar, así que lo guiaremos a través de él poco a poco.

// La primera línea selecciona el elemento <body> mediante el uso de la API DOM para obtener la propiedad body del objeto de document global y asignarla a una constante llamada body, para que podamos hacerle cosas más adelante:

// const body = document.body;

// La siguiente sección utiliza una función de API DOM denominada document.createElement() para crear un elemento <div> y almacenar una referencia a él en una constante llamada panel. Este elemento será el contenedor exterior de nuestro cuadro de mensajes.

// Luego usamos otra función de LA API DOM llamada Element.setAttribute() para establecer un atributo class en nuestro panel con un valor de msgBox. Esto es para que sea más fácil aplicar estilo al elemento: si observa el CSS en la página, verá que estamos utilizando un selector .msgBox para aplicar estilo al cuadro de mensaje y su contenido.

// Finalmente, llamamos a una función DOM llamada Node.appendChild() en la constante body que almacenamos anteriormente, que anida un elemento dentro del otro como un hijo de él. Especificamos el panel <div> como el niño que queremos agregar dentro del elemento <body>. Necesitamos hacer esto ya que el elemento que creamos no solo aparecerá en la página por sí solo, sino que debemos especificar dónde colocarlo.

// const panel = document.createElement("div");
// panel.setAttribute("class", "msgBox");
// body.appendChild(panel);

// Las dos secciones siguientes hacen uso de las mismas funciones createElement() y appendChild() que ya hemos visto para crear dos nuevos elementos, un <p> y un <button>, e insertarlos en la página como hijos del panel <div>. Usamos su propiedad Node.textContent, que representa el contenido de texto de un elemento, para insertar un mensaje dentro del párrafo y una "x" dentro del botón. Este botón será lo que debe hacerse clic / activar cuando el usuario quiera cerrar el cuadro de mensaje.

// const msg = document.createElement("p");
// msg.textContent = "This is a message box";
// panel.appendChild(msg);

// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// panel.appendChild(closeBtn);

// Finalmente, llamamos a addEventListener() para agregar una función a la que se llamará cuando el usuario haga clic en el botón "cerrar". El código eliminará todo el panel de la página, para cerrar el cuadro de mensaje.

// Brevemente, el método addEventListener() lo proporciona el botón (o, de hecho, cualquier elemento de la página) al que se le puede pasar una función y el nombre de un evento. En este caso, el nombre del evento es 'click', lo que significa que cuando el usuario hace clic en el botón, la función se ejecutará. Aprenderás mucho más sobre eventos en nuestro artículo de eventos. La línea dentro de la función utiliza la función Node.removeChild() DOM API para especificar que queremos eliminar un elemento secundario específico del elemento HTML, en este caso, el panel <div>.

// closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));

// Básicamente, todo este bloque de código está generando un bloque de HTML que se ve así, e insertándolo en la página:

{
  /* <div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>; */
}

// Eso fue mucho código para trabajar, ¡no te preocupes demasiado si no recuerdas exactamente cómo funciona cada parte en este momento! La parte principal en la que queremos centrarnos aquí es la estructura y el uso de la función, pero queríamos mostrar algo interesante para este ejemplo.

// Llamar a la función #008000
// Ahora tiene su definición de función escrita en su elemento <script> muy bien, pero no hará nada tal como está.

// 1. Intente incluir la siguiente línea debajo de su función para llamarla:

// displayMessage();

// 1.
// 3. mostrarMensaje();

// Esta línea invoca la función, haciendo que se ejecute inmediatamente. Cuando guarde su código y lo vuelva a cargar en el navegador, verá que el pequeño cuadro de mensaje aparece inmediatamente, solo una vez. Después de todo, solo lo llamamos una vez.

// 2. Ahora abra las herramientas de desarrollo de su navegador en la página de ejemplo, vaya a la consola de JavaScript y escriba la línea nuevamente allí, ¡verá que aparece nuevamente! Así que esto es divertido: ahora tenemos una función reutilizable que podemos llamar en cualquier momento que queramos. Pero probablemente queremos que aparezca en respuesta a las acciones del usuario y del sistema. En una aplicación real, tal cuadro de mensaje probablemente se llamaría en respuesta a nuevos datos disponibles, o a que se haya producido un error, o al usuario que intente eliminar su perfil ("¿está seguro de esto?"), o al usuario que agrega un nuevo contacto y la operación se completa con éxito, etc. En esta demostración, obtendremos el cuadro de mensaje que aparecerá cuando el usuario haga clic en el botón.

// 3. Elimine la línea anterior que agregó.

// 4. A continuación, seleccionaremos el botón y almacenaremos una referencia a él en una constante. Agregue la siguiente línea al código, encima de la definición de la función:

// 4.

const btn = document.querySelector("button");

// 5.
btn.addEventListener("click", () =>
  mostrarMensaje("Wow, este es un mensaje diferente!", "advertencia")
);

// 5. Finalmente, agregue la siguiente línea debajo de la anterior:

// De manera similar al controlador de eventos click de closeBtn, aquí estamos llamando a un código en respuesta a un botón en el que se hace clic. Pero en este caso, en lugar de llamar a una función anónima que contiene algún código, estamos llamando a nuestra función displayMessage() por su nombre.

// 6. Intente guardar y actualizar la página: ahora debería ver aparecer el cuadro de mensaje cuando haga clic en el botón.

// Es posible que se pregunte por qué no hemos incluido los paréntesis después del nombre de la función. Esto se debe a que no queremos llamar a la función inmediatamente, solo después de que se haya hecho clic en el botón. Si intenta cambiar la línea a

// btn.addEventListener('click', displayMessage());

// y guardando y recargando, ¡verá que el cuadro de mensaje aparece sin que se haga clic en el botón! Los paréntesis en este contexto a veces se denominan "operador de invocación de funciones". Solo se utilizan cuando se desea ejecutar la función inmediatamente en el ámbito actual. En el mismo sentido, el código dentro de la función anónima no se ejecuta inmediatamente, ya que está dentro del ámbito de la función.

// Si probaste el último experimento, asegúrate de deshacer el último cambio antes de continuar.

// Mejora de la función con parámetros #008000
// Tal como está, la función todavía no es muy útil: no queremos mostrar el mismo mensaje predeterminado cada vez. Mejoremos nuestra función añadiendo algunos parámetros, permitiéndonos llamarla con algunas opciones diferentes.

// 1. En primer lugar, actualice la primera línea de la función:
// function displayMessage() {

// a esto:
// function displayMessage(msgText, msgType) {

// Ahora, cuando llamamos a la función, podemos proporcionar dos valores de variable dentro de los paréntesis para especificar el mensaje que se mostrará en el cuadro de mensaje y el tipo de mensaje que es.

// 2. Para hacer uso del primer parámetro, actualice la siguiente línea dentro de su función:
// msg.textContent = 'This is a message box';
// Copiar en el portapapeles
// Para
// msg.textContent = msgText;

// 3. Por último, pero no menos importante, ahora necesita actualizar su llamada a la función para incluir un texto de mensaje actualizado. Cambie la siguiente línea:
// btn.addEventListener('click', displayMessage);
// Copiar en el portapapeles
// a este bloque:
// btn.addEventListener('click', () => displayMessage('Woo, this is a different message!'));

// Si queremos especificar parámetros entre paréntesis para la función a la que estamos llamando, entonces no podemos llamarla directamente, debemos ponerla dentro de una función anónima para que no esté en el ámbito inmediato y, por lo tanto, no se llame de inmediato. Ahora no se llamará hasta que se haga clic en el botón.

// 4. Vuelva a cargar y pruebe el código nuevamente y verá que todavía funciona bien, ¡excepto que ahora también puede variar el mensaje dentro del parámetro para que se muestren diferentes mensajes en el cuadro!

// Un parámetro más complejo #00aae4
// Pasamos al siguiente parámetro. Este va a implicar un poco más de trabajo: lo vamos a configurar para que, dependiendo de en qué se establezca el parámetro msgType, la función muestre un icono diferente y un color de fondo diferente.

// 1. En primer lugar, descargue los iconos necesarios para este ejercicio (advertencia y chat) desde GitHub. Guárdelos en una nueva carpeta llamada icons en la misma ubicación que su archivo HTML.

// 2. A continuación, busque el CSS dentro de su archivo HTML. Haremos algunos cambios para dar paso a los iconos. Primero, actualice el ancho .msgBox desde:

// width: 200px;

// Para

// width: 242px;

// 3. A continuación, agregue las siguientes líneas dentro de la regla .msgBox p { }:

// padding-left: 82px;
// background-position: 25px center;
// background-repeat: no-repeat;

// 4. Ahora necesitamos agregar código a nuestra función displayMessage() para manejar la visualización de los iconos. Agregue el siguiente bloque justo encima de la llave rizada de cierre (}) de su función:

// Aquí, si el parámetro msgType se establece como 'warning', se muestra el icono de advertencia y el color de fondo del panel se establece en rojo. Si se establece 'chat', se muestra el icono de chat y el color de fondo del panel se establece en azul aguamarina. Si el parámetro msgType no está establecido en absoluto (o en algo diferente), entonces la else { } del código entra en juego, y el párrafo recibe relleno predeterminado y ningún icono, sin ningún color de panel de fondo establecido tampoco. Esto proporciona un estado predeterminado si no se proporciona ningún parámetro msgType, lo que significa que es un parámetro opcional.

// 5. Probemos nuestra función actualizada, intente actualizar la llamada displayMessage() desde esta:

// displayMessage('Woo, this is a different message!');

// a uno de estos:

// displayMessage('Your inbox is almost full — delete some mails', 'warning');

// displayMessage('Brian: Hi there, how are you today?','chat');

// Puedes ver lo útil que se está volviendo nuestra (ahora no tan) pequeña función.
