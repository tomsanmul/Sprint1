//Nivell1:
//Exercici1.1:
// Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre.

let Nom = "Tomas";
MostraNom(Nom);

function MostraNom(Nom) {
    console.log(Nom);
}


//---------------------------------------------------------------------------------------------------------------
//Nivell2:
//Exercici 2.1:
//Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

Nom = "Tomas";
let Cognom = "Sans";

MostraNomiCognom(Nom, Cognom);

function MostraNomiCognom(Nom, Cognom) {
    console.log(`El teu nom es: ${Nom}, i el teu Cognom es: ${Cognom}`);
}


//---------------------------------------------------------------------------------------------------------------
//Nivell2:
//Exercici 2.2:
//Invoca una funció que retorni un valor des de dins d'una template literal.

let numero = `La suma de 1 + 2 es: ${Mostra()}`;
console.log(numero);

function Mostra() {
    let x = 1;
    let y = 2;
    return (`${x+y}`);
}


//--------------------------------------------------------------------------------------------------------------------------
//Nivell3:
//Exercici 3.1:
//Crea una matriu de deu funcions i emplena-la mitjançant un bucle de manera que cada funció compti del 0 al 9 per la consola. 
//Invoca cada funció de l'array iterativament. Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.

let array_de_funcions = [];

for (let i = 0; i <= 9; i++) {

    array_de_funcions.push(function () {
        for (j = 0; j <= 9; j++) {
            console.log("comptant..." + j);
        }
    })

}

for (let j = 0; j < array_de_funcions.length; j++) {
    console.log("Funcio " + j);
    array_de_funcions[j]();
}


//--------------------------------------------------------------------------------------------------------------------------
//Exercici 3.2:
//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

Nom = (function(nombre){ 
    console.log(nombre);
})("Tomas");


