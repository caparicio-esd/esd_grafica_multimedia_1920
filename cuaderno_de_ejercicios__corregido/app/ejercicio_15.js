/**
 *
 * EJERCICIO 15
 * Crear un programa que tome un string y lo corte en trozos de cuatro caracteres.
 * Imprimir en consola el array resultante y escribir
 * “El string se puede dividir en x trozos de 4 caracteres”
 */

{
    try {

        let chunks = [];
        let stringIn = `Por ahora, la edición de Burgos de 1499 ha de tenerse por primera o princeps, aunque hubo de haber otra anterior, ya que en ella se lee: Con los argumentos nuevamente añadidos.`;
        let stringToArray = stringIn.split('');
        let a = '';

        for (let i = 0; i < stringToArray.length; i++) {
            if (i % 4 == 0 || i == 0) {
                a = '';
            }

            a += stringToArray[i];

            if (i % 4 == 3) {
                chunks.push(a);
            }
        }

        console.log('Ejercicio 15:');
        console.log(chunks);


    } catch (err) {
        console.log("El ejercicio 15 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

