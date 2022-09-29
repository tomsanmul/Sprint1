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



getEmployee(1)
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