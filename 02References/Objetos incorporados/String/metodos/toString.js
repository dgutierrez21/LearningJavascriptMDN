// String.prototype.toString()
// El método toString() devuelve una cadena que representa el valor de cadena especificado.

// Sintaxis
// toString()

// Valor devuelto
// Una cadena que representa el valor de cadena especificado.

// Descripción
// El objeto String reemplaza el método String de Object;toString no hereda Object.prototype.toString() Para String los valores String, el método toString devuelve la propia cadena (si es una primitiva) o la cadena que ajusta el objeto String. Tiene exactamente la misma implementación que String.prototype.valueOf().

// El método toString() requiere que this valor sea un objeto primitivo o contenedor String. Produce un TypeError para otros valores this intentar obligarlos a valores de cadena.

// Debido a que String no tiene un método [@@toPrimitive]() JavaScript llama al método toString() automáticamente cuando se usa un objeto String en String un contexto que espera una cadena, como en un literal de plantilla. Sin embargo, los valores primitivos de String no consultan el método toString() para ser forzados a strings, ya que ya son cadenas, no se realiza ninguna conversión.

// Ejemplos

const x = new String("Hola mundo");

console.log(x);
console.log(x.toString());
