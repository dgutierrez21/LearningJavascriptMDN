import { create, createReportList } from "./modules/canvas.js";

import * as SquareModule from "./modules/square.js";

import randomSquare from "./modules/square.js";

import {
  nuevoNombreDeLaFuncion,
  otroNuevoNombreDeLaFuncion,
  funcion3 as f3,
  funcion4 as f4,
} from "./modules/module.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";

let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = SquareModule.draw(myCanvas.ctx, 50, 50, 100, "blue");
SquareModule.reportArea(square1.length, reportList);
SquareModule.reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);

console.log(nuevoNombreDeLaFuncion(5));
console.log(otroNuevoNombreDeLaFuncion(10));

console.log(f3(20));
console.log(f4(50));

// draw a circle
let circle1 = drawCircle(myCanvas.ctx, 75, 200, 100, "green");
reportCircleArea(circle1.radius, reportList);
reportCirclePerimeter(circle1.radius, reportList);

// draw a triangle
let triangle1 = drawTriangle(myCanvas.ctx, 100, 75, 190, "yellow");
reportTriangleArea(triangle1.length, reportList);
reportTrianglePerimeter(triangle1.length, reportList);
