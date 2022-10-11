  function validapassword(password){
    //mínim 8 caracters longitud
    let LongitudValida = false;
    if (password.length >= 8) {LongitudValida = true};

    //mínim 1 lletra
    let TieneLetra = false;
    let alfabet = "abcdefghijklmnopqrstuvwxyz";
    for (const letter of alfabet){
      if(password.toLowerCase().includes(letter)){
        TieneLetra = true;
      }
    }

    if ( LongitudValida && TieneLetra) return true; else return false; 

    
  }

  module.exports = validapassword;

/*function suma(a, b) {
    return a + b;
  }
  module.exports = suma;
*/

  /*
function resta(a, b) {
    return a - b;
  }
  module.exports = resta;

  function multiplica(a, b) {
    return a * b;
  }
  module.exports = multiplica;

  function divideix(a, b) {
    return a / b;
  }
  module.exports = divideix;
  */