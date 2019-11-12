{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try

        let ejercicio06 = function (dateIn) {

            let nowTimeStamp = dateIn.getTime(); // Number

            let xmas = new Date(dateIn.getFullYear(), 11, 25);
            let xmasTimeStamp = xmas.getTime(); // Number

            let diffTimeStamp = xmasTimeStamp - nowTimeStamp; //
            let diff = Math.ceil(diffTimeStamp / 1000 / 60 / 60 / 24);

            return diff;
        }

        ejercicio06(new Date(2019, 10, 9));

    } catch (err) {
        console.log("El ejercicio 06 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

