//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

function EscriureFitxer(fitxer, frase) {
    let fs = require('fs');

    fs.writeFile(fitxer, frase, function (err) {
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
    let texto = fs.readFileSync(fitxer, 'utf8');
    return (texto);
}

console.log(LlegirFitxer("archivo.txt"));


//---------------------------------------------------------------------------------------
//Nivell 1
//Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1.

function ComprimirFitxer() {
    let AdmZip = require("adm-zip");
    let zip = new AdmZip();
    let texto = LlegirFitxer("archivo.txt");
    zip.addFile("archivo.txt", Buffer.from(texto, "utf8"), "");
    zip.writeZip("archivo.zip");
}

ComprimirFitxer();


//---------------------------------------------------------------------------------------
//Nivell 2
//Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

function Repeteix_Missatge(){
    setInterval(() => console.log('Això es una prova amb demora de 1 segon'), 1000);
}

Repeteix_Missatge();


//-----------------------------------------------------------------------------------------
//Nivell 2
//Exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

function LlistarArxius(){
    const fs = require('fs');
    let arxius = fs.readdirSync("C:/Users/formacio");
    for (let i=0; i<arxius.length;i++){
        console.log(arxius[i]);
    }
}
LlistarArxius();


//---------------------------------------------------------------------------------
//Nivell 3
//Exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

function EscriureDosFitxers() {

    let fs = require('fs');
    //Primer llegeixo el fitxer i el copio en una string
    let textoUTF8 = fs.readFileSync("archivo.txt", 'utf8');

    //Escric el fitxer en Hexadecimal
    let stringHex = Buffer.from(textoUTF8, 'utf8').toString('hex');
    fs.writeFileSync("archivoHex.txt", stringHex, function (err) {
        if (err) {
            return console.log(err);
        }
    });

    //Escric el fitxer en base64
    let string64 = Buffer.from(textoUTF8, 'utf8').toString('base64');
    fs.writeFileSync("archivo64.txt", string64, function (err) {
        if (err) {
            return console.log(err);
        }
    });

}

EscriureDosFitxers();