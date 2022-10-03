//NIVELL 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function EscriureFitxer(fitxer, frase) {
    let fs = require('fs');
    fs.readFile(fitxer, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            console.log(data);
        }
    });


    fs.appendFile(fitxer, frase, function (err) {
        // la funcion es la que maneja lo que sucede despues de termine el evento
        if (err) {
            return console.log(err);
        }
    });

    /*
    fs.writeFile(fitxer, frase, function (err) {
        // la funcion es la que maneja lo que sucede despues de termine el evento
        if (err) {
            return console.log(err);
        }
    });
    */
}


            let fitxer = "archivo.txt";
            let frase = "Això es una prova2";

            EscriureFitxer(fitxer, frase);