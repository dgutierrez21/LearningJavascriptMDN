// // Clases en JavaScript #ff0

// En el último artículo, presentamos algunos conceptos básicos de la programación orientada a objetos (POO) y discutimos un ejemplo en el que utilizamos los principios de POO para modelar a profesores y estudiantes en una escuela.

// También hablamos sobre cómo es posible usar prototipos y constructores para implementar un modelo como este, y que JavaScript también proporciona características que se ajustan más a los conceptos clásicos de OOP.

// En este artículo, repasaremos estas características. Vale la pena tener en cuenta que las características descritas aquí no son una forma nueva de combinar objetos: bajo el capó, todavía usan prototipos. Son solo una forma de facilitar la configuración de una cadena prototipo.

// Clases y constructores #008000
// Puede declarar una clase utilizando la palabra clave class. Aquí hay una declaración de clase para nuestra Person del artículo anterior:

class Persona {
  nombre;

  constructor(nombre) {
    this.nombre = nombre;
  }

  presentarse() {
    console.log(`Hola, mi nombres es ${this.nombre}`);
  }
}

// Esto declara una clase llamada Person, con:

// ---una propiedad name.

// ---Un constructor que toma un parámetro name que se utiliza para inicializar la propiedad name del nuevo objeto

// ---un método introduceSelf() que puede hacer referencia a las propiedades del objeto mediante this.

// La declaración name; es opcional: podría omitirla, y la línea this.name = name; en el constructor se creará la propiedad name antes de inicializarla. Sin embargo, enumerar las propiedades explícitamente en la declaración de clase podría facilitar que las personas que leen el código vean qué propiedades forman parte de esta clase.

// También puede inicializar la propiedad a un valor predeterminado cuando la declare, con una línea como name = '';.

// El constructor se define mediante la palabra clave constructor. Al igual que un constructor fuera de una definición de clase, podrá:

// ---Crear un nuevo objeto

// ---Enlazar this al nuevo objeto, para que pueda hacer referencia a this código del constructor

// ---Ejecute el código en el constructor

// ---devolver el nuevo objeto.

// Dado el código de declaración de clase anterior, puede crear y usar una nueva instancia Person como esta:

const giles = new Persona("Giles");

giles.presentarse();

// Tenga en cuenta que llamamos al constructor usando el nombre de la clase, Person en este ejemplo.

// Omitir constructores #00aae4
// Si no necesita realizar ninguna inicialización especial, puede omitir el constructor y se generará un constructor predeterminado para usted:

class Animal {
  dormir() {
    console.log("zzzzzzzzz");
  }
}

const spot = new Animal();

spot.dormir();

// Herencia #008000
// Dada nuestra clase Person anterior, definamos la subclase Professor.

class Profesor extends Persona {
  imparteMateria;

  constructor(nombre, imparteMateria) {
    super(nombre);
    this.imparteMateria = imparteMateria;
  }

  presentarse() {
    console.log(
      `Hola, mi nombres es ${this.nombre} y soy profesor de ${this.imparteMateria}`
    );
  }

  grado(papel) {
    const grado = Math.floor(Math.random() * 100) + 1;
    console.log(grado);
  }
}

// Usamos la palabra clave extends para decir que esta clase hereda de otra clase.

// La clase Professor agrega una nueva propiedad teaches, por lo que declaramos eso.

// Dado que queremos establecer teaches cuando se crea un nuevo Professor, definimos un constructor, que toma el name y teaches como argumentos. Lo primero que hace este constructor es llamar al constructor de superclase usando super(), pasando por alto el parámetro name. El constructor de superclase se encarga de establecer el name. Después de eso, el constructor Professor establece la propiedad teaches.

// Nota: Si una subclase tiene que hacer alguna de sus propias inicializaciones, primero debe llamar al constructor de superclase usando super(), pasando por alto cualquier parámetro que el constructor de superclase esté esperando.

// También hemos anulado el método introduceSelf() de la superclase, y hemos agregado un nuevo método grade(), para calificar un trabajo (nuestro profesor no es muy bueno, y solo asigna calificaciones aleatorias a los trabajos).

// Con esta declaración ahora podemos crear y utilizar profesores:

const walsh = new Profesor("Walsh", "Psicologia");

walsh.presentarse();

walsh.grado();

// Encapsulación #008000
// Finalmente, veamos cómo implementar la encapsulación en JavaScript. En el último artículo discutimos cómo nos gustaría hacer que el year sea propiedad de Student privado, para que podamos cambiar las reglas sobre las clases de tiro con arco sin romper ningún código que use la clase Student.

// Aquí hay una declaración de la clase Student que hace precisamente eso:

class Estudiante extends Persona {
  #anio;

  constructor(nombre, anio) {
    super(nombre);
    this.#anio = anio;
  }

  presentarse() {
    console.log(
      `Hola, mi nombre es ${
        this.nombre
      }, soy estudiante de secundaria y estoy en mi año numero ${this.#anio}`
    );
  }

  puedeEstudiarArqueria() {
    return this.#anio > 2;
  }
}

// En esta declaración de clase, #year es una propiedad de datos privada. Podemos construir un objeto Student, y puede usar #year internamente, pero si el código fuera del objeto intenta acceder a #year el navegador arroja un error:

const darrell = new Estudiante("Darrell", 3);

darrell.presentarse();

console.log(darrell.puedeEstudiarArqueria());

if (darrell.puedeEstudiarArqueria()) {
  console.log(`${darrell.nombre} puede estudiar arqueria.`);
} else {
  console.log(`${darrell.nombre} este año NO puede estudiar arqueria.`);
}

// console.log(darrell.#anio); // Uncaught SyntaxError: Private field '#anio' must be declared in an enclosing class (at main.js:148:20)

// Las propiedades de datos privados deben declararse en la declaración de clase y sus nombres comienzan con #.

// Métodos privados #00aae4
// Puede tener métodos privados, así como propiedades de datos privados. Al igual que las propiedades de datos privados, sus nombres comienzan con #, y solo pueden ser llamados por los propios métodos del objeto:

class Ejemplo {
  algunMetodoPublico() {
    this.#algunMetodoPrivado();
  }

  #algunMetodoPrivado() {
    console.log("Me llamas?");
  }
}

const miEjemplo = new Ejemplo();

miEjemplo.algunMetodoPublico(); // Me llamas?

// miEjemplo.algunMetodoPrivado(); // Uncaught TypeError: miEjemplo.algunMetodoPrivado is not a function
