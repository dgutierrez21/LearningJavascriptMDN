// Colecciones con llave #008000

// Este capítulo presenta las colecciones de datos indexadas por una clave; los objetos Map y Set contienen elementos que son iterables en el orden de inserción.

// Maps #008000
// Objeto Mapa
// Un objeto Map es un simple mapa clave/valor y puede iterar sus elementos en orden de inserción.

// El siguiente código muestra algunas operaciones básicas con un Mapa. Consulte también la página de referencia de Mapas para ver más ejemplos y la API completa. Puede utilizar un bucle for...of para devolver un array de [clave, valor] en cada iteración.

const refranes = new Map();
refranes.set("Perro", "guau");
refranes.set("Gato", "miau");
refranes.set("Elefante", "sonar");

console.log(refranes.size); // 3

console.log(refranes.get("Perro")); // woof
console.log(refranes.get("Lobo")); // undefined
console.log(refranes.has("Pajaro")); // false
refranes.delete("Perro");
console.log(refranes.has("Perro")); // false

for (const [clave, valor] of refranes) {
  console.log(`${clave} va ${valor}`);
}

// // "gato va miau"
// // "elefante va sonar"

refranes.clear();
console.log(refranes.size); // 0
console.log(refranes.get("Gato")); // undefined

// Comparación de objetos y mapas #00aae4
// Tradicionalmente, los objetos se han utilizado para asignar cadenas a valores. Los objetos permiten establecer claves a valores, recuperar esos valores, eliminar claves y detectar si algo está almacenado en una clave. Los objetos Map, sin embargo, tienen algunas ventajas más que los hacen mejores mapas.

// Las claves de un Objeto son Cadenas o Símbolos, donde pueden ser de cualquier valor para un Mapa.

// Puedes obtener el tamaño de un Mapa fácilmente, mientras que tienes que llevar la cuenta del tamaño manualmente para un Objeto.

// La iteración de los mapas es en orden de inserción de los elementos.

// Un Objeto tiene un prototipo, por lo que hay claves por defecto en el mapa. (Esto puede obviarse utilizando map = Object.create(null)).

// Estos tres consejos pueden ayudarte a decidir si utilizar un Mapa o un Objeto: #00aae4

// Utilice mapas en lugar de objetos cuando las claves sean desconocidas hasta el momento de la ejecución, y cuando todas las claves sean del mismo tipo y todos los valores sean del mismo tipo.

// Utiliza mapas si hay necesidad de almacenar valores primitivos como claves porque los objetos tratan cada clave como una cadena, ya sea un valor numérico, un valor booleano o cualquier otro valor primitivo.

// Utiliza objetos cuando haya una lógica que opere sobre elementos individuales.

// Objeto WeakMap #00aae4
// Un WeakMap es una colección de pares clave/valor cuyas claves deben ser objetos, con valores de cualquier tipo arbitrario de JavaScript, y que no crea referencias fuertes a sus claves. Es decir, la presencia de un objeto como clave en un WeakMap no impide que el objeto sea recolectado por la basura. Una vez que un objeto utilizado como clave ha sido recogido, sus valores correspondientes en cualquier WeakMap se convierten también en candidatos a la recogida de basura, siempre y cuando no se haga referencia fuerte a ellos en otra parte.

// La API WeakMap es esencialmente la misma que la API Map. Sin embargo, un WeakMap no permite observar la vitalidad de sus claves, por lo que no permite la enumeración. Por tanto, no hay ningún método para obtener una lista de las claves de un WeakMap. Si lo hubiera, la lista dependería del estado de la recolección de basura, introduciendo no determinismo.

// Para más información y código de ejemplo, véase también "¿Por qué WeakMap?" en la página de referencia de WeakMap.

// Un caso de uso de los objetos WeakMap es para almacenar datos privados de un objeto, o para ocultar detalles de implementación. El siguiente ejemplo procede de la entrada del blog de Nick Fitzgerald "Hiding Implementation Details with ECMAScript 6 WeakMaps". Los datos y métodos privados pertenecen al interior del objeto y se almacenan en el objeto WeakMap privado. Todo lo expuesto en la instancia y el prototipo es público; todo lo demás es inaccesible desde el mundo exterior porque privates no se exporta desde el módulo.

const privados = new WeakMap();

function Publico() {
  const yo = {
    // Los datos privados van aquí
  };

  privados.set(this, yo);
}

Publico.prototype.method = function () {
  const yo = privados.get(this);
  // Hacer cosas con los datos privados de `yo`.
  //   // ...
};

module.exports = Publico;
