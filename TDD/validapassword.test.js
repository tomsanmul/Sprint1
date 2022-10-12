const validapassword = require('./validapassword')
//const resta = require('./funcions');
//const multiplica = require('./funcions');
//const divideix = require('./funcions');

/*
test('suma 2 + 2 es igual a 4', () => {
  expect(suma(2, 2)).toBe(4);
});
*/

/*
console.log(validapassword("") === false);
console.log(validapassword("abc123") === false);
console.log(validapassword("1234567890") === false);
console.log(validapassword("1234567d890") === true);
*/


test('Retorna false si el password es buit', () => {
  expect(validapassword("")).toBe(false);
});

test('Retorna false si la longitud del password es menor de 8 caracteres', () => {
  expect(validapassword("abc123")).toBe(false);
});

test('Retorna false si el password no tiene letras', () => {
  expect(validapassword("1234567890")).toBe(false);
});

test('Retorna false si el password no tiene numeros', () => {
  expect(validapassword("1234567d890")).toBe(true);
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