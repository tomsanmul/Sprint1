//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
/*

function EscriureFitxer(fitxer, frase) {
    let fs = require('fs');

    fs.appendFile(fitxer, frase, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

let fitxer = "archivo.txt";
let frase = "Això es una prova" + "\r\n"; //Frase + salto de linea
EscriureFitxer(fitxer, frase);


//---------------------------------------------------------------------------------------
//Nivell 1
//Exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.


function LlegirFitxer(fitxer) {
    let fs = require('fs');

    fs.readFile(fitxer, 'utf-8', (err, data) => {
        if (err) {
            console.log('error: ', err);
        } else {
            console.log(data);
        }
    });

}

fitxer = "archivo.txt";
LlegirFitxer(fitxer);


//---------------------------------------------------------------------------------------
//Nivell 1
//Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1.

function ComprimirFitxer() {
    let cadena = LlegirFitxer(fitxer);
    console.log(cadena);
}

ComprimirFitxer();
*/

//---------------------------------------------------------------------------------------
//Nivell 1
//Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.



const Imprimir_Missatge = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Això es un missatge amb demora de 1 segon")
        }, 1000);
    });

}


let missatge = await Imprimir_Missatge;
console.log(missatge);
