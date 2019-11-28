/**
 *
 * EJERCICIO 14
 * Crear un string largo. Escribir un programa que corte
 * el string a partir de un número x de caracteres y añadir “...”.
 * “En un lugar de la mancha cuyo nombre” => “En un lug...
 */

{
    try {
        let limit = 20;
        let stringIn = `
            Por ahora, la edición de Burgos de 1499 ha de tenerse por primera
            o princeps, aunque hubo de haber otra anterior, ya que
            en ella se lee: Con los argumentos nuevamente añadidos.
        `;

        let slicedText = stringIn.trim().slice(0, 20) + '...';

        console.log('Ejercicio 14:');
        console.log(slicedText);

    } catch (err) {
        console.log("El ejercicio 14 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

