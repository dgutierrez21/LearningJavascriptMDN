// Uso de las clases #ff0

// JavaScript es un lenguaje basado en prototipos: los comportamientos de un objeto se especifican mediante sus propias propiedades y las de su prototipo. Sin embargo, con la adición de las clases, la creación de jerarquías de objetos y la herencia de propiedades y sus valores están mucho más en línea con otros lenguajes orientados a objetos como Java. En esta sección, demostraremos cómo se pueden crear objetos a partir de clases.

// En muchos otros lenguajes, las clases, o constructores, se distinguen claramente de los objetos, o instancias. En JavaScript, las clases son principalmente una abstracción sobre el mecanismo de herencia prototípica existente - todos los patrones son convertibles a la herencia basada en prototipos. Las propias clases también son valores normales de JavaScript y tienen sus propias cadenas de prototipos. De hecho, la mayoría de las funciones normales de JavaScript pueden utilizarse como constructores: se utiliza el operador new con una función constructora para crear un nuevo objeto.

// En este tutorial jugaremos con el modelo de clases bien abstracto, y discutiremos la semántica que ofrecen las clases. Si quieres profundizar en el sistema de prototipos subyacente, puedes leer la guía Herencia y la cadena de prototipos.

// Este capítulo asume que ya estás algo familiarizado con JavaScript y que has usado objetos ordinarios.
