// El método at() toma un valor entero y devuelve una nueva cadena formada por la única unidad de código UTF-16 situada en el desplazamiento especificado. Este método admite enteros positivos y negativos. Los enteros negativos cuentan hacia atrás desde el último carácter de cadena.

// Parámetros
// índice
// El índice (posición) del carácter de la cadena que debe devolverse. Admite la indexación relativa desde el final de la cadena cuando se le pasa un índice negativo; es decir, si se utiliza un número negativo, el carácter devuelto se encontrará contando hacia atrás desde el final de la cadena.

// Valor devuelto
// Una cadena consistente en la unidad de código UTF-16 localizada en la posición especificada. Devuelve undefined si no se puede encontrar el índice dado.

console.log(
  `Utilizando un índice de 5 el carácter devuelto es ${string.at(5)}`
);

console.log(
  `Utilizando un índice de -4 el carácter devuelto es ${string.at(-4)}`
);
