//Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.


function Cocinar(Cocina) {
    return new Promise(function (resolve, reject) {

        if (!Cocina) {
            resolve("Cocinando macarrones...");
        } else {
            reject(new Error("Error! Macarrones cocinados"));
        }
    });
}


Cocinar(false) //cambiar a TRUE / FALSE per imprimir el missatge depenent si la promesa es resol
    .then(resultat => {
        console.log(resultat);
    })
    .catch(err => {
        console.log(err.message);
    });




//Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback 
//i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.


const VerificasiesParell = (numero, Callback) => {
    if (numero % 2 == 0) {
        Callback(`El número ${numero} es parell`);
    } else {
        Callback(`El número ${numero} es imparell`);
    }

}

function MostraResultat(resultat) {
    console.log(resultat);
}

VerificasiesParell(4, MostraResultat);



//Exercici 1
//Donats els objectes employees i salaries, crea una arrow function getEmployee() 
//que retorni una Promise efectuant la cerca en l'objecte pel seu id.

let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


const getEmployee = (Id) => {
    return new Promise(function (resolve, reject) {
        let encontrado = false;
        let i=0;
        while ((i < employees.length) && (!encontrado)) {
            if (Id == employees[i].id) {
                encontrado = true;
                resolve(employees[i]);
            }
            i++;
        }

        if (!encontrado) {
            reject(new Error(`No s'ha trobat el ID ${Id} en l'objecte Employees`));
        }
    });
}

getEmployee(1)
.then(Objemploye => {
    console.log(Objemploye);
})
.catch(err => {
    console.log(err.message);
});
