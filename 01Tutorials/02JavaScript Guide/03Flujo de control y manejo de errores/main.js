// Flujo de control y manejo de errores #ff0

// JavaScript admite un conjunto compacto de sentencias, específicamente sentencias de flujo de control, que puedes utilizar para incorporar una gran cantidad de interactividad en tu aplicación. Este capítulo ofrece una visión general de estas sentencias.

// La referencia de JavaScript contiene detalles exhaustivos sobre las sentencias de este capítulo. El carácter punto y coma (;) se utiliza para separar las sentencias en el código JavaScript.

// Cualquier expresión de JavaScript es también una sentencia. Consulte Expresiones y operadores para obtener información completa sobre las expresiones.

// Sentencia en bloque #008000
// La sentencia más básica es la sentencia de bloque, que se utiliza para agrupar sentencias. El bloque está delimitado por un par de corchetes:

// {
//   sentencia1;
//   sentencia2;
//   sentencia3;
// }

// Ejemplo
// Las sentencias de bloque se utilizan habitualmente con las sentencias de flujo de control (if, for, while).

let x = 1;

while (x < 11) {
  console.log(x);
  x++;
}

// Aquí, { x++; } es la declaración del bloque.

// Nota: las variables declaradas como var no tienen alcance de bloque, sino que tienen alcance de la función o script que las contiene, y los efectos de establecerlas persisten más allá del propio bloque. Por ejemplo

var x2 = 1;
{
  var x2 = 2;
}
console.log(x2); //  2

// Esto produce 2 porque la sentencia var x dentro del bloque está en el mismo ámbito que la sentencia var x antes del bloque. (En C o Java, el código equivalente tendría una salida de 1).

// Este efecto de alcance puede mitigarse utilizando let o const.
