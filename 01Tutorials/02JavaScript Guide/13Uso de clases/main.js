// Uso de las clases #ff0

// JavaScript es un lenguaje basado en prototipos: los comportamientos de un objeto se especifican mediante sus propias propiedades y las de su prototipo. Sin embargo, con la adición de las clases, la creación de jerarquías de objetos y la herencia de propiedades y sus valores están mucho más en línea con otros lenguajes orientados a objetos como Java. En esta sección, demostraremos cómo se pueden crear objetos a partir de clases.

// En muchos otros lenguajes, las clases, o constructores, se distinguen claramente de los objetos, o instancias. En JavaScript, las clases son principalmente una abstracción sobre el mecanismo de herencia prototípica existente - todos los patrones son convertibles a la herencia basada en prototipos. Las propias clases también son valores normales de JavaScript y tienen sus propias cadenas de prototipos. De hecho, la mayoría de las funciones normales de JavaScript pueden utilizarse como constructores: se utiliza el operador new con una función constructora para crear un nuevo objeto.

// En este tutorial jugaremos con el modelo de clases bien abstracto, y discutiremos la semántica que ofrecen las clases. Si quieres profundizar en el sistema de prototipos subyacente, puedes leer la guía Herencia y la cadena de prototipos.

// Este capítulo asume que ya estás algo familiarizado con JavaScript y que has usado objetos ordinarios.

// Visión general de las clases #008000
// Si tienes algo de experiencia práctica con JavaScript, o has seguido la guía, probablemente ya hayas utilizado las clases, aunque no hayas creado ninguna. Por ejemplo, esto puede parecerte familiar:

const diaGrande = new Date(2019, 6, 19);

console.log(diaGrande.toLocaleDateString());

if (diaGrande.getTime() < Date.now()) {
  console.log("Érase una vez...");
}

// En la primera línea, creamos una instancia de la clase Date, y la llamamos bigDay. En la segunda línea, llamamos a un método toLocaleDateString() en la instancia de bigDay, que devuelve una cadena. Luego, comparamos dos números: uno devuelto por el método getTime(), y el otro llamado directamente desde la propia clase Date, como Date.now().

// Date es una clase integrada de JavaScript. De este ejemplo, podemos obtener algunas ideas básicas de lo que hacen las clases:

// ---Las clases crean objetos a través del operador new.

// ---Cada objeto tiene algunas propiedades (datos o métodos) añadidas por la clase.

// ---La clase almacena algunas propiedades (datos o métodos) en sí misma, que suelen utilizarse para interactuar con las instancias.

// Esto corresponde a las tres características clave de las clases:

// ---Constructor;

// ---Métodos de instancia y campos de instancia;

// ---Métodos estáticos y campos estáticos.

// Declarar una clase #008000
// Las clases suelen crearse con declaraciones de clase.

class miClase {
  // cuerpo de la clase
}

// Dentro del cuerpo de una clase, hay una serie de características disponibles.

class miClase2 {
  // constructor
  constructor() {
    // cuerpo del constructor
  }
  //   // Campo de instancia
  miCampo = "foo";
  //   // Método de instancia
  miMetodo() {
    // cuerpo del método
  }

  // campo estatico

  static miCampoEstatico = "bar";

  // método estatico

  static miMetodoEstatico() {
    // cuerpo del método
  }

  // bloque estatico

  static {
    //     // Código de inicialización estático
  }

  //   // Los campos, métodos, campos estáticos y métodos estáticos tienen
  //   // formas "privadas

  #miCampoPrivado = "bar";
}

// Si vienes de un mundo pre-ES6, puede que estés más familiarizado con el uso de funciones como constructores. El patrón anterior se traduciría aproximadamente a lo siguiente con constructores de funciones:

// function MyClass() {
//   this.myField = "foo";
//   // Cuerpo del constructor
// }
// MyClass.myStaticField = "bar";
// MyClass.myStaticMethod = function () {
//   // cuerpo de myStaticMethod
// };
// MyClass.prototype.myMethod = function () {
//   // cuerpo de miMétodo
// };

// (function () {
//   // Código estático de inicialización
// })();

// Nota: Los campos y métodos privados son nuevas características en las clases que no tienen un equivalente trivial en los constructores de funciones.

// Construir una clase #00aae4
// Una vez declarada una clase, se pueden crear instancias de la misma mediante el operador new.

const miInstancia = new miClase2();
console.log(miInstancia.miCampo); // foo
miInstancia.miMetodo();

// Los constructores de funciones típicos pueden tanto construirse con new como llamarse sin new. Sin embargo, si se intenta "llamar" a una clase sin new se producirá un error.

// const myInstance = MyClass(); // TypeError: El constructor de clase MyClass no puede ser invocado sin 'new'

// Elevación de la declaración de clase #00aae4
// A diferencia de las declaraciones de funciones, las declaraciones de clases no se elevan (o, en algunas interpretaciones, se elevan pero con la restricción de la zona muerta temporal), lo que significa que no se puede utilizar una clase antes de declararla.

// new MiClaseHosting(); // ReferenceError: No se puede acceder a 'MiClaseHosting' antes de la inicialización

class MiClaseHosting {}

// Este comportamiento es similar al de las variables declaradas con let y const.

// Expresiones de clase #00aae4
// Al igual que las funciones, las declaraciones de clase también tienen sus contrapartes de expresión.

const miClase3 = class {
  // cuerpo de la clase...
};

// Las expresiones de clase también pueden tener nombres. El nombre de la expresión sólo es visible para el cuerpo de la clase.

const miClase4 = class MiClaseDeNombreMasLargo {
  // Cuerpo de la clase. Aquí MyClass y MyClassLongerName apuntan a la misma clase.
};

// new MiClaseDeNombreMasLargo(); // ReferenceError: MyClassLongerName is not defined

// Constructor #008000
// Tal vez el trabajo más importante de una clase es actuar como una "fábrica" de objetos. Por ejemplo, cuando usamos el constructor de Date, esperamos que nos dé un nuevo objeto que represente los datos de la fecha que le pasamos - que luego podemos manipular con otros métodos que la instancia expone. En las clases, la creación de la instancia la realiza el constructor.

// Como ejemplo, crearíamos una clase llamada Color, que representa un color específico. Los usuarios crean colores pasando un triplete RGB.

class Color {
  constructor(r, g, b) {
    // Asigna los valores RGB como una propiedad de `this`.
    this.valores = [r, g, b];
  }
}

// Abre el devtools de tu navegador, pega el código anterior en la consola, y luego crea una instancia:

const rojo = new Color(255, 0, 0);

console.log(rojo);
console.log(rojo.valores);

// Deberías ver una salida como esta

// Objeto { valores: (3) [...] }
//   valores: Array(3) [ 255, 0, 0 ]

// Has creado con éxito una instancia de Color, y la instancia tiene una propiedad values, que es un array de los valores RGB que has pasado. Esto es más o menos equivalente a lo siguiente:

function crearColor(r, g, b) {
  return {
    valores: [r, g, b],
  };
}

// La sintaxis del constructor es exactamente la misma que la de una función normal - lo que significa que puedes usar otras sintaxis, como parámetros de reposo:

class Color2 {
  constructor(...valores) {
    this.valores = valores;
  }
}

const nuevoColor = new Color2(255, 0, 0);

console.log(nuevoColor);
console.log(nuevoColor.valores);
// // Crea una instancia con la misma forma que la anterior.

// Cada vez que se llama a new, se crea una instancia diferente.

const rojo1 = new Color2(255, 0, 0);
const rojo2 = new Color2(255, 0, 0);

console.log(rojo1 === rojo2); // false

// Dentro de un constructor de clase, el valor de this apunta a la instancia recién creada. Puedes asignarle propiedades, o leer las propiedades existentes (especialmente los métodos - que cubriremos a continuación).

// El valor de this será devuelto automáticamente como resultado de new. Se aconseja no devolver ningún valor desde el constructor - porque si devuelve un valor no primitivo, se convertirá en el valor de la expresión new, y el valor de this se elimina. (Puedes leer más sobre lo que hace new en su descripción).

class miClase5 {
  constructor() {
    this.miCampo = "foo";
    return {};
  }
}

console.log(new miClase5().miCampo); // undefined

// Métodos de instancia #008000
// Si una clase sólo tiene un constructor, no es muy diferente de una función de fábrica createX que sólo crea objetos simples. Sin embargo, el poder de las clases es que pueden ser utilizadas como "plantillas" que asignan automáticamente métodos a las instancias.

// Por ejemplo, para las instancias de Date, puedes utilizar un rango de métodos para obtener diferente información de un único valor de fecha, como el año, el mes, el día de la semana, etc. También puedes establecer esos valores a través de las contrapartes de setX como setFullYear.

// Para nuestra propia clase Color, podemos añadir un método llamado getRed que devuelve el valor rojo del color.

class Color3 {
  constructor(r, g, b) {
    this.valores = [r, g, b];
  }

  obtenerRojo() {
    return this.valores[0];
  }
}

const colorRojo = new Color3(255, 0, 0);

console.log(colorRojo.obtenerRojo()); // 255

// Sin métodos, puedes tener la tentación de definir la función dentro del constructor:

class Color4 {
  constructor(r, g, b) {
    this.values = [r, g, b];
    this.getRed = function () {
      return this.values[0];
    };
  }
}

// Esto también funciona. Sin embargo, un problema es que esto crea una nueva función cada vez que se crea una instancia de Color, ¡incluso cuando todas hacen lo mismo!

console.log(new Color4().getRed === new Color4().getRed); // false

// Por el contrario, si se utiliza un método, éste será compartido entre todas las instancias. Una función puede ser compartida entre todas las instancias, pero aún así su comportamiento difiere cuando diferentes instancias la llaman, porque el valor de esta es diferente. Si tienes curiosidad por saber dónde se almacena este método - está definido en el prototipo de todas las instancias, o Color.prototype, que se explica con más detalle en Herencia y la cadena de prototipos.

// Del mismo modo, podemos crear un nuevo método llamado setRed, que establece el valor rojo del color.

class Color5 {
  constructor(r, g, b) {
    this.valores = [r, g, b];
  }

  obtenerRojo() {
    return this.valores[0];
  }

  establecerRojo(valor) {
    this.valores = valor;
  }
}

const rojo3 = new Color5(255, 0, 0);

rojo3.establecerRojo(0);

console.log(rojo3.obtenerRojo()); // 0; por supuesto, ¡debería llamarse "negro" a estas alturas!

// Campos privados #008000
// Te preguntarás: ¿por qué queremos tomarnos la molestia de utilizar los métodos getRed y setRed, cuando podemos acceder directamente al array de valores en la instancia?

class Color6 {
  constructor(r, g, b) {
    this.valores = [r, g, b];
  }
}

const rojo6 = new Color6(255, 0, 0);
rojo6.valores[0] = 0;

console.log(rojo6.valores[0]); // 0

// Hay una filosofía en la programación orientada a objetos llamada "encapsulación". Esto significa que no debes acceder a la implementación subyacente de un objeto, sino que debes utilizar métodos bien abstraídos para interactuar con él. Por ejemplo, si de repente decidimos representar los colores como HSL en lugar de

function rgbAhsl(rojo) {
  if (rojo[0] === 255) {
    rojo[0] = 0;
  }
  return rojo;
}

class Color7 {
  constructor(r, g, b) {
    // ¡valores es ahora un array HSL!
    this.valores = rgbAhsl([r, g, b]);
  }

  obtenerRojo() {
    return this.valores[0];
  }

  establecerRojo(valor) {
    this.valores[0] = valor;
  }
}

const rojo7 = new Color7(255, 0, 0);

console.log(rojo7.valores[0]); // 0; Ya no es 255, porque el valor H del rojo puro es 0

// El usuario asume que "valores" significa que el valor RGB se derrumba de repente, y puede hacer que su lógica se rompa. Por lo tanto, si eres un implementador de una clase, querrás ocultar la estructura de datos interna de tu instancia a tu usuario, tanto para mantener la API limpia como para evitar que el código del usuario se rompa cuando hagas algunas "refactorizaciones inofensivas". En las clases, esto se hace mediante campos privados.

// Un campo privado es un identificador prefijado con # (el símbolo del hash). El hash es una parte integral del nombre del campo. Para referirse a un campo privado en cualquier parte de la clase, hay que declararlo en el cuerpo de la clase. Aparte de esto, un campo privado es prácticamente equivalente a una propiedad normal.

class Color8 {
  // Declarar: cada instancia de Color tiene un campo
  #valores;

  constructor(r, g, b) {
    this.#valores = [r, g, b];
  }

  obtenerRojo() {
    return this.#valores[0];
  }

  establecerRojo(valor) {
    this.#valores[0] = valor;
  }
}

const rojo8 = new Color8(255, 0, 0);

console.log(rojo8.obtenerRojo()); // 255

// Acceder a campos privados fuera de la clase es un error de sintaxis temprano. El lenguaje puede protegerse de esto porque #privateField es una sintaxis especial, por lo que puede hacer un análisis estático y encontrar todo el uso de los campos privados incluso antes de evaluar el código.

// console.log(rojo8.#valores); // SyntaxError: El campo privado '#valores' debe ser declarado en una clase adjunta

// Los campos privados en JavaScript son privados duros: si la clase no implementa métodos que expongan estos campos privados, no hay absolutamente ningún mecanismo para recuperarlos desde fuera de la clase. Esto significa que puedes hacer cualquier refactorización a los campos privados de tu clase, siempre y cuando el comportamiento de los métodos expuestos siga siendo el mismo.

// Después de haber hecho privado el campo "valores", podemos añadir algo más de lógica en los métodos getRed y setRed, en lugar de hacerlos simples métodos de paso. Por ejemplo, podemos añadir una comprobación en setRed para ver si es un valor R válido: #FF0000

class Color9 {
  #valores;

  constructor(r, g, b) {
    this.#valores = [r, g, b];
  }

  obtenerRojo() {
    return this.#valores[0];
  }

  establecerRojo(valor) {
    if (valor < 0 || valor > 255) {
      throw new RangeError("Valor R no válido.");
    }

    this.#valores[0] = valor;
  }
}

const rojo9 = new Color9(255, 0, 0);

// rojo9.establecerRojo(300); // RangeError: Valor R no válido

console.log(rojo9.obtenerRojo());

// Si dejamos la propiedad "valores" expuesta, nuestros usuarios pueden eludir fácilmente esa comprobación asignando a values[0] directamente, y crear colores no válidos. Pero con una API bien encapsulada, podemos hacer que nuestro código sea más robusto y evitar errores lógicos posteriores. #FF0000

// Un método de una clase puede leer los campos privados de otras instancias, siempre que pertenezcan a la misma clase.

class Color10 {
  #valores;

  constructor(r, g, b) {
    this.#valores = [r, g, b];
  }

  rojoDiferente(otroColor) {
    if (!(#valores in otroColor)) {
      throw new TypeError("Se espera una instancia de color");
    }
    // No es necesario acceder a #valores desde esto:
    // puede acceder a los campos privados de otras instancias pertenecientes
    // a la misma clase.

    return this.#valores[0] - otroColor.#valores[0];
  }
}

const rojo10 = new Color10(255, 0, 0);

const crimson = new Color10(220, 20, 60);

console.log(rojo10.rojoDiferente(crimson)); // 35

// Sin embargo, si otroColor no es una instancia de Color, los #valores no existirán. (Incluso si otra clase tiene un campo privado #values de nombre idéntico, no se refiere a lo mismo y no se puede acceder a él aquí). Para comprobar de antemano si el campo existe, podemos utilizar una comprobación in

// ver linea 377

// Nota: Ten en cuenta que el # es una sintaxis de identificador especial, y no puedes usar el nombre del campo como si fuera una cadena. "#valores" en otroColor buscaría un nombre de propiedad llamado literalmente "#valores", en lugar de un campo privado.

// Los métodos también pueden ser privados.

class Color11 {
  #valores;

  constructor(r, g, b) {
    this.#miMetodoPrivado();
    this.#valores = [r, g, b];
  }

  #miMetodoPrivado() {
    //...
  }
}

// Los campos accesorios #008000
// color.getRed() y color.setRed() nos permiten leer y escribir en el valor rojo de un color. Si vienes de lenguajes como Java, estarás muy familiarizado con este patrón. Sin embargo, utilizar métodos para acceder simplemente a una propiedad sigue siendo poco ergonómico en JavaScript. Los campos de acceso nos permiten manipular algo como si fuera una "propiedad real".

class Color12 {
  constructor(r, g, b) {
    this.valores = [r, g, b];
  }

  get rojo() {
    return this.valores[0];
  }

  set rojo(valor) {
    this.valores[0] = valor;
  }
}

const rojo12 = new Color12(255, 0, 0);
rojo12.rojo = 0;

console.log(rojo12.rojo); // 0

// Parece que el objeto tiene una propiedad llamada red - pero en realidad, ¡no existe tal propiedad en la instancia! Sólo hay dos métodos, pero llevan el prefijo get y set, lo que permite manipularlos como si fueran propiedades.

// Si un campo sólo tiene un getter pero no un setter, será efectivamente de sólo lectura.

class Color13 {
  constructor(r, g, b) {
    this.valores = [r, g, b];
  }

  get rojo() {
    return this.valores[0];
  }
}

const rojo13 = new Color13(255, 0, 0);

rojo13.rojo = 0;

console.log(rojo13.rojo); // 255

// En modo estricto, la línea red.red = 0 lanzará un error de tipo "No se puede establecer la propiedad red de #<Color> que sólo tiene un getter". En modo no estricto, la asignación se ignora silenciosamente.
