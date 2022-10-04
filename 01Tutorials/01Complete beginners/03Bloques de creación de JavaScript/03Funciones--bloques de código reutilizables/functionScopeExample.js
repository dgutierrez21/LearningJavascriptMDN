const x = 1;

// codigo inicial
/*

function a() {
  const y = 2;
}

function b() {
  const z = 3;
}

*/

// codigo editado 1

/*

function a() {
  const y = 2;
  output(y);
}

function b() {
  const z = 3;
  output(z);
}

*/

function output(value) {
  const para = document.createElement("p");
  document.body.appendChild(para);
  para.textContent = `Value: ${value}`;
}

// codigo editado 2

/*

function a() {
  const y = 2;
  output(x);
}

function b() {
  const z = 3;
  output(x);
}

*/

// codigo editado 3
function a() {
  const y = 2;
  output(z);
}

function b() {
  const z = 3;
  output(y);
}
