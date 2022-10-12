// Prototipos de objetos #ff0

// Los prototipos son el mecanismo por el cual los objetos JavaScript heredan características entre sí. En este artículo, explicamos qué es un prototipo, cómo funcionan las cadenas de prototipos y cómo se puede establecer un prototipo para un objeto.

// La cadena de prototipos #008000
// En la consola del navegador, intente crear un objeto literal:

const miObjeto = {
  ciudad: "Reikiavik",
  saludar() {
    console.log(`Saludos desde la ciudad de Islandia, ${this.ciudad}`);
  },
};

miObjeto.saludar();

// Se trata de un objeto con una propiedad de datos, city, y un método, greet(). Si escribe el nombre del objeto seguido de un punto en la consola, como myObject., la consola mostrará una lista de todas las propiedades disponibles para este objeto. Verás que, además de city y greet, ¡hay muchas otras propiedades!

// ver imagen...

// Intenta acceder a uno de ellos:

// myObject.toString(); // "[object Object]"

console.log(miObjeto.toString());

// Funciona (incluso si no es obvio lo que hace toString()).

// ¿Cuáles son estas propiedades adicionales y de dónde vienen?

// Cada objeto en JavaScript tiene una propiedad incorporada, que se denomina prototipo. El prototipo es en sí mismo un objeto, por lo que el prototipo tendrá su propio prototipo, haciendo lo que se llama una cadena de prototipos. La cadena termina cuando llegamos a un prototipo que tiene null para su propio prototipo.

// Nota: La propiedad de un objeto que apunta a su prototipo no se denomina prototype. Su nombre no es estándar, pero en la práctica todos los navegadores utilizan __proto__. La forma estándar de acceder al prototipo de un objeto es el método Object.getPrototypeOf()).

// Cuando intenta acceder a una propiedad de un objeto: si la propiedad no se puede encontrar en el propio objeto, se busca la propiedad en el prototipo. Si la propiedad aún no se puede encontrar, se busca el prototipo del prototipo, y así sucesivamente hasta que se encuentra la propiedad o se alcanza el final de la cadena, en cuyo caso undefined.

// Entonces, cuando llamamos myObject.toString(), el navegador:

// --busca toString en myObject

// --no puede encontrarlo allí, por lo que busca en el objeto prototipo de myObject toString

// --lo encuentra allí, y lo llama.

// ¿Cuál es el prototipo de myObject? Para averiguarlo, podemos usar la función Object.getPrototypeOf():

// Object.getPrototypeOf(myObject); // Object { }

console.log(Object.getPrototypeOf(miObjeto));

// Este es un objeto llamado Object.prototype, y es el prototipo más básico, que todos los objetos tienen por defecto. El prototipo de Object.prototype es null, por lo que está al final de la cadena de prototipos:

// ver imagen...

// El prototipo de un objeto no siempre es Object.prototype. Prueba esto:

const misDatos = new Date();
let objeto = misDatos;

do {
  objeto = Object.getPrototypeOf(objeto);
  console.log(objeto);
} while (objeto);

// Este código crea un objeto Date y, a continuación, recorre la cadena de prototipos y registra los prototipos. Nos muestra que el prototipo de myDate es un objeto Date.prototype, y el prototipo de eso es Object.prototype.

// ver imagen...

// De hecho, cuando llama a métodos familiares, como myDate2.getMonth(), está llamando a un método definido en Date.prototype.

// Propiedades de sombreado #008000
// ¿Qué sucede si se define una propiedad en un objeto, cuando se define una propiedad con el mismo nombre en el prototipo del objeto? Veamos:

const miFecha = new Date(1995, 11, 17);

console.log(miFecha.getYear());

miFecha.getYear = function () {
  console.log("Otra cosa!");
};

miFecha.getYear();

// Esto debería ser predecible, dada la descripción de la cadena de prototipos. Cuando llamamos a getYear() el navegador primero busca en myDate una propiedad con ese nombre, y solo comprueba el prototipo si myDate no lo define. Entonces, cuando agregamos getYear() a myDate, se llama a la versión en myDate.

// Esto se llama "sombreado" de la propiedad.

// Configuración de un prototipo #008000
// Hay varias formas de establecer el prototipo de un objeto en JavaScript, y aquí describiremos dos: Object.create() y constructores.

// Uso de Object.create #00aae4
// El método Object.create() crea un nuevo objeto y permite especificar un objeto que se utilizará como prototipo del nuevo objeto.

// Aquí hay un ejemplo:

const prototypePersona = {
  saludar() {
    console.log("Hola!");
  },
};

const carro1 = Object.create(prototypePersona);

carro1.saludar();

// Uso de un constructor #00aae4
// En JavaScript, todas las funciones tienen una propiedad denominada prototype. Cuando se llama a una función como constructor, esta propiedad se establece como el prototipo del objeto recién construido (por convención, en la propiedad denominada __proto__).

// Entonces, si establecemos el prototype de un constructor, podemos asegurarnos de que todos los objetos creados con ese constructor reciban ese prototipo:

const prototypePersona2 = {
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

function Persona(nombre) {
  this.nombre = nombre;
}

Object.assign(Persona.prototype, prototypePersona2);

// O

// Person.prototype.greet = personPrototype.greet;

// Aquí creamos:

// ---un objeto personPrototype, que tiene un greet()

// ---una función Person() que inicializa el nombre de la persona que se va a crear.

// A continuación, colocamos los métodos definidos en personPrototype en la propiedad prototype de la función Person usando Object.assign.

// Después de este código, los objetos creados con Person() obtendrán Person.prototype como su prototipo, que contiene automáticamente el método greet.

const jackson = new Persona("Jackson");

jackson.saludar();

// Esto también explica por qué dijimos anteriormente que el prototipo de myDate se llama Date.prototype: prototype prototype del constructor Date.

// Propiedades propias #00aae4
// Los objetos que creamos usando el constructor Person anterior tienen dos propiedades:

// ---una propiedad name, que se establece en el constructor, por lo que aparece directamente en los objetos Person

// ---un método greet()), que se establece en el prototipo.

// Es común ver este patrón, en el que los métodos se definen en el prototipo, pero las propiedades de los datos se definen en el constructor. Esto se debe a que los métodos suelen ser los mismos para cada objeto que creamos, mientras que a menudo queremos que cada objeto tenga su propio valor para sus propiedades de datos (al igual que aquí, donde cada persona tiene un nombre diferente). #FF0000

// Las propiedades que se definen directamente en el objeto, como el name aquí, se denominan propiedades propias y puede comprobar si una propiedad es una propiedad propia mediante el método estático Object.hasOwn()):

const irma = new Persona("Irma");

console.log(irma.nombre);
irma.saludar();

console.log(Object.hasOwn(irma, "nombre")); // true
console.log(Object.hasOwn(irma, "saludar")); // false
console.log(Object.hasOwn(Persona.prototype, "saludar")); // true

// Nota: También puede utilizar el método no estático Object.hasOwnProperty() aquí, pero le recomendamos que utilice Object.hasOwn() si puede.

// Prototipos y herencia #008000
// Los prototipos son una característica potente y muy flexible de JavaScript, que permite reutilizar código y combinar objetos.

// En particular, apoyan una versión de herencia. La herencia es una característica de los lenguajes de programación orientados a objetos que permite a los programadores expresar la idea de que algunos objetos en un sistema son versiones más especializadas de otros objetos.

// Por ejemplo, si estamos modelando una escuela, podríamos tener profesores y estudiantes: ambos son personas, por lo que tienen algunas características en común (por ejemplo, ambos tienen nombres), pero cada uno puede agregar características adicionales (por ejemplo, los profesores tienen una materia que enseñan), o pueden implementar la misma característica de diferentes maneras. En un sistema de POO podríamos decir que tanto profesores como estudiantes heredan de las personas.

// Puede ver cómo en JavaScript, si Professor y Student pueden tener prototipos Person, entonces pueden heredar las propiedades comunes, mientras agregan y redefinen aquellas propiedades que necesitan diferir.

// En el próximo artículo discutiremos la herencia junto con las otras características principales de los lenguajes de programación orientados a objetos, y veremos cómo JavaScript los admite.

// repaso

const miObjeto2 = {
  ciudad: "Madrid",
  saludar() {
    console.log(`Saludos desde ${this.ciudad}`);
  },
};

miObjeto2.saludar();

console.log(miObjeto2.toString());

// forma estándar de acceder a el prototipo del objeto

console.log(Object.getPrototypeOf(miObjeto2));

// el prototipo del prototipo es null

const prototipoDelPrototipo = Object.getPrototypeOf(miObjeto2);

console.log(Object.getPrototypeOf(prototipoDelPrototipo)); // null

// El prototipo de un objeto no siempre es Object.prototype. Prueba esto:

const miFecha2 = new Date();

let objeto2 = miFecha2;

console.log(Object.getPrototypeOf(objeto2));

do {
  objeto2 = Object.getPrototypeOf(objeto2);
  console.log(objeto2);
} while (objeto2);

// ¿Qué sucede si se define una propiedad en un objeto, cuando se define una propiedad con el mismo nombre en el prototipo del objeto? Veamos:

const miFecha3 = new Date(1995, 11, 17);

console.log(miFecha3.getYear()); // 95

miFecha3.getYear = function () {
  console.log("Cualquier otra cosa!");
};

miFecha3.getYear();

// Cuando llamamos a getYear() el navegador primero busca en myDate una propiedad con ese nombre, y solo comprueba el prototipo si myDate no lo define. Entonces, cuando agregamos getYear() a myDate, se llama a la versión en myDate.

// Esto se llama "sombreado" de la propiedad.

// Hay varias formas de establecer el prototipo de un objeto en JavaScript, y aquí describiremos dos: Object.create() y constructores.

const prototipoAnimales = {
  animalesMamiferos() {
    console.log("Murcielago, Tigre, Oso polar, Nutrias");
  },
};

const tiposAnimal = Object.create(prototipoAnimales);

tiposAnimal.animalesMamiferos();

// Uso de un constructor

const prototipoPersona = {
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

function Persona2(nombre) {
  this.nombre = nombre;
}

Object.assign(Persona2.prototype, prototipoPersona);
// or
// Person.prototype.greet = personPrototype.greet;

// Aquí creamos:

// un objeto personPrototype, que tiene un greet()
// una función Person() que inicializa el nombre de la persona que se va a crear.
// A continuación, colocamos los métodos definidos en personPrototype en la propiedad prototype de la función Person usando Object.assign.

// Después de este código, los objetos creados con Person() obtendrán Person.prototype como su prototipo, que contiene automáticamente el método greet.

const nadia = new Persona2("Nadia");

nadia.saludar();

// Propiedades propias
// Los objetos que creamos usando el constructor Person anterior tienen dos propiedades:

// ---una propiedad name, que se establece en el constructor, por lo que aparece directamente en los objetos Person

// ---un método greet()), que se establece en el prototipo.

// Es común ver este patrón, en el que los métodos se definen en el prototipo, pero las propiedades de los datos se definen en el constructor. Esto se debe a que los métodos suelen ser los mismos para cada objeto que creamos, mientras que a menudo queremos que cada objeto tenga su propio valor para sus propiedades de datos (al igual que aquí, donde cada persona tiene un nombre diferente).

// Las propiedades que se definen directamente en el objeto, como el name aquí, se denominan propiedades propias y puede comprobar si una propiedad es una propiedad propia mediante el método estático Object.hasOwn()):

const klara = new Persona2("Klara");

console.log(Object.hasOwn(klara, "nombre")); // true
console.log(Object.hasOwn(klara, "saludar")); // false

console.log(Object.hasOwn(Persona2.prototype, "saludar")); // true

// Prototipos y herencia
// Los prototipos son una característica potente y muy flexible de JavaScript, que permite reutilizar código y combinar objetos.

// En particular, apoyan una versión de herencia. La herencia es una característica de los lenguajes de programación orientados a objetos que permite a los programadores expresar la idea de que algunos objetos en un sistema son versiones más especializadas de otros objetos.

// Por ejemplo, si estamos modelando una escuela, podríamos tener profesores y estudiantes: ambos son personas, por lo que tienen algunas características en común (por ejemplo, ambos tienen nombres), pero cada uno puede agregar características adicionales (por ejemplo, los profesores tienen una materia que enseñan), o pueden implementar la misma característica de diferentes maneras. En un sistema de POO podríamos decir que tanto profesores como estudiantes heredan de las personas.

// Puede ver cómo en JavaScript, si Professor y Student pueden tener prototipos Person, entonces pueden heredar las propiedades comunes, mientras agregan y redefinen aquellas propiedades que necesitan diferir.
