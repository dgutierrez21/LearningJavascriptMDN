// Números y fechas #ff0

// Este capítulo presenta los conceptos, objetos y funciones utilizados para trabajar y realizar cálculos con números y fechas en JavaScript. Esto incluye el uso de números escritos en varias bases, incluyendo la decimal, la binaria y la hexadecimal, así como el uso del objeto global Math para realizar una amplia variedad de operaciones matemáticas con números.

// Números #008000
// En JavaScript, los números se implementan en formato binario de doble precisión de 64 bits IEEE 754 (es decir, un número entre ±2^-1022 y ±2^+1023, o aproximadamente entre ±10^-308 y ±10^+308, con una precisión numérica de 53 bits). Los valores enteros de hasta ±2^53 - 1 pueden representarse con exactitud.

// Además de poder representar números de punto flotante, el tipo de número tiene tres valores simbólicos: +Infinito, -Infinito y NaN (not-a-number).

// Véase también Tipos de datos y estructuras de JavaScript para conocer el contexto de otros tipos primitivos en JavaScript.

// Se pueden utilizar cuatro tipos de literales numéricos: decimal, binario, octal y hexadecimal.

// Números decimales #00aae4
// 1234567890
// 42

// // Precaución al utilizar ceros a la izquierda:

// 0888 // 888 analizado como decimal
// 0777 // analizado como octal en modo no estricto (511 en decimal)

// Tenga en cuenta que los literales decimales pueden comenzar con un cero (0) seguido de otro dígito decimal, pero si cada dígito después del 0 inicial es menor que 8, el número se analiza como un número octal.

// Números binarios #00aae4
// La sintaxis de los números binarios utiliza un cero inicial seguido de una "B" latina minúscula o mayúscula (0b o 0B). Si los dígitos después del 0b no son 0 o 1, se lanza el siguiente SyntaxError: "Faltan dígitos binarios después del 0b".

// const FLT_SIGNBIT = 0b1000000000000000000000000000; // 2147483648
// const FLT_EXPONENT = 0b0111111110000000000000000000; // 2139095040
// const FLT_MANTISSA = 0B0000000001111111111111111111; // 8388607

// Números octales #00aae4
// La sintaxis estándar para los números octales es anteponerles el 0o. Por ejemplo

// const a = 0o10; // 8

// También existe una sintaxis heredada para los números octales: prefijar el número octal con un cero: 0644 === 420 y "\045" === "%". Si los dígitos después del 0 están fuera del rango de 0 a 7, el número se interpretará como un número decimal.

// const n = 0755; // 493
// const m = 0644; // 420

// El modo estricto prohíbe esta sintaxis octal.

// Números hexadecimales #00aae4
// La sintaxis de los números hexadecimales utiliza un cero inicial seguido de una "X" latina minúscula o mayúscula (0x o 0X). Si los dígitos después de 0x están fuera del rango (0123456789ABCDEF), se lanza el siguiente SyntaxError: "Identifier starts immediately after numeric literal".

// 0xFFFFFFFFFFFFF // 295147905179352830000
// 0x123456789ABCDEF // 81985529216486900
// 0XA // 10

// Exponenciación #00aae4
// 1E3 // 1000
// 2e6 // 2000000
// 0.1e2 // 10

// Objeto Number #008000
// El objeto Número incorporado tiene propiedades para las constantes numéricas, como el valor máximo, el no-número y el infinito. No se pueden cambiar los valores de estas propiedades y se utilizan de la siguiente manera

// const biggestNum = Number.MAX_VALUE;
// const smallestNum = Number.MIN_VALUE;
// const infiniteNum = Number.POSITIVE_INFINITY;
// const negInfiniteNum = Number.NEGATIVE_INFINITY;
// const notANum = Número.NaN;

// Siempre se hace referencia a una propiedad del objeto Number predefinido como se muestra arriba, y no como una propiedad de un objeto Number creado por usted.

// La siguiente tabla resume las propiedades del objeto Number.

// ver imagen...

// El prototipo Number proporciona métodos para recuperar información de objetos Number en varios formatos. En la tabla siguiente se resumen los métodos de Number.prototype.

// ver imagen...

// Objeto Math #008000
// El objeto Math incorporado tiene propiedades y métodos para las constantes y funciones matemáticas. Por ejemplo, la propiedad PI del objeto Math tiene el valor de pi (3.141...), que se utilizaría en una aplicación como

console.log(Math.PI);

// Del mismo modo, las funciones matemáticas estándar son métodos de Math. Estas incluyen funciones trigonométricas, logarítmicas, exponenciales y otras. Por ejemplo, si quieres usar la función trigonométrica seno, escribirías

// Math.sin(1.56)

// Tenga en cuenta que todos los métodos trigonométricos de Math toman argumentos en radianes.

// La siguiente tabla resume los métodos del objeto Math.

// ver imagen...

// BigInts #008000
// Un defecto de los valores numéricos es que sólo tienen 64 bits. En la práctica, debido al uso de la codificación IEEE 754, no pueden representar con precisión ningún entero mayor que Number.MAX_SAFE_INTEGER (que es 253 - 1). Para resolver la necesidad de codificar datos binarios y para interoperar con otros lenguajes que ofrecen enteros anchos como i64 (enteros de 64 bits) e i128 (enteros de 128 bits), JavaScript también ofrece otro tipo de datos para representar enteros arbitrariamente grandes: BigInt.

// Un BigInt puede definirse como un literal entero con el sufijo n:

// const b1 = 123n;
// // Puede ser arbitrariamente grande.
// const b2 = -1234567890987654321n;

// Los BigInts también pueden construirse a partir de valores numéricos o de cadenas de caracteres utilizando el constructor BigInt.

// const b1 = BigInt(123);
// // El uso de una cadena evita la pérdida de precisión, ya que los números largos
// // los literales largos no representan lo que parecen.
// const b2 = BigInt("-1234567890987654321");

// Conceptualmente, un BigInt es sólo una secuencia de bits arbitrariamente larga que codifica un número entero. Puede realizar con seguridad cualquier operación aritmética sin perder precisión o desbordarse.

// const integer = 12 ** 34; // 4.9222352429520264e+36; sólo tiene una precisión limitada
// const bigint = 12n ** 34n; // 4922235242952026704037113243122008064n

// En comparación con los números, los valores BigInt ofrecen una mayor precisión a la hora de representar enteros grandes; sin embargo, no pueden representar números de punto flotante. Por ejemplo, la división se redondearía a cero:

// const bigintDiv = 5n / 2n; // 2n, porque no hay 2.5 en BigInt

// Las funciones matemáticas no se pueden utilizar en valores BigInt. Hay una propuesta abierta para sobrecargar ciertas funciones matemáticas como Math.max() para permitir valores BigInt.

// La elección entre BigInt y number depende de su caso de uso y del rango de su entrada. La precisión de los números ya debería ser capaz de acomodarse a la mayoría de las tareas cotidianas, y los BigInt son más adecuados para manejar datos binarios.

// Lea más sobre lo que puede hacer con los valores BigInt en la sección Expresiones y Operadores, o en la referencia BigInt.
