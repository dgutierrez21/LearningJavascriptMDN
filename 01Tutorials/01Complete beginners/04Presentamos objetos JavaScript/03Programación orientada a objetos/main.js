// Programación orientada a objetos #ff0

// La programación orientada a objetos (POO) es un paradigma de programación fundamental para muchos lenguajes de programación, incluidos Java y C ++. En este artículo, proporcionaremos una descripción general de los conceptos básicos de POO. Describiremos tres conceptos principales: clases e instancias, herencia y encapsulación. Por ahora, describiremos estos conceptos sin referencia a JavaScript en particular, por lo que todos los ejemplos se dan en pseudocódigo..

// Nota: Para ser precisos, las características descritas aquí son de un estilo particular de POO llamado POO basado en clases o "clásico". Cuando las personas hablan de POO, este es generalmente el tipo al que se refieren.

// Después de eso, en JavaScript, veremos cómo los constructores y la cadena de prototipos se relacionan con estos conceptos de POO y en qué se diferencian. En el próximo artículo, veremos algunas características adicionales de JavaScript que facilitan la implementación de programas orientados a objetos.

// La programación orientada a objetos consiste en modelar un sistema como una colección de objetos, donde cada objeto representa algún aspecto particular del sistema. Los objetos contienen funciones (o métodos) y datos. Un objeto proporciona una interfaz pública a otro código que desea usarlo pero mantiene su propio estado interno privado; otras partes del sistema no tienen que preocuparse por lo que está sucediendo dentro del objeto.

// Clases e instancias #008000
// Cuando modelamos un problema en términos de objetos en POO, creamos definiciones abstractas que representan los tipos de objetos que queremos tener en nuestro sistema. Por ejemplo, si estuviéramos modelando una escuela, podríamos querer tener objetos que representen a los profesores. Cada profesor tiene algunas propiedades en común: todos tienen un nombre y una asignatura que enseñan. Además, cada profesor puede hacer ciertas cosas: todos pueden calificar un trabajo y pueden presentarse a sus estudiantes al comienzo del año, por ejemplo.

// Así que Professor podría ser una clase en nuestro sistema. La definición de la clase enumera los datos y métodos que tiene cada profesor.

// En pseudocódigo, una clase Professor podría escribirse así:

/*


class Profesor
    propiedades
        nombre
        enseña
    metodos
        grado(papel)
        introducirse()

*/

// Esto define una clase Professor con:

// ---dos propiedades de datos: name y teaches

// ---dos métodos: grade() para calificar un trabajo e introduceSelf() para presentarse.

// Por sí sola, una clase no hace nada: es una especie de plantilla para crear objetos concretos de ese tipo. Cada profesor concreto que creamos se llama una instancia de la clase Professor. El proceso de creación de una instancia se realiza mediante una función especial denominada constructor. Pasamos valores al constructor para cualquier estado interno que queramos inicializar en la nueva instancia.

// Generalmente, el constructor se escribe como parte de la definición de clase, y por lo general tiene el mismo nombre que la propia clase:

/*


class Profesor
    propiedades
        nombre
        profesores
    constructor
        profesor(nombre, enseña)
    metodos
        grado(papel)
        introducirse()

*/

// Este constructor toma dos parámetros, por lo que podemos inicializar el name y teaches cuando creamos un nuevo profesor concreto.

// Ahora que tenemos un constructor, podemos crear algunos profesores. Los lenguajes de programación a menudo usan la palabra clave new para indicar que se está llamando a un constructor.

class Profesor {
  // metodos de clase
  constructor(nombre, ensenia) {
    this.nombre = nombre;
    this.ensenia = ensenia;
  }

  grado(papel) {}

  presentarse() {
    console.log(
      `Mi nombre es ${this.nombre} y soy profesor/a de ${this.ensenia}.`
    );
  }
}

const stace = new Profesor("Stace", "psicologia"),
  liliam = new Profesor("Liliam", "poesía");

console.log(stace.ensenia);
stace.presentarse();

console.log(liliam.ensenia);
liliam.presentarse();

// Esto crea dos objetos, ambas instancias de la clase Professor.

// Herencia #008000
// Supongamos que en nuestra escuela también queremos representar a los estudiantes. A diferencia de los profesores, los estudiantes no pueden calificar los trabajos, no enseñan un tema en particular y pertenecen a un año en particular.

// Sin embargo, los estudiantes tienen un nombre y también pueden querer presentarse, por lo que podríamos escribir la definición de una clase de estudiante de esta manera:

/*

  class Estudiante
    propiedades
       nombre
       anio
    constructor
       Estudiante(nombre, anio)
    metodos
       presentarse()

*/

// Sería útil si pudiéramos representar el hecho de que los estudiantes y los profesores comparten algunas propiedades, o más exactamente, el hecho de que en algún nivel, son el mismo tipo de cosas. La herencia nos permite hacer esto.

// Comenzamos observando que los estudiantes y los profesores son personas, y las personas tienen nombres y quieren presentarse. Podemos modelar esto definiendo una nueva clase Person, donde definimos todas las propiedades comunes de las personas. Luego, Professor y Student pueden derivar de Person, agregando sus propiedades adicionales:

/*
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
*/

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

class Profesor2 extends Persona {
  constructor(nombre, ensenia) {
    super(nombre);
    this.ensenia = ensenia;
  }

  presentarse() {
    console.log(
      `Hola, mi nombre es ${this.nombre} y soy profesor/a de ${this.ensenia}`
    );
  }
}

class Estudiante extends Persona {
  constructor(nombre, anio) {
    super(nombre);
    this.anio = anio;
  }

  presentarse() {
    console.log(
      `Hola, mi nombre es ${this.nombre}, soy estudiante y estoy en ${this.anio} año`
    );
  }
}

// En este caso, diríamos que Person es la superclase o clase de padres tanto del Professor como Student. Por el contrario, Professor y Student son subclases o clases infantiles de Person.

// Es posible que observe que introduceSelf() se define en las tres clases. La razón de esto es que, si bien todas las personas quieren presentarse, la forma en que lo hacen es diferente:

const stew = new Profesor2("Stew", "matematicas");
stew.presentarse();

const jordan = new Estudiante("Jordan", "tercer");
jordan.presentarse();

// Es posible que tengamos una implementación predeterminada de introduceSelf() para personas que no son estudiantes o profesores:

const pratt = new Persona("Pratt");
pratt.presentarse();

// Esta característica, cuando un método tiene el mismo nombre pero una implementación diferente en diferentes clases, se denomina polimorfismo. Cuando un método de una subclase reemplaza la implementación de la superclase, decimos que la subclase anula la versión de la superclase.

// Encapsulación #008000
// Los objetos proporcionan una interfaz para otro código que desea usarlos pero mantener su propio estado interno. El estado interno del objeto se mantiene privado, lo que significa que solo se puede acceder a él por los propios métodos del objeto, no desde otros objetos. Mantener privado el estado interno de un objeto y, en general, hacer una división clara entre su interfaz pública y su estado interno privado, se denomina encapsulación..

// Esta es una característica útil porque permite al programador cambiar la implementación interna de un objeto sin tener que encontrar y actualizar todo el código que lo utiliza: crea una especie de firewall entre este objeto y el resto del sistema.

// Por ejemplo, supongamos que a los estudiantes se les permite estudiar tiro con arco si están en el segundo año o más. Podríamos implementar esto simplemente exponiendo la propiedad del year del estudiante, y otro código podría examinar eso para decidir si el estudiante puede tomar el curso:

/* 
class Student : extends Person
    properties
       year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
       
*/

const estudiante1 = new Estudiante("Juan", 2);

if (estudiante1.anio > 1) {
  console.log("Puedes entrar a estudiar arqueria");
} else {
  console.log("No cumples los requisitos para estudiar arqueria");
}

// El problema es que, si decidimos cambiar los criterios para permitir que los estudiantes estudien tiro con arco, por ejemplo, exigiendo también al padre o tutor que dé su permiso, tendríamos que actualizar cada lugar de nuestro sistema que realice esta prueba. Sería mejor tener un método canStudyArchery() en objetos Student, que implemente la lógica en un solo lugar:

class Estudiante2 extends Persona {
  constructor(nombre, anio) {
    super(nombre);
    this.anio = anio;
  }

  presentarse() {
    console.log(
      `Hola, mi nombre es ${this.nombre}, soy estudiante y estoy en ${this.anio} año`
    );
  }

  puedeEstudiarArqueria() {
    return this.anio > 1;
  }
}

const estudiante2 = new Estudiante2("Pedro", 1);

if (estudiante2.puedeEstudiarArqueria()) {
  console.log("Puedes entrar a estudiar arqueria");
} else {
  console.log("No cumples los requisitos para estudiar arqueria");
}

// De esa manera, si queremos cambiar las reglas sobre el estudio del tiro con arco, solo tenemos que actualizar la clase Student, y todo el código que lo use seguirá funcionando.

// En muchos lenguajes OOP, podemos evitar que otro código acceda al estado interno de un objeto marcando algunas propiedades como private. Esto generará un error si el código fuera del objeto intenta acceder a ellos:

/*

class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student

 */

// En lenguajes que no aplican el acceso como este, los programadores usan convenciones de nomenclatura, como comenzar el nombre con un guión bajo, para indicar que la propiedad debe considerarse privada.

// OOP y JavaScript #008000
// En este artículo, hemos descrito algunas de las características básicas de la programación orientada a objetos basada en clases implementada en lenguajes como Java y C ++.

// En los dos artículos anteriores, analizamos un par de características principales de JavaScript: constructores y prototipos. Estas características ciertamente tienen alguna relación con algunos de los conceptos de POO descritos anteriormente.

// ---los constructores en JavaScript nos proporcionan algo así como una definición de clase, lo que nos permite definir la "forma" de un objeto, incluidos los métodos que contiene, en un solo lugar. Pero los prototipos también se pueden usar aquí. Por ejemplo, si un método se define en la propiedad prototype de un constructor, todos los objetos creados con ese constructor obtienen ese método a través de su prototipo, y no necesitamos definirlo en el constructor.

// ---la cadena de prototipos parece una forma natural de implementar la herencia. Por ejemplo, si podemos tener un objeto Student cuyo prototipo es Person, entonces puede heredar name y anular introduceSelf().

// Pero vale la pena comprender las diferencias entre estas características y los conceptos "clásicos" de POO descritos anteriormente. Destacaremos un par de ellos aquí.

// En primer lugar, en la POO basada en clases, las clases y los objetos son dos construcciones separadas, y los objetos siempre se crean como instancias de clases. Además, hay una distinción entre la característica utilizada para definir una clase (la sintaxis de la clase en sí) y la característica utilizada para crear una instancia de un objeto (un constructor). En JavaScript, podemos y a menudo creamos objetos sin ninguna definición de clase separada, ya sea usando una función o un literal de objeto. Esto puede hacer que trabajar con objetos sea mucho más ligero de lo que es en el POO clásico.

// En segundo lugar, aunque una cadena prototipo parece una jerarquía de herencia y se comporta como ella de alguna manera, es diferente en otras. Cuando se crea una instancia de una subclase, se crea un único objeto que combina las propiedades definidas en la subclase con las propiedades definidas más arriba en la jerarquía. Con la creación de prototipos, cada nivel de la jerarquía está representado por un objeto separado, y se vinculan entre sí a través de la propiedad __proto__. El comportamiento de la cadena prototipo es menos como herencia y más como delegación. La delegación es un patrón de programación en el que un objeto, cuando se le pide que realice una tarea, puede realizar la tarea en sí mismo o pedir a otro objeto (su delegado) que realice la tarea en su nombre. En muchos sentidos, la delegación es una forma más flexible de combinar objetos que la herencia (por un lado, es posible cambiar o reemplazar completamente el delegado en tiempo de ejecución).

// Dicho esto, los constructores y prototipos se pueden usar para implementar patrones OOP basados en clases en JavaScript. Pero usarlos directamente para implementar características como la herencia es complicado, por lo que JavaScript proporciona características adicionales, en capas sobre el modelo prototipo, que se asignan más directamente a los conceptos de POO basada en clases. Estas características adicionales son el tema del próximo artículo.

// Repaso

class Profesor3 {
  constructor(nombre, materia) {
    this.nombre = nombre;
    this.materia = materia;
  }

  calificarTrabajo() {}

  presentarse() {
    console.log(
      `Hola, mi nombre es ${this.nombre} y soy profesor/a de ${this.materia}`
    );
  }
}

// Esto define una clase Professor con:

// dos propiedades de datos: name y teaches
// dos métodos: grade() para calificar un trabajo e introduceSelf() para presentarse.

// Por sí sola, una clase no hace nada: es una especie de plantilla para crear objetos concretos de ese tipo. Cada profesor concreto que creamos se llama una instancia de la clase Professor

const sofia = new Profesor3("Sofia", "Matematicas");

console.log(sofia.nombre);
sofia.presentarse();

const amalie = new Profesor3("Amalie", "Inglés");

console.log(amalie.nombre);
amalie.presentarse();

// Esto crea dos objetos, ambas instancias de la clase Professor.

// Herencia
// Supongamos que en nuestra escuela también queremos representar a los estudiantes. A diferencia de los profesores, los estudiantes no pueden calificar los trabajos, no enseñan un tema en particular y pertenecen a un año en particular.

// Sin embargo, los estudiantes tienen un nombre y también pueden querer presentarse, por lo que podríamos escribir la definición de una clase de estudiante de esta manera:

// class Student
//     properties
//         name
//         year
//     constructor
//         Student(name, year)
//     methods
//         introduceSelf()

// Sería útil si pudiéramos representar el hecho de que los estudiantes y los profesores comparten algunas propiedades, o más exactamente, el hecho de que en algún nivel, son el mismo tipo de cosas. La herencia nos permite hacer esto.

// Comenzamos observando que los estudiantes y los profesores son personas, y las personas tienen nombres y quieren presentarse. Podemos modelar esto definiendo una nueva clase Person, donde definimos todas las propiedades comunes de las personas. Luego, Professor y Student pueden derivar de Person, agregando sus propiedades adicionales:

class Persona4 {
  constructor(nombre) {
    this.nombre = nombre;
  }

  presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
}

class Profesor4 extends Persona4 {
  constructor(nombre, materia) {
    super(nombre);
    this.materia = materia;
  }

  presentarse() {
    console.log(
      `Hola mi nombre es ${this.nombre} y soy profesor de ${this.materia}`
    );
  }
}

class Estudiante4 extends Persona4 {
  constructor(nombre, grado) {
    super(nombre);
    this.grado = grado;
  }

  presentarse() {
    console.log(
      `Hola, mi nombres es ${this.nombre} soy estudiante y estoy en ${this.grado} grado`
    );
  }
}

// En este caso, diríamos que Person es la superclase o clase de padres tanto del Professor como Student. Por el contrario, Professor y Student son subclases o clases infantiles de Person.

// Es posible que observe que introduceSelf() se define en las tres clases. La razón de esto es que, si bien todas las personas quieren presentarse, la forma en que lo hacen es diferente:

const morty = new Profesor4("Morty", "calculo");
morty.presentarse();

const johan = new Estudiante4("Johan", "tercer");
johan.presentarse();

// Es posible que tengamos una implementación predeterminada de introduceSelf() para personas que no son estudiantes o profesores:

const lucas = new Persona4("Lucas");

lucas.presentarse();

// Esta característica, cuando un método tiene el mismo nombre pero una implementación diferente en diferentes clases, se denomina polimorfismo. Cuando un método de una subclase reemplaza la implementación de la superclase, decimos que la subclase anula la versión de la superclase.

// Encapsulación
// Los objetos proporcionan una interfaz para otro código que desea usarlos pero mantener su propio estado interno. El estado interno del objeto se mantiene privado, lo que significa que solo se puede acceder a él por los propios métodos del objeto, no desde otros objetos. Mantener privado el estado interno de un objeto y, en general, hacer una división clara entre su interfaz pública y su estado interno privado, se denomina encapsulación..

// Esta es una característica útil porque permite al programador cambiar la implementación interna de un objeto sin tener que encontrar y actualizar todo el código que lo utiliza: crea una especie de firewall entre este objeto y el resto del sistema.

// Por ejemplo, supongamos que a los estudiantes se les permite estudiar tiro con arco si están en el segundo año o más. Podríamos implementar esto simplemente exponiendo la propiedad del year del estudiante, y otro código podría examinar eso para decidir si el estudiante puede tomar el curso:

class Estudiante5 extends Persona4 {
  constructor(nombre, anioEnCurso) {
    super(nombre);

    this.anioEnCurso = anioEnCurso;
  }

  puedeEstudiarArqueria() {
    return this.anioEnCurso > 2;
  }
}

const jackie = new Estudiante5("Jackie", 1);

if (jackie.anioEnCurso > 2) {
  console.log(`La estudiante ${jackie.nombre} puede estudiar arqueria.`);
} else {
  console.log(`La estudiante ${jackie.nombre} NO puede estudiar arqueria.`);
}

// El problema es que, si decidimos cambiar los criterios para permitir que los estudiantes estudien tiro con arco, por ejemplo, exigiendo también al padre o tutor que dé su permiso, tendríamos que actualizar cada lugar de nuestro sistema que realice esta prueba. Sería mejor tener un método canStudyArchery() en objetos Student, que implemente la lógica en un solo lugar:

const julianne = new Estudiante5("Julianne", 4);

if (julianne.puedeEstudiarArqueria()) {
  console.log(`La estudiante ${julianne.nombre} puede estudiar arqueria.`);
} else {
  console.log(`La estudiante ${julianne.nombre} NO puede estudiar arqueria.`);
}

// De esa manera, si queremos cambiar las reglas sobre el estudio del tiro con arco, solo tenemos que actualizar la clase Student, y todo el código que lo use seguirá funcionando.

// En muchos lenguajes OOP, podemos evitar que otro código acceda al estado interno de un objeto marcando algunas propiedades como private. Esto generará un error si el código fuera del objeto intenta acceder a ellos:

// class Student : extends Person
//     properties
//        private year
//     constructor
//         Student(name, year)
//     methods
//        introduceSelf()
//        canStudyArchery() { return this.year > 1 }

// student = new Student('Weber', 1)
// student.year // error: 'year' is a private property of Student

// En lenguajes que no aplican el acceso como este, los programadores usan convenciones de nomenclatura, como comenzar el nombre con un guión bajo, para indicar que la propiedad debe considerarse privada.
