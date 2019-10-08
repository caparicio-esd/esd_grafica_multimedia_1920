
/**
 * Super importante antes de programar nada,
 * hacer diagrama de flujo (pseudocódigo, o simplemente pensar antes de tirar una línea)
 */


// pedimos numero
let num = prompt('dame un numero!');
let isVoid = num == "";

if (!isVoid) {
    let isNum = num == Number(num);


    if (isNum) {
        //entre 0 y 10
        let over0 = num >= 0;
        let under10 = num <= 10;
        let isInLimits = over0 && under10;

        if (isInLimits) {
            // numero aleatorio
            let rand = Math.floor(Math.random() * (10 + 1));
            let isSameNum = rand == num;

            if (isSameNum) {
                console.log("acertaste!");
            } else {
                console.log("fallaste!");
            }

        } else {
            console.log("oye entre 0 y 10...");
        }
    } else {
        console.log("oye no has metido un número...");
    }

} else {
    console.log("oye mete algo")
}
