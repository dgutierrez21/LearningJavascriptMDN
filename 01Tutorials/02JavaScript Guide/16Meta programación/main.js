// Meta programación #ff0

// Los objetos Proxy y Reflect permiten interceptar y definir un comportamiento personalizado para las operaciones fundamentales del lenguaje (por ejemplo, búsqueda de propiedades, asignación, enumeración, invocación de funciones, etc.). Con la ayuda de estos dos objetos se puede programar en el nivel meta de JavaScript.

// Proxies #008000
// Los objetos proxy permiten interceptar ciertas operaciones e implementar comportamientos personalizados.

// Por ejemplo, obtener una propiedad de un objeto:

const manipulador = {
  get(objetivo, nombre) {
    return nombre in objetivo ? objetivo[nombre] : 42;
  },
};

const p = new Proxy({}, manipulador);

p.a = 1;

console.log(p.a, p.b);

console.log(p);

// El objeto Proxy define un objetivo (un objeto vacío en este caso) y un objeto handler, en el que se implementa una trampa get. Aquí, un objeto proxy no devolverá undefined al obtener propiedades indefinidas, sino que devolverá el número 42.

// Hay más ejemplos disponibles en la página de referencia de Proxy.

// Terminología #00aae4
// Los siguientes términos se utilizan cuando se habla de la funcionalidad de los proxies.

// handler
// Objeto marcador de posición que contiene trampas.

// traps
// Los métodos que proporcionan acceso a las propiedades. (Esto es análogo al concepto de trampas en los sistemas operativos).

// target
// Objeto que el proxy virtualiza. A menudo se utiliza como backend de almacenamiento para el proxy. Las invariantes (semántica que permanece sin cambios) relativas a la no extensibilidad del objeto o a las propiedades no configurables se verifican contra el objetivo.

// invariants
// Las semánticas que permanecen sin cambios al implementar operaciones personalizadas se denominan invariantes. Si se violan las invariantes de un manejador, se lanzará un TypeError.

// Manejadores y trampas #008000
// La siguiente tabla resume las trampas disponibles para los objetos Proxy. Consulte las páginas de referencia para obtener explicaciones detalladas y ejemplos.

// ver tabla en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming#handlers_and_traps

// Proxy revocable #008000
// El método Proxy.revocable() se utiliza para crear un objeto Proxy revocable. Esto significa que el proxy puede ser revocado a través de la función revoke y apaga el proxy.

// Después, cualquier operación sobre el proxy conduce a un TypeError.

const revocable = Proxy.revocable(
  {},
  {
    get(objetivo, nombre) {
      return `[[${nombre}]]`;
    },
  }
);

const proxy = revocable.proxy;

console.log(proxy.foo);

revocable.revoke();

// console.log(proxy.foo); // TypeError: No se puede realizar 'get' en un proxy que ha sido revocado

// proxy.foo = 1; // TypeError: No se puede realizar 'set' en un proxy que ha sido revocado

// delete proxy.foo; // TypeError: No se puede realizar 'deleteProperty' en un proxy que ha sido revocado

console.log(typeof proxy); // "objeto", typeof no lanza ninguna trampa

// Reflection #008000
// Reflect es un objeto incorporado que proporciona métodos para interceptar las operaciones de JavaScript. Los métodos son los mismos que los de los manejadores de proxy.

// Reflect no es un objeto de función.

// Reflect ayuda a reenviar las operaciones predeterminadas del manejador al objetivo.

// Con Reflect.has(), por ejemplo, se obtiene el operador in como una función:

// Reflect.has(Object, 'assign') // true

// Una función apply() mejor #00aae4
// Antes de Reflect, normalmente se utilizaba el método Function.prototype.apply() para llamar a una función con un valor dado y argumentos proporcionados como una matriz (o un objeto similar a una matriz).

// Function.prototype.apply.call(Math.floor, undefined, [1.75])

// Con Reflect.apply esto se vuelve menos verboso y más fácil de entender:

console.log(Reflect.apply(Math.floor, undefined, [1.75])); // 1

console.log(Reflect.apply(String.fromCharCode, undefined, [72, 111, 108, 97])); // Hola

console.log(
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulación"]).index
);
// 4

console.log(Reflect.apply("".charAt, "ponis", [3]));
// "i"

// Comprobación de si la definición de la propiedad ha tenido éxito #00aae4

// Con Object.defineProperty, que devuelve un objeto si tiene éxito, o lanza un TypeError en caso contrario, se utilizaría un bloque try...catch para atrapar cualquier error que se produzca al definir una propiedad. Dado que Reflect.defineProperty devuelve un estado booleano de éxito, puede utilizar simplemente un bloque if...else en este caso:

// if (Reflect.defineProperty(objetivo, propiedad, atributos)) {
//   console.log("Éxito");
// } else {
//   console.log("Fracaso");
// }
