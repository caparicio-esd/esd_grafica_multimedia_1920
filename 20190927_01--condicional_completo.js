/**
 *  Function getWeekDay
 *  Si la invocamos con un número nos devuelve un día de la semana
 */

let getWeekDay = (
    day = new Date().getDay() == 0 ? 7 : new Date().getDay(),
    offset = 0
) => {
    let wDays = "Lunes,Martes,Miércoles,Jueves,Viernes,Sábado,Domingo";
    let wDays_ = wDays.split(",");
    return wDays_[(day % 7) - 1 + offset];
};

getWeekDay(1) // "Lunes"
getWeekDay(2) // "Martes"

// Mirar más abajo...
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Aquí empieza el ejemplo de verdad

/**
 * Hay que intentar siempre hacer pseudocódigo antes
 * Es decir, intentar marcar qué pasos necesitamos
 */

// 1. me piden un dato - prompt
let num = prompt("Mete un numero");
console.log(`Número metido: ${num}`);

// 2. este numero lo convierto a otro formato : Lunes, Martes Miércoles - getWeekDay
let wDay = getWeekDay(num);
console.log(`Día: ${wDay}`);

// 3. Comparo strings y hago un condicional if if else else
let isMonday = wDay == "Lunes";
let isTuesday = wDay == "Martes";
let isWednesday = wDay == "Miércoles";
let isThurstday = wDay == "Jueves";
let isFriday = wDay == "Viernes";
let isSaturday = wDay == "Sábado";
let isSunday = wDay == "Domingo";

/**
 * Podemos hacerlo con if else if else...
 */
if (isMonday) {
    console.log("Oh no es lunes");
} else if (isTuesday) {
    console.log("Bueno, es martes...");
} else if (isWednesday) {
    console.log("Miércoles, mitad de la semana");
} else if (isThurstday) {
    console.log("Jueves ya falta poco!");
} else if (isFriday) {
    console.log("Yay, esta noche juerga");
} else if (isSaturday) {
    console.log("A disfrutar del campo");
} else if (isSunday) {
    console.log("Hoy tengo que estudiar JavaScript!");
} else {
    console.log("ei, no has metido un numero entre 1 y 7");
}

/**
 * O podemos hacerlo con switch
 */
switch (wDay) {
    case "Lunes":
        console.log("Oh no es lunes");
        break;
    case "Martes":
        console.log("Bueno, es martes...");
        break;
    case "Miércoles":
        console.log("Miércoles, mitad de la semana");
        break;
    case "Jueves":
        console.log("Jueves ya falta poco!");
        break;
    case "Viernes":
        console.log("Yay, esta noche juerga");
        break;
    case "Sábado":
        console.log("A disfrutar del campo");
        break;
    case "Domingo":
        console.log("Hoy tengo que estudiar JavaScript!");
        break;
    default:
        console.log("ei, no has metido un numero entre 1 y 7");
        break;
}

