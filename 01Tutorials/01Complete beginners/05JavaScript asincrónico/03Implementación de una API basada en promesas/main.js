// Cómo implementar una API basada en promesas #008000

// En el último artículo discutimos cómo usar API que devuelven promesas. En este artículo veremos el otro lado: cómo implementar API que devuelvan promesas. Esta es una tarea mucho menos común que usar API basadas en promesas, pero aún así vale la pena conocerla.

// Generalmente, cuando implementas una API basada en promesas, estarás envolviendo una operación asíncrona, que puede usar eventos, o callbacks simples, o un modelo de paso de mensajes. Tendrás que organizar un objeto Promise para manejar el éxito o el fracaso de esa operación de forma adecuada.
