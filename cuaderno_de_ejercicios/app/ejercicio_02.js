{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try

        let ejercicio02 = function (date = new Date()) {
            let wDaysString = "Domingo, Lunes, Martes, Miércoles, Jueves, Viernes, Sábado";
            let wDays = wDaysString.split(', ');

            let wDay = date.getDay();
            let wDayText = wDays[wDay];

            let messagePart01 = `Hoy es día ${wDayText}`;
            let messagePart02 = ``;

            if (wDayText == "Sábado" || wDayText == "Domingo") {
                messagePart02 = `. Viva el fin de semana!!`;
            }

            let message = messagePart01 + messagePart02;
            return message;
        };

        let msg = ejercicio02(new Date(2019, 10, 9)); // "Hoy es día..."
        document.querySelector('h1').innerHTML = msg;




    } catch (err) {
        console.log("El ejercicio 02 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}


let min = 30;
let max = 50;
let diff = 50 - 30;

Math.floor((Math.random() * diff) + min)


