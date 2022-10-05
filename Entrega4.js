//Nivell 1
//Exercici 1
//Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi per pantalla el nom de l'empleat/da 
//i el seu salari, usant les funcions getEmployee() i getSalary() que has definit a la tasca anterior.


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
        let i = 0;
        while ((i < employees.length) && (!encontrado)) {
            if (Id == employees[i].id) {
                encontrado = true;
                resolve(employees[i]);
            }
            i++;
        }

        if (!encontrado) {
            reject(new Error(`No s'ha trobat l'empleat Id ${Id} en l'objecte Employees`));
        }
    });
}

const getSalary = (Employee) => {
    return new Promise(function (resolve, reject) {
        let encontrado = false;
        let i = 0;
        while ((i < employees.length) && (!encontrado)) {
            if (Employee.id === employees[i].id && Employee.name === employees[i].name) {
                //encontrado
                encontrado = true;
                resolve(salaries[i]).salary;
            }
            i++;
        }

        if (!encontrado) {
            reject(new Error(`No s'ha trobat l'objecte {id: ${Employee.id}, name: id: '${Employee.name}'} en l'objecte Employees`));
        }
    });
}


async function getAsyncEmployee(num) {

    getEmployee(num)
        .then(Objemploye => { //Amb el resultat de ObjEmploye, crido getSalary()
            getSalary(Objemploye).
            then(ObjSalary => {
                    console.log(`Nom Empleat: ${Objemploye.name}. Salari: ${ObjSalary.salary}`);
                })
                .catch(err => {
                    console.log(err.message);
                });
        })
        .catch(err => {
            console.log(err.message);
        });

}

getAsyncEmployee(2);


//------------------------------------------------------------------------------
//Exercici 2
//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

async function funcion_asincrona() {

    let num = Math.floor(Math.random() * 10) + 1;

    ComprovarSiesParell(num)
        .then(result => {
            console.log(`El numero ${num} es ${result}`);
        })
        .catch(err => {
            console.log(err.result);
        });


    return;
}

const ComprovarSiesParell = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 == 0) {
                resolve(`Parell`);
            } else {
                resolve(`Imparell`);
            }
        }, 2000);
    });
}

funcion_asincrona();



//------------------------------------------------------------------------------------------------
////Nivell 2
//Exercici 1
//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.

const RetornaDoble = async (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(numero * 2)
        }, 2000);
    });

}

RetornaDoble(5).then(resultat => {
    console.log(resultat);
});


//--------------------------------------------------------------------------------------------------------------
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

async function SumadelsDobles(numero1, numero2, numero3) {
    let num1 = await RetornaDoble(numero1);
    let num2 = await RetornaDoble(numero2);
    let num3 = await RetornaDoble(numero3);
    return (num1 + num2 + num3);
}

SumadelsDobles(1, 2, 3).then(resultat => {
    console.log(resultat);
});



//------------------------------------------------------------------------------------------------
////Nivell 4
//- Exercici 1
//Força i captura tants errors com puguis dels nivells 1 i 2.

getAsyncEmployee(7);
