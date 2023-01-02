// String.prototype.replace()
// El método replace() devuelve una nueva cadena con una, algunas o todas las coincidencias de un patrón sustituidas por un reemplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función llamada por cada coincidencia. Si el patrón es una cadena, sólo se sustituirá la primera coincidencia. La cadena original no se modifica.

// Sintaxis
// replace(pattern, replacement)

// Parámetros
// pattern
// Puede ser una cadena o un objeto con un método Symbol.replace, el ejemplo típico es una expresión regular. Cualquier valor que no tenga el método Symbol.replace se forzará a una cadena.

// replacement
// Puede ser una cadena o una función.

// Si es una cadena, reemplazará la subcadena que coincida con el pattern. Se admiten varios patrones de reemplazo especiales; consulte la sección Especificación de una cadena como reemplazo a continuación.
// Si es una función, se invocará para cada coincidencia y su valor devuelto se utilizará como texto de reemplazo. Los argumentos proporcionados para esta función se describen en la sección Especificación de una función como reemplazo a continuación.

// Valor devuelto
// Una nueva cadena, con una, algunas o todas las coincidencias del patrón reemplazadas por el reemplazo especificado.

// Descripción
// Este método no muta el valor de cadena al que se llama. Devuelve una nueva cadena.

// Un patrón de cadena solo se reemplazará una vez. Para realizar una búsqueda global y reemplazar, utilice una expresión regular con el indicador g o utilice replaceAll() en su lugar.

// Si pattern es un objeto con un método Symbol.replace (incluidos los objetos RegExp), se llama a ese método con la cadena de destino y el replacement como argumentos. Su valor devuelto se convierte en el valor devuelto de replace(). En este caso, el comportamiento de replace() está completamente codificado por el @@replace método @@replace, por ejemplo, cualquier mención de "capturar grupos" en la descripción a continuación es en realidad una funcionalidad proporcionada por RegExp.prototype[@@replace].

// Si el pattern es una cadena vacía, el reemplazo se antepone al principio de la cadena.

// "xxx".replace("", "_"); // "_xxx"

const ejRem = "El perro corre, el perro camina";

console.log(ejRem);

const reemplazo = ejRem.replace("perro", "gato");

console.log(reemplazo);

const str = "Era la noche antes de xdad...";
const newstr = str.replace(/xdad/i, "Navidad");

console.log(newstr);

// String.prototype.replaceAll()
// El método replaceAll() devuelve una nueva cadena con todas las coincidencias de un patrón sustituidas por un reemplazo. El patrón puede ser una cadena o una RegExp, y el reemplazo puede ser una cadena o una función a la que llamar por cada coincidencia. La cadena original no se modifica.

const reemplazo2 = ejRem.replaceAll("perro", "tigre");

console.log(reemplazo2);
