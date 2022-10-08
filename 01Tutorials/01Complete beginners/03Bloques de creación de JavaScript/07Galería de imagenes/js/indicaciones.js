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
