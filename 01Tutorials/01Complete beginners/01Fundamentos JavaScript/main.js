// Conceptos básicos de JavaScript #ff0
// JavaScript es un lenguaje de programación que agrega interactividad a su sitio web. Esto sucede en los juegos, en el comportamiento de las respuestas cuando se presionan botones o con la entrada de datos en los formularios; con estilo dinámico; con animación, etc. Este artículo le ayuda a comenzar con JavaScript y mejora su comprensión de lo que es posible.

// ¿Qué es JavaScript? #008000
// JavaScript es un poderoso lenguaje de programación que puede agregar interactividad a un sitio web. Fue inventado por Brendan Eich.

// JavaScript es versátil y amigable para principiantes. Con más experiencia, podrás crear juegos, gráficos animados en 2D y 3D, aplicaciones completas basadas en bases de datos y mucho más.

// JavaScript en sí es relativamente compacto, pero muy flexible. Los desarrolladores han escrito una variedad de herramientas sobre el lenguaje JavaScript central, desbloqueando una gran cantidad de funcionalidad con el mínimo esfuerzo. Estos incluyen:

// Interfaces de programación de aplicaciones (API) del navegador integradas en los navegadores web, que proporcionan funcionalidades como la creación dinámica de HTML y la configuración de estilos CSS; recopilar y manipular una secuencia de vídeo desde la cámara web de un usuario, o generar gráficos 3D y muestras de audio.

// API de terceros que permiten a los desarrolladores incorporar funcionalidad en sitios de otros proveedores de contenido, como Twitter o Facebook.

// Marcos y bibliotecas de terceros que puede aplicar a HTML para acelerar el trabajo de creación de sitios y aplicaciones.

// Está fuera del alcance de este artículo, como una ligera introducción a JavaScript, presentar los detalles de cómo el lenguaje JavaScript central es diferente de las herramientas enumeradas anteriormente. Puede obtener más información en el área de aprendizaje de JavaScript de MDN, así como en otras partes de MDN.

// La siguiente sección presenta algunos aspectos del lenguaje principal y ofrece la oportunidad de jugar con algunas características de la API del navegador también. ¡Que te diviertas!

// Un ejemplo de Hello world! #008000
// ¡JavaScript es una de las tecnologías web modernas más populares! A medida que sus habilidades de JavaScript crecen, sus sitios web entrarán en una nueva dimensión de poder y creatividad.

// Sin embargo, sentirse cómodo con JavaScript es más difícil que sentirse cómodo con HTML y CSS. Es posible que tenga que comenzar poco a poco y progresar gradualmente. Para comenzar, examinemos cómo agregar JavaScript a su página para crear un ejemplo de Hello world!. (¡Hola mundo! es el estándar para ejemplos introductorios de programación.)

// Vaya a su sitio de prueba y cree una nueva carpeta llamada scripts. Dentro de la carpeta de scripts, cree un nuevo documento de texto llamado main.js y guárdelo.

// En el archivo index.html, introduzca este código en una nueva línea, justo antes de la etiqueta </body> de cierre:

// <script src="scripts/main.js"></script>
//

// Esto está haciendo el mismo trabajo que el elemento <link> para CSS. Aplica el JavaScript a la página, por lo que puede tener un efecto en el HTML (junto con el CSS y cualquier otra cosa en la página).

// Agregue este código al archivo main.js:
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// Asegúrese de que los archivos HTML y JavaScript estén guardados. A continuaciónindex.html en su navegador. El hello word:

// Nota: La razón por la que las instrucciones (arriba) colocan el elemento <script> cerca de la parte inferior del archivo HTML es que el navegador lee el código en el orden en que aparece en el archivo.

// Si el JavaScript se carga primero y se supone que afecta al HTML que aún no se ha cargado, podría haber problemas. Colocar JavaScript cerca de la parte inferior de una página HTML es una forma de acomodar esta dependencia. Para obtener más información sobre enfoques alternativos, consulte Estrategias de carga de scripts.

const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Word!";

// ¿¿Qué pasó??
// El texto del encabezado cambió a Hello world! usando JavaScript. Para ello, utilice una función denominada querySelector() para obtener una referencia a su encabezado y, a continuación, almacenarla en una variable denominada myHeading. Esto es similar a lo que hicimos usando selectores CSS. Cuando desee hacer algo con un elemento, primero debe seleccionarlo.

// Después de eso, el código establece el valor de la propiedad textContent de la variable myHeading (que representa el contenido del encabezado) en Hello world!.

// Curso intensivo de conceptos básicos del lenguaje #008000
// Para darle una mejor comprensión de cómo funciona JavaScript, vamos a explicar algunas de las características principales del lenguaje. Vale la pena señalar que estas características son comunes a todos los lenguajes de programación. Si dominas estos fundamentos, ¡también tienes una ventaja en la codificación en otros idiomas!

// Variables #00aae4

// Las variables son contenedores que almacenan valores. Comienza declarando una variable con la palabra clave let, seguida del nombre que le das a la variable:

let myVariable;

console.log(myVariable);

// Un punto y coma al final de una línea indica dónde termina una instrucción. Solo se requiere cuando necesita separar las instrucciones en una sola línea. Sin embargo, algunas personas creen que es una buena práctica tener punto y coma al final de cada declaración. Hay otras reglas para cuándo debe y no debe usar punto y coma. Para obtener más información, consulte https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/

// Puede nombrar una variable casi cualquier cosa, pero hay algunas restricciones. (Consulte https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables ). Si no está seguro, puede verificar el nombre de la variable para ver si es válido. https://mothereff.in/js-variables

// JavaScript distingue entre mayúsculas y minúsculas. Esto significa que myVariable no es lo mismo myvariable. Si tiene problemas en su código, ¡verifique el caso!

// Después de declarar una variable, puede asignarle un valor:

let myVariable1;

myVariable1 = "Bob";

console.log(myVariable1);

// Además, puede realizar ambas operaciones en la misma línea:

let myVariable2 = "Jhon";

// Para recuperar el valor, llame al nombre de la variable:

console.log(myVariable2);

// Después de asignar un valor a una variable, puede cambiarlo más adelante en el código:

let myVariable3 = "Manuel";
myVariable3 = "Steve";

console.log(myVariable3);

// Tenga en cuenta que las variables pueden contener valores que tienen diferentes https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

// tipos de datos #00aae4

// ver imagen...

// String
// Esta es una secuencia de texto conocida como cadena. Para indicar que el valor es una cadena, enciérrelo entre comillas simples.

let myString = "Hola, mi nombre es Jhon";

console.log(myString);

// Number
// Este es un número. Los números no tienen citas a su alrededor.
let myNumber = 21;

console.log(myNumber);

// Boolean
// Este es un valor True/False. Las palabras true y false son palabras clave especiales que no necesitan comillas.

let myBoolean = true;

console.log(myBoolean);

// Array
// Esta es una estructura que le permite almacenar múltiples valores en una sola referencia.

let myArray = [1, "Bob", 10, "Steve"];
// Consulte a cada miembro de la matriz de la siguiente manera:

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);

// Object
// Esto puede ser cualquier cosa. Todo en JavaScript es un objeto y se puede almacenar en una variable. Ten esto en cuenta a medida que aprendes.

let myObject = document.querySelector("h1");

// Entonces, ¿por qué necesitamos variables? Las variables son necesarias para hacer cualquier cosa interesante en la programación. Si los valores no pueden cambiar, entonces no puede hacer nada dinámico, como personalizar un mensaje de saludo o cambiar una imagen que se muestra en una galería de imágenes.

// Comentarios #00aae4
// Los comentarios son fragmentos de texto que se pueden agregar junto con el código. El navegador ignora el texto marcado como comentarios. Puedes escribir comentarios en JavaScript al igual que en CSS:

/*este es
un comentario */

// Si tu comentario no contiene saltos de línea, es una opción ponerlo detrás de dos barras como esta:

// este tambien es un comentario

// Operadores #00aae4
// Un operator es un símbolo matemático que produce un resultado basado en dos valores (o variables). En la siguiente tabla, puede ver algunos de los operadores más simples, junto con algunos ejemplos para probar en la consola de JavaScript.

// ver imagen...

// Adición
// Suma dos números o combina dos cadenas.

console.log(10 + 5);
console.log("Hello " + "Word");

// Resta, multiplicación, división;
// Estos hacen lo que esperarías que hicieran en matemáticas básicas.

console.log(20 - 5);
console.log(20 * 2); // multiplicar en JS es un asterisco
console.log(20 / 2);

// Asignación
// Como ya has visto: esto asigna un valor a una variable.

let myVariable4 = 43;
console.log(myVariable4);

// Igualdad estricta
// Esto realiza una prueba para ver si dos valores son iguales. Devuelve un resultado true/false (booleano).

let myVariable5 = "33";
let myvariable6 = 33;

console.log(myVariable5 === myvariable6);

// No, no es igual
// Esto devuelve el valor lógicamente opuesto de lo que precede. Convierte un true en un false, etc. Cuando se utiliza junto con el operador Igualdad, el operador de negación comprueba si dos valores no son iguales.

// Para "No", la expresión básica es true, pero la comparación devuelve false porque la negamos:

let myvariable7 = 3;

console.log(myvariable7 === 3); // true
console.log(myvariable7 !== 3); // false

// "No, no es igual" da básicamente el mismo resultado con una sintaxis diferente. Aquí estamos probando "es myVariable7 NO igual a 3". Esto devuelve false porque myVariable ES igual a 3:

// Hay muchos más operadores para explorar, pero esto es suficiente por ahora. Consulte https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators para obtener una lista completa.

// Nota: La mezcla de tipos de datos puede dar lugar a algunos resultados extraños al realizar cálculos. Tenga cuidado de que se refiera a sus variables correctamente y obtenga los resultados que espera. Por ejemplo, ingrese '35' + '25' en su consola. ¿Por qué no obtienes el resultado que esperabas? Debido a que las comillas convierten los números en cadenas, por lo que ha terminado concatenando cadenas en lugar de agregar números. Si 35 + 25 obtendrás el total de los dos números.

// Condicionales #00aae4
// Los condicionales son estructuras de código que se utilizan para comprobar si una expresión devuelve true o no. Una forma muy común de condicionales es el if...else. Por ejemplo:

let helado = "Chocolate";
const h2_1 = document.querySelector(".h2_1");

if (helado === "Chocolate") {
  h2_1.textContent = "Yay, Me encanta el helado de chocolate!";
} else {
  h2_1.textContent = "Awwww, pero el chocolate es mi favorito...";
}

// La expresión dentro del if () es la prueba. Esto utiliza el operador de igualdad estricta (como se describió anteriormente) para comparar la variable iceCream con la cadena chocolate para ver si los dos son iguales. Si esta comparación devuelve true, se ejecuta el primer bloque de código. Si la comparación no es verdadera, el segundo bloque de código, después de la else, se ejecuta en su lugar.

// Funciones #00aae4
// Las funciones son una forma de funcionalidad de empaquetado que desea reutilizar. Es posible definir un cuerpo de código como una función que se ejecuta cuando se llama al nombre de la función en el código. Esta es una buena alternativa a escribir repetidamente el mismo código. Ya has visto algunos usos de las funciones. Por ejemplo:

let myvariable8 = document.querySelector("h1");

let saludo = "ola";

if (saludo == "Hola") {
  alert("Hola, como estas?");
}

// Estas funciones, document.querySelector y alert, están integradas en el navegador.

// Si ves algo que parece un nombre de variable, pero está seguido de paréntesis, () es probable que sea una función. Las funciones a menudo toman argumentos: bits de datos que necesitan para hacer su trabajo. Los argumentos van dentro de los paréntesis, separados por comas si hay más de un argumento.

// Por ejemplo, la función alert() hace que aparezca un cuadro emergente dentro de la ventana del navegador, pero necesitamos darle una cadena como argumento para decirle a la función qué mensaje mostrar.

// También puede definir sus propias funciones. En el siguiente ejemplo, creamos una función simple que toma dos números como argumentos y los multiplica:

function multiplicacion(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

// Intente ejecutar esto en la consola; luego pruebe con varios argumentos. Por ejemplo:

let dolar = 1000,
  colon = 648.16;

console.log(multiplicacion(5, 3));
console.log(multiplicacion(20, 2));
console.log(multiplicacion(colon, dolar));

// Nota: La return le dice al navegador que devuelva la variable de result fuera de la función para que esté disponible para su uso. Esto es necesario porque las variables definidas dentro de las funciones solo están disponibles dentro de esas funciones. Esto se denomina alcance variable. (Lea más sobre el alcance de las variables. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope )

// Eventos #00aae4
// La interactividad real en un sitio web requiere controladores de eventos. Estas son estructuras de código que escuchan la actividad en el navegador y ejecutan código en respuesta. El ejemplo más obvio es el manejo del evento click, que es activado por el navegador cuando hace clic en algo con el mouse. Para demostrarlo, introduzca lo siguiente en la consola y, a continuación, haga clic en la página web actual:

document.querySelector(".div_1").addEventListener("click", function () {
  alert("Has hecho click en el cuadro azul");
});

// Hay muchas maneras de adjuntar un controlador de eventos a un elemento. Aquí seleccionamos el elemento <html>. Luego llamamos a su función addEventListener() pasando el nombre del evento a escuchar ('click') y una función para ejecutar cuando ocurra el evento.

// Tenga en cuenta que el codigo anterior es equivalente a:

let miCuadroRojo = document.querySelector(".div_2");

miCuadroRojo.addEventListener("click", function () {
  alert("Has hecho click en el cuadro rojo");
});

// Es simplemente más corto.

// Las funciones que acabamos de pasar a addEventListener() aquí se llaman funciones anónimas, porque no tienen un nombre. Hay una forma alternativa de escribir funciones anónimas, que llamamos función de flecha. Una función de flecha usa () => en lugar de function ():

let miCuadroVerde = document.querySelector(".div_3");

miCuadroVerde.addEventListener("click", () => {
  alert("has hecho click en el cuadro verde");
});

// Sobrealimentación de nuestro sitio web de ejemplo #008000
// Con esta revisión de los conceptos básicos de JavaScript completada (arriba), agreguemos algunas características nuevas a nuestro sitio de ejemplo.

// Antes de continuar, elimine el contenido actual de su archivo main.js, el bit que agregó anteriormente durante el ejemplo "¡Hola mundo!", y guarde el archivo vacío. Si no lo hace, el código existente chocará con el nuevo código que está a punto de agregar.

// Agregar un cambiador de imagen #00aae4
// En esta sección, aprenderá a usar las características de JavaScript y DOM API para alternar la visualización de una de las dos imágenes. Este cambio se producirá cuando un usuario haga clic en la imagen mostrada.

// 1. Elija una imagen que desee incluir en su sitio de ejemplo. Idealmente, la imagen tendrá el mismo tamaño que la imagen que agregó anteriormente, o lo más cerca posible.

// 2. Guarde esta imagen en la carpeta images.

// 3. Cambie el nombre de la imagen firefox2.png.

// 4. Agregue el siguiente código JavaScript a su archivo main.js

const myImage = document.querySelector(".container_3 img"),
  jsLogo =
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  swiftLogo =
    "https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg";

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === jsLogo) {
    myImage.setAttribute("src", swiftLogo);
  } else {
    myImage.setAttribute("src", jsLogo);
  }
};

// 5. Guarde todos los archivos y cargue index.html en el navegador. Ahora, cuando haga clic en la imagen, debería cambiar a la otra.

// Esto es lo que sucedió. Ha almacenado una referencia al elemento <img> en la variable myImage. A continuación, hizo que la propiedad del controlador de eventos onclick de esta variable fuera igual a una función sin nombre (una función "anónima"). Así que cada vez que se hace clic en este elemento:

// 1. El código recupera el valor del atributo src de la imagen.

// 2. El código utiliza un condicional para comprobar si el valor src es igual a la ruta de acceso de la imagen original:

// 2.1 Si es así, el código cambia el valor src a la ruta de la segunda imagen, lo que obliga a cargar la otra imagen dentro del elemento <img>.

// 2.2 Si no lo es (lo que significa que ya debe haber cambiado), el valor src vuelve a la ruta de la imagen original, al estado original.

// Agregar un mensaje de bienvenida personalizado #00aae4
// A continuación, cambiemos el título de la página a un mensaje de bienvenida personalizado cuando el usuario visite el sitio por primera vez. Este mensaje de bienvenida persistirá. Si el usuario abandona el sitio y regresa más tarde, guardaremos el mensaje utilizando la API de almacenamiento web. También incluiremos una opción para cambiar el usuario, y por lo tanto, el mensaje de bienvenida.

// 1. En index.html, agregue la línea siguiente justo antes del elemento <script>:

// 2. En main.js, coloque el siguiente código en la parte inferior del archivo, exactamente como está escrito. Esto toma referencias al nuevo botón y al encabezado, almacenando cada una de las variables internas:

let myButton = document.querySelector(".btnCambiarUsuario"),
  myHeading2 = document.querySelector(".h2_2");

// 3. Agregue la siguiente función para establecer el saludo personalizado. Esto aún no hará nada, pero esto cambiará pronto.

// codigo inicial

// function setNombreUsuario() {
//   const myName = prompt("Por favor, ingrese su nombre.");
//   localStorage.setItem("name", myName);
//   myHeading2.textContent = `Mozilla es cool, ${myName}`;
// }

// codigo actualizado

function setNombreUsuario() {
  const myName = prompt("Por favor, ingrese su nombre.");

  if (!myName) {
    setNombreUsuario();
  } else {
    localStorage.setItem("name", myName);
    myHeading2.textContent = `Mozilla es cool, ${myName}`;
  }
}

// En lenguaje humano, esto significa: Si myName no tiene valor, ejecute setUserName() nuevamente desde el principio. Si tiene un valor (si la instrucción anterior no es verdadera), almacene el valor en localStorage y establézcalo como texto del encabezado.

// La función setUserName() contiene una función prompt()), que muestra un cuadro de diálogo, similar a alert(). Esta función prompt() hace más que alert(), pidiendo al usuario que introduzca datos y almacenándolos en una variable después de que el usuario haga clic en Aceptar. En este caso, le pedimos al usuario que introduzca un nombre. A continuación, el código llama a una API localStorage, que nos permite almacenar datos en el navegador y recuperarlos más tarde. Utilizamos la función setItem() de localStorage para crear y almacenar un elemento de datos llamado 'name', estableciendo su valor en la variable myName que contiene la entrada del usuario para el nombre. Finalmente, establecemos el textContent del encabezado en una cadena, más el nombre recién almacenado del usuario.

// 4. Agregue el siguiente bloque de condiciones. Podríamos llamar a este código de inicialización, ya que estructura la aplicación cuando se carga por primera vez.

if (!localStorage.getItem("name")) {
  setNombreUsuario();
} else {
  const storedName = localStorage.getItem("name");
  myHeading2.textContent = `Mozilla es cool, ${storedName}`;
}

// Esta primera línea de este bloque utiliza el operador de negación (no lógico, representado por el !) para comprobar si los datos del name existen. De lo contrario, se ejecuta la función setUserName() para crearla. Si existe (es decir, el usuario estableció un nombre de usuario durante una visita anterior), recuperamos el nombre almacenado usando getItem() y establecemos el textContent del encabezado en una cadena, más el nombre del usuario, como hicimos dentro de setUserName().

// 5. Coloque este onclick (abajo) en el botón. Cuando se hace clic, se ejecuta setUserName()). Esto permite al usuario introducir un nombre diferente pulsando el botón.

myButton.onclick = () => {
  setNombreUsuario();
};

// ¿Un nombre de usuario de null? #00aae4
// Cuando ejecute el ejemplo y obtenga el cuadro de diálogo que le pide que escriba su nombre de usuario, intente presionar el botón Cancelar. Deberías terminar con un título que diga Mozilla es genial, nulo. Esto sucede porque, al cancelar el mensaje, el valor se establece como null. Null es un valor especial en JavaScript que se refiere a la ausencia de un valor.

// Además, intente hacer clic en Aceptar sin ingresar un nombre. Deberías terminar con un título que diga Mozilla es genial, por razones bastante obvias.

// Para evitar estos problemas, puede comprobar que el usuario no ha introducido un nombre en blanco. Actualice la función setNombreUsuario() a esto:
