/**
 *
 * EJERCICIO 05
 * Escribir un programa que encuentre entre los años 2019 y 2050 el primer 1
 * de enero que sea domingo e imprimir en consola
 * “El día 1 de enero del año x será domingo”.
 */

{
    try {

        let currYear = new Date().getFullYear();
        let limitYear = 2050;

        console.log('Ejercicio 05:');

        for (let i = currYear; i <= limitYear; i++) {
            let firstOfYear = new Date(i, 0, 1);
            let firstOfYearIsSunday = firstOfYear.getDay() == 0;

            if (firstOfYearIsSunday) {
                console.log(`El día 1 de enero del año ${i} será domingo`);
            }
        }

    } catch (err) {
        console.log("El ejercicio 05 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

