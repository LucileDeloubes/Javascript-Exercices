var image = document.getElementById('booGhost');
image.onmouseover = function changeImage() {
    image.src="IMG/Boo_Hide.png";
}
image.onmouseout = function mainImage() {
    image.src="IMG/Boo.png";
}
// On appelle les fonctions setIlmg et on leur demande de changer l'image

// Si le fichier JS est dans un autre dossier, partir du principe que lorsqu'on modifie une image dans l'html, le chemin de l'image part de la même racine que l'index.