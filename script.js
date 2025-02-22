document.getElementById('toggleButton').addEventListener('click', function () {
    const image = document.getElementById('photoProfil');

    if (image.classList.contains('hidden')) {
        image.classList.remove('hidden');
        this.textContent = 'visible'; // Change le texte du bouton  
    } else {
        image.classList.add('hidden');
        this.textContent = 'hidden'; // Change le texte du bouton  
    }
});