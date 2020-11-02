function controle(form) {
    var shoes = document.form.shoes.value;
    var birthYear = document.form.birthYear.value;
    var resultat1 = (shoes*2) + 5;
    var resultat2 = (resultat1 * 50) - birthYear;
    var resultat3 = resultat2 + 1769;
    alert('TADAAAAAM ! Le résultat est..... ' + resultat3 )  ;
}

// décomposer le calcul au fur et à mesure