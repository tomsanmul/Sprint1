const suma = require('./funcions');
//const resta = require('./funcions');
//const multiplica = require('./funcions');
//const divideix = require('./funcions');

test('suma 2 + 2 es igual a 4', () => {
  expect(suma(2, 2)).toBe(4);
});

test('Devolver falso si algun numero es vacío', () => {
  expect(suma("")).toBe(false);
});

test('Devolver falso si se pasa algun carácter en vez de letra', () => {
  expect(suma("a")).toBe(false);
});


/*
test('resta 2 - 1 es igual a 1', () => {
  expect(resta(2, 1)).toBe(1);
});

test('multiplica 2 per 3 es igual a 6', () => {
  expect(multiplica(2, 3)).toBe(1);
});

test('divideix 4 entre 2 es igual a 2', () => {
  expect(divideix(4, 2)).toBe(1);
});
*/