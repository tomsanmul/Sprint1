const {
  retornaDoble
} = require('../app/asyncawaits.js');


//---------------------------------------------------------------------------------------------------------------
//Nivell 2 Exercici 1 
//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.

jest.useFakeTimers();
jest.spyOn(global, "setTimeout");

describe("Comprovem el doble de un numero en 2 segons", () => {
  test("El doble de 2 es 4", () => {
    expect(retornaDoble(2)).resolves.toBe(4);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 2000);

    expect(retornaDoble("qualsevolaltrecosa")).rejects.toMatch("Error, algún nombre no es numèric.");
  });
});


//---------------------------------------------------------------------------------------------------------------
//Nivell 2 Exercici 2
//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.









//---------------------------------------------------------------------------------------------------------------
//Nivell 2 Exercici 3
//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
