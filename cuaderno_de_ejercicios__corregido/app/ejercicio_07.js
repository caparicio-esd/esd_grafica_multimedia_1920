/**
 *
 * EJERCICIO 07
 * Escribir un programa que cree un string a partir de otro
 * intercambiando la primera y última letras.
 *
 * Comprobar previamente que el string no está vacío
 * y que su longitud es mayor que tres.
 *
 * Ejemplo: “Hola que tal” => “lola que taH”
 */

{
    try {

        let stringIn = "En un lugar de la mancha";
        let firstChar = stringIn.slice(0, 1);
        let lastChar = stringIn.slice(-1);
        let restChars = stringIn.slice(1, -1);

        let stringOut = lastChar + restChars + firstChar;

        console.log('Ejercicio 07:');
        console.log(`${stringIn} => ${stringOut}`);

    } catch (err) {
        console.log("El ejercicio 07 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}
