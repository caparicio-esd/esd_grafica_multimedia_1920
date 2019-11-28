/**
 *
 * EJERCICIO 09
 * Dado un array de números naturales, escribir un programa que
 * calcule el mayor y el menor, e imprimir por consola:
 *
 * “Dado un array con números x, y, z, a, .... El mayor es el x y el menor es el y”.
 */

{
    try {

        let arrayIn = [1, 4, -2, 5, 12, 6, 12, 1, 6, 4, 6];
        let maxNum = 0;
        let minNum = 0;

        for (let i = 0; i < arrayIn.length; i++) {
            if (arrayIn[i] > maxNum) {
                maxNum = arrayIn[i];
            }
            if (arrayIn[i] < minNum) {
                minNum = arrayIn[i];
            }
        }

        console.log('Ejercicio 09:');
        console.log(`Dado un array con números ${arrayIn}. El mayor es el ${maxNum} y el menor es el ${minNum}`);


    } catch (err) {
        console.log("El ejercicio 09 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}
