//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.

/*
function escriureFitxer(fitxer, frase) {
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
escriureFitxer(fitxer, frase);
*/


//-----------------------------------------------------------------------------------------------------------------
//Nivell 1
//Exercici 2
//Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
/*
function llegirFitxer(fitxer) {
    let fs = require('fs');
    let texto = fs.readFileSync(fitxer, 'utf8');
    console.log(texto);
}
llegirFitxer("fitxerInicial.txt");
*/


//-----------------------------------------------------------------------------------------------------------------
//Nivell 1
//Exercici 3
//Crea una funció que comprimeixi el fitxer del nivell 1.

/*
const { createReadStream, createWriteStream } = require("fs");
const { createGzip } = require("zlib");

function comprimirFitxer(fitxer) {
  const stream = createReadStream(fitxer);
  stream
    .pipe(createGzip())
    .pipe(createWriteStream(`${fitxer}.gz`))
    .on("finish", () =>
      console.log(`${fitxer} comprimit correctament!`)
    );
}

comprimirFitxer("fitxerinicial.txt");
*/


//------------------------------------------------------------------------------------------------------------------
//Nivell 2
//Exercici 1
//Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.

/*
function repeteix_Missatge() {
    setInterval(() => console.log('Això es una prova amb demora de 1 segon'), 1000);
}

repeteix_Missatge();
*/


//-------------------------------------------------------------------------------------------------------------------
//Nivell 2
//Exercici 2
//Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de l'ordinador utilizant Node Child Processes.

/*
function llistarArxius() {
    const fs = require('fs');
    const os = require("os");
    const userHomeDir = os.homedir();  //retorna la ruta (PATH) del directori Usuari
    let arxius = fs.readdirSync(userHomeDir);
    for (let i = 0; i < arxius.length; i++) {
        console.log(arxius[i]);
    }
}
llistarArxius();
*/


//---------------------------------------------------------------------------------
//Nivell 3
//Exercici 1
//Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, a partir del fitxer del nivell 1.

/*
function escriureDosFitxersCodificats() {

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

escriureDosFitxersCodificats();
*/


//-----------------------------------------------------------------------------------------------------------
//Nivell 3
//Exercici  2
//Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

/*
function encripta(nomFitxer) {

    //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
    let fs = require('fs');
    let textoUTF8 = fs.readFileSync(nomFitxer, 'utf8');

    //Instanciem crypto module
    let crypto = require('crypto');
    const password = '1234567890123456'; //creem una clau que ha de ser la mateixa per desencriptar
    const key = crypto.scryptSync(password, 'GfG', 24);
    const iv = Buffer.alloc(16, 0); // Inicialitza vector.
    let mykey = crypto.createCipheriv('aes-192-cbc', Buffer.from(key), iv); //crea la clau

    let strEncriptat = mykey.update(textoUTF8, 'utf8', 'hex')
    strEncriptat += mykey.final('hex'); //encripto la nova cadena en l'string strEncriptat

    //Escric el nou fitxer encriptat.txt amb l'encriptació
    let nomFitxerFinal = "Encriptat" + nomFitxer;
    fs.writeFileSync(nomFitxerFinal, strEncriptat, function (err) {
        if (err) {
            return console.log(err)
        }
    });

    console.log(`${nomFitxer} encriptat correctament com a: ${nomFitxerFinal}`);

}

encripta("fitxer64.txt");
encripta("fitxerHex.txt");

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
*/




//-----------------------------------------------------------------------------------------------------------------
//Nivell 3
//Exercici 3a    [PRIMERA PART]
//Crea una altra funció que desencripti els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
//NOTA : He dividit en 2 parts aquest tros de codi perque no consegueixo fer-ho tot al mateix temps (alhora).

/*
function desEncripta(nomFitxer) {
    try {
        //Primer llegeixo el fitxer i el copio en una string amb codificació UTF8
        let fs = require('fs');
        let file_descriptor = fs.openSync(nomFitxer);
        let textoUTF8 = fs.readFileSync(nomFitxer, 'utf8');

        let crypto = require('crypto');
        const password = '1234567890123456'; //La clau es la mateixa que per encriptar
        const key = crypto.scryptSync(password, 'GfG', 24);
        const iv = Buffer.alloc(16, 0); // Inicialitza vector.

        let mykey = crypto.createDecipheriv('aes-192-cbc', key, iv);
        let mystr = mykey.update(textoUTF8, 'hex', 'utf8')
        mystr += mykey.final('utf8');

        //Torno a renombrarlo sense "Encriptat"
        let nomFitxerFinal = nomFitxer.substring(9, 25);

        fs.writeFile(nomFitxerFinal, mystr, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        fs.closeSync(file_descriptor);
        console.log(`${nomFitxer} desencriptat correctament a ${nomFitxerFinal}`);
    } catch (error) {
        console.log("Error al desencriptar");
    }
}


desEncripta("Encriptatfitxer64.txt");
desEncripta("EncriptatfitxerHex.txt");
*/


//-----------------------------------------------------------------------------------------------------------------
//Nivell 3
//Exercici 3b  [SEGONA PART]
//Crea una altra descodifiqui els fitxers de l'apartat anterior tornant a generar una còpia de l'inicial.
//----------------------------------------------------------------------------------------------------------
//Aquesta última funció executa la conversió de descodificar el fitxer de base64 i el hexadecimal ->  a UTF8
//El problema es que si les excuto seguidament (després de cridar la funcio de desEncripta de dalt), NO FUNCIONA: Escriu el fitxerInicial.txt buit. 
// Pero per separat SI FUNCIONA. Inclòs he intenta fer-ho també amb ASYNC AWAIT i Promise, i encara que ho he muntat bé, continuava sense funcionar tot alhora. 
//Llavors, per execfutar aquestes 2 últimes lineas, s' ha de comentar la PRIMERA PART

/*
function descodificarFitxer(nomFitxer, codificacio) {
    //Funció que descodifica el fitxers i el torna a escriure en UTF8
    let fs = require('fs');
    let texto = fs.readFileSync(nomFitxer, 'utf8');
    //Converteixo el text base64 en UTF8
    let cadena = Buffer.from(texto, codificacio).toString('utf8');
    //Escric el fitxer en UTF8
    fs.writeFileSync("fitxerInicial.txt", cadena, function (err) {
        if (err) {
            return console.log(err)
        }
    });
    console.log("S'ha creat el fitxerInicial.txt amb éxit.");
}

descodificarFitxer("fitxer64.txt", "base64");
descodificarFitxer("fitxerHex.txt", "hex");
*/
