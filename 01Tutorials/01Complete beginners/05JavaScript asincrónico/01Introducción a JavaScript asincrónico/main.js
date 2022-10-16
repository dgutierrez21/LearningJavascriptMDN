// Introducción a JavaScript asincrónico #ff0

// En este artículo, explicaremos qué es la programación asincrónica, por qué la necesitamos y discutiremos brevemente algunas de las formas en que las funciones asincrónicas se han implementado históricamente en JavaScript.

// La programación asincrónica es una técnica que permite al programa iniciar una tarea potencialmente de larga ejecución y seguir respondiendo a otros eventos mientras se ejecuta esa tarea, en lugar de tener que esperar hasta que esa tarea haya finalizado. Una vez finalizada esa tarea, se presenta el resultado del programa.

// Muchas funciones proporcionadas por los navegadores, especialmente las más interesantes, pueden llevar mucho tiempo y, por lo tanto, son asíncronas. Por ejemplo:

// ---Realizar solicitudes HTTP usando fetch()

// ---Acceso a la cámara o micrófono de un usuario mediante getUserMedia

// ---Pedir a un usuario que seleccione archivos mediante showOpenFilePicker()

// Por lo tanto, aunque es posible que no tenga que implementar sus propias funciones asincrónicas muy a menudo, es muy probable que necesite usarlas correctamente.

// En este artículo, comenzaremos analizando el problema con las funciones síncronas de larga ejecución, que hacen que la programación asíncrona sea una necesidad.
