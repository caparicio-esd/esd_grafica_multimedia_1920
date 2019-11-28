/**
 *
 * EJERCICIO 11
 * Crear un número random entre 0 y 100, calcular si este número
 * está el rango entre 30 y 50, calcular si está en el
 * rango entre 50 y 70, ambos incluidos e imprimir en consola:
 *
 * “Hemos creado un número aleatorio x, que (no) está en el
 * primer rango y que (no) está en el segundo rango”
 */


{
    try {

        let range01 = [30, 50];
        let range02 = [50, 70];
        let randNumber = Math.floor(Math.random() * 101);

        let isInRange01 = randNumber > range01[0] && randNumber < range01[1];
        let isInRange02 = randNumber >= range02[0] && randNumber <= range02[1];

        console.log('Ejercicio 11:');

        if (isInRange01 && isInRange02) {
            console.log(`Hemos creado un número aleatorio ${randNumber}, que está en el primer rango y que está en el segundo rango`);
        } else if (!isInRange01 && isInRange02) {
            console.log(`Hemos creado un número aleatorio ${randNumber}, que no está en el primer rango pero que sí está en el segundo rango`);
        } else if (isInRange01 && !isInRange02) {
            console.log(`Hemos creado un número aleatorio ${randNumber}, que sí está en el primer rango y que no está en el segundo rango`);
        } else {
            console.log(`Hemos creado un número aleatorio ${randNumber}, que no está en el primer rango ni está en el segundo rango`);
        }


    } catch (err) {
        console.log("El ejercicio 11 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

