// Almacenamiento de la información que necesita — Variables #ff0
// Después de leer el último par de artículos, ahora debe saber qué es JavaScript, qué puede hacer por usted, cómo lo usa junto con otras tecnologías web y cómo se ven sus características principales desde un alto nivel. En este artículo, llegaremos a los conceptos básicos reales, analizando cómo trabajar con los bloques de construcción más básicos de JavaScript: variables.

// Herramientas que necesitas #008000
// A lo largo de este artículo, se le pedirá que escriba líneas de código para probar su comprensión del contenido. Si está utilizando un navegador de escritorio, el mejor lugar para escribir el código de ejemplo es la consola JavaScript de su navegador (consulte ¿Qué son las herramientas de desarrollo del navegador para obtener más información sobre cómo acceder a esta herramienta?).

// ¿Qué es una variable? #008000
// Una variable es un contenedor para un valor, como un número que podríamos usar en una suma, o una cadena que podríamos usar como parte de una oración.

// Ejemplo de variable
// Veamos un ejemplo simple:

// ver html...

const button1 = document.querySelector(".btn_1"),
  heading1 = document.querySelector(".h3_1");

button1.onclick = () => {
  const nombre = prompt("Cual es su nombre?");
  alert(`Hola ${nombre}, como estas?`);
  heading1.textContent = `Bienvenid@, ${nombre}`;
};

// En este ejemplo, al presionar el botón se ejecuta algo de código. La primera línea muestra un cuadro en la pantalla que le pide al lector que escriba su nombre y, a continuación, almacena el valor en una variable. La segunda línea muestra un mensaje de bienvenida que incluye su nombre, tomado del valor de la variable y la tercera línea muestra ese nombre en la página.

// Sin una variable
// Para entender por qué esto es tan útil, pensemos en cómo escribiríamos este ejemplo sin usar una variable. Terminaría viéndose algo como esto:

const button2 = document.querySelector(".btn_2"),
  heading2 = document.querySelector(".h3_2");

button2.onclick = () => {
  alert(`Hola ${prompt("Cual es tu nombre?")}, como estas?`);
  heading2.textContent = `Bienvenid@, ${prompt("Cual es tu nombre?")}`;
};

// Es posible que no entiendas completamente la sintaxis que estamos usando (¡todavía!), pero deberías poder hacerte una idea. Si no tuviéramos variables disponibles, ¡tendríamos que pedirle al lector su nombre cada vez que necesitáramos usarlo!

// Las variables simplemente tienen sentido, y a medida que aprenda más sobre JavaScript, comenzarán a convertirse en una segunda naturaleza.

// Una cosa especial acerca de las variables es que pueden contener casi cualquier cosa, no solo cadenas y números. Las variables también pueden contener datos complejos e incluso funciones completas para hacer cosas increíbles. Aprenderá más sobre esto a medida que avanza.

// Nota: Decimos que las variables contienen valores. Esta es una distinción importante que hacer. Las variables no son los valores en sí mismos; son contenedores de valores. Puedes pensar que son como pequeñas cajas de cartón en las que puedes almacenar cosas.

// Declarar una variable #008000
// Para usar una variable, primero debe crearla; más exactamente, llamamos a esto declarar la variable. Para ello, escribimos la palabra clave let seguida del nombre al que quieres llamar a tu variable:

let miNombre;
let miEdad;

// Aquí estamos creando dos variables llamadas myName y myAge. Intente escribir estas líneas en la consola de su navegador web. Después de eso, intente crear una variable (o dos) con sus propias opciones de nombre.

// Nota: En JavaScript, todas las instrucciones de código deben terminar con un punto y coma (;): el código puede funcionar correctamente para líneas individuales, pero probablemente no lo hará cuando escriba varias líneas de código juntas. Trate de adquirir el hábito de incluirlo.

// Puede probar si estos valores existen ahora en el entorno de ejecución escribiendo solo el nombre de la variable, por ejemplo.

console.log(miNombre);
console.log(miEdad);

// Actualmente no tienen valor; son contenedores vacíos. Al introducir los nombres de las variables, debe obtener un valor de undefined devuelto. Si no existen, recibirás un mensaje de error: intenta escribir

// console.log(scoobyDoo); // ReferenceError: scoobyDoo is not defined

// Nota: No confundas una variable que existe pero no tiene un valor definido con una variable que no existe en absoluto, son cosas muy diferentes. En la analogía de la caja que viste anteriormente, no existir significaría que no hay una caja (variable) para que entre un valor. Ningún valor definido significaría que hay una caja, pero no tiene valor dentro de ella.

// Inicialización de una variable #008000
// Una vez que haya declarado una variable, puede inicializarla con un valor. Para ello, escriba el nombre de la variable, seguido de un signo igual (=), seguido del valor que desea asignarle. Por ejemplo:

miNombre = "Chris";
miEdad = 34;

// Intente volver a la consola ahora y escriba estas líneas. Debería ver el valor que ha asignado a la variable devuelta en la consola para confirmarlo, en cada caso. Una vez más, puede devolver los valores de las variables escribiendo su nombre en la consola; inténtelos de nuevo:

console.log(miNombre);
console.log(miEdad);

// Puede declarar e inicializar una variable al mismo tiempo, de la siguiente manera:

let miPerro = "Rover";

console.log(miPerro);

// Esto es probablemente lo que harás la mayor parte del tiempo, ya que es más rápido que hacer las dos acciones en dos líneas separadas.

// Una nota sobre var #008000
// Probablemente también verá una forma diferente de declarar variables, utilizando la palabra clave var:

var miNombre2;
var miEdad2;

// Cuando se creó JavaScript por primera vez, esta era la única forma de declarar variables. El diseño de var es confuso y propenso a errores. Así que let creó en las versiones modernas de JavaScript, una nueva palabra clave para crear variables que funciona de manera algo diferente a var, solucionando sus problemas en el proceso.

// A continuación se explican un par de diferencias simples. No entraremos en todas las diferencias ahora, pero comenzará a descubrirlas a medida que aprenda más sobre JavaScript (si realmente desea leer sobre ellas ahora, no dude en consultar nuestra página de referencia de let).

// Para empezar, si escribe un programa JavaScript multilínea que declara e inicializa una variable, en realidad puede declarar una variable con var después de inicializarla y seguirá funcionando. Por ejemplo:

miNombre3 = "Jhon";

function registroNombre() {
  console.log(miNombre3);
}

registroNombre();

var miNombre3;

// Nota: Esto no funcionará al escribir líneas individuales en una consola de JavaScript, solo cuando se ejecutan varias líneas de JavaScript en un documento web.

// Esto funciona debido al hoisting

// El hoisting ya no funciona con let. Si cambiamos var para let entrar el ejemplo anterior, fallaría con un error. Esto es algo bueno: declarar una variable después de inicializarla resulta en un código confuso y más difícil de entender.

// En segundo lugar, cuando usas var, puedes declarar la misma variable tantas veces como quieras, pero con let no puedes. Funcionaría lo siguiente:

var miNombre4 = "Juan";
var miNombre4 = "Pablo";

console.log(miNombre4);

// Pero lo siguiente arrojaría un error en la segunda línea:

// let miNombre5 = "Sebas";
// let miNombre5 = "Fran";  // Uncaught SyntaxError: Identifier 'miNombre5' has already been declared (at main.js:123:5)

// Tendrías que hacer esto en su lugar:

let miNombre6 = "Juan";
miNombre6 = "Pedro";

console.log(miNombre6);

// Una vez más, esta es una decisión de lenguaje sensata. No hay razón para volver a declarar variables, solo hace que las cosas sean más confusas.

// Por estas razones y más, le recomendamos que use let en su código, en lugar de var. No hay ninguna razón para usar var, a menos que necesite admitir Internet Explorer 10 o anterior con su código.

// Actualización de una variable #008000
// Una vez que una variable se ha inicializado con un valor, puede cambiar (o actualizar) ese valor dándole un valor diferente. Intente introducir las siguientes líneas en la consola:

let miEdad3 = "Bob";
miEdad3 = 40;

console.log(miEdad3);

// Un aparte en las reglas de nomenclatura de variables #00aae4
// Puede llamar a una variable prácticamente lo que quiera, pero hay limitaciones. En general, debe limitarse a usar caracteres latinos (0-9, a-z, A-Z) y el carácter de subrayado.

// No debes usar otros personajes porque pueden causar errores o ser difíciles de entender para una audiencia internacional.

// No use guiones bajos al comienzo de los nombres de las variables: esto se usa en ciertas construcciones de JavaScript para significar cosas específicas, por lo que puede ser confuso.

// No uses números al principio de las variables. Esto no está permitido y causa un error.

// Una convención segura a la que debe atenerse es la llamada "minúscula camello", donde se pegan varias palabras, usando minúsculas para toda la primera palabra y luego se ponen en mayúsculas las palabras posteriores. Hemos estado usando esto para nuestros nombres de variables en el artículo hasta ahora.

// Haga que los nombres de las variables sean intuitivos, de modo que describan los datos que contienen. No solo use letras / números individuales o frases largas grandes.

// Las variables distinguen entre mayúsculas y minúsculas, por lo que myage es una variable diferente de myAge.

// Un último punto: también debe evitar el uso de palabras reservadas de JavaScript como nombres de variables; con esto, ¡nos referimos a las palabras que componen la sintaxis real de JavaScript! Por lo tanto, no puede usar palabras como var, function, let y for como nombres de variables. Los navegadores los reconocen como diferentes elementos de código, por lo que obtendrá errores.

// Nota: Puede encontrar una lista bastante completa de palabras clave reservadas para evitar en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords

// Ejemplos de buenos nombres:

// age
// myAge
// init
// initialColor
// finalOutputValue
// audio1
// audio2

// Ejemplos de mal nombre:

// 1
// a
// _12
// myage
// MYAGE
// var
// Document
// skjfndskjfnbdskjfb
// thisisareallylongvariablenameman

// Intente crear algunas variables más ahora, con la guía anterior en mente.

// Tipos de variables #008000
// Hay algunos tipos diferentes de datos que podemos almacenar en variables. En esta sección describiremos estos en breve, luego en futuros artículos, aprenderá sobre ellos con más detalle.

// Hasta ahora hemos visto los dos primeros, pero hay otros.

// Números #00aae4
// Puede almacenar números en variables, ya sea números enteros como 30 (también llamados enteros) o números decimales como 2.456 (también llamados flotadores o números de coma flotante). No es necesario declarar tipos de variables en JavaScript, a diferencia de otros lenguajes de programación. Cuando le das a una variable un valor numérico, no incluyes comillas:

let miNumero = 14;

let miNumero2 = 43.87;

console.log(miNumero);
console.log(miNumero2);

// Instrumentos de cuerda #00aae4
// Las cadenas son fragmentos de texto. Cuando se le da a una variable un valor de cadena, es necesario envolverla entre comillas simples o dobles; de lo contrario, JavaScript intenta interpretarlo como otro nombre de variable.

let despedida = "Adiós, Nos vemos luego.";

console.log(despedida);

// Booleanos #00aae4
// Los booleanos son valores verdaderos/falsos: pueden tener dos valores, true o false. Estos generalmente se usan para probar una condición, después de lo cual el código se ejecuta según corresponda. Así, por ejemplo, un caso simple sería:

let estoyAprendiendo = true;

// Mientras que en realidad se usaría más así:

let test = 6 < 3;

console.log(test);

// Esto es usar el operador "menos que" (<) para probar si 6 es menor que 3. Como era de esperar, devuelve false, ¡porque 6 no es menos de 3! Aprenderá mucho más sobre dichos operadores más adelante en el curso.

// Matrices #00aae4
// Una matriz es un objeto único que contiene varios valores entre corchetes y separados por comas. Intente introducir las siguientes líneas en la consola:

let miArrayNombres = ["Chris", "Bob", "Jim"];

let miArrayNumeros = [10, 15, 40];

// Una vez definidas estas matrices, puede acceder a cada valor por su ubicación dentro de la matriz. Pruebe estas líneas:

console.log(miArrayNombres[0]);
console.log(miArrayNumeros[1]);

// Los corchetes especifican un valor de índice correspondiente a la posición del valor que desea devolver. Es posible que haya notado que las matrices en JavaScript tienen índice cero: el primer elemento está en el índice 0.

// Objetos
// En programación, un objeto es una estructura de código que modela un objeto de la vida real. Puede tener un objeto simple que represente un cuadro y contenga información sobre su ancho, longitud y altura, o puede tener un objeto que represente a una persona y contenga datos sobre su nombre, altura, peso, qué idioma habla, cómo saludarlos y más.

// Intente introducir la siguiente línea en la consola:

let perro = {
  nombre: "Spot",
  raza: "Dálmata",
};

// Para recuperar la información almacenada en el objeto, puede utilizar la sintaxis siguiente:

console.log(perro.nombre);
console.log(perro.raza);

// Ya no veremos objetos por ahora: puede obtener más información sobre ellos en un módulo futuro..
