/**
 *
 * EJERCICIO 02
 * Escribir un programa que diga qué día de la semana es hoy “Hoy es día x”,
 * y que si es fin de semana diga “Hoy es Domingo, viva el fin de semana”
 */


{
    try {

        let weekDayNamesString = 'Domingo, Lunes, Martes, Miércoles, Jueves, Viernes, Sábado';
        let weekDayNames = weekDayNamesString.split(', ');

        let date = new Date();
        let weekDate = date.getDay();

        let messagePart01 = `Hoy es día ${weekDayNames[weekDate]}`;
        let messagePart02 = `, viva el fin de semana!!`;
        let messageFinal;

        if (weekDate == 0 || weekDate == 6) {
            messageFinal = messagePart01 + messagePart02;
        } else {
            messageFinal = messagePart01;
        }

        console.log('Ejercicio 02:');
        console.log(messageFinal);

    } catch (err) {
        console.log("El ejercicio 02 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}
