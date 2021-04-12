/*
Chiedere 10 numeri e stampare la somma
*/
var num = new Array();
var somma = 0;
var lol = 0

for (var i = 0; i < 10; i++) {
    num[i] = parseInt(prompt("Numero: "));
    if(Number.isNaN(num[i])){
        alert("Non è un numero.")
        break;
    }
    somma += num[i];
}
console.log(somma);
console.log("Numeri inseriti: " + num.join(", "))