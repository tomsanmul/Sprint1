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