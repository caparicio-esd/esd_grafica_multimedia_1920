{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try

        let ejercicio05 = function (dateOut) {
            let dateIn = new Date().getFullYear();
            let years = [];

            for (let i = dateIn; i <= dateOut; i++) {
                let d = new Date(i, 0, 1);
                let dW = d.getDay() == 0;

                if (dW) {
                    years.push(new Date(i, 0, 1));
                }
            }

            return years;
        };

        let years = ejercicio05(2220); // []
        console.log(years);


    } catch (err) {
        console.log("El ejercicio 05 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

