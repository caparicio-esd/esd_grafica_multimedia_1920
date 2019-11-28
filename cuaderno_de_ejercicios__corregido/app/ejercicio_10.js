/**
 *
 * EJERCICIO 09
 * Dados dos números a y b, ver cuál de ellos es más cercano a
 * 100 e imprimir en consola: “El número a es más cercano que el b a 100 por x diferencia”
 */

{
    try {

        let num01 = 43;
        let num02 = 124;
        let center = 100;

        let diff01 = Math.abs(center - num01);
        let diff02 = Math.abs(center - num02);
        let totalDiff = Math.abs(diff02 - diff01);

        let message01 = '';
        let message02 = `Por ${totalDiff} de diferencia.`

        if (diff02 > diff01) {
            message01 = `El número ${num01} es más cercano que el ${num02} a ${center}`;
        } else {
            message01 = `El número ${num02} es más cercano que el ${num01} a ${center}`;
        }

        console.log('Ejercicio 10:');
        console.log(`${message01}. ${message02}`);

    } catch (err) {
        console.log("El ejercicio 10 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}


