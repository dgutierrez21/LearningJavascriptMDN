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
