// Generador de historias tontas #008000

// En esta evaluación, se le asignará la tarea de tomar parte del conocimiento que ha adquirido en los artículos de este módulo y aplicarlo a la creación de una aplicación divertida que genere historias tontas aleatorias. ¡Que te diviertas!

// punto de partida #008000
// Para comenzar esta evaluación, usted debe:

// Vaya y tome el archivo https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/index.html para el ejemplo, guarde una copia local del mismo como index.html en un nuevo directorio en algún lugar de su computadora y haga la evaluación localmente para empezar. Esto también tiene el CSS para aplicar estilo al ejemplo contenido en él.

// Vaya a la página que contiene el texto sin procesar https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/assessment-start/raw-text.txt y manténgalo abierto en una pestaña separada del navegador en algún lugar. Lo necesitarás más tarde.

// Alternativamente, puede usar un sitio como JSBin o Glitch para hacer su evaluación. Puede pegar el HTML, CSS y JavaScript en uno de estos editores en línea. Si el editor en línea que está utilizando no tiene un panel JavaScript separado, no dude en ponerlo en línea en un elemento <script> dentro de la página HTML.

// Nota: Si se queda atascado, pídanos ayuda: consulte la sección Evaluación o ayuda adicional en la parte inferior de esta página.

// Resumen del proyecto #008000
// Se le han proporcionado algunos HTML / CSS sin procesar y algunas cadenas de texto y funciones de JavaScript; debe escribir el JavaScript necesario para convertirlo en un programa de trabajo, que hace lo siguiente:

// Genera una historia tonta cuando se presiona el botón "Generar historia aleatoria".
// Reemplaza el nombre predeterminado "Bob" en la historia con un nombre personalizado, solo si se ingresa un nombre personalizado en el campo de texto "Ingresar nombre personalizado" antes de presionar el botón generar.
// Convierte las cantidades y unidades predeterminadas de peso y temperatura de EE. UU. en la historia en equivalentes del Reino Unido si se marca el botón de opción del Reino Unido antes de presionar el botón de generar.
// Genera una nueva historia tonta aleatoria cada vez que se presiona el botón.

// Pasos a completar #008000
// En las secciones siguientes se describe lo que debe hacer.

// Configuración básica:

// 1. Cree un nuevo archivo denominado main.js, en el mismo directorio que el archivo index.html.
// 2. Aplique el archivo JavaScript externo a su HTML insertando un elemento <script> en su .js main.js referencia HTML. Póngalo justo antes de la etiqueta </body>.

// Variables y funciones iniciales:

// 1. En el archivo de texto sin procesar, copie todo el código debajo del encabezado "1. COMPLETE LAS DEFINICIONES DE VARIABLES Y FUNCIONES" y péguelo en la parte superior del archivo main.js. Esto le proporciona tres variables que almacenan referencias al campo de texto "Introducir nombre personalizado" (customName), el botón "Generar historia aleatoria" (randomize) y el elemento <p> en la parte inferior del cuerpo HTML en el que se copiará la historia (story), respectivamente. Además, tiene una función llamada randomValueFromArray() que toma una matriz y devuelve uno de los elementos almacenados dentro de la matriz al azar.

// 2. Ahora mire la segunda sección del archivo de texto sin procesar: "2. CADENAS DE TEXTO SIN PROCESAR". Esto contiene cadenas de texto que actuarán como entrada en nuestro programa. Nos gustaría que contuvieras estas variables internas dentro de main.js:

// 2.1 Almacene la primera cadena de texto grande y larga dentro de una variable llamada storyText.

// 2.2 Almacenar el primer conjunto de tres cadenas dentro de una matriz llamada insertX.

// 2.3 Almacenar el segundo conjunto de tres cadenas dentro de una matriz llamada insertY.

// 2.4 Almacenar el tercer conjunto de tres cadenas dentro de una matriz llamada insertZ.

// Colocación del controlador de eventos y la función incompleta:

// 1. Ahora vuelva al archivo de texto sin procesar.

// 2. Copie el código que se encuentra debajo del encabezado "3. DETECTOR DE EVENTOS Y DEFINICIÓN DE FUNCIÓN PARCIAL" y péguelo en la parte inferior de su archivo main.js. Éste:

// 3. Agrega un detector de eventos click a la variable randomize para que cuando se haga clic en el botón que representa, se ejecute la función result()).

// 4. Agrega una definición de función result() parcialmente completada al código. Durante el resto de la evaluación, completará líneas dentro de esta función para completarla y hacer que funcione correctamente.

// Completando la función result()):

// 1. Cree una nueva variable denominada newStory y establezca su valor en igual a storyText. Esto es necesario para que podamos crear una nueva historia aleatoria cada vez que se presiona el botón y se ejecuta la función. Si hiciéramos cambios directamente en storyText, solo podríamos generar una nueva historia una vez.

// 2. Cree tres nuevas variables denominadas xItem, yItem y zItem, y hágalas iguales al resultado de llamar a randomValueFromArray() en sus tres matrices (el resultado en cada caso será un elemento aleatorio de cada matriz a la que se llama). Por ejemplo, puede llamar a la función y hacer que devuelva una cadena aleatoria de insertX escribiendo randomValueFromArray(insertX).

// 3. A continuación, queremos reemplazar los tres marcadores de posición en la cadena newStory — :insertx:, :inserty:, y :insertz: — con las cadenas almacenadas en xItem, yItem y zItem. Hay dos métodos de cadena posibles que lo ayudarán aquí: en cada caso, haga que la llamada al método sea igual a newStory, por lo que cada vez que se llama, newStory se hace igual a sí mismo, pero con sustituciones realizadas. Entonces, cada vez que se presiona el botón, estos marcadores de posición se reemplazan con una cadena tonta al azar. Como sugerencia adicional, dependiendo del método que elija, es posible que deba realizar una de las llamadas dos veces.

// 4. Dentro del primer bloque if, agregue otra llamada al método de reemplazo de cadena para reemplazar el nombre 'Bob' que se encuentra en la cadena newStory con la variable name. En este bloque estamos diciendo "Si se ha introducido un valor en la entrada customName, reemplace Bob en la historia con ese nombre personalizado".

// 5. Dentro del segundo bloque if, estamos comprobando si se ha seleccionado el botón de opción uk. Si es así, queremos convertir los valores de peso y temperatura en la historia de libras y Fahrenheit en piedras y centígrados. Lo que debe hacer es lo siguiente:

// 5.1 Busque las fórmulas para convertir libras en piedra y Fahrenheit en centígrado.

// 5.2 Dentro de la línea que define la variable weight, reemplace 300 con un cálculo que convierta 300 libras en piedras. Concatenar ' stone' al final del resultado de la llamada general Math.round()).

// 5.3 Dentro de la línea que define la variable temperature, reemplace 94 con un cálculo que convierte 94 Fahrenheit en centígrado. Concatenar ' centigrade' al final del resultado de la llamada general Math.round()).

// 5.4 Justo debajo de las dos definiciones de variables, agregue dos líneas de reemplazo de cuerdas más que reemplacen '94 fahrenheit' con el contenido de la variable temperature, y '300 libras' con el contenido de la variable de weight.

// 6. Finalmente, en la penúltima línea de la función, haga que la propiedad textContent de la variable story (que hace referencia al párrafo) sea igual a newStory.

// Consejos y sugerencias #008000
// No es necesario editar el HTML de ninguna manera, excepto para aplicar el JavaScript a su HTML.

// Si no está seguro de si JavaScript se aplica a su HTML correctamente, intente eliminar todo lo demás del archivo JavaScript temporalmente, agregue un simple poco de JavaScript que sepa que creará un efecto obvio, luego guarde y actualice. Lo siguiente, por ejemplo, convierte el fondo del elemento <html> en rojo, por lo que toda la ventana del navegador debería ponerse roja si JavaScript se aplica correctamente:

// document.querySelector("html").style.backgroundColor = "red";

// Math.round() es un método JavaScript integrado que redondea el resultado de un cálculo al número entero más cercano.

// Hay tres instancias de cadenas que deben reemplazarse. Puede repetir el método replace() varias veces o puede usar replaceAll(). Recuerda, ¡las cuerdas son inmutables!
