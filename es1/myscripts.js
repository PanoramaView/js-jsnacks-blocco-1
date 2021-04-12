var parola1 = prompt("1st word: ");
var parola2 = prompt("2nd word: ");

if (parola1.length > parola2.length) {
    console.log("Word1 is longer.")
    var word1 = parola1;
    var word2 = parola2;
} else if (parola1.length < parola2.length) {
    console.log("Word2 is longer.")
    var word1 = parola2;
    var word2 = parola1;
} else {
    console.log("Word1 and Word2 have the same length.")
    var word1 = parola1;
    var word2 = parola2;
}

//stampo i risultati
console.log("\n Risultati:")
console.log(word1);
console.log(word2);
document.write(word1 +"<br>");
document.write(word2)