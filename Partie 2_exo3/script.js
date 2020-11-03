document.getElementById('image').onclick = function grow()
{
    var image = document.getElementById("image");
    var width = image.clientWidth;
    if (width == 800) {
        alert("Vous avez atteint le niveau de zoom maximal.");
    } else {
        image.style.width = (width + 20) + "px";
    }
}
//J'appelle mon id image avec onclick (donc en cliquant dessus), elle déclenche la fonction que j'ai nommé "grow". Cette fonction va : définir la variable image en appellant l'élement en html. Elle va définir la variable de largeur avec clientWidth (qui représente la largeur intérieure d'un élément.)
// puis je vais mettre des conditions avec if (si j'atteins le seuil de 800px) alors j'envoie une alerte pour dire que je suis arrivé au max.
//sinon (else) je continue d'ajouter des pixel à ma variable width