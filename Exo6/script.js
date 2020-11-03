function controle() {
    var shoes = document.getElementById('shoes').value;
    var birthYear = document.getElementById('birthYear').value;
    var resultat1 = ((((shoes*2)+5)*50) - birthYear) + 1769 ;
  69;
    alert('TADAAAAAM ! Le résultat est..... ' + resultat1 )  ;
}

// Mettre tout le calcul sur une même variablme, utiliser les parenthèses pour les priorités de calcul
