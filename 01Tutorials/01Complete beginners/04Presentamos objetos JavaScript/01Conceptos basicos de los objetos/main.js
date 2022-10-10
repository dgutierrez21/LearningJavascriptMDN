// Conceptos básicos de los objetos #008000
// Un objeto es una colección de datos relacionados y/o funcionalidad. Estos generalmente consisten en varias variables y funciones (que se llaman propiedades y métodos cuando están dentro de objetos). Trabajemos a través de un ejemplo para entender cómo se ven.

// Para empezar, haga una copia local de nuestro archivo oojs.html. Esto contiene muy poco, un elemento <script> para que escribamos nuestro código fuente. Usaremos esto como base para explorar la sintaxis básica de los objetos. Mientras trabaja con este ejemplo, debe tener la consola de JavaScript de las herramientas de desarrollo abierta y lista para escribir algunos comandos.

// Al igual que con muchas cosas en JavaScript, la creación de un objeto a menudo comienza con la definición e inicialización de una variable. Intente ingresar la siguiente línea debajo del código JavaScript que ya está en su archivo, luego guarde y actualice:

const persona = {};

// Ahora abra la consola JavaScript de su navegador, ingrese person en ella y presione Enter/Return. Debería obtener un resultado similar a una de las siguientes líneas:

// [object Object]
// Object { }
// { }

// Enhorabuena, acabas de crear tu primer objeto. ¡Trabajo hecho! Pero este es un objeto vacío, por lo que realmente no podemos hacer mucho con él. Vamos a actualizar el objeto JavaScript en nuestro archivo para que se vea así:

const persona2 = {
  nombre: ["Bob", "Smith"],
  edad: 32,
  bio: function () {
    console.log(`${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años`);
  },
  introducirseASiMismo: function () {
    console.log(`Hola, yo soy ${this.nombre[0]}`);
  },
};

// Nota: La palabra clave "this" se refiere a un objeto que está ejecutando el código actual. Hace referencia al objeto que está ejecutando la función actual. Si la función a la que se hace referencia es un función regular, this" hace referencia al objeto global. Si la función a la que se hace referencia es un método en un objeto, this" hace referencia al objeto en sí.

// Después de guardar y actualizar, intente ingresar algunos de los siguientes en la consola de JavaScript en las herramientas de desarrollo de su navegador:

persona2.nombre;
persona2.nombre[0];
persona2.edad;
persona2.bio();
persona2.introducirseASiMismo();

// ¡Ahora tiene algunos datos y funcionalidades dentro de su objeto, y ahora puede acceder a ellos con una sintaxis simple y agradable!

// Entonces, ¿qué está pasando aquí? Bueno, un objeto se compone de varios miembros, cada uno de los cuales tiene un nombre (por ejemplo, name y age arriba) y un valor (por ejemplo['Bob', 'Smith'] y 32). Cada par nombre/valor debe estar separado por una coma, y el nombre y el valor en cada caso están separados por dos puntos. La sintaxis siempre sigue este patrón:

/*
const objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
*/

// El valor de un miembro de objeto puede ser casi cualquier cosa: en nuestro objeto persona tenemos un número, una matriz y dos funciones. Los dos primeros elementos son elementos de datos y se denominan propiedades del objeto. Los dos últimos elementos son funciones que permiten al objeto hacer algo con esos datos y se denominan métodos del objeto..

// Cuando los miembros del objeto son funciones, hay una sintaxis más simple. En lugar de bio: function () podemos escribir bio(). Así:

const persona3 = {
  nombre: ["Pablo", "Salas"],
  edad: 45,
  bio() {
    console.log(`${this.nombre[0]} ${this.nombre[1]} tiene ${this.edad} años.`);
  },
  introducirseASiMismo() {
    console.log(
      `Hola, mi nombre es ${this.nombre[0]} y tengo ${this.edad} años.`
    );
  },
};

persona3.bio();
persona3.introducirseASiMismo();

// A partir de ahora, usaremos esta sintaxis más corta.

// Un objeto como este se conoce como un objeto literal: literalmente hemos escrito el contenido del objeto a medida que lo hemos creado. Esto es diferente en comparación con los objetos instanciados de las clases, que veremos más adelante.

// Es muy común crear un objeto utilizando un literal de objeto cuando se desea transferir una serie de elementos de datos estructurados y relacionados de alguna manera, por ejemplo, enviando una solicitud al servidor para que se coloque en una base de datos. Enviar un solo objeto es mucho más eficiente que enviar varios elementos individualmente, y es más fácil trabajar con él que con una matriz, cuando se desea identificar elementos individuales por su nombre.
