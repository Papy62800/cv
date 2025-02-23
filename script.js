let colonneG = document.getElementById("colonneG");
let btn = document.getElementById("toggleButton");

btn.addEventListener("click", openMenu);

function openMenu() {
  colonneG.classList.toggle("toto");
  console.log(colonneG);
}
