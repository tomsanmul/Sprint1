//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
/*
function EscriureFitxer(fitxer, frase) {
    let fs = require('fs');

    fs.writeFile(fitxer, frase, function (err) {
        if (err) {
            return console.log(err);
        }
        else
        {
            console.log("S'ha creat el fitxerInicial.txt");        
        }
    });
}

let fitxer = "fitxerInicial.txt";
let frase = "Això es una prova d'escritura en un fitxer." + "\r\n"; //Frase + salto de linea
EscriureFitxer(fitxer, frase);
*/


//--------------------------------------------------------------------------------------------
//Nivell 1
//Exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
/*
function LlegirFitxer(fitxer) {
    let fs = require('fs');
    let texto = fs.readFileSync(fitxer, 'utf8');
    console.log(texto);
}
LlegirFitxer("fitxerInicial.txt");
*/


//------------------------------------------------------------------------------------------
//Nivell 1
//Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1.

/*
const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");

function ComprimirFitxer(fitxer) {
  const stream = createReadStream(fitxer);
  stream
    .pipe(createGzip())
    .pipe(createWriteStream(`${fitxer}.gz`))
    .on("finish", () =>
      console.log(`${fitxer} comprimit correctament!`)
    );
}

ComprimirFitxer("fitxerinicial.txt");
*/


//----------------------------------------------------------------------------------------------
//Nivell 2
//Exercici 1
/*
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.
function Repeteix_Missatge() {
    setInterval(() => console.log('Això es una prova amb demora de 1 segon'), 1000);
}

Repeteix_Missatge();
*/


//-----------------------------------------------------------------------------------------
//Nivell 2
//Exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.
/*
function LlistarArxius() {
    const fs = require('fs');
    const os = require("os");
    const userHomeDir = os.homedir();  //retorna la ruta (PATH) del directori Usuari
    let arxius = fs.readdirSync(userHomeDir);
    for (let i = 0; i < arxius.length; i++) {
        console.log(arxius[i]);
    }
}
LlistarArxius();
*/


//---------------------------------------------------------------------------------
//Nivell 3
//Exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.
/*

function EscriureDosFitxers() {

    let fs = require('fs');
    //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
    let textoUTF8 = fs.readFileSync("fitxerInicial.txt", 'utf8');

    //Converteixo el textUTF8 en en Hexadecimal
    let stringHex = Buffer.from(textoUTF8, 'utf8').toString('hex');

    //Escric el fitxer en Hexadecimal
    fs.writeFileSync("fitxerHex.txt", stringHex, function (err) {
        if (err) {
            return console.log(err)
        }
    });
    console.log("S'ha creat el fitxerHex.txt amb éxit.");

    //Converteixo el textUTF8 en Base64
    let string64 = Buffer.from(textoUTF8, 'utf8').toString('base64');

    //Escric el fitxer en base64
    fs.writeFileSync("fitxer64.txt", string64, function (err) {
        if (err) {
            return console.log(err)
        } 
    });
    console.log("S'ha creat el fitxer64.txt amb éxit.");

}

EscriureDosFitxers();
*/


//------------------------------------------------------------------------------------------
//Nivell 3
//Exercici  2
//Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

/*
function Encripta() {

    //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
    let fs = require('fs');
    let textoUTF8 = fs.readFileSync("fitxerInicial.txt", 'utf8');

    //Instanciem crypto module
    let crypto = require('crypto');
    const password = '1234567890123456'; //creem una clau que ha de ser la mateixa per desencriptar
    const key = crypto.scryptSync(password, 'GfG', 24);
    const iv = Buffer.alloc(16, 0); // Inicialitza vector.
    let mykey = crypto.createCipheriv('aes-192-cbc', Buffer.from(key), iv); //crea la clau

    let strEncriptat = mykey.update(textoUTF8, 'utf8', 'hex')
    strEncriptat += mykey.final('hex'); //encripto la nova cadena en l'string strEncriptat

    //Escric el nou fitxer encriptat.txt amb l'encriptació
    fs.writeFileSync("Encriptat.txt", strEncriptat, function (err) {
        if (err) {
            return console.log(err)
        }
    });
    console.log('"fitxerInicial.txt" encriptat correctament a "Encriptat.txt"');


    //Esborro els altres 3 fitxers:  archivo.txt, archivoHex.txt i archivo64.txt 
    fs = require('fs').promises
    const files = [
        './fitxerInicial.txt',
        './fitxerHex.txt',
        './fitxer64.txt',
    ]
    Promise.all(files.map(file => fs.unlink(file)))
        .then(() => {
            
            console.log('"fitxerInicial.txt" , "fitxerHex.txt" i "fitxer64.txt" eliminats correctament.')
        })
        .catch(err => {
            console.error('Error al eliminar els fitxers "fitxerInicial.txt" , "fitxerHex.txt" i "fitxer64.txt"', err)
        })
}

Encripta();
*/


//Nivell 3
//Exercici 3
//Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
/*

function DesEncripta() {

    //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
    let fs = require('fs');
    let textoUTF8 = fs.readFileSync("encriptat.txt", 'utf8');

    let crypto = require('crypto');
    const password = '1234567890123456'; //La clau es la mateixa que per encriptar
    const key = crypto.scryptSync(password, 'GfG', 24);
    const iv = Buffer.alloc(16, 0); // Inicialitza vector.

    let mykey = crypto.createDecipheriv('aes-192-cbc', key, iv);
    let mystr = mykey.update(textoUTF8, 'hex', 'utf8')
    mystr += mykey.final('utf8');

    //Torno a escriure el fitxer inicial fitxerInicial.txt
    fs.writeFile("fitxerInicial.txt", mystr, function (err) {
        if (err) {
            return console.log(err);
        }
    });
    console.log('fitxer "Encriptat.txt" desencriptat correctament a "fitxerInicial.txt"');

}

DesEncripta();
*/