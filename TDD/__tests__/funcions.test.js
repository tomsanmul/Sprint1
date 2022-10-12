
const { suma, resta, multiplica, divideix } = require('../app/funcions');

//SUMA
test('suma 2 + 2 es igual a 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('Que els parámetres que li pasi no sigui buits', () => {
  expect(suma("", "")).toBe(false);
});

test('Que els parámetres que li pasi no siguin text', () => {
  expect(suma("hola", "th")).toBe(false);
});


//RESTA
test('resta 2 - 1 es igual a 1', () => {
  expect(resta(2, 1)).toBe(1);
});

test('Que els parámetres que li pasi no sigui buits', () => {
  expect(resta("", "")).toBe(false);
});

test('Que els parámetres que li pasi no siguin text', () => {
  expect(resta("hola", "th")).toBe(false);
});


//MULTIPLICA
test('multiplica 2 per 3 es igual a 6', () => {
  expect(multiplica(2, 3)).toBe(6);
});

test('Que els parámetres que li pasi no sigui buits', () => {
  expect(multiplica("", "")).toBe(false);
});

test('Que els parámetres que li pasi no siguin text', () => {
  expect(multiplica("hola", "th")).toBe(false);
});


//DIVIDEIX
test('divideix 4 entre 2 es igual a 2', () => {
  expect(divideix(4, 2)).toBe(2);
});

test('Que els parámetres que li pasi no sigui buits', () => {
  expect(divideix("", "")).toBe(false);
});

test('Que els parámetres que li pasi no siguin text', () => {
  expect(divideix("hola", "th")).toBe(false);
});




//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.
