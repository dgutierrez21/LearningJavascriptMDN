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

// Enumerar las propiedades de un objeto #008000
// Hay tres formas nativas de enumerar/recorrer las propiedades de un objeto:

// bucles for...in. Este método recorre todas las propiedades de cadena enumerables de un objeto, así como su cadena de prototipos. #FF0000

// Object.keys(miObj). Este método devuelve un array con sólo los nombres de las propiedades de cadena propias enumerables ("keys") del objeto miObj, pero no los de la cadena de prototipos.

console.log(Object.keys(miCarro2)); // (5) ['marca', 'modelo', 'anioDeLanzamiento', 'color', 'segundoColor']

// Object.getOwnPropertyNames(myObj). Este método devuelve un array que contiene todos los nombres de las propiedades de cadena propias del objeto miObj, independientemente de si son enumerables o no.

console.log(Object.getOwnPropertyNames(miCarro2)); // (5) ['marca', 'modelo', 'anioDeLanzamiento', 'color', 'segundoColor']

// No hay una forma nativa de enumerar las propiedades "ocultas" (propiedades en la cadena de prototipos que no son accesibles a través del objeto, porque otra propiedad tiene el mismo nombre antes en la cadena de prototipos). Sin embargo, esto se puede lograr con la siguiente función:

function listaDeTodasLasPropiedades(miObj) {
  let objAInspeccionar = miObj,
    resultado = [];

  while (objAInspeccionar !== null) {
    resultado = resultado.concat(Object.getOwnPropertyNames(objAInspeccionar));

    objAInspeccionar = Object.getPrototypeOf(objAInspeccionar);
  }

  return resultado;
}

console.log(listaDeTodasLasPropiedades(miCarro2));

// salida:

[
  "marca",
  "modelo",
  "anioDeLanzamiento",
  "color",
  "segundoColor",
  "constructor",
  "__defineGetter__",
  "__defineSetter__",
  "hasOwnProperty",
  "__lookupGetter__",
  "__lookupSetter__",
  "isPrototypeOf",
  "propertyIsEnumerable",
  "toString",
  "valueOf",
  "__proto__",
  "toLocaleString",
];

// Creación de nuevos objetos #008000
// JavaScript dispone de una serie de objetos predefinidos. Además, puedes crear tus propios objetos. Puedes crear un objeto utilizando un inicializador de objetos. Alternativamente, puedes crear primero una función constructora y luego instanciar un objeto invocando esa función junto con el operador new.

// Uso de inicializadores de objetos #00aae4
// El uso de inicializadores de objetos se denomina a veces creación de objetos con notación literal. "Inicializador de objetos" es coherente con la terminología utilizada por C++.

// La sintaxis para un objeto que utiliza un inicializador de objetos es

const objeto = {
  propiedad1: "Valor1", // el nombre de la propiedad puede ser un identificador
  2: "valor2", // o un número
  "propiedad n": "valor3", // o una cadena
};
console.log(objeto);
console.log(objeto.propiedad1);
console.log(objeto[2]);
console.log(objeto["propiedad n"]);

// donde obj es el nombre del nuevo objeto, cada nombre de propiedad antes de los dos puntos es un identificador (ya sea un nombre, un número o una cadena literal), y cada valorN es una expresión cuyo valor se asigna al nombre de la propiedad. El obj y la asignación son opcionales; si no necesita referirse a este objeto en otra parte, no necesita asignarlo a una variable. (Tenga en cuenta que puede ser necesario envolver el literal del objeto entre paréntesis si el objeto aparece donde se espera una expresión, para que no se confunda el literal con una sentencia de bloque).

// Los inicializadores de objetos son expresiones, y cada inicializador de objetos da lugar a la creación de un nuevo objeto cada vez que se ejecuta la sentencia en la que aparece. Los inicializadores de objetos idénticos crean objetos distintos que no se compararán entre sí como iguales. Los objetos se crean como si se hiciera una llamada a new Object(); es decir, los objetos creados a partir de expresiones literales de objeto son instancias de Object.

// La siguiente sentencia crea un objeto y lo asigna a la variable x si y sólo si la expresión cond es verdadera:

let x;

if (10 > 5) {
  x = { saludar: "Hola" };
}

console.log(x);
console.log(x.saludar);

// El siguiente ejemplo crea miHonda con tres propiedades. Observa que la propiedad motor también es un objeto con sus propias propiedades.

const miHonda = {
  color: "Rojo",
  ruedas: 4,
  motor: {
    cilindros: 4,
    tamanio: 2.2,
  },
};

console.log(miHonda);
console.log(miHonda.motor);
console.log(miHonda.motor.cilindros);
console.log(miHonda.motor.tamanio);

// const myHonda = {color: 'rojo', ruedas: 4, motor: {cilindros: 4, tamaño: 2.2}};

// También puedes utilizar inicializadores de objetos para crear arrays. Vea los literales de los arrays.

// Utilizar una función constructora #00aae4
// Alternativamente, puedes crear un objeto con estos dos pasos:

// 1. Definir el tipo de objeto escribiendo una función constructora. Hay una fuerte convención, con buena razón, de usar una letra inicial mayúscula.

// 2. Crear una instancia del objeto con new.

// Para definir un tipo de objeto, cree una función para el tipo de objeto que especifique su nombre, propiedades y métodos. Por ejemplo, suponga que quiere crear un tipo de objeto para los coches. Quieres que este tipo de objeto se llame Car, y quieres que tenga propiedades para la marca, el modelo y el año. Para ello, escribirías la siguiente función:

function Carro(marca, modelo, anio) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
}

// Fíjate en el uso de this para asignar valores a las propiedades del objeto en función de los valores pasados a la función.

// Ahora puedes crear un objeto llamado miCoche de la siguiente manera:

const miCarro3 = new Carro("Audi", "R8", 2007);

// Esta sentencia crea miCoche y le asigna los valores especificados para sus propiedades. Así, el valor de myCar.make es la cadena "Eagle", myCar.model es la cadena 'Talon TSi', myCar.year es el entero 1993, y así sucesivamente. El orden de los argumentos y parámetros debe ser el mismo.

console.log(miCarro3);
console.log(miCarro3.marca);
console.log(miCarro3.modelo);
console.log(miCarro3.anio);

// Puedes crear cualquier número de objetos Coche mediante llamadas a new. Por ejemplo

const miNuevoCarro = new Carro("Nissan", "500ZX", 1992);
const miNuevoCarro2 = new Carro("Mclaren", "720s", 1992);

console.log(miNuevoCarro.marca);
console.log(miNuevoCarro2.marca);

// Un objeto puede tener una propiedad que es a su vez otro objeto. Por ejemplo, supongamos que se define un objeto llamado Persona de la siguiente manera

function Persona(nombre, edad, estatura) {
  this.nombre = nombre;
  this.edad = edad;
  this.estatura = estatura;
}

// y luego instanciar dos nuevos objetos Persona como a continuación

const maria = new Persona("María lopez", 33, 1.75);
const mario = new Persona("Mario Fallas", 33, 1.75);

console.log(maria.estatura);

// A continuación, puedes reescribir la definición de Car para incluir una propiedad owner que tome un objeto Persona, como sigue

function Carro(marca, modelo, anio, propietario) {
  this.marca = marca;
  this.modelo = modelo;
  this.anio = anio;
  this.propietario = propietario;
}

// Para instanciar los nuevos objetos, se utiliza lo siguiente

const carro1 = new Carro("Eagle", "Talon TSI", 1993, maria);
const carro2 = new Carro("Nissan", "300ZX", 1992, mario);

// Observa que en lugar de pasar una cadena literal o un valor entero al crear los nuevos objetos, las sentencias anteriores pasan los objetos maria y mario como argumentos para los propietarios. Entonces, si quieres averiguar el nombre del propietario de car2, puedes acceder a la siguiente propiedad

console.log(carro2);
console.log(carro2.propietario.nombre); // Mario Fallas

console.log(carro1);
console.log(carro1.propietario.nombre); // María Lopez

// Ten en cuenta que siempre puedes añadir una propiedad a un objeto previamente definido. Por ejemplo, la sentencia

carro1.color = "Negro";

console.log(carro1.color); // negro

// añade una propiedad color a car1, y le asigna un valor de 'negro'. Sin embargo, esto no afecta a ningún otro objeto. Para añadir la nueva propiedad a todos los objetos del mismo tipo, hay que añadir la propiedad a la definición del tipo de objeto Car.

// Utilizando el método Object.create #00aae4
// Los objetos también pueden ser creados usando el método Object.create(). Este método puede ser muy útil, ya que permite elegir el objeto prototipo del objeto que se quiere crear, sin tener que definir una función constructora.

// // Propiedades de los animales y encapsulación de métodos

const Animal = {
  tipo: "Invertebrado", // Valor por defecto de las propiedades

  // Método que mostrará el tipo de Animal
  mostrarTipoAnimal() {
    console.log(this.tipo);
  },
};

// // Crear un nuevo tipo de animal llamado animal1
const animal1 = Object.create(Animal);
animal1.mostrarTipoAnimal(); // Logs: Invertebrado

// // Crear un nuevo tipo de animal llamado pez

const pez = Object.create(Animal);
pez.tipo = "Peces";
pez.mostrarTipoAnimal(); // peces
