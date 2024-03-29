// Matemáticas básicas en JavaScript: números y operadores #ff0
// En este punto del curso, discutimos las matemáticas en JavaScript: cómo podemos usar operadores y otras características para manipular con éxito los números para hacer nuestras ofertas.

// A todo el mundo le encantan las matemáticas #008000
// De acuerdo, tal vez no. A algunos de nosotros nos gustan las matemáticas, algunos de nosotros hemos odiado las matemáticas desde que tuvimos que aprender tablas de multiplicar y división larga en la escuela, y algunos de nosotros nos sentamos en algún lugar entre los dos. Pero ninguno de nosotros puede negar que las matemáticas son una parte fundamental de la vida sin la que no podemos llegar muy lejos. Esto es especialmente cierto cuando estamos aprendiendo a programar JavaScript (o cualquier otro lenguaje para el caso): gran parte de lo que hacemos se basa en el procesamiento de datos numéricos, el cálculo de nuevos valores, etc., que no se sorprenderá al saber que JavaScript tiene un conjunto completo de funciones matemáticas disponibles.

// Este artículo discute solo las partes básicas que necesita saber ahora.

// Tipos de números #00aae4
// En programación, incluso el humilde sistema de números decimales que todos conocemos tan bien es más complicado de lo que se podría pensar. Usamos diferentes términos para describir diferentes tipos de números decimales, por ejemplo:

// Los enteros son números de coma flotante sin fracción. Pueden ser positivos o negativos, por ejemplo, 10, 400 o -5.

// Los números de coma flotante (floats) tienen puntos decimales y decimales, por ejemplo, 12.5 y 56.7786543.

// Los dobles son un tipo específico de número de coma flotante que tienen mayor precisión que los números de coma flotante estándar (lo que significa que son precisos a un mayor número de decimales).

// ¡Incluso tenemos diferentes tipos de sistemas numéricos! Decimal es base 10 (lo que significa que usa 0–9 en cada columna), pero también tenemos cosas como:

// Binario — El lenguaje de nivel más bajo de las computadoras; 0s y 1s.

// Octal — Base 8, usa 0–7 en cada columna.

// Hexadecimal — Base 16, usa 0–9 y luego a–f en cada columna. Es posible que haya encontrado estos números antes al establecer colores en CSS.

// Antes de que comiences a preocuparte por el derretimiento de tu cerebro, ¡detente allí mismo! Para empezar, vamos a ceñirnos a los números decimales a lo largo de este curso; rara vez te encontrarás con la necesidad de comenzar a pensar en otros tipos, si es que alguna vez lo haces.

// La segunda buena noticia es que, a diferencia de otros lenguajes de programación, JavaScript solo tiene un tipo de datos para números, tanto enteros como decimales: lo has adivinado, Number. Esto significa que cualquiera que sea el tipo de números con los que esté tratando en JavaScript, los maneja exactamente de la misma manera.

// Nota: En realidad, JavaScript tiene un segundo tipo de número, BigInt, utilizado para enteros muy, muy grandes. Pero para los propósitos de este curso, solo nos preocuparemos por Number.

// Todo son números para mí #00aae4
// Juguemos rápidamente con algunos números para volver a familiarizarnos con la sintaxis básica que necesitamos. Introduzca los comandos que se enumeran a continuación en la consola de JavaScript de las herramientas de desarrollo.

// 1. En primer lugar, declaremos un par de variables e inicialicemos con un entero y un float, respectivamente, luego escribamos los nombres de las variables para verificar que todo esté en orden:

const myInt = 19;
const myFloat = 6.667;

console.log(myInt);
console.log(myFloat);

// 2. Los valores numéricos se escriben sin comillas: intente declarar e inicializar un par de variables más que contengan números antes de continuar.

// 3. Ahora vamos a comprobar que nuestras dos variables originales son del mismo tipo de datos. Hay un operador llamado typeof en JavaScript que hace esto. Ingrese las dos líneas a continuación como se muestra:

console.log(typeof myInt);
console.log(typeof myFloat);

// Debería obtener "number" devuelto en ambos casos: esto hace que las cosas sean mucho más fáciles para nosotros que si diferentes números tuvieran diferentes tipos de datos, y tuviéramos que lidiar con ellos de diferentes maneras. ¡Ufff!

// Métodos numéricos útiles #00aae4
// El objeto Number, cuya instancia representa todos los números estándar que usará en su JavaScript, tiene una serie de métodos útiles disponibles para que pueda manipular números. No cubrimos estos en detalle en este artículo porque queríamos mantenerlo como una simple introducción y solo cubrir los elementos esenciales básicos reales por ahora; sin embargo, una vez que haya leído este módulo un par de veces, vale la pena ir a las páginas de referencia de objetos y aprender más sobre lo que está disponible.

// Por ejemplo, para redondear el número a un número fijo de decimales, utilice el método toFixed()). Escriba las siguientes líneas en la consola de su navegador:

const perdidaDeDecimales = 1.651345345;

console.log(perdidaDeDecimales);

const dosPosicionesDecimales = perdidaDeDecimales.toFixed(2);

console.log(dosPosicionesDecimales);

// Conversión a tipos de datos numéricos #00aae4
// A veces puede terminar con un número que se almacena como un tipo de cadena, lo que dificulta la realización de cálculos con él. Esto sucede más comúnmente cuando los datos se ingresan en una entrada de formulario y el tipo de entrada es texto. Hay una manera de resolver este problema: pasar el valor de cadena al constructor Number() para devolver una versión numérica del mismo valor.

// Por ejemplo, intente escribir estas líneas en la consola:

let miNumero = "74";
miNumero += 3;

console.log(miNumero);

// Terminas con el resultado 743, no 77, porque myNumber en realidad se define como una cadena. Puede probar esto escribiendo lo siguiente:

console.log(typeof miNumero);

// Para corregir el cálculo, puede hacer lo siguiente:

let miNumero2 = "74";

miNumero2 = Number(miNumero2) + 3;

console.log(miNumero2);

// Operadores aritméticos #008000
// Los operadores aritméticos son los operadores básicos que utilizamos para hacer sumas en JavaScript:

// ver imagen...

// Nota: A veces verás números involucrados en la aritmética conocidos como operandos..

// Nota: A veces puede ver exponentes expresados utilizando el método Math.pow() más antiguo, que funciona de una manera muy similar. Por ejemplo, en Math.pow(7, 3), 7 es la base y 3 es el exponente, por lo que el resultado de la expresión es 343. Math.pow(7, 3) es equivalente a 7**3.

// Probablemente no necesitemos enseñarle cómo hacer matemáticas básicas, pero nos gustaría probar su comprensión de la sintaxis involucrada. Intente ingresar los ejemplos a continuación en la consola de JavaScript de su herramienta de desarrollo para familiarizarse con la sintaxis.

// Primero intente ingresar algunos ejemplos simples propios, como

console.log(10 + 7);
console.log(9 * 8);
console.log(63 / 3);
console.log(60 % 3);

// También puede intentar declarar e inicializar algunos números dentro de las variables, e intentar usarlos en las sumas: las variables se comportarán exactamente como los valores que tienen para los fines de la suma. Por ejemplo:

const num1 = 10;
const num2 = 50;

console.log(num1 + num2);
console.log(num2 - num1);
console.log(9 * num1);
console.log(num1 ** 3);
console.log(num2 + num1 / 8 + 2);

// Es posible que partes de este último conjunto de cálculos no le den el resultado que esperaba; la siguiente sección bien podría dar la respuesta de por qué.

// Precedencia del operador #00aae4
// Veamos el último ejemplo de arriba, asumiendo que num2 tiene el valor 50 y num1 tiene el valor 10 (como se indicó originalmente anteriormente):

console.log(num2 + num1 / 8 + 2);

// Como ser humano, puedes leer esto como "50 más 10 es igual a 60", luego "8 más 2 es igual a 10" y finalmente "60 dividido por 10 es igual a 6".

// Pero el navegador hace "10 dividido por 8 es igual a 1.25", luego "50 más 1.25 más 2 es igual a 53.25".

// Esto se debe a la precedencia del operador: algunos operadores se aplican antes que otros al calcular el resultado de un cálculo (denominado expresión, en programación). La precedencia del operador en JavaScript es la misma que se enseña en las clases de matemáticas en la escuela: multiplicar y dividir siempre se hacen primero, luego sumar y restar (el cálculo siempre se evalúa de izquierda a derecha).

// Si desea anular la precedencia del operador, puede poner paréntesis alrededor de las partes que desea que se traten explícitamente primero. Entonces, para obtener un resultado de 6, podríamos hacer esto:

// Si desea anular la precedencia del operador, puede poner paréntesis alrededor de las partes que desea que se traten explícitamente primero. Entonces, para obtener un resultado de 6, podríamos hacer esto:

console.log((num2 + num1) / (8 + 2));

// Pruébalo y verás.

// Nota: Puede encontrar una lista completa de todos los operadores de JavaScript y su precedencia en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Operadores de incremento y disminución #008000
// A veces querrás sumar o restar repetidamente uno a o desde un valor de variable numérica. Esto se puede hacer cómodamente utilizando los operadores de incremento (++) y decremento (--). Usamos ++ en nuestro juego "Adivina el número" en nuestro primer artículo de splash en JavaScript, cuando agregamos 1 a nuestra variable guessCount para realizar un seguimiento de cuántas conjeturas le quedan al usuario después de cada turno.

// contadorAdivinanza++;

// Intentemos jugar con estos en su consola. Para empezar, tenga en cuenta que no puede aplicarlos directamente a un número, lo que puede parecer extraño, pero estamos asignando a una variable un nuevo valor actualizado, no operando sobre el valor en sí. Lo siguiente devolverá un error:

// console.log(1++); // Uncaught SyntaxError: Invalid left-hand side expression in postfix operation (at main.js:146:13)

// Por lo tanto, solo puede aumentar una variable existente. Prueba esto:

let num3 = 4;

num3++;

console.log(num3);

// ¡Está bien, extrañeza número 2! Cuando haga esto, verá un valor de 4 devuelto, esto se debe a que el navegador devuelve el valor actual y luego incrementa la variable. Puede ver que se ha incrementado si devuelve el valor de la variable nuevamente:

// Lo mismo ocurre con -- : pruebe lo siguiente

let num4 = 10;
num4--;

console.log(num4);

// Nota: Puede hacer que el navegador lo haga al revés (incrementar / disminuir la variable y luego devolver el valor) colocando el operador al principio de la variable en lugar del final. Pruebe los ejemplos anteriores de nuevo, pero esta vez use ++num1 y --num2.

let num5 = 20;
++num5;

console.log(num5);

// Operadores de asignación #008000
// Los operadores de asignación son operadores que asignan un valor a una variable. Ya hemos utilizado el más básico, =, cargas de veces: asigna a la variable de la izquierda el valor indicado a la derecha:

let x = 5; // x contiene el valor 5
let y = 3; // y contiene el valor 3

x = y; // x contiene ahora el mismo valor que contiene y, 3

console.log(`y = ${x} | x = ${y}`);

// Pero hay algunos tipos más complejos, que proporcionan accesos directos útiles para mantener su código más ordenado y eficiente. Los más comunes se enumeran a continuación:

// ver imagen...

// Intente escribir algunos de los ejemplos anteriores en su consola, para tener una idea de cómo funcionan. En cada caso, vea si puede adivinar cuál es el valor antes de escribir la segunda línea.

// Tenga en cuenta que puede usar felizmente otras variables en el lado derecho de cada expresión, por ejemplo:

let x1 = 3; // x1 contiene el valor de 3
let y1 = 4; // y1 contiene el valor de 4

x1 *= y1; // x1 ahora contiene el valor de 12

console.log(x1);

// ejemplo 2

let x2 = 10;
let y2 = 5;

x2 += y2;

console.log(x2);

// Nota: Hay muchos otros operadores de asignación disponibles, pero estos son los básicos que debe aprender ahora. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators

// Operadores de comparación #008000
// A veces querremos ejecutar pruebas verdaderas / falsas, luego actuar en consecuencia dependiendo del resultado de esa prueba; para hacer esto, usamos operadores de comparación..

// ver imagen...

// ejemplos

// igualdad estricta

console.log(5 === 5 + 3);
console.log(5 === 3 + 2);

// estricta no igualdad

console.log(5 !== 5 + 3);
console.log(5 !== 3 + 2);

// menor que

console.log(10 < 5);

// mayor que

console.log(10 > 5);

// menor o igual que

console.log(5 <= 5);

// mayor o igual que

console.log(10 > 10);

// tenga en cuenta que los operadores de menor o igual que / mayor o igual que, no hacen una comparacion estricta:

console.log(5 >= "5");

// para realizar este tipo de comparacion se tiene que hacer uso de los operadores logicos que se veran más adelante. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

console.log(5 >= "5" || 5 >= "5");

// Nota: Es posible que veas a algunas personas usando == y != en sus pruebas de igualdad y no igualdad. Estos son operadores válidos en JavaScript, pero difieren de ===/!==. Las versiones anteriores prueban si los valores son los mismos, pero no si los tipos de datos de los valores son los mismos. Estas últimas versiones estrictas prueban la igualdad tanto de los valores como de sus tipos de datos. Las versiones estrictas tienden a resultar en menos errores, por lo que le recomendamos que las use.

// Si intenta ingresar algunos de estos valores en una consola, verá que todos devuelven valores true / false, esos booleanos que mencionamos en el último artículo. Estos son muy útiles, ya que nos permiten tomar decisiones en nuestro código, y se utilizan cada vez que queremos hacer una elección de algún tipo. Por ejemplo, los booleanos se pueden usar para:

// Mostrar la etiqueta de texto correcta en un botón en función de si una función está activada o desactivada

// Mostrar un mensaje de game over si un juego ha terminado o un mensaje de victoria si el juego se ha ganado

// Muestre el saludo de temporada correcto dependiendo de la temporada navideña que sea

// Acercar o alejar un mapa en función del nivel de zoom seleccionado

// Veremos cómo codificar dicha lógica cuando veamos las declaraciones condicionales en un artículo futuro. Por ahora, veamos un ejemplo rápido:

// ver html...

const btn = document.querySelector(".btn"),
  txt = document.querySelector(".container p"),
  msjInicialBtn = "Arrancar la máquina";

btn.addEventListener("click", botonActualizacion);

function botonActualizacion() {
  if (btn.textContent === msjInicialBtn) {
    btn.textContent = "Detener la máquina";
    txt.classList.remove("text-danger");
    txt.classList.add("text-success");
    txt.textContent = "¡La máquina ha arrancado!";
  } else {
    btn.textContent = msjInicialBtn;
    txt.classList.remove("text-success");
    txt.classList.add("text-danger");
    txt.textContent = "La máquina está detenida.";
  }
}

// Puede ver el operador de igualdad que se está utilizando justo dentro de la función updateBtn()). En este caso, no estamos probando si dos expresiones matemáticas tienen el mismo valor, estamos probando si el contenido de texto de un botón contiene una cierta cadena, pero sigue siendo el mismo principio en funcionamiento. Si el botón está diciendo actualmente "Iniciar máquina" cuando se presiona, cambiamos su etiqueta a "Detener máquina" y actualizamos la etiqueta según corresponda. Si el botón está diciendo actualmente "Detener máquina" cuando se presiona, volvemos a cambiar la pantalla.

// Nota: Tal control que intercambia entre dos estados generalmente se conoce como un interruptor. Alterna entre un estado y otro: luz encendida, luz apagada, etc.
