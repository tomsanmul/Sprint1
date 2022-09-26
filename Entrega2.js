//Exercici 1
//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

(AutoArrowfunction = () => {
    let x = 1;
    let y = 2;
    console.log(x + y);
})();


//Exercici 2.1
//Crea una arrow function que, rebent un paràmetre, retorni un objecte amb un atribut que tingui com a valor el paràmetre rebut.

const Arrfuncio = (param) => {
    let myObj = new Object();
    myObj.color = param;
    return (myObj);
}

console.log(Arrfuncio("vermell"));


//Exercici 2.2
//Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada. 
//La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'. Invoca el mètode dirNom des de fora de la classe.

class Persona {
    constructor(nom) {
        this.nom = nom;
    }

    dirNom() {
        console.log(this.nom);
    }
}

let parametre = "Tomas";
let persona = new Persona(parametre).dirNom();


//Exercici 3.1
//Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

//NO ENTENC L'ENUNCIAT. Em recorda un dels exercics del curs passat, que creavem una classe abstracte "Edifici", i la instanciavem desde altres clases ("Hotels", "Cinemes", "Hospitals"...)
//Mes o menys era així, pero es que no entenc la part final de l'enunciat.

let Hotels = [];

class EdificiAbstracte {
    constructor(nom, plantes, superficie) {
        this.nom = nom;
        this.plantes = plantes;
        this.superficie = superficie;
    }

    getnom() {
        return this.nom;
    }

    getplantes() {
        return this.plantes;
    }

    getsuperficie() {
        return this.superficie;
    }

    CostVigilancia() {

        return (1500);

    }


}

class Hotel extends EdificiAbstracte {
    constructor(nom, plantes, superficie, habitacions) {
        super(nom, plantes, superficie);
        this.habitacions = habitacions;
    }

    CostserveiHabitacions() {
        return (1200);
    }
}


function CreateObject() {
    let hotel = new Hotel("Hotel Hilton", "22", "73.858 m²", 583);
    Hotels.push(hotel);
    return (0);
}


CreateObject();
console.log(Hotels);