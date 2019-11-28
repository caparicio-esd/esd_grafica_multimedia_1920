/**
 *
 * EJERCICIO 04
 * Escribir un programa que imprima en consola si el año actual es bisiesto o no lo es.
 * Si lo es escribiremos un mensaje diciendo “Este año, 20..., no es bisiesto”, o “Este año, 20..., es bisiesto”.
 */

{
    try {

        let currentYear = new Date().getFullYear();
        let isLeapYear = currentYear % 4 == 0;

        let messagePart01 = `Este año, ${currentYear}, `;
        let messagePart02 = isLeapYear ? `es bisiesto` : 'no es bisiesto';

        let messageTotal = messagePart01 + messagePart02;

        console.log('Ejercicio 04:');
        console.log(messageTotal);

    } catch (err) {
        console.log("El ejercicio 04 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}
