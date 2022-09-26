//Exercici 1
//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

(AutoArrowfunction = () => {
    let x = 1;
    let y = 2;
    console.log(x+y);
})();


//Exercici 2.1
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const Arrfuncio = (param) => {
    let  myObj = new Object();
    myObj.color = param;

    return (myObj);
  }

  console.log(Arrfuncio("vermell"));