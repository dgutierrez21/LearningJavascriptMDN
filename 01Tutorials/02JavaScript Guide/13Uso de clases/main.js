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
