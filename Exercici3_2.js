//Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.
let Nom = "Tomas";

let X = (function MostraNom(Nom) {
    console.log(Nom);
}
);
