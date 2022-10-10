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

// Notación de puntos #008000
// Arriba, accedió a las propiedades y métodos del objeto mediante notación de puntos. El nombre del objeto (persona) actúa como el espacio de nombres: primero debe ingresarse para acceder a cualquier cosa dentro del objeto. A continuación, escriba un punto, luego el elemento al que desea acceder: puede ser el nombre de una propiedad simple, un elemento de una propiedad array o una llamada a uno de los métodos del objeto, por ejemplo:

console.log(persona3.nombre[0]);
console.log(persona3.edad);

// Objetos como propiedades de objeto #00aae4
// Una propiedad de objeto puede ser en sí misma un objeto. Por ejemplo, intente cambiar el name del miembro de

// const person = {
//   name: ["Bob", "Smith"],
// };

// Para

const persona4 = {
  nombre: {
    primero: "Juan",
    segundo: "Andres",
  },
  // …
};

// Para acceder a estos elementos solo necesitas encadenar el paso extra al final con otro punto. Pruebe estos en la consola de JS:

console.log(persona4.nombre.primero);
console.log(persona4.nombre.segundo);

// Si hace esto, también deberá revisar el código de su método y cambiar cualquier instancia de

// name[0];
// name[1];

// Para

// name.first;
// name.last;

// De lo contrario, sus métodos ya no funcionarán.

// Notación entre corchetes #008000
// La notación entre corchetes proporciona una forma alternativa de acceder a las propiedades del objeto. En lugar de usar notación de puntos como esta:

// person.age;
// person.name.first;

// En su lugar, puede usar corchetes:

const persona5 = {
  nombre: {
    primero: "Juan",
    segundo: "Andres",
  },
  edad: 67,
};

console.log(persona5["nombre"]["segundo"]);
console.log(persona5["edad"]);

// Esto se parece mucho a cómo se accede a los elementos de una matriz, y es básicamente lo mismo: en lugar de usar un número de índice para seleccionar un elemento, está utilizando el nombre asociado con el valor de cada miembro. No es de extrañar que los objetos a veces se llamen matrices asociativas: asignan cadenas a valores de la misma manera que las matrices asignan números a valores.

// La notación de puntos generalmente se prefiere a la notación entre corchetes porque es más sucinta y más fácil de leer. Sin embargo, hay algunos casos en los que tiene que usar corchetes. Por ejemplo, si el nombre de una propiedad de objeto se mantiene en una variable, no puede usar la notación de puntos para obtener acceso al valor, pero puede acceder al valor mediante la notación entre corchetes.

// En el ejemplo siguiente, la función logProperty() puede utilizar person[propertyName] para recuperar el valor de la propiedad denominada en propertyName.

const persona6 = {
  nombre: ["Jhon", "Doe"],
  edad: 23,
  hermano: {
    mayor: "Pablo",
    menor: "Esteban",
  },
};

// con notación entre corchetes

function registrarPropiedad(nombrePropiedad, indicePropiedad) {
  console.log(persona6[nombrePropiedad][indicePropiedad]);
  //   console.log(persona6.nombrePropiedad[indicePropiedad]); // Esto genera error debido a que se esta accediendo directamente a la propiedad del objeto, la cual no existe.
}

registrarPropiedad("nombre", 0);

// con notación entre corchetes

function registrarPropiedad2(nombrePropiedad, nombreSegundaPropiedad) {
  console.log(persona6[nombrePropiedad][nombreSegundaPropiedad]);
}

registrarPropiedad2("hermano", "menor");

// con notación de punto

function registrarPropiedad3(indicePropiedad) {
  console.log(persona6.nombre[indicePropiedad]);
}

registrarPropiedad3(1);

// con notación de punto

function registrarPropiedad4(nombrePropiedad) {
  console.log(persona6.hermano[nombrePropiedad]);
}

registrarPropiedad4("mayor");

// Establecer miembros de objeto #008000
// Hasta ahora, solo hemos analizado la recuperación (u obtención) de miembros de objetos: también puede establecer (actualizar) el valor de los miembros de objetos declarando el miembro que desea establecer (usando notación de puntos o corchetes), de la siguiente manera:

const persona7 = {
  nombre: {
    apellido: "Sean",
  },
  edad: 34,
};

console.log(persona7.edad);
console.log(persona7["nombre"]["apellido"]);

persona7.edad = 45;

persona7["nombre"]["apellido"] = "Trace";

// Intente ingresar las líneas anteriores y luego haga que los miembros vuelvan a ver cómo han cambiado, así:

console.log(persona7.edad);
console.log(persona7["nombre"]["apellido"]);

// La configuración de miembros no solo se detiene en la actualización de los valores de las propiedades y métodos existentes; también puede crear miembros completamente nuevos. Pruebe estos en la consola de JS:

persona7["nombre"]["primerNombre"] = "Dean";
persona7["colorOjos"] = "azules";

persona7.saludo = function () {
  console.log(
    `Hola, mi nombre es ${persona7.nombre["primerNombre"]} ${persona7["nombre"]["apellido"]} y mis ojos son de color ${persona7.colorOjos}`
  );
};

console.log(persona7["colorOjos"]);
persona7.saludo();

// Un aspecto útil de la notación entre corchetes es que se puede usar para establecer no solo valores de miembros dinámicamente, sino también nombres de miembros. Digamos que queríamos que los usuarios pudieran almacenar tipos de valores personalizados en los datos de sus personas, escribiendo el nombre y el valor del miembro en dos entradas de texto. Podríamos obtener esos valores como este:

// const myDataName = nameInput.value;
// const myDataValue = nameValue.value;

// A continuación, podríamos agregar este nuevo nombre de miembro y valor al objeto person de esta manera:

// person[myDataName] = myDataValue;

// Para probar esto, intente agregar las siguientes líneas en su código, justo debajo de la llave de cierre del objeto person:

const misDatosNombre = "height",
  misDatosValor = "1.80cm";

persona7[misDatosNombre] = misDatosValor;

// Ahora intente guardar y actualizar, e ingrese lo siguiente en su entrada de texto:

console.log(persona7.height);

// Agregar una propiedad a un objeto mediante el método anterior no es posible con la notación de puntos, que solo puede aceptar un nombre de miembro literal, no un valor de variable que apunte a un nombre.

// ¿Qué es "this"? #008000
// Es posible que haya notado algo un poco extraño en nuestros métodos. Mira este, por ejemplo:

// introduceSelf() {
//   console.log(`Hi! I'm ${this.name[0]}.`);
// }

// Probablemente te estés preguntando qué es "this". La palabra clave this se refiere al objeto actual en el que se está escribiendo el código, por lo que en este caso this es equivalente a person. Entonces, ¿por qué no simplemente escribir person en su lugar?

// Bueno, cuando solo tienes que crear un solo objeto literal, no es tan útil. Pero si crea más de uno, this le permite usar la misma definición de método para cada objeto que cree.

// Ilustremos lo que queremos decir con un par simplificado de objetos de persona:

const persona8 = {
  nombre: "Chris",
  introducirSe() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

const persona9 = {
  nombre: "Kendrick",
  introducirSe() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  },
};

// Aunque el código del método es exactamente el mismo en cada caso. Esto no es muy útil cuando se escriben literales de objetos a mano, pero será esencial cuando comencemos a usar constructores para crear más de un objeto a partir de una sola definición de objeto, y ese es el tema de la siguiente sección.

// Introducción a los constructores #008000
// El uso de literales de objetos está bien cuando solo necesita crear un objeto, pero si tiene que crear más de uno, como en la sección anterior, son muy inadecuados. Tenemos que escribir el mismo código para cada objeto que creamos, y si queremos cambiar algunas propiedades del objeto, como agregar una propiedad height, entonces tenemos que recordar actualizar cada objeto.

// Nos gustaría una forma de definir la "forma" de un objeto, el conjunto de métodos y las propiedades que puede tener, y luego crear tantos objetos como queramos, simplemente actualizando los valores de las propiedades que son diferentes.

// La primera versión de esto es solo una función:

function crearPersona(nombre) {
  const obj = {};
  obj.nombre = nombre;
  obj.introducirSe = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };

  return obj;
}

// Esta función crea y devuelve un nuevo objeto cada vez que lo llamamos. El objeto tendrá dos miembros:

// un nombre de propiedad
// un método introducirSe().

// Tenga en cuenta que createPerson() toma un nombre de parámetro para establecer el valor de la propiedad nombre, pero el valor del método introducirSe() será el mismo para todos los objetos creados con esta función. Este es un patrón muy común para crear objetos.

// Ahora podemos crear tantos objetos como queramos, reutilizando la definición:

const charley = crearPersona("Charley");

console.log(charley);
console.log(charley.nombre);
charley.introducirSe();

const frankie = crearPersona("Frankie");

console.log(frankie);
console.log(frankie.nombre);
frankie.introducirSe();

// Esto funciona bien, pero es un poco largo: tenemos que crear un objeto vacío, inicializarlo y devolverlo. Una mejor manera es usar un constructor. Un constructor es solo una función llamada usando la new palabra clave. Cuando llame a un constructor,:

// ---Crear un nuevo objeto

// --Enlazar this al nuevo objeto, para que pueda hacer referencia a this código del constructor

// --Ejecute el código en el constructor

// --devolver el nuevo objeto.

// Los constructores, por convención, comienzan con una letra mayúscula y reciben su nombre por el tipo de objeto que crean. Así que podríamos reescribir nuestro ejemplo así:

function Persona(nombre) {
  this.nombre = nombre;
  this.introducirSe = function () {
    console.log(`Hola, soy ${this.nombre}`);
  };
}

// Para llamar a Person() como constructor, usamos new:

const sandy = new Persona("Sandy");

console.log(sandy);
console.log(sandy.nombre);
sandy.introducirSe();

const hallam = new Persona("Hallam");

console.log(hallam);
console.log(hallam.nombre);
hallam.introducirSe();
