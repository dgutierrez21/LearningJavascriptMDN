function funcion1(x) {
  return x + 10;
}

function funcion2(x) {
  return x + 50;
}

function funcion3(x) {
  return x + 100;
}

function funcion4(x) {
  return x + 150;
}

export {
  funcion1 as nuevoNombreDeLaFuncion,
  funcion2 as otroNuevoNombreDeLaFuncion,
  funcion3,
  funcion4,
};
