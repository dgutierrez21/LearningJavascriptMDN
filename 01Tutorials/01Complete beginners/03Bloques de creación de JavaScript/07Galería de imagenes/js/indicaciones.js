// Galería de imágenes #ff0

// Ahora que hemos analizado los bloques de construcción fundamentales de JavaScript, pondremos a prueba su conocimiento de bucles, funciones, condicionales y eventos al hacer que cree un elemento bastante común que verá en muchos sitios web: una galería de imágenes con JavaScript.

// Punto #008000
// Para comenzar esta evaluación, debe ir y tomar el archivo ZIP para el ejemplo, descomprimirlo en algún lugar de su computadora y hacer el ejercicio localmente para empezar.

// Alternativamente, puede usar un sitio como JSBin o Glitch para hacer su evaluación. Puede pegar el HTML, CSS y JavaScript en uno de estos editores en línea. Si el editor en línea que está utilizando no tiene paneles JavaScript / CSS separados, no dude en ponerlos en línea <script> / <style> elementos dentro de la página HTML.

// Resumen del proyecto #008000
// Se le han proporcionado algunos recursos HTML, CSS e imagen y algunas líneas de código JavaScript; necesita escribir el JavaScript necesario para convertirlo en un programa de trabajo.

// El ejemplo se ve así:

// ver imagen gallery.png

// Las partes más interesantes del archivo CSS del ejemplo:

// ---Posiciona absolutamente los tres elementos dentro del full-img <div> el <img> en el que se muestra la imagen de tamaño completo, un <div> vacío que tiene el mismo tamaño que el <img> y se coloca justo encima de ella (esto se usa para aplicar un efecto de oscurecimiento a la imagen a través de un color de fondo semitransparente), y un <button> que se utiliza para controlar el efecto de oscurecimiento.

// ---Establece el ancho de cualquier imagen dentro de la thumb-bar <div> (las llamadas imágenes "en miniatura") en 20%, y las hace flotar a la izquierda para que se sienten una al lado de la otra en una línea.

// Tu JavaScript necesita:

// --Declare una matriz const que enumere los nombres de archivo de cada imagen, como 'pic1.jpg'.

// --Declare un const que enumere el texto alternativo para cada imagen.

// --Recorra la matriz de nombres de archivo y, para cada uno, inserte un elemento <img> dentro de la thumb-bar <div> que incrusta esa imagen en la página junto con su texto alternativo.

// Agregue un detector de eventos click a cada <img> dentro de la thumb-bar <div> para que, cuando se haga clic en ellos, la imagen correspondiente y el texto alternativo se muestren en el elemento displayed-img <img>.

// --Agregue un detector de eventos click al <button> para que cuando se haga clic en él, se aplique un efecto de oscurecimiento a la imagen de tamaño completo. Cuando se vuelve a hacer clic en él, el efecto de oscurecimiento se elimina de nuevo.

// Pasos a completar #008000
// En las secciones siguientes se describe lo que debe hacer.

// Declarar una matriz de nombres de archivo de imagen #00aae4
// Debe crear una matriz que enumere los nombres de archivo de todas las imágenes que desea incluir en la galería. La matriz debe declararse como una constante.

// Bucle a través de las imágenes #00aae4
// Ya le hemos proporcionado líneas que almacenan una referencia a la thumb-bar <div> dentro de una constante llamada thumbBar, crean un nuevo elemento <img>, establecen sus atributos src y alt en un valor de marcador de posición xxx y agregan este nuevo elemento <img> dentro de thumbBar.

// Necesitas:

// 1. Coloque la sección de código debajo del comentario "Looping through images" dentro de un bucle que recorre todos los nombres de archivo de la matriz.

// 2. En cada iteración de bucle, reemplace los valores del marcador de posición xxx por una cadena que iguale la ruta a los atributos image y alt en cada caso. Establezca el valor de los atributos src y alt en estos valores en cada caso. Recuerda que la imagen está dentro del directorio de imágenes, y su nombre es pic1.jpg, pic2.jpg, etc.

// Agregar un detector de eventos click a cada imagen en miniatura #00aae4
// En cada iteración de bucle, debe agregar un detector de eventos click a la newImage actual: este agente de escucha debe encontrar el valor src de la imagen actual. Establezca el valor src del displayed-img <img> en el valor src pasado como parámetro. A continuación, haga lo mismo con el atributo alt.

// Alternativamente, puede agregar un detector de eventos a la barra del pulgar.

// Escribir un controlador que ejecute el botón de oscurecer/aclarar #00aae4
// Eso solo deja nuestro < <button> oscurecimiento / <>: ya hemos proporcionado una línea que almacena una referencia al <button> en una constante llamada btn. Debe agregar un detector de eventos click que:

// 1. Comprueba el nombre de clase actual establecido en el <button>: puede volver a lograrlo mediante getAttribute().

// 2. Si el nombre de la clase es "dark" cambia la <button> a "light" (usando setAttribute()), su contenido de texto a "Lighten" y el background-color de la superposición <div> a "rgba(0,0,0,0.5)".

// 3. Si el nombre de la clase no es "dark" cambie la <button> a "dark" su contenido de texto a "Oscurecer" y el background-color de la superposición <div> a "rgba(0,0,0,0)".

// Las siguientes líneas proporcionan una base para lograr los cambios estipulados en los puntos 2 y 3 anteriores.

// btn.setAttribute("class", xxx);
// btn.textContent = xxx;
// overlay.style.backgroundColor = xxx;

// Consejos y sugerencias #00aae4
// No es necesario editar el HTML o CSS de ninguna manera.
