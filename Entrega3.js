//NIVELL 1
//Exercici 1
//Crea una funció que retorni una Promise que invoqui la funció resolve() o reject() que rep. 
//Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge diferent depenent de si la Promise es resol o no.


function cocinar(cocina) {
    return new Promise(function (resolve, reject) {

        if (!cocina) {
            resolve("Cocinando macarrones...");
        } else {
            reject(new Error("Error! Macarrones cocinados"));
        }
    });
}


cocinar(false) //cambiar a TRUE / FALSE per imprimir el missatge depenent si la promesa es resol
    .then(resultat => {
        console.log(resultat);
    })
    .catch(err => {
        console.log(err.message);
    });



//NIVELL 1
//Exercici 2
//Crea una arrow function que rebi un paràmetre i una funció callback 
//i li passi a la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut.


const verificasiesParell = (numero, Callback) => {
    if (numero % 2 == 0) {
        Callback(`El número ${numero} es parell`);
    } else {
        Callback(`El número ${numero} es imparell`);
    }

}

function mostraResultat(resultat) {
    console.log(resultat);
}

verificasiesParell(4, mostraResultat);



//NIVELL 2   
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


const getEmployee = (id) => {
    return new Promise(function (resolve, reject) {
        let encontrado = false;
        let i = 0;
        while ((i < employees.length) && (!encontrado)) {
            if (id == employees[i].id) {
                encontrado = true;
                resolve(employees[i]);
            }
            i++;
        }

        if (!encontrado) {
            reject(new Error(`No s'ha trobat l'empleat Id ${id} en l'objecte Employees`));
        }
    });
}



getEmployee(1)
    .then(objEmploye => {
        console.log(`Empleat trobat: Id: ${objEmploye.id} - Nom: ${objEmploye.name}`);
        let empleat = new Object;
        empleat = objEmploye;
    })
    .catch(err => {
        console.log(err.message);
    });


//NIVELL 2   
//Exercici 2
//Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.


const getSalary = (employee) =>
    new Promise((resolve, reject) => {
        //usar un metode d'arrays per trobar el que busques
        let salari = salaries.find((empleat) => empleat.id == employee.id);
        salari ? resolve(salari) : reject(new Error(`No s'ha trobat l'objecte id: ${employee.id}`));
    });


getSalary(employees[0]).then((salari) =>
    console.log(`El salari de ${employees[0].name} es: ${salari.salary}`)
);


//NIVELL 2    
//Exercici 3
//Invoca la primera funció getEmployee() i després getSalary() 
//niant l'execució de les dues promises de manera que es retorni per la consola el nom de l'empleat/da i el seu salari.

//Invoco primer la funció getEmployee()
getEmployee(1)
    .then(objemploye => { //Amb el resultat de ObjEmploye, crido getSalary()
        getSalary(objemploye).
        then(objSalary => {
                console.log(`Nom Empleat: ${objemploye.name}. Salari: ${objSalary.salary}`);
            });
    })
    .catch(err => {
        console.log(err.message);
    });


// NIVELL 3:
//- Exercici 1
//Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el mostri per la consola.

//Poso un Id 5 que no existeix per forçar el catch: 
getEmployee(6)
    .then(objemploye => { //Amb el resultat de ObjEmploye, crido getSalary()
        getSalary(objemploye).
        then(objSalary => {
                console.log(`Nom Empleat: ${objemploye.name}. Salari: ${objSalary.salary}`);
            });
    })
    .catch(err => {
        console.log(err.message);
    });