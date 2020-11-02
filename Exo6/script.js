function controle() {
    var shoes = document.getElementById('shoes').value;
    var birthYear = document.getElementById('birthYear').value;
    var resultat1 = (shoes*2) + 5;
    var resultat2 = (resultat1 * 50) - birthYear;
    var resultat3 = resultat2 + 1769;
    alert('TADAAAAAM ! Le résultat est..... ' + resultat3 )  ;
}

// décomposer le calcul au fur et à mesure