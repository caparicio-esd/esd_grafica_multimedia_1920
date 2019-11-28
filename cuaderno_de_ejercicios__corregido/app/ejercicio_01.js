/**
 *
 * EJERCICIO 01
 * Escribir un programa que imprima en la consola la fecha actual con el siguiente formato:
 * “Hola, hoy es el día 18 del mes 10 del año 2018”
 */

{
    try {

        let date = new Date();
        let message = `Hola, hoy es el día ${date.getDate()} del mes ${date.getMonth() + 1} del año ${date.getFullYear()}`;

        console.log('Ejercicio 01:');
        console.log(message);

    } catch (err) {
        console.log("El ejercicio 01 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}












