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
