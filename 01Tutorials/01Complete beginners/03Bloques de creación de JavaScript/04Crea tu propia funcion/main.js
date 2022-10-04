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
function mostrarMensaje() {
  // 3.
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = "Este es un buzón de mensajes";
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "X";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
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
