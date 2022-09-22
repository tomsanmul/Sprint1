//Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.

let Nom = "Tomas";
let Cognom = "Sans";

MostraNom(Nom, Cognom);

function MostraNom(Nom, Cognom) {
    console.log(`El teu nom es: ${Nom}, i el teu Cognom es: ${Cognom}`);
}