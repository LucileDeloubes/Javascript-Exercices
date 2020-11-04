var blocLine = document.getElementById("blocLine");
// (optionnel : j'ai crée une variable qui est lié à ma div blocline que je veux faire disparaitre)

window.addEventListener("load", function noscroll() // addEventListener permet de créer un évenement qui sera "écouté" par un écouteur. Ici Load pour que l'évent se créer lorsque que la page se charge.
{
    
    document.getElementById('blocLine').style.visibility = "hidden"; // style.visibility permet de jouer sur la visibilité de ma div
     
})

window.addEventListener('scroll', function scrolldown() // Même principe que ligne 4 mais ici, l'écouteur est "scroll" qui définit que quand je scroll il se passe un event
 {
    var y = window.scrollY  // je créer ma variable y , ici elle recupère les données de ma page quand je sroll de haut en bas
    if (y >= 50) { 
        
        document.getElementById('blocLine').style.visibility = "visible";
        console.log(scrolldown); // si je scroll à sup ou égale à 50px alors ma div devient visible
    }
    else{
        document.getElementById('blocLine').style.visibility = "hidden";  // sinon elle se recache, si y est plus petit que 50 px
    }
   
})
