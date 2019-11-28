/**
 *
 * EJERCICIO 13
 * Crear un string largo (un párrafo de largo más o menos).
 * Escribir un programa que retorne la porción del string hasta encontrar la primera e.
 * “Muerto el perro se acabó la rabia” => “Mue”
 */

{
    try {

        let stringIn = `
            Por ahora, la edición de Burgos de 1499 ha de tenerse por primera
            o princeps, aunque hubo de haber otra anterior, ya que
            en ella se lee: Con los argumentos nuevamente añadidos.
        `;

        let indexOfE = stringIn.toLowerCase().indexOf('e');
        let slicedText = stringIn.trim().slice(0, indexOfE);

        console.log('Ejercicio 13:');
        console.log(slicedText);

    } catch (err) {
        console.log("El ejercicio 13 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

