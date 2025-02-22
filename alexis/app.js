let colonneG = document.getElementById("g")
let btn = document.getElementById("btn")


btn.addEventListener('click', openMenu)

function openMenu() {
    colonneG.classList.toggle("toto")
}