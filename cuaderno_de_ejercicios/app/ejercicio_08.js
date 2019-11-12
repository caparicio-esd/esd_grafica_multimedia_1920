{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try

        let ejercicio08 = function (num, mul01, mul02) {
            let ismul01 = 40 % mul01 == 0;
            let ismul02 = 40 % mul02 == 0;

            let final = ismul01 && ismul02;
            return final;
        };

        ejercicio08(40, 3, 7); // False


    } catch (err) {
        console.log("El ejercicio 08 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

