{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try

        /**
         *
         * Ejercicio 04 es una funcion que hace blabla
         * param year es un Number
         * return es un String
         *
         */
        let ejercicio04 = function (year) {
            let msg = "";

            if (year % 4 == 0) {
                msg = `El año ${year} es bisiesto`;
            } else {
                msg = `El año ${year} NO es bisiesto`;
            }

            return msg;
        };

        ejercicio04(34); // meto un numero (año) y me devuevlve un string

    } catch (err) {
        console.log("El ejercicio 04 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}




/**
 * Esta funcion abre menus
 * param : menuIn : NUmber
 * return Null
 */

let openMenu = function (numId) {
    //
    //
    //
    //
};

/**
 * Esta funcion abre menus
 * param : menuIn : NUmber
 * return Null
 */

let clseMenu = function (numId) {
    //
    //
    //
    //
};
