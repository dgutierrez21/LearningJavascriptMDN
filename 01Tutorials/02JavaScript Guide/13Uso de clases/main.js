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
