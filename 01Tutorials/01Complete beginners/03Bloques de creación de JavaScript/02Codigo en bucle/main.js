// Código en bucle #ff0
// Los lenguajes de programación son muy útiles para completar rápidamente tareas repetitivas, desde múltiples cálculos básicos hasta casi cualquier otra situación en la que tenga muchos elementos de trabajo similares que completar. Aquí veremos las estructuras de bucle disponibles en JavaScript que manejan tales necesidades.

// ¿Por qué son útiles los bucles? #008000
// Los bucles se tratan de hacer lo mismo una y otra vez. A menudo, el código será ligeramente diferente cada vez alrededor del bucle, o se ejecutará el mismo código pero con diferentes variables.

// Ejemplo de código en bucle #00aae4
// Supongamos que quisiéramos dibujar 100 círculos aleatorios en un elemento <canvas> (presione el botón Actualizar para ejecutar el ejemplo una y otra vez para ver diferentes conjuntos aleatorios):

// ver html...

const btnCanvas = document.querySelector(".canvasContainer button"),
  canvas = document.querySelector(".canvasContainer canvas"),
  ctx = canvas.getContext("2d");

function random(numero) {
  return Math.floor(Math.random() * numero);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(
      random(canvas.width),
      random(canvas.height),
      random(50),
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
}

btnCanvas.addEventListener("click", draw);

// Con y sin bucle #00aae4
// No tiene que entender todo el código por ahora, pero veamos la parte del código que realmente dibuja los 100 círculos:

/*

for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgba(255,0,0,0.5)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI
  );
  ctx.fill();
}

*/

// random(x)definido anteriormente en el código, devuelve un número entero entre 0 y x-1.

// Debería tener la idea básica: estamos utilizando un bucle para ejecutar 100 iteraciones de este código, cada una de las cuales dibuja un círculo en una posición aleatoria en la página. La cantidad de código necesario sería la misma si estuviéramos dibujando 100 círculos, 1000 o 10,000. Solo un número tiene que cambiar.

// Si no estuviéramos usando un bucle aquí, tendríamos que repetir el siguiente código para cada círculo que quisiéramos dibujar:

/*

ctx.beginPath();
ctx.fillStyle = "rgba(255,0,0,0.5)";
ctx.arc(
  random(canvas.width),
  random(canvas.height),
  random(50),
  0,
  2 * Math.PI
);
ctx.fill();

*/

// Esto sería muy aburrido y difícil de mantener.

// Recorrer en bucle una colección #008000
// La mayoría de las veces, cuando usas un bucle, tendrás una colección de elementos y querrás hacer algo con cada elemento.

// Un tipo de colección es el Array, que conocimos en el capítulo Arrays de este curso. Pero también hay otras colecciones en JavaScript, incluyendo Set y Map.

// El for...of bucle #00aae4
// La herramienta básica para recorrer en bucle una colección es...for...of bucle:

const animales = ["Leopardo", "Jaguar", "Tigre", "Leon"];

for (const animal of animales) {
  console.log(animal);
}

// En este ejemplo, for (const animal of animales) dice:

// 1. animales la colección, obtenga el primer artículo de la colección.

// 2. Asígnelo a la variable animal y, a continuación, ejecute el código entre los corchetes rizados {}.

// 3. Obtén el siguiente elemento y repite el paso 2 hasta que hayas llegado al final de la colección.

// map() y filter() #00aae4
// JavaScript también tiene bucles más especializados para colecciones, y mencionaremos dos de ellos aquí.

// Puede usar map() para hacer algo con cada elemento de una colección y crear una nueva colección que contenga los elementos modificados:

function aMayuscula(string) {
  return string.toUpperCase();
}

const animales2 = ["Conejo", "Puma", "Aguila Real"];

const animalesMayuscula = animales2.map(aMayuscula);

console.log(animales2);
console.log(animalesMayuscula);

// Aquí pasamos una función a animales2.map(), y map() llama a la función una vez para cada elemento de la matriz, pasando el elemento. A continuación, agrega el valor devuelto de cada llamada a la función a una nueva matriz y, finalmente, devuelve la nueva matriz. En este caso la función que proporcionamos convierte el artículo en mayúsculas, por lo que la matriz resultante contiene todos nuestros animales en mayúsculas

// ["CONEJO", "PUMA", "AGUILA REAL"];

// Puede usar filter() para probar cada elemento de una colección y crear una nueva colección que contenga solo elementos que coincidan:

function animalesConA(animal) {
  return animal.startsWith("A");
}

const animales3 = ["Leon", "Puma", "Anaconda", "Abeja", "Avestruz", "Jaguar"];

const animalesFiltrados = animales3.filter(animalesConA);

console.log(animalesFiltrados);

// Esto se parece mucho a map(), excepto que la función que pasamos devuelve un booleano: si devuelve true, entonces el elemento se incluye en la nueva matriz. Nuestra función prueba que el elemento comienza con la letra "A", por lo que el resultado es una matriz que contiene solo animales cuyos nombres comienzan con "A":

// ["Anaconda", "Abeja", "Avestruz"];

// Tenga en cuenta que map() y filter() se usan a menudo con expresiones de función, que aprenderemos en el módulo https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions Usando expresiones de función podríamos reescribir el ejemplo anterior para que sea mucho más compacto:

const animales4 = ["Puma", "Ardilla", "Elefante"];

const filtrarAnimales = animales4.filter((animal) => animal.startsWith("A"));

console.log(filtrarAnimales);

// ["Ardilla"];

// El estándar para el bucle #008000
// En el ejemplo de "círculos de dibujo" anterior, no tiene una colección de elementos para recorrer: realmente solo desea ejecutar el mismo código 100 veces. En un caso como ese, debe usar el bucle for. Tiene la sintaxis siguiente:

/*

for (inicializador; condicion; expresion-final) {
    // código a ejecutar
}

*/

// Aquí tenemos:

// 1. La palabra clave for, seguida de algunos paréntesis.

// 2. Dentro de los paréntesis tenemos tres ítems, separados por punto y coma:

// 2.1 Un inicializador: generalmente es una variable establecida en un número, que se incrementa para contar el número de veces que se ha ejecutado el bucle. A veces también se le conoce como una variable de contador..

// 2.2 Una condición: define cuándo el bucle debe detener el bucle. Esta es generalmente una expresión que presenta un operador de comparación, una prueba para ver si se ha cumplido la condición de salida.

// 2.3 Una expresión final: siempre se evalúa (o ejecuta) cada vez que el bucle ha pasado por una iteración completa. Por lo general, sirve para aumentar (o en algunos casos disminuir) la variable contraria, para acercarla al punto en que la condición ya no es true.

// 3. Algunas llaves rizadas que contienen un bloque de código: este código se ejecutará cada vez que el bucle se repita.

// Cálculo de cuadrados #00aae4
// Veamos un ejemplo real para que podamos visualizar lo que estos hacen con mayor claridad.

const resultadoCuadrados = document.querySelector(".resultados");

function calcular() {
  for (let i = 1; i < 10; i++) {
    const nuevoResultado = `${i} x ${i} = ${i * i}`;
    resultadoCuadrados.textContent += `${nuevoResultado}\n`;
  }

  resultadoCuadrados.textContent += "\nFinalizado!";
}

const btnCalcular = document.querySelector(".calcular"),
  btnLimpiar = document.querySelector(".limpiar");

btnCalcular.addEventListener("click", calcular);

btnLimpiar.addEventListener(
  "click",
  () => (resultadoCuadrados.textContent = "")
);

// Este código calcula los cuadrados para los números del 1 al 9 y escribe el resultado. El núcleo del código es el bucle for que realiza el cálculo.

// Vamos a dividir la línea for (let i = 1; i < 10; i++) en sus tres partes:

// 1. let i = 1: la variable contraria, i, comienza en 1. Tenga en cuenta que tenemos que usar let para el contador, porque lo reasignamos cada vez que damos la vuelta al bucle.

// 2. i < 10: sigue dando vueltas alrededor del bucle mientras i menor de 10.

// 3. i++: añade uno a i cada vez que recorra el bucle.

// Dentro del bucle, calculamos el cuadrado del valor actual de i, es decir: i * i. Creamos una cadena que expresa el cálculo que hicimos y el resultado, y agregamos esta cadena al texto de salida. También agregamos \n, por lo que la siguiente cadena que agreguemos comenzará en una nueva línea. Así que:

// 1. Durante la primera ejecución, i = 1, por lo que agregaremos 1 x 1 = 1.

// 2. Durante la segunda ejecución, i = 2, por lo que agregaremos 2 x 2 = 4.

// 3. Y así sucesivamente...

// 4. Cuando i a ser igual a 10 dejaremos de ejecutar el bucle y pasaremos directamente al siguiente bit de código debajo del bucle, imprimiendo el mensaje Finished! en una nueva línea.

// Bucle a través de colecciones con un bucle for #00aae4
// Puede utilizar un bucle for iterar a través de una colección, en lugar de un for...of bucle.

// Veamos de nuevo nuestro for...of ejemplo anterior:

const animales5 = ["Venado", "Tigre", "Anaconda", "Leon"];

for (const animal of animales5) {
  console.log(animal);
}

// Podríamos reescribir ese código así:

for (let i = 0; i < animales5.length; i++) {
  console.log(animales5[i]);
}

// En este bucle estamos comenzando i en 0, y deteniéndonos cuando i la longitud de la matriz. Luego, dentro del bucle, estamos usando i para acceder a cada elemento de la matriz a su vez.

// Esto funciona muy bien, y en las primeras versiones de JavaScript, for...of no existía, por lo que esta era la forma estándar de iterar a través de una matriz. Sin embargo, ofrece más posibilidades de introducir errores en su código. Por ejemplo:

// puede comenzar i en 1, olvidando que el primer índice de matriz es cero, no 1.

// Puede detenerse en i <= cats.length, olvidando que el último índice de matriz está en length - 1.

// Por razones como esta, generalmente es mejor usar for...of si puedes.

// A veces todavía necesita usar un bucle for iterar a través de una matriz. Por ejemplo, en el siguiente código queremos registrar un mensaje que enumere a nuestros gatos:

const gatos = ["Felix", "Figaro", "Romeo", "Tom"];

let misGatosFavoritos = "Mis gatos se llaman ";

for (const gato of gatos) {
  misGatosFavoritos += `${gato}, `;
}

console.log(misGatosFavoritos);

// La oración de salida final no está muy bien formada:

// Preferimos que maneje al último gato de manera diferente, Pero para hacer esto necesitamos saber cuándo estamos en la iteración del bucle final, y para hacer eso podemos usar un bucle for y examinar el valor de i:

let misGatosFavoritos2 = "Mis gatos se llaman ";

for (let i = 0; i < gatos.length; i++) {
  if (i === gatos.length - 1) {
    misGatosFavoritos2 += `y ${gatos[i]}.`;
  } else if (i === gatos.length - 2) {
    misGatosFavoritos2 += `${gatos[i]} `;
  } else {
    misGatosFavoritos2 += `${gatos[i]}, `;
  }
}

console.log(misGatosFavoritos2);

// Salir de bucles con break #008000
// Si desea salir de un bucle antes de que se hayan completado todas las iteraciones, puede utilizar la instrucción break. Ya conocimos esto en el artículo anterior cuando observamos las instrucciones switch: cuando se cumple un caso en una instrucción switch que coincide con la expresión input, la instrucción break sale inmediatamente de la instrucción switch y pasa al código después de ella.

// Es lo mismo con los bucles: una instrucción break saldrá inmediatamente del bucle y hará que el navegador pase a cualquier código que lo siga.

// ¿Digamos que queríamos buscar a través de una variedad de contactos y números de teléfono y devolver solo el número que queríamos encontrar? Primero, un HTML simple: un elemento <input> que nos permite ingresar un nombre para buscar, un elemento <button> para enviar una búsqueda y un elemento <p> para mostrar los resultados en:

// ver html...

// Ahora vamos al JavaScript:

const contactos = [
  "chris:2232322",
  "Sarah:9230444",
  "Bill:659033",
  "Mary:6730258",
  "Dianne:9839833",
];

const contactosInput = document.querySelector(".contactosInput"),
  contactosBtn = document.querySelector(".contactosBtn"),
  contactosPara = document.querySelector(".contactosPara");

function buscarNombre() {
  const buscarNombre = contactosInput.value.toLowerCase();

  contactosInput.value = "";
  contactosInput.focus();
  contactosPara.textContent = "";

  for (const contacto of contactos) {
    const splitContacto = contacto.split(":");

    if (splitContacto[0].toLowerCase() === buscarNombre) {
      contactosPara.textContent = `El numero de ${splitContacto[0]} es ${splitContacto[1]}`;
      break;
    }
  }

  if (contactosPara.textContent === "") {
    contactosPara.textContent = "El contacto no fue encontrado.";
  }
}

contactosBtn.addEventListener("click", buscarNombre);
contactosInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    buscarNombre();
  }
});

// 1. En primer lugar, tenemos algunas definiciones de variables: tenemos una matriz de información de contacto, y cada elemento es una cadena que contiene un nombre y un número de teléfono separados por dos puntos.

// 2. A continuación, adjuntamos un detector de eventos al btn) para que cuando se presione se ejecute algún código para realizar la búsqueda y devolver los resultados.

// 3. Almacenamos el valor ingresado en la entrada de texto en una variable llamada searchName, antes de vaciar la entrada de texto y enfocarla nuevamente, lista para la siguiente búsqueda. Tenga en cuenta que también ejecutamos el método toLowerCase() en la cadena, de modo que las búsquedas no distingan entre mayúsculas y minúsculas.

// 4. Ahora vamos a la parte interesante, el for...of bucle:

// 4.1 Dentro del bucle, primero dividimos el contacto actual en el carácter de dos puntos y almacenamos los dos valores resultantes en una matriz llamada splitContact.

// 4.2 A continuación, utilizamos una instrucción condicional para comprobar si splitContact[0] (el nombre del contacto, de nuevo en minúsculas con toLowerCase()) es igual al searchName introducido. Si es así, ingresamos una cadena en el párrafo para informar cuál es el número del contacto y usamos break para terminar el bucle.

// 5. Después del bucle, comprobamos si establecemos un contacto, y si no, establecemos el texto del párrafo en "Contacto no encontrado".

// Omitir iteraciones con continue #008000
// La instrucción continue funciona de manera similar para break, pero en lugar de salir del bucle por completo, salta a la siguiente iteración del bucle. Veamos otro ejemplo que toma un número como entrada y devuelve solo los números que son cuadrados de enteros (números enteros).

// El HTML es básicamente el mismo que el último ejemplo: una entrada de texto simple y un párrafo para la salida.

// ver html...

const enterosInput = document.querySelector(".enterosInput"),
  enterosBtn = document.querySelector(".enterosBtn"),
  enterosPara = document.querySelector(".enterosPara");

function cuadradosEnteros() {
  enterosPara.textContent = "Salida: ";
  const numero = enterosInput.value;
  enterosInput.value = "";
  enterosInput.focus();

  for (let i = 1; i < numero; i++) {
    let sqRoot = Math.sqrt(i);
    if (Math.floor(sqRoot) !== sqRoot) {
      continue;
    }
    enterosPara.textContent += `${i}, `;
  }
}

enterosBtn.addEventListener("click", cuadradosEnteros);
enterosInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    cuadradosEnteros();
  }
});

// 1. En este caso, la entrada debe ser un número (num). Al bucle for se le da un contador que comienza en 1 (ya que no estamos interesados en 0 en este caso), una condición de salida que dice que el bucle se detendrá cuando el contador se vuelva más grande que el num entrada, y un iterador que agrega 1 al contador cada vez.

// 2. Dentro del bucle, encontramos la raíz cuadrada de cada número usando Math.sqrt(i), luego verificamos si la raíz cuadrada es un entero probando si es la misma que ella cuando se ha redondeado al entero más cercano (esto es lo que Math.floor() hace con el número que se pasa).

// 3. Si la raíz cuadrada y la raíz cuadrada redondeada no son iguales entre sí (!==), significa que la raíz cuadrada no es un entero, por lo que no estamos interesados en ella. En tal caso, usamos la continue para saltar a la siguiente iteración de bucle sin registrar el número en ninguna parte.

// 4. Si la raíz cuadrada es un entero, saltamos el bloque if por completo, por lo que la continue no se ejecuta; en su lugar, concatenamos el valor i actual más un espacio al final del contenido del párrafo.

// while y do...while #008000
// for no es el único tipo de bucle disponible en JavaScript. En realidad, hay muchos otros y, aunque no necesita entender todos estos ahora, vale la pena echar un vistazo a la estructura de un par de otros para que pueda reconocer las mismas características en el trabajo de una manera ligeramente diferente.

// Primero, echemos un vistazo al bucle while. La sintaxis de este bucle se ve así:

/*

initializer;
while (condition) {
  // code to run

  final - expression;
}

*/

// Echemos un vistazo de nuevo a nuestro ejemplo de lista de gatos, pero reescrito para usar un bucle de tiempo:

const gatos2 = ["Pete", "Fufu", "Jasmine"];

let misGatosFavoritos3 = "Mis gatos se llaman ";

let i = 0;

while (i < gatos2.length) {
  if (i === gatos2.length - 1) {
    misGatosFavoritos3 += `y ${gatos2[i]}`;
  } else if (i === gatos2.length - 2) {
    misGatosFavoritos3 += `${gatos2[i]} `;
  } else {
    misGatosFavoritos3 += `${gatos2[i]}, `;
  }

  i++;
}

console.log(misGatosFavoritos3);

// El bucle do... while es muy similar, pero proporciona una variación en la estructura while:

/*

initializer
do {
  // code to run

  final-expression
} while (condition)

*/

// En este caso, el inicializador vuelve a ser lo primero, antes de que se inicie el bucle. La palabra clave precede directamente a las llaves rizadas que contienen el código a ejecutar y la expresión final.

// La principal diferencia entre undo...while bucle y bucle while es que el código dentro de un do...while bucle siempre se ejecuta al menos una vez. Esto se debe a que la condición viene después del código dentro del bucle. Por lo tanto, siempre ejecutamos ese código, luego verificamos si necesitamos ejecutarlo nuevamente. En while comprobación es lo primero, por lo que es posible que el código nunca se ejecute.for

const gatos4 = ["Chulo", "Gaspy", "Fredy"];

let misGatosFavoritos4 = "Mis gatos se llaman ";

let x = 0;

do {
  if (x === gatos4.length - 1) {
    misGatosFavoritos4 += `y ${gatos4[x]}`;
  } else if (x === gatos4.length - 2) {
    misGatosFavoritos4 += `${gatos4[x]} `;
  } else {
    misGatosFavoritos4 += `${gatos4[x]}, `;
  }

  x++;
} while (x < gatos4.length);

console.log(misGatosFavoritos4);

// Advertencia: Con el tiempo y el hacer... mientras que, como con todos los bucles, debe asegurarse de que el inicializador se incremente o, según el caso, disminuya, para que la condición finalmente se vuelva falsa. De lo contrario, el bucle continuará para siempre, y el navegador lo obligará a detenerse o se bloqueará. Esto se denomina bucle infinito. #FF0000

// Aprendizaje activo: Inicie la cuenta regresiva #008000
// En este ejercicio, queremos que imprima una cuenta regresiva de lanzamiento simple para el cuadro de salida, desde 10 hasta Blastoff. En concreto, queremos que:

// En este ejercicio, queremos que imprima una cuenta regresiva de lanzamiento simple para el cuadro de salida, desde 10 hasta Blastoff. En concreto, queremos que:

// Bucle de 10 a 0. Le hemos proporcionado un inicializador: let i = 10;.

// Para cada iteración, cree un nuevo párrafo y agréguelo al <div>, que hemos seleccionado usando const output = document.querySelector('.output');. En los comentarios, le proporcionamos tres líneas de código que deben usarse en algún lugar dentro del bucle:

// --const para = document.createElement('p'); — crea un nuevo párrafo.

// --output.appendChild(para); — adjunta el párrafo al <div>.

// --para.textContent = hace que el texto dentro del párrafo sea igual a lo que coloque en el lado derecho, después del signo igual.

// Los diferentes números de iteración requieren que se coloque texto diferente en el párrafo para esa iteración (necesitará una instrucción condicional y múltiples para.textContent = líneas):

// --Si el número es 10, imprima "Cuenta regresiva 10" en el párrafo.

// --Si el número es 0, imprima "¡Despegue!" en el párrafo.

// --Para cualquier otro número, imprima solo el número en el párrafo.

// ¡Recuerda incluir un iterador! Sin embargo, en este ejemplo estamos contando hacia abajo después de cada iteración, no hacia arriba, por lo que no quieres i++, ¿cómo iteras hacia abajo?

// Nota: Si comienza a escribir el bucle (por ejemplo, while(i>=0)), es posible que el navegador se atasque porque aún no ha introducido la condición final. Así que ten cuidado con esto. Puede comenzar a escribir su código en un comentario para tratar este problema y eliminar el comentario después de que termine.

const contenedorCR = document.querySelector(".cuentaRegresivaContainer");

contenedorCR.innerHTML = "";

let z = 10;

while (z >= 0) {
  const para = document.createElement("p");
  contenedorCR.appendChild(para);
  if (z === 10) {
    para.textContent = "Cuenta Regresiva 10";
  } else if (z === 0) {
    para.textContent = "Despegue";
  } else {
    para.textContent = z;
  }

  z--;
}

// Aprendizaje activo: Rellenar una lista de invitados #008000
// En este ejercicio, queremos que tome una lista de nombres almacenados en una matriz y los coloque en una lista de invitados. Pero no es tan fácil: ¡no queremos dejar entrar a Phil y Lola porque son codiciosos y groseros, y siempre comen toda la comida! Tenemos dos listas, una para que los huéspedes admitan y otra para que los huéspedes se nieguen.

// En concreto, queremos que:

// En concreto, queremos que:

// 1. Escriba un bucle que iterará a través de la matriz people.

// 2. Durante cada iteración de bucle, compruebe si el elemento de matriz actual es igual a "Phil" o "Lola" mediante una instrucción condicional:

// 2.1 Si es así, concatenar el elemento de matriz al final del textContent del párrafo refused, seguido de una coma y un espacio.

// 2.2 Si no es así, concatenar el elemento de matriz al final del textContent del párrafo admitted, seguido de una coma y un espacio.

// Ya te hemos proporcionado:

// ---refused.textContent += — los comienzos de una línea que concatenará algo al final de refused.textContent.

// ---admitted.textContent += — los comienzos de una línea que concatenará algo al final de admitted.textContent.

// Pregunta de bonificación adicional: después de completar las tareas anteriores con éxito, se quedará con dos listas de nombres, separadas por comas, pero estarán desordenadas: habrá una coma al final de cada una. ¿Puedes averiguar cómo escribir líneas que corten la última coma en cada caso y agreguen un punto completo al final? Echa un vistazo al artículo Métodos de cadena útiles para obtener ayuda.

const personas = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const personasContainer = document.querySelectorAll(".personasContainer p"),
  personasAdmitidas = document.querySelector(".admitidos"),
  personasNoAdmitidas = document.querySelector(".noAdmitidos");

for (const persona of personas) {
  if (persona === "Phil" || persona === "Lola") {
    personasNoAdmitidas.textContent += `${persona}, `;
  } else {
    personasAdmitidas.textContent += `${persona}, `;
  }
}

for (const para of personasContainer) {
  para.textContent =
    para.textContent.slice(0, para.textContent.length - 2) + ".";
}
