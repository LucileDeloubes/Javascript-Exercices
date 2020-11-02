function recupInfos() { // fonction dans la balise bouton
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var city = document.getElementById("city").value;

    alert('Bonjour '  + firstName  + lastName  + 'de ' + city);
}
// document signifie page HTML 
// synthaxe correcte : document.getElementById("firstName").value;