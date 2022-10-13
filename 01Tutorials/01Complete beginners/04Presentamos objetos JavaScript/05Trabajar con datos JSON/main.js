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
