// String.prototype.split()
// El método split() toma un patrón y divide un String en una lista ordenada de subcadenas buscando el patrón, coloca estas subcadenas en una matriz y devuelve la matriz.

// Sintaxis
// split()
// split(separator)
// split(separator, limit)

// Parámetros
// separator opcional
// El patrón que describe dónde debe ocurrir cada división. Puede ser una cadena o un objeto con un método Symbol.split, el ejemplo típico es una expresión regular. Si no está definida, la cadena de destino original se devuelve envuelta en una matriz.

// limit Opcional
// Un entero no negativo que especifica un límite en el número de subcadenas que se incluirán en la matriz. Si se proporciona, divide la cadena en cada aparición del separator especificado, pero se detiene cuando se han colocado entradas limit en la matriz. Cualquier texto sobrante no se incluye en la matriz en absoluto.

// La matriz puede contener menos entradas que el límite si se alcanza el final de la cadena antes de que se alcance el limit.
// Si limit es 0, []
// Valor devuelto
// Array de cadenas, dividida en cada punto donde se produce el separator en la cadena dada.

// Descripción
// Si el separador es una cadena no vacía, la cadena de destino se divide por todas las coincidencias del separador sin incluir el separator en los resultados.separator separator Por ejemplo, una cadena que contiene valores separados por tabulaciones (TSV) podría analizarse pasando un carácter de tabulación como separador, como myString.split("\t") Si separator contiene varios caracteres, se debe encontrar toda esa secuencia de caracteres para dividirla. Si el separator aparece al principio (o al final) de la cadena, todavía tiene el efecto de dividirse, lo que resulta en una cadena vacía (es decir, longitud cero) que aparece en la primera (o última) posición de la matriz devuelta. Si el separator no se produce en str, la matriz devuelta contiene un elemento que consta de toda la cadena.

// Si separator es una cadena vacía (""), str se convierte en una matriz de cada uno de sus "caracteres"" UTF-16, sin cadenas vacías en ninguno de los extremos de la cadena resultante.

// Nota: """.split("") es, por lo tanto, la única forma de producir una matriz vacía cuando se pasa una cadena como separator.

// Advertencia: Cuando la cadena vacía ("") se utiliza como separador, la cadena no se divide por caracteres percibidos por el usuario (clústeres de grafemas) o caracteres unicode (puntos de código), sino por unidades de código UTF-16. Esto destruye los pares sustitutos. Consulte "¿Cómo se obtiene una cadena a una matriz de caracteres en JavaScript?" en StackOverflow.

// Si el separator es un regexp que coincide con cadenas vacías, si la coincidencia se divide por unidades de código UTF-16 o puntos de código Unicode depende de si se establece el indicador u.

// "😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
// "😄😄".split(/(?:)/u); // [ "😄", "😄" ]

// Si separator separador es una expresión regular con grupos de captura, cada vez que el separator coincide, los grupos capturados (incluidos los resultados undefined) se empalman en la matriz de salida. Este comportamiento se especifica mediante el método Symbol.split de regexp.

// Si separator es un objeto con un método Symbol.split, se llama a ese método con la cadena de destino y el limit como argumentos, y this se establece en el objeto. Su valor devuelto se convierte en el valor devuelto de la split.

// Cualquier otro valor se coaccionará a una cadena antes de ser utilizado como separador.

// Ejemplos
// Uso de split()
// Cuando la cadena está vacía y no se especifica ningún separador, split() devuelve una matriz que contiene una cadena vacía, en lugar de una matriz vacía. Si la cadena y el separador son cadenas vacías, se devuelve una matriz vacía.

const cadenaVacia = "";

console.log(cadenaVacia.split());

console.log(cadenaVacia.split(cadenaVacia));

// En el ejemplo siguiente se define una función que divide una cadena en una matriz de cadenas mediante separator. Después de dividir la cadena, la función registra mensajes que indican la cadena original (antes de la división), el separador utilizado, el número de elementos de la matriz y los elementos individuales de la matriz.

function cadenaSplit(StringToSplit, separador) {
  const arrayDeCadena = StringToSplit.split(separador);

  console.log(`La cadena original es: ${StringToSplit}`);
  console.log(`El separador es: ${separador}`);

  console.log(
    `El arreglo tiene ${arrayDeCadena.length} elementos: ${arrayDeCadena.join(
      " / "
    )}`
  );
}

const tempestString =
  "Oh valiente nuevo mundo que tiene este tipo de personas en ella.";

const mesesString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const espacio = " ",
  coma = ",";

cadenaSplit(tempestString, espacio);
cadenaSplit(tempestString);
cadenaSplit(mesesString, coma);
