function controle() {
    var age = document.getElementById('age').value;
    var majeur = age >= 18;
    var mineur = age < 18;
    if (age >= 18 && age < 150){
        alert("Vous êtes majeur hourra !")
    }
    else if (age >= 0 && age < 18 ){
        alert("Vous êtes mineur bouuuuuuuh ! ! ")
    }

    else {
        alert("Vous êtes un méchant mythomane ! ")
    }
}
// réussir à comparer 2 valeurs et à donner des conditions d'affichage avec IF et ELSE , indiqué si la condition est vraie ou fausse.