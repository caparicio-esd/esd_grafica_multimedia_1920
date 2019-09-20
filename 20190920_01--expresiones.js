// Adivina mi nombre

let nameToGuess = "Carlos";
let name = prompt("Adivina el nombre!!");

let trueOrFalse = nameToGuess == name; // Qué evalua esta expresión??

// if y else lo explicamos más profundamente la semana próxima

if (trueOrFalse) {
  console.log("Acertaste!");
} else {
  console.log("Mal!");
}
