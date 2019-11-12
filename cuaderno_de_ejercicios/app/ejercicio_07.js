{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque


        let ejercicio07 = function (stringIn) {

            let firstCh = stringIn.slice(0, 1);
            let lastCh = stringIn.slice(-1);
            let restCh = stringIn.slice(1, -2);

            let stringOut = lastCh + restCh + firstCh;
            return stringOut;
        };

        ejercicio07('Hola que tal');




    } catch (err) {
        console.log("El ejercicio 07 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}
