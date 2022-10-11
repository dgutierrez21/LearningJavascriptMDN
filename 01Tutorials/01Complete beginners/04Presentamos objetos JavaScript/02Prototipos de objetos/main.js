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
