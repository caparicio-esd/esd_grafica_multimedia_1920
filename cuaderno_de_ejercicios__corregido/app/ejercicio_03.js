/**
 *
 * EJERCICIO 03
 * Escribir un programa que calcule el área de un triángulo
 * conociendo el tamaño de la base y de la altura.
 * (b*a) / 2
 */

{
    try {

        let base = 5;
        let altura = 4;
        let area = (base * altura) / 2;

        console.log('Ejercicio 03:');
        console.log(`El área de un triángulo de base ${base} y de altura ${altura} es ${area}.`);

    } catch (err) {
        console.log("El ejercicio 03 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

