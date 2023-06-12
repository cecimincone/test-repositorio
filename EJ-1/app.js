const boton = document.getElementById ("boton");
const parrafo = document.getElementById ("parrafo");
boton.addEventListener("mouseenter", function () {
  parrafo.innerText = "estas encima del boton";
});

boton.addEventListener("mouseleave", function () {
  parrafo.innerText = "estas fuera del boton";
});

const img = document.getElementById ("foto");
const parrafos = document.getElementById ("parrafos");
img.addEventListener ("mouseenter", function () {
 parrafos.innerText = "estás sobre la imagen spa";

})

img.addEventListener("mouseleave", function () {
parrafos.innerText = "estás fuera de la imagen spa";})


  