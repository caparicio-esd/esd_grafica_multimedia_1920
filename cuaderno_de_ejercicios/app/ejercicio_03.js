{
    try {
        // Escribir el ejercicio aquí!
        // Dentro de este bloque try


        let ejercicio03 = function (base, altura) {
            let area = base * altura / 2;
            return area;
        };

        let area = ejercicio03(4, 6);
        let msg = `El área es ${area}`;
        document.querySelector('h1').innerHTML = msg;



    } catch (err) {
        console.log("El ejercicio 03 está devolviendo un error. Checkea el código...");
        console.error(err);
    }
}

