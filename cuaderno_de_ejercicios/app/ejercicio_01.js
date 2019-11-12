{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try

        // no pide nada y no retorna nada...
        let ejercicio01a = function () {
            let now = new Date();
            let day = now.getDate();
            let month = now.getMonth() + 1;
            let year = now.getFullYear();

            let message = `Hola, hoy es el día ${day} del mes ${month} del año ${year}`;
            console.log(message);
        };

        // parametros
        let ejercicio01b = function (date = new Date()) { //date
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            let message = `Hola, hoy es el día ${day} del mes ${month} del año ${year}`;
            console.log(message);
        };

        // Retorno cosas
        let ejercicio01c = function (date = new Date()) {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            let message = `Hola, hoy es el día ${day} del mes ${month} del año ${year}`;
            return message;
        };

        2; // 2
        "2" + "1"; // "21"
        false && true; // false


        ejercicio01a(); // Null

        ejercicio01b(new Date(2017, 2, 4));  // Null
        ejercicio01b(); // Null

        let dateFormatted = ejercicio01c(); // Hola, hoy es el día 7...

    } catch (err) {
        console.log("El ejercicio 01 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}


/**
 *
 * Suma dos numeros
 * param1: Number
 * param2: Number
 *
 * return: Null
 *
 *  */
let sumaDosNumeros = function (num01 = 0, num02 = 0) {
    console.log(num01 + num02);
};

sumaDosNumeros(2, 5);
sumaDosNumeros(2, 4);
sumaDosNumeros(2);


sumaDosNumeros(); // Error






let sumaTresNumeros = function (a, b, c) {
    let suma = a + b + c;
    return suma;
};

let suma01 = sumaTresNumeros(1, 2, 5);
console.log(suma01); // 8








let formattedName = function (name, lastName) {
    let msg = `
        <p>
            El nombre es <strong>${name}</strong> <em>${lastName}</em>
        </p>
    `;
    return msg;
};

let alumnos = [
    ["Juan", "Álvarez"],
    ["Pedro", "Ramírez"],
    ["Ana", "López"]
];

for (let i = 0; i < alumnos.length; i++) {
    let message = formattedName(alumnos[i][0], alumnos[i][1]);
    document.querySelector('body').innerHTML += message;
}











