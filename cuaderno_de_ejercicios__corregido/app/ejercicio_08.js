/**
 *
 * EJERCICIO 08
 * Escribir un programa que calcule si un número x metido
 * es múltiplo de 3 y de 7.
 *
 * Imprimir en consola: “El número x es múltiplo de 3 y de 7” o
 * “El número x no es múltiplo de 3 ni de 7” o “El número x es múltiplo de 3 pero no de 7”
 * o “El número x no es múltiplo de 3 pero sí de 7”
 */

{
    try {

        let num = 123123;
        let isMult3 = num % 3 == 0;
        let isMult7 = num % 7 == 0;

        console.log('Ejercicio 08:');

        if (isMult3 && isMult7) {
            console.log(`El número ${num} es múltiplo de 3 y de 7`);
        } else if (!isMult3 && isMult7) {
            console.log(`El número ${num} no es múltiplo de 3 pero sí de 7`);
        } else if (isMult3 && !isMult7) {
            console.log(`El número ${num} es múltiplo de 3 pero no de 7`);
        } else {
            console.log(`El número ${num} no es múltiplo de 3 ni de 7`);
        }

    } catch (err) {
        console.log("El ejercicio 08 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

