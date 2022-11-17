import '../app/arrowfunctions.js';

//Nivell 2 Exercici 2
//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. 
//dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.


let persona = jest(new Persona("Tomas").dirNom());
// The mock function is called twice
expect(persona.mock.results.value.toBe(2));



//Nivell 2 Exercici 2
//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.