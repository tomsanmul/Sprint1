
//Crea els tests corresponents per verificar el funcionament de les dues funcions 
//de l'exercici Promises i Callbacks N1 E2.

describe('Verificar funcionament de getEmployee (Exercici Promises i Callbacks)', () => {
    test('El Id no debe ser vacío', () => {
      expect(getEmployee("")).toBe(false);
    });
  
    test('El Id 1 debe ser numérico', () => {
      expect(getEmployee("alpha")).toBe(false);
    });
  
    test('El Id 1 debe ser numérico y mayor que 0', () => {
      expect(getEmployee("-1")).toBe(false);
    });
  
  
   //Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici 
   //Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
/*  
  
    test('El Objeto Id 1 Employee debe coincidir con el salario de Id 1 y salario 4000', () => {
      const Obj = {id: 1, name: 'Linux Torvalds' };
      expect(getSalary(Obj)).toEqual({id: 1, salary: 4000});
    });
  
    
  //Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.
  describe(`Tests del getEmployee`, () => {
    test(`Espera simplement que torni una promise`, () => {
        expect(getEmployee(2)).toBeInstanceOf(Promise);
    });
});
    
*/
  //--------------------------------------------------------------------------------------------------------------
  //Nivell 2 
  //Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
  //Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
  //Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.
  
  
