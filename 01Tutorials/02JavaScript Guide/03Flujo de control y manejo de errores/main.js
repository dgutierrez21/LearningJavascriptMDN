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

// Sentencias condicionales #008000
// Una sentencia condicional es un conjunto de comandos que se ejecuta si una condición especificada es verdadera. JavaScript admite dos sentencias condicionales: if...else y switch.

// Sentencia if...else #00aae4
// Utilice la sentencia if para ejecutar una sentencia si una condición lógica es verdadera. Utilice la cláusula else opcional para ejecutar una sentencia si la condición es falsa.

// Una sentencia if tiene el siguiente aspecto

// if (condición) {
//   sentencia1;
// } else {
//   declaración2;
// }

// Aquí, la condición puede ser cualquier expresión que se evalúe como verdadera o falsa. (Ver Boolean para una explicación de lo que se evalúa como verdadero y falso).

// Si la condición se evalúa como verdadera, se ejecuta la sentencia_1. En caso contrario, se ejecuta la sentencia_2. La sentencia_1 y la sentencia_2 pueden ser cualquier sentencia, incluyendo otras sentencias if anidadas.

// También se pueden componer las sentencias usando else if para tener múltiples condiciones probadas en secuencia, como sigue:

// if (condición1) {
// declaración1;
// } else if (condition2) {
// declaración2;
// } else if (conditionN) {
// declaraciónN;
// } else {
// statementLast;
// }

// En el caso de múltiples condiciones, sólo se ejecutará la primera condición lógica que se evalúe como verdadera. Para ejecutar múltiples sentencias, agrúpelas dentro de una sentencia de bloque ({ /* ... */ }).

// Buenas prácticas #00aae4
// En general, es una buena práctica utilizar siempre sentencias de bloque, especialmente cuando se anidan sentencias if:

// if (condición) {
//   // Declaraciones para cuando la condición es verdadera
//   // ...
// } else {
//   // Declaraciones para cuando la condición es falsa
//   // ...
// }

// En general es una buena práctica no tener un if...else con una asignación como x = y como condición:

// if (x = y) {
//   /* declaraciones aquí */
// }
// Sin embargo, en el raro caso de que quieras hacer algo así, la documentación de while tiene una sección sobre el uso de una asignación como condición con una guía sobre las mejores prácticas generales de sintaxis que deberías conocer y seguir.

// Valores falsos #00aae4
// Los siguientes valores se evalúan como falsos (también conocidos como valores Falsy):

// falso
// indefinido
// null
// 0
// NaN
// la cadena vacía ("")
// Todos los demás valores -incluidos todos los objetos- se evalúan como verdadero cuando se pasan a una sentencia condicional.

// Nota: ¡No confunda los valores booleanos primitivos true y false con los valores true y false del objeto booleano!

// Por ejemplo:

const b = new Boolean(false);

if (b) {
  // esta condición se evalúa como verdadera
}

if (b == true) {
  // esta condición se evalúa como falsa
}

// Ejemplo
// En el siguiente ejemplo, la función checkData devuelve true si el número de caracteres de un objeto Texto es tres. En caso contrario, muestra una alerta y devuelve false.

function comprobarDatos() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  } else {
    alert(
      `Introduzca exactamente tres caracteres. ${document.form1.threeChar.value} no es válido.`
    );

    return false;
  }
}

// sentencia switch #00aae4
// Una sentencia switch permite a un programa evaluar una expresión e intentar hacer coincidir el valor de la expresión con una etiqueta case. Si se encuentra una coincidencia, el programa ejecuta la sentencia asociada.

// Una sentencia switch tiene el siguiente aspecto:

// switch (expression) {
//   case label1:
//     sentencia1;
//     break;
//   case label2:
//     sentencia2;
//     break;
//   case label3:
//     sentencia3;
//     break;

//   default:
//     break;
// }

// JavaScript evalúa la sentencia switch anterior de la siguiente manera:

// El programa busca primero una cláusula case con una etiqueta que coincida con el valor de la expresión y luego transfiere el control a esa cláusula, ejecutando las sentencias asociadas.

// Si no se encuentra ninguna etiqueta que coincida, el programa busca la cláusula opcional por defecto:

// Si se encuentra una cláusula por defecto, el programa transfiere el control a esa cláusula, ejecutando las sentencias asociadas.

// Si no se encuentra ninguna cláusula por defecto, el programa reanuda la ejecución en la sentencia que sigue al final del switch.

// (Por convención, la cláusula por defecto se escribe como la última cláusula, pero no es necesario que sea así).

// sentencias break #00aae4
// La sentencia break opcional asociada a cada cláusula case asegura que el programa sale de switch una vez que se ejecuta la sentencia coincidente, y luego continúa la ejecución en la sentencia que sigue a switch. Si se omite break, el programa continúa la ejecución dentro de la sentencia switch (y evaluará el siguiente caso, y así sucesivamente).

// EJEMPLO
// En el siguiente ejemplo, si fruitType se evalúa como 'Bananas', el programa compara el valor con el caso 'Bananas' y ejecuta la sentencia asociada. Cuando se encuentra el break, el programa sale del switch y continúa la ejecución desde la sentencia que sigue al switch. Si se omitiera break, también se ejecutaría la sentencia para el caso 'Cerezas'.

const tipoDeFruta = "Banano";

switch (tipoDeFruta) {
  case "Naranja":
    console.log("Las naranjas cuestan 0,59 dólares la libra");
    break;
  case "Manzana":
    console.log("Las manzanas cuestan 0,59 dólares la libra");
    break;
  case "Banano":
    console.log("Los bananos cuestan 0,59 dólares la libra");
    break;
  case "Mango":
    console.log("Los mangos cuestan 0,59 dólares la libra");
    break;

  default:
    console.log(`Lo sentimos, nos hemos quedado sin ${tipoDeFruta}`);
    break;
}

console.log("¿Hay algo más que desee?");
