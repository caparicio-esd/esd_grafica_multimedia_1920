// Importante, prompt('...') nos retorna un string, no un número
// Tenemos que preguntarnos siempre por el contenido de las variables.
// Podemos pasarlas por consola siempre que queramos
// Si tienen "comillas" son strings, si no números (o booleanos u otra cosa)

let num01 = prompt("Escribe el primer número");
let num02 = prompt("Escribe el segundo número");

let suma__MAL = num01 + num02;
let suma = Number(num01) + Number(num02);

let message01 = `La suma de ${num01} y ${num02} es ${suma__MAL}, pero está mal porque sumo dos strings!`;
let message02 = `La suma de ${num01} y ${num02} es ${suma}, pero está bien porque sumo dos números!`;

console.log(message01);
console.log(message02);
