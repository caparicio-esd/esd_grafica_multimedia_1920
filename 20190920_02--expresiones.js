// Constraseña con límite de palabras por arriba y debajo

let limitDown = 6;
let limitUp = 12;

let name = prompt("Mete una contraseña!!");
let nameLength = name.length; // No lo hemos dado. Retorna la longitud del string. Es número

let correctDown = nameLength >= limitDown; // evalua true o false
let correctUp = nameLength <= limitUp; // evalua true o false

let correct = correctDown && correctUp; // evalua true o false

if (correct) {
  console.log(
    `La contraseña ${name} está correcta, es menor que ${limitUp} y mayor que ${limitDown}`
  );
} else {
  console.log(
    `La contraseña ${name} es incorrecta, recarga la página e intenta de nuevo`
  );
}
