function controle() {
    var age = document.getElementById('age').value;
    var majeur = age >= 18;
    var mineur = age < 18;
    if (majeur === true){
        alert("Vous êtes majeur hourra !")
    } else {
        alert("Vous êtes mineur bouuuuuuuh ! ")
    }
}
// réussir à comparer 2 valeurs et à donner des conditions d'affichage avec IF et ELSE , indiqué si la condition est vraie ou fausse.