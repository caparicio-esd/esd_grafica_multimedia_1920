/**
 *
 * EJERCICIO 06
 * Escribir un programa que calcule los días que faltan
 * para navidad e imprimir en consola “Faltan x días para Navidad”
 */

{
    try {

        let date = new Date();
        let dateTimeStamp = date.getTime();
        let xMas = new Date(date.getFullYear(), 11, 25);
        let xMasTimeStamp = xMas.getTime();

        let diff = xMasTimeStamp - dateTimeStamp;
        let diffInDays = Math.ceil(diff / 1000 / 60 / 60 / 24);

        console.log('Ejercicio 06:');
        console.log(`Faltan ${diffInDays} dia(s) para Navidad`);

    } catch (err) {
        console.log("El ejercicio 06 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

