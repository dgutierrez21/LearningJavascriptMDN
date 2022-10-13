// Trabajar con JSON #ff0

// JavaScript Object Notation (JSON) es un formato estándar basado en texto para representar datos estructurados basados en la sintaxis de objetos JavaScript. Se utiliza comúnmente para transmitir datos en aplicaciones web (por ejemplo, enviar algunos datos desde el servidor al cliente, para que puedan mostrarse en una página web, o viceversa). Lo encontrará con bastante frecuencia, por lo que en este artículo, le damos todo lo que necesita para trabajar con JSON usando JavaScript, incluido el análisis de JSON para que pueda acceder a los datos dentro de él y la creación de JSON.

// No, realmente, ¿qué es JSON? #008000
// JSON es un formato de datos basado en texto que sigue la sintaxis de objetos JavaScript, que fue popularizado por Douglas Crockford. A pesar de que se parece mucho a la sintaxis literal del objeto JavaScript, se puede usar independientemente de JavaScript, y muchos entornos de programación cuentan con la capacidad de leer (analizar) y generar JSON.

// JSON existe como una cadena, útil cuando desea transmitir datos a través de una red. Debe convertirse en un objeto JavaScript nativo cuando desee acceder a los datos. Esto no es un gran problema: JavaScript proporciona un objeto JSON global que tiene métodos disponibles para convertir entre los dos.

// Nota: La conversión de una cadena en un objeto nativo se denomina deserialización, mientras que la conversión de un objeto nativo en una cadena para que pueda transmitirse a través de la red se denomina serialización.

// Una cadena JSON se puede almacenar en su propio archivo, que es básicamente solo un archivo de texto con una extensión de .json y un tipo MIME de application/json.

// Estructura JSON #00aae4
// Como se describió anteriormente, JSON es una cadena cuyo formato se parece mucho al formato literal del objeto JavaScript. Puede incluir los mismos tipos de datos básicos dentro de JSON que en un objeto JavaScript estándar: cadenas, números, matrices, booleanos y otros literales de objetos. Esto le permite construir una jerarquía de datos, así:

/*



{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}

*/

// Si cargamos esta cadena en un programa JavaScript y la analizamos en una variable llamada superHeroes, por ejemplo, podríamos acceder a los datos dentro de ella utilizando la misma notación de punto / corchete que vimos en el artículo básico del objeto JavaScript. Por ejemplo:

const superHeroes = {
  squadName: "Super hero squad",
  homeTown: "Metro City",
  formed: 2016,
  secretBase: "Super tower",
  active: true,
  members: [
    {
      name: "Molecule Man",
      age: 29,
      secretIdentity: "Dan Jukes",
      powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
    },
    {
      name: "Madame Uppercut",
      age: 39,
      secretIdentity: "Jane Wilson",
      powers: [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes",
      ],
    },
    {
      name: "Eternal Flame",
      age: 1000000,
      secretIdentity: "Unknown",
      powers: [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel",
      ],
    },
  ],
};

console.log(superHeroes.homeTown);
console.log(superHeroes["active"]);

// Para acceder a los datos más abajo en la jerarquía, debe encadenar los nombres de propiedad y los índices de matriz necesarios. Por ejemplo, para acceder a la tercera superpotencia del segundo héroe que aparece en la lista de miembros, harías lo siguiente:

// con notación de corchetes

console.log(superHeroes["members"][1]["powers"][2]);

// con notación de punto

console.log(superHeroes.members[1].powers[2]);

// ---Primero, tenemos el nombre de la variable: superHeroes.

// ---Dentro de eso, queremos acceder a la propiedad members, por lo que usamos ["members"].

// ---members contiene una matriz poblada por objetos. Queremos acceder al segundo objeto dentro de la matriz, por lo que usamos [1].

// ---Dentro de este objeto, queremos acceder a la propiedad powers, por lo que usamos ["powers"].

// ---Dentro de la propiedad powers hay una matriz que contiene los superpoderes del héroe seleccionado. Queremos el tercero, así que usamos [2].

// Nota: Hemos hecho que el JSON visto anteriormente esté disponible dentro de una variable en nuestro JSONTest.html ejemplo (consulte el código fuente). Intente cargar esto y luego acceda a los datos dentro de la variable a través de la consola JavaScript de su navegador.

// Matrices como JSON #00aae4
// Anteriormente mencionamos que el texto JSON básicamente se parece a un objeto JavaScript dentro de una cadena. También podemos convertir matrices a/desde JSON. A continuación también es válido JSON, por ejemplo:

/*

[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]

*/

// Lo anterior es JSON perfectamente válido. Solo tendría que acceder a los elementos de la matriz (en su versión analizada) comenzando con un índice de matriz, por ejemplo[[0]["powers"][0].

// Otras notas #00aae4

// JSON es puramente una cadena con un formato de datos especificado: contiene solo propiedades, no métodos.

// JSON requiere que se usen comillas dobles alrededor de cadenas y nombres de propiedad. Las comillas simples no son válidas aparte de rodear toda la cadena JSON.

// Incluso una sola coma o dos puntos extraviados puede hacer que un archivo JSON salga mal y no funcione. Debe tener cuidado de validar cualquier dato que intente usar (aunque es menos probable que JSON generado por computadora incluya errores, siempre y cuando el programa generador funcione correctamente). Puede validar JSON utilizando una aplicación como JSONLint.

// JSON en realidad puede tomar la forma de cualquier tipo de datos que sea válido para su inclusión dentro de JSON, no solo matrices u objetos. Así, por ejemplo, una sola cadena o número sería JSON válido.

// A diferencia del código JavaScript en el que las propiedades de los objetos pueden no estar entre comillas, en JSON solo se pueden usar cadenas entrecomilladas como propiedades.

// Aprendizaje activo: Trabajar a través de un ejemplo JSON #008000
// Entonces, trabajemos a través de un ejemplo para mostrar cómo podríamos hacer uso de algunos datos con formato JSON en un sitio web.

// Empezar #00aae4
// Para empezar, haz copias locales de nuestros héroes.html y estilo.css archivos. Este último contiene algunos CSS simples para dar estilo a nuestra página, mientras que el primero contiene un cuerpo HTML muy simple, además de un elemento <script> para contener el código JavaScript que escribiremos en este ejercicio:

// Hemos hecho que nuestros datos JSON estén disponibles en nuestro GitHub, en https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json.

// Vamos a cargar el JSON en nuestro script y usar una ingeniosa manipulación DOM para mostrarlo, como este: ver imagen...

// Función de nivel superior #00aae4
// La función de nivel superior se ve así:

async function rellenar() {
  const solicitarURL =
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
  const solicitar = new Request(solicitarURL);

  const respuesta = await fetch(solicitar),
    superHeroes2 = await respuesta.json();

  rellenarHeader(superHeroes2);
  rellenarHeroes(superHeroes2);

  function rellenarHeader(obj) {
    const header = document.querySelector("header"),
      miH1 = document.createElement("h1");

    miH1.textContent = obj.squadName;
    header.appendChild(miH1);

    const parrafo = document.createElement("p");
    parrafo.textContent = `Ciudad natal: ${obj.homeTown} // Formado: ${obj.formed}`;

    header.appendChild(parrafo);
  }
}

// Para obtener el JSON, utilizamos una API llamada Fetch. Esta API nos permite realizar solicitudes de red para recuperar recursos de un servidor a través de JavaScript (por ejemplo, imágenes, texto, JSON, incluso fragmentos HTML), lo que significa que podemos actualizar pequeñas secciones de contenido sin tener que volver a cargar toda la página.

// En nuestra función, las primeras cuatro líneas usan la API Fetch para obtener el JSON del servidor:

// --Declaramos la variable requestURL para almacenar la URL de GitHub

// --usamos la URL para inicializar un nuevo objeto Request.

// --Realizamos la solicitud de red mediante la función fetch()) y esto devuelve un objeto Response

// --recuperamos la respuesta como JSON usando la función json() del objeto Response.

// Nota: La API fetch() es asincrónica. Aprenderemos mucho sobre las funciones asincrónicas en el siguiente módulo, pero por ahora, solo diremos que necesitamos agregar la palabra clave async antes del nombre de la función que usa la API fetch y agregar la palabra clave await las llamadas a cualquier función asincrónica.

// Después de todo eso, la variable superHeroes contendrá el objeto JavaScript basado en json. Luego pasamos ese objeto a dos llamadas a funciones: la primera llena el <header> con los datos correctos, mientras que la segunda crea una tarjeta de información para cada héroe del equipo y la inserta en la <section>.

// Rellenar el encabezado #00aae4
// Ahora que hemos recuperado los datos JSON y los hemos convertido en un objeto JavaScript, hagamos uso de ellos escribiendo las dos funciones a las que hicimos referencia anteriormente. En primer lugar, agregue la siguiente definición de función debajo del código anterior:

// ver función rellenar...

// Aquí primero creamos un elemento <h1> con createElement(), establecemos su textContent para que sea igual a la propiedad squadName del objeto y, a continuación, lo anexamos al encabezado usando appendChild(). Luego hacemos una operación muy similar con un párrafo: crearlo, establecer su contenido de texto y agregarlo al encabezado. La única diferencia es que su texto se establece en un literal de plantilla que contiene las propiedades homeTown y formed del objeto.
