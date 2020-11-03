document.getElementById('letter').onkeyup = function upPress() {
 var letter = document.getElementById('letter').value; 
alert(letter)   
}
//ici on n'utilise pas la fonction onkeydown car on veut que la lettre soit affiché quand on termine d'appuyer donc il faut utiliser la fonction onkeyup

// ligne 1 on appelle l'ID 'letter' en appuyant sur .onkeyup , cela déclenche la fonction upPress (toujours nommé la fonction même si elle n'apparait pas dans le html). La fonction déclenche les élements qui se trouve à l'interieur des {}