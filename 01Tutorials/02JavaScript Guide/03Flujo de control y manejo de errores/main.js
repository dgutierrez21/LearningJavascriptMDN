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

// Declaraciones de manejo de excepciones #008000
// Puedes lanzar excepciones usando la sentencia throw y manejarlas usando las sentencias try...catch.

// sentencia throw

// sentencia try...catch

// Tipos de excepción #00aae4
// En JavaScript se puede lanzar casi cualquier objeto. Sin embargo, no todos los objetos lanzados son iguales. Aunque es común lanzar números o cadenas como errores, a menudo es más efectivo utilizar uno de los tipos de excepción creados específicamente para este propósito:

// ---Las excepciones de ECMAScript

// ---DOMException y DOMError

// sentencia throw #00aae4

// Utilice la sentencia throw para lanzar una excepción. Una sentencia throw especifica el valor a lanzar:

// throw expression;

// Puede lanzar cualquier expresión, no sólo expresiones de un tipo específico. El siguiente código lanza varias excepciones de diferentes tipos:

// throw "Error2"; // tipo cadena

// throw 42; // tipo numero

// throw true; //tipo bo0leano

// throw {
//   toString() {
//     return "Soy un objeto";
//   },
// };

// Sentencia try...catch #00aae4
// La sentencia try...catch marca un bloque de sentencias a probar, y especifica una o más respuestas en caso de que se lance una excepción. Si se lanza una excepción, la sentencia try...catch la atrapa.

// La sentencia try...catch consiste en un bloque try, que contiene una o más sentencias, y un bloque catch, que contiene sentencias que especifican qué hacer si se lanza una excepción en el bloque try.

// En otras palabras, quieres que el bloque try tenga éxito, pero si no lo tiene, quieres que el control pase al bloque catch. Si cualquier sentencia dentro del bloque try (o en una función llamada desde el bloque try) lanza una excepción, el control pasa inmediatamente al bloque catch. Si no se lanza ninguna excepción en el bloque try, se salta el bloque catch. El bloque finally se ejecuta después de la ejecución de los bloques try y catch, pero antes de las sentencias que siguen a la sentencia try...catch.

// El siguiente ejemplo utiliza una sentencia try...catch. El ejemplo llama a una función que recupera un nombre de mes de una matriz basada en el valor pasado a la función. Si el valor no se corresponde con un número de mes (1-12), se lanza una excepción con el valor 'InvalidMonthNo' y las sentencias del bloque catch establecen la variable monthName como 'unknown'.

function conseguirNombreMes(mo) {
  mo--; // Ajustar el número de mes para el índice de la matriz (de modo que 0 = enero, 11 = diciembre)

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  if (meses[mo]) {
    return meses[mo];
  } else {
    throw new Error("MesInvalido"); //  aquí se utiliza la palabra clave throw
  }
}

function registrarMiError(err) {
  console.error(err);
}

const miMes = 14;

let nombreMes;

try {
  //  declaraciones para try
  nombreMes = conseguirNombreMes(miMes); // la función podría lanzar una excepción

  console.log(`El mes de su cumpleaños es ${nombreMes}`);
} catch (e) {
  nombreMes = "desconocido";

  registrarMiError(e); // pasar el objeto de excepción al manejador de errores (es decir, su propia función)
  console.log(`El mes de su cumpleaños es ${nombreMes}`);
}

// El bloque catch #00aae4
// Puedes utilizar un bloque catch para manejar todas las excepciones que se generen en el bloque try.

// catch (catchID) {
//   declaraciones
// }

// El bloque catch especifica un identificador (catchID en la sintaxis anterior) que contiene el valor especificado por la sentencia throw. Puedes utilizar este identificador para obtener información sobre la excepción lanzada.

// JavaScript crea este identificador cuando se introduce el bloque catch. El identificador dura sólo la duración del bloque catch. Una vez que el bloque catch termina de ejecutarse, el identificador deja de existir.

// Por ejemplo, el siguiente código lanza una excepción. Cuando se produce la excepción, el control se transfiere al bloque catch.

function registrarMiError2(e) {
  console.error(e);
}

try {
  throw "miExcepción"; // generates an exception
} catch (err) {
  // declaraciones para manejar cualquier excepción
  registrarMiError2(err); // pasar el objeto de excepción al manejador de errores
}

// Nota: Cuando se registran errores en la consola dentro de un bloque catch, se recomienda utilizar console.error() en lugar de console.log() para la depuración. Este formatea el mensaje como un error, y lo añade a la lista de mensajes de error generados por la página.

// El bloque finally #00aae4
// El bloque finally contiene sentencias que se ejecutan después de la ejecución de los bloques try y catch. Además, el bloque finally se ejecuta antes del código que sigue a la sentencia try...catch...finally.

// También es importante tener en cuenta que el bloque finally se ejecutará tanto si se lanza una excepción como si no. Sin embargo, si se lanza una excepción, las sentencias del bloque finally se ejecutan incluso si ningún bloque catch maneja la excepción lanzada.

// Puedes usar el bloque finally para hacer que tu script falle con gracia cuando se produce una excepción. Por ejemplo, puedes necesitar liberar un recurso que tu script ha atado.

// El siguiente ejemplo abre un archivo y luego ejecuta sentencias que utilizan el archivo. (Si se lanza una excepción mientras el archivo está abierto, el bloque finally cierra el archivo antes de que el script falle. El uso de finally aquí asegura que el archivo nunca se deja abierto, incluso si se produce un error.

/*

openMyFile();
try {
  writeMyFile(theData); // Esto puede arrojar un error
} catch (e) {
  handleError(e); // Si se produce un error, se gestiona
} finally {
  closeMyFile(); // Cerrar siempre el recurso
}

*/

// Si el bloque finally devuelve un valor, este valor se convierte en el valor de retorno de toda la producción try...catch...finally, independientemente de cualquier sentencia return en los bloques try y catch:

function f() {
  try {
    console.log(0);
    throw "Bogus";
  } catch (error) {
    console.log(1);
    return true; // esta declaración de retorno se suspende hasta que se complete el bloque finally
    console.log(2); // no localizable
  } finally {
    console.log(3);
    return false; // sobrescribe el anterior "return"
    console.log(4); // no localizable
  }
  // Ahora se ejecuta "return false"
  console.log(5); // no localizable
}

console.log(f()); // 0, 1, 3, false

// La sobreescritura de los valores de retorno por el bloque finally también se aplica a las excepciones lanzadas o relanzadas dentro del bloque catch:

function f2() {
  try {
    throw "Bogus";
  } catch (error) {
    console.log('atrapado interiormente "falso"');
    throw error; // esta sentencia throw se suspende hasta que se haya completado el bloque finally
  } finally {
    return false; // sobrescribe el "lanzamiento" anterior
  }
  // Ahora se ejecuta "return false"
}

try {
  console.log(f2());
  // ¡esto nunca se alcanza!
  // mientras f() se ejecuta, el bloque `finally` devuelve false,
  // lo que sobrescribe el `throw` dentro del `catch` anterior
} catch (error) {
  console.log('atrapado en el exterior "falso"');
}

// Anidación de sentencias try...catch #00aae4
// Puede anidar una o más sentencias try...catch.

// Si un bloque try interno no tiene un bloque catch correspondiente

// 1. debe contener un bloque finally, y
// 2. el bloque catch de la sentencia try...catch adjunta se comprueba para ver si coincide.

// Para más información, véase bloques try anidados en la página de referencia de try...catch.