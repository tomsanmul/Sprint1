//Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.

let Cocina = false;  //cambiar a TRUE / FALSE per imprimir el missatge depenent si la promesa es resol

let promise = new Promise(function (resolve, reject) {
    if (!Cocina) {
        resolve("Cocinando macarrones...");
    } else {
        reject(new Error("Error! Macarrones cocinados"));
    }
});

promise.then(resultat => {
    console.log(resultat);
})
.catch(err => {
    console.log(err.message);
});


//Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback 
//i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.