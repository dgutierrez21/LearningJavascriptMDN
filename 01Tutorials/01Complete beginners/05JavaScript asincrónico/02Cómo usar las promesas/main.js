// Cómo usar las promesas #ff0

// Las promesas son la base de la programación asíncrona en JavaScript moderno. Una promesa es un objeto devuelto por una función asincrónica, que representa el estado actual de la operación. En el momento en que se devuelve la promesa al autor de la llamada, la operación a menudo no ha finalizado, pero el objeto de promesa proporciona métodos para controlar el éxito o el error final de la operación.

// En el último artículo, hablamos sobre el uso de devoluciones de llamada para implementar funciones asíncronas. Con ese diseño, se llama a la función asíncrona, pasando la función de devolución de llamada. La función vuelve inmediatamente y llama a la devolución de llamada cuando finaliza la operación.

// Con una API basada en promesas, la función asincrónica inicia la operación y devuelve un objeto Promise. A continuación, puede adjuntar controladores a este objeto de promesa y estos controladores se ejecutarán cuando la operación se haya realizado correctamente o haya fallado.
