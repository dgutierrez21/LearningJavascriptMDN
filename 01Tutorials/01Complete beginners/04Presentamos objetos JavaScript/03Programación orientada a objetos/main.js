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
