// Presentación de los trabajadores #ff0

// En este último artículo de nuestro módulo "JavaScript asíncrono", presentaremos los trabajadores, que permiten ejecutar algunas tareas en un hilo de ejecución independiente.

// Prerrequisitos: Conocimientos básicos de informática, una comprensión razonable de los fundamentos de JavaScript, incluyendo el manejo de eventos.
// Objetivo:	Entender cómo utilizar los web workers.
// En el primer artículo de este módulo, vimos lo que ocurre cuando tienes una tarea sincrónica de larga duración en tu programa: toda la ventana deja de responder. Fundamentalmente, la razón de esto es que el programa es de un solo hilo. Un hilo es una secuencia de instrucciones que sigue un programa. Debido a que el programa consiste en un solo hilo, sólo puede hacer una cosa a la vez: así que si está esperando a que regrese nuestra llamada sincrónica de larga duración, no puede hacer nada más.

// Los trabajadores le dan la posibilidad de ejecutar algunas tareas en un hilo diferente, de modo que puede iniciar la tarea, y luego continuar con otro procesamiento (como el manejo de las acciones del usuario).

// Pero esto tiene un precio. Con el código multihilo, nunca sabes cuándo tu hilo se suspenderá y el otro hilo tendrá la oportunidad de ejecutarse. Por lo tanto, si ambos hilos tienen acceso a las mismas variables, es posible que una variable cambie inesperadamente en cualquier momento, y esto causa errores que son difíciles de encontrar.

// Para evitar estos problemas en la web, tu código principal y tu código worker nunca tienen acceso directo a las variables del otro. Los trabajadores y el código principal se ejecutan en mundos completamente separados, y sólo interactúan enviándose mensajes. En particular, esto significa que los workers no pueden acceder al DOM (la ventana, el documento, los elementos de la página, etc.).

// Hay tres tipos diferentes de workers:

// ---trabajadores dedicados

// ---trabajadores compartidos

// ---trabajadores de servicio

// En este artículo, veremos un ejemplo del primer tipo de trabajador, y luego discutiremos brevemente los otros dos.

