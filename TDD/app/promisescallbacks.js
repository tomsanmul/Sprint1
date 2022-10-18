//NIVELL 2   
//Exercici 1
//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.

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
    if (Id == "" || Id == "" || isNaN(Id) || isNaN(Id) || Id <= 0){
      return false;
    } 
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
  
  
  
  // Exportació de totes les funcions per el Testing  

  module.exports = {
    getEmployee,
    getSalary

  }
  
  