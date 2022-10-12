
function suma(a, b) {
  if (a == "" || b == "" || isNaN(a) || isNaN(b) ){
    return false;
  } 
  return a + b;
}

function resta(a, b) {
  if (a == "" || b == "" || isNaN(a) || isNaN(b) ){
    return false;
  } 
  return a - b;
}

function multiplica(a, b) {
  if (a == "" || b == "" || isNaN(a) || isNaN(b) ){
    return false;
  } 
  return a * b;
}

function divideix(a, b) {
  if (a == "" || b == "" || isNaN(a) || isNaN(b) ){
    return false;
  } 
  return a / b;
}

module.exports = {
  suma,
  resta,
  multiplica,
  divideix
}

