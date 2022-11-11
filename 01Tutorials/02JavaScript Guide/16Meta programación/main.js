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
