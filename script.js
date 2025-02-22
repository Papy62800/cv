// document.getElementById('toggleButton').addEventListener('click', function () {
//     const image = document.getElementById('photoProfil');

//     if (image.classList.contains('hidden')) {
//         image.classList.remove('hidden');
//         this.textContent = 'visible'; // Change le texte du bouton  
//     } else {
//         image.classList.add('hidden');
//         this.textContent = 'hidden'; // Change le texte du bouton  
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    let colonneGauche = document.getElementById("colonneG");
    console.log(colonneGauche); // Affiche l'élément dans la console


    let btn = document.getElementById("toggleButton")

    console.log(btn);

    btn.addEventListener("click", openColonne);
    function openColonne() {
        console.log('click');
        
        colonneGauche.classList.toggle("active")
    }


    












});