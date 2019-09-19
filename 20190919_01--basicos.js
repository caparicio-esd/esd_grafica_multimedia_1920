// Ejercicio de concatenación sencilla

let name = prompt("Escribe tu nombre por favor");
let lastName = prompt("Escribe tu apellido por favor");

let messageSimple = `Hola ${name} ${lastName}, encantado de conocerte!`;
let messageComplex = `
    <div>
        <h2>Hola ${name}!!</h2>
        <p>Qué alegría verte y que tu apellido sea ${lastName}</p>
    </div>
`;

console.log(messageSimple);
console.log(messageComplex);
