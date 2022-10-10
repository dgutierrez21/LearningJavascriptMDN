const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declarar la matriz de nombres de archivos de imagen */

const imgs = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declarar el texto alternativo para cada archivo de imagen */

// const altImgsObj = {
//   "pic1.jpg": "Imagen ojo humano",
//   "pic2.jpg": "Imagen cuadro",
//   "pic3.jpg": "Imagen flores",
//   "pic4.jpg": "Imagen geroglifico",
//   "pic5.jpg": "Imagen mariposa",
// };

const altImgs = [
  "Imagen ojo humano",
  "Imagen cuadro",
  "Imagen flores",
  "Imagen geroglifico",
  "Imagen mariposa",
];

/* Recorrer las imágenes en bucle */

// for (const image of imgs) {
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", `images/${image}`);
//   newImage.setAttribute("alt", altImgsObj[image]);
//   thumbBar.appendChild(newImage);
// }

for (let i = 0; i < imgs.length; i++) {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `./images/${imgs[i]}`);
  newImage.setAttribute("alt", altImgs[i]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Cableado del botón de oscurecimiento/iluminación */

btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
});
