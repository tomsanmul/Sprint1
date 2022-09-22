//Invoca una funció que retorni un valor des de dins d'una template literal.


let numero = Mostra();
console.log(numero);


function Mostra() {
    let x = 1;
    let y = 2;
    return (`${x+y}`);
}