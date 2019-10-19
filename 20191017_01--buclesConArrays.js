


// Calcular la tabla del 7 hasta 1000

for (let i = 0; i < 1000; i = i + 7) {
    console.log(i);
}



// Recorrer un array con un bucle loop

let frutas = [
    "Manzana",
    "Pera",
    "Papaya",
    "Kiwi",
    "Melón",
    "Limón",
    "Plátano"
];

for (let i = 0; i < frutas.length; i++) {
    console.log(i);
    console.log(`Me gusta comer ${frutas[i]}`);
}


// Cogemos un string y hacemos que las pares mayúscula y las impares minúscula

let saludo = "Hola que tal, cómo estás??";
let saludoArr = saludo.split('');
let saludoFinal = ''; // Acumulador

for (let i = 0; i < saludoArr.length; i++) {
    if (i % 2 == 0) {
        saludoFinal += saludoArr[i].toUpperCase(); // Acumulamos en string
    } else {
        saludoFinal += saludoArr[i].toLowerCase(); // Acumulamos en string
    }
}

console.log(saludoFinal);



// Frutas que empiezan con P

frutas = [
    "Manzana",
    "Pera",
    "Papaya",
    "Kiwi",
    "Melón",
    "Limón",
];

let frutasConP = []; // Acumulador

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].slice(0, 1) == 'P') {
        frutasConP.push(frutas[i]); // Acumulamos en array
    }
}

console.log(frutasConP);


// Frutas en párrafos de HTML

frutas = [
    "Manzana",
    "Pera",
    "Papaya",
    "Kiwi",
    "Melón",
    "Limón",
];

let frutasEnParrafos = ''; // Acumulador

for (let i = 0; i < frutas.length; i++) {
    frutasEnParrafo += `
        <p>
            Me gustan mucho la ${frutas[i]}
        </p>
    `; // Acumulamos en string
}

document.querySelector('body').innerHTML = frutasEnParrafo; // Para inyectarlo en body



// Calcular domingos como en el ejercicio del cuaderno


for (let i = 2019; i <= 2050; i++) {
    let date = new Date(i, 0, 1);
    let getWeekDate = date.getDay();

    if (getWeekDate == 0) {
        console.log(`En el año ${i} el 1 de enero es domingo`);
    }
}

