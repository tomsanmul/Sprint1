//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.

let Saluda = (function(nombre){ 
    console.log("Hola "+nombre);
})("Tomas");


