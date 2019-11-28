/**
 *
 * EJERCICIO 12
 * Crear un número random entre 0 y 10.
 * Imprimir en consola “El alumno sacó Matrícula” si es igual a 10;
 * “El alumno sacó Sobresaliente” si es mayor o igual a 9 y
 * menor que 10, así sucesivamente.
 */

{
    try {

        let randNumber = Math.floor(Math.random() * (100 + 1)) / 10;

        console.log('Ejercicio 12:');
        console.log(`La nota del alumno es ${randNumber}`);

        if (randNumber == 10) {
            console.log('El alumno sacó Matrícula');
        } else if (randNumber < 10 && randNumber >= 9) {
            console.log('El alumno sacó Sobresaliente');
        } else if (randNumber < 9 && randNumber >= 7) {
            console.log('El alumno sacó Notable');
        } else if (randNumber < 7 && randNumber >= 5) {
            console.log('El alumno sacó Aprobado');
        } else if (randNumber < 5) {
            console.log('El alumno sacó Suspenso');
        }

    } catch (err) {
        console.log("El ejercicio 12 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

