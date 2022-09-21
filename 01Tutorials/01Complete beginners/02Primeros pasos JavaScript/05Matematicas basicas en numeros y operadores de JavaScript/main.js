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
