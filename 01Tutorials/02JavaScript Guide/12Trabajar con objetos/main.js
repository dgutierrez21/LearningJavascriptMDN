// Trabajar con objetos #ff0

// JavaScript está diseñado sobre un paradigma simple basado en objetos. Un objeto es una colección de propiedades, y una propiedad es una asociación entre un nombre (o clave) y un valor. El valor de una propiedad puede ser una función, en cuyo caso la propiedad se conoce como método. Además de los objetos predefinidos en el navegador, puedes definir tus propios objetos. Este capítulo describe cómo utilizar objetos, propiedades, funciones y métodos, y cómo crear tus propios objetos.

// Visión general de los objetos #008000
// Los objetos en JavaScript, al igual que en muchos otros lenguajes de programación, pueden compararse con los objetos de la vida real. El concepto de objetos en JavaScript puede entenderse con objetos tangibles de la vida real.

// En JavaScript, un objeto es una entidad independiente, con propiedades y tipo. Compárelo con una taza, por ejemplo. Una taza es un objeto, con propiedades. Una taza tiene un color, un diseño, un peso, un material del que está hecha, etc. Del mismo modo, los objetos de JavaScript pueden tener propiedades, que definen sus características.

// Objetos y propiedades #008000
// Un objeto de JavaScript tiene propiedades asociadas. Una propiedad de un objeto puede explicarse como una variable que se adjunta al objeto. Las propiedades de los objetos son básicamente las mismas que las variables ordinarias de JavaScript, excepto por la unión a los objetos. Las propiedades de un objeto definen las características del mismo. Se accede a las propiedades de un objeto con una simple anotación de punto

// nombredelobjeto.nombrePropiedad

// Como todas las variables de JavaScript, tanto el nombre del objeto (que podría ser una variable normal) como el nombre de la propiedad distinguen entre mayúsculas y minúsculas. Puedes definir una propiedad asignándole un valor. Por ejemplo, vamos a crear un objeto llamado miCoche y a darle propiedades denominadas marca, modelo y año de la siguiente manera:

const miCarro = new Object();
miCarro.marca = "Lamborghini";
miCarro.modelo = "Urus";
miCarro.anioDeLanzamiento = 2017;

console.log(miCarro); // {marca: 'Lamborghini', modelo: 'Urus', anio: 2017}

// El ejemplo anterior también podría escribirse utilizando un inicializador de objeto, que es una lista delimitada por comas de cero o más pares de nombres de propiedades y valores asociados de un objeto, encerrados entre llaves ({}):

const miCarro2 = {
  marca: "Lamborghini",
  modelo: "Urus",
  anioDeLanzamiento: 2017,
};

console.log(miCarro2.marca); // Lamborghini

// Las propiedades no asignadas de un objeto son indefinidas (y no nulas).

console.log(miCarro2.color); // undefined

// También se puede acceder a las propiedades de los objetos de JavaScript o establecerlas utilizando una notación de corchetes (para más detalles, consulte los accesores de propiedades). Los objetos se denominan a veces matrices asociativas, ya que cada propiedad está asociada a un valor de cadena que puede utilizarse para acceder a ella. Así, por ejemplo, podrías acceder a las propiedades del objeto miCoche de la siguiente manera

console.log(miCarro2["modelo"]); // Urus
console.log(miCarro2["anioDeLanzamiento"]); // 2017

// Así tambien como asignar propiedades a un objeto

miCarro2["color"] = "Rojo";

console.log(miCarro2); // {marca: 'Lamborghini', modelo: 'Urus', anioDeLanzamiento: 2017, color: 'Rojo'}
console.log(miCarro2["color"]); // Rojo

// El nombre de una propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que pueda convertirse en una cadena, incluyendo una cadena vacía. Sin embargo, cualquier nombre de propiedad que no sea un identificador válido de JavaScript no puede utilizar la notación de puntos. Por ejemplo, un nombre de propiedad que tenga un espacio o un guión, que comience con un número o que esté dentro de una variable sólo puede ser accedido usando la notación de corchetes. Esta notación también es muy útil cuando los nombres de las propiedades deben determinarse dinámicamente, es decir, no son determinables hasta el tiempo de ejecución. Los ejemplos son los siguientes:

// // se crean y asignan cuatro variables de una sola vez,
// // separadas por comas

const miObj = {},
  srt = "miCadena",
  rand = Math.random(),
  otroObj = {};

// // Ahora, creando propiedades adicionales.
miObj.tipo = "Sintaxis de puntos para una clave llamada tipo";

miObj["Fecha de creación"] = "Esta clave tiene un espacio";

miObj[srt] = "Esta clave está en la variable str";

miObj[rand] = "Un número aleatorio es la clave aquí";

miObj[otroObj] = "Esta clave es el objeto otroObj";

miObj[""] = "Esta clave es una cadena vacía";

console.log(miObj);
console.log(miObj.miCadena); // [Log] Esta clave está en la variable str

/*
Objeto [Log]
"": "Esta clave es una cadena vacía"

0.7669407438394202: "Un número aleatorio es la clave aquí"

Fecha de creación: "Esta clave tiene un espacio"

[object Object]: "Esta clave es el objeto otroObj"

miCadena: "Esta clave está en la variable str"

tipo: "Sintaxis de puntos para una clave llamada tipo"

 */

// // Observa que en el registro, el orden de las propiedades listadas no es el mismo que el orden en que fueron creadas.

// Los nombres de las propiedades de los objetos de JavaScript (claves) sólo pueden ser cadenas o símbolos - todas las claves en la notación de corchetes se convierten en cadenas a menos que sean símbolos. Por ejemplo, en el código anterior, cuando la clave anotherObj se añade a myObj, JavaScript llamará al método toString() de anotherObj, y utilizará la cadena resultante como la nueva clave.

// También se puede acceder a las propiedades con un valor de cadena almacenado en una variable. La variable debe pasarse en notación de corchetes. En el ejemplo anterior, la variable str contenía "miCadena" y es "miCadena" el nombre de la propiedad. Por lo tanto, miCadena.str volverá como indefinido.

// str = 'miCadena';
// myObj[str] = 'Esta clave está en la variable str';

console.log(miObj.srt); //[Log] indefinido

console.log(miObj[srt]); //[Log] Esta clave está en la variable str
console.log(miObj.miCadena); //[Log] Esta clave está en la variable str

// Esto permite acceder a cualquier propiedad determinada en tiempo de ejecución:

let nombrePropiedad = "segundoColor";
miCarro2[nombrePropiedad] = "Amarillo";

// acceder a diferentes propiedades cambiando el contenido de la variable

nombrePropiedad = "modelo";
miCarro2[nombrePropiedad] = "Evo";

console.log(miCarro2); // {marca: 'Lamborghini', modelo: 'Evo', anioDeLanzamiento: 2017, color: 'Rojo', segundoColor: 'Amarillo'}

// Puede utilizar la notación de corchetes con for...in para iterar sobre todas las propiedades enumerables de un objeto. Para ilustrar cómo funciona esto, la siguiente función muestra las propiedades del objeto cuando pasas el objeto y el nombre del objeto como argumentos a la función:

function mostrarPropiedades(obj, nombreObj) {
  let resultado = "";

  for (const prop in obj) {
    // obj.hasOwn se utiliza para excluir las propiedades de la cadena de prototipos del objeto y mostrar sólo las "propiedades propias"

    if (Object.hasOwn(obj, prop)) {
      resultado += `${nombreObj}.${prop} = ${obj[prop]}\n`;
    }
  }

  console.log(resultado);
}

mostrarPropiedades(miCarro2, "micarro2");

// El término "propiedad propia" se refiere a las propiedades del objeto, pero excluyendo las de la cadena de prototipos. Así, la llamada a la función showProps(miCoche, 'miCoche') imprimiría lo siguiente

// micarro2.marca = Lamborghini;
// micarro2.modelo = Evo;
// micarro2.anioDeLanzamiento = 2017;
// micarro2.color = Rojo;
// micarro2.segundoColor = Amarillo;
