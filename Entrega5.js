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
    //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
    let textoUTF8 = fs.readFileSync("archivo.txt", 'utf8');

    //Converteixo el textUTF8 en en Hexadecimal
    let stringHex = Buffer.from(textoUTF8, 'utf8').toString('hex');

    //Escric el fitxer en Hexadecimal
    fs.writeFileSync("archivoHex.txt", stringHex, function (err) {
        if (err) {
            return console.log(err);
        }
    });

    //Converteixo el textUTF8 en Base64
    let string64 = Buffer.from(textoUTF8, 'utf8').toString('base64');

    //Escric el fitxer en base64
    fs.writeFileSync("archivo64.txt", string64, function (err) {
        if (err) {
            return console.log(err);
        }
    });

}

EscriureDosFitxers();


//------------------------------------------------------------------------------------------
//Nivell 3
//Exercici  2
//Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

function Encripta() {

    //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
    let fs = require('fs');
    let textoUTF8 = fs.readFileSync("archivo.txt", 'utf8');

    //Instanciem crypto module
    let crypto = require('crypto');
    // Definim una contraseña   
    const password = 'ESCRIUREAQUILACONTRASENYA';

    const key = crypto.scryptSync(password, 'GfG', 24);
    const iv = Buffer.alloc(16, 0);
    let mykey = crypto.createCipheriv('aes-192-cbc', Buffer.from(key), iv);

    let strEncriptat = mykey.update(textoUTF8, 'utf8', 'hex')
    strEncriptat += mykey.final('hex');

    //Escric el nou fitxer encriptat.txt amb l'encriptació

    fs.writeFileSync("encriptat.txt", strEncriptat, function (err) {
        if (err) {
            return console.log(err);
        }
    });


    //Esborro els altres 3 fitxers:  archivo.txt, archivoHex.txt i archivo64.txt 
    fs = require('fs').promises
    const files = [
        './archivo.txt',
        './archivoHex.txt',
        './archivo64.txt',
    ]
    Promise.all(files.map(file => fs.unlink(file)))
        .then(() => {
            console.log('"archivo.txt" , "archivoHex.txt" i "archivo64.txt" eliminats correctament.')
        })
        .catch(err => {
            console.error('Error al eliminar els fitxers "archivo.txt" , "archivoHex.txt" i "archivo64.txt"', err)
        })
}

Encripta();