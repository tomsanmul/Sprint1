//Exercici 1
//Mostra per la consola el resultat d'una arrow function autoinvocable que sumi dos nombres.

console.log((AutoArrowfunction = () => {
    let x = 1;
    let y = 2;
    return(x + y);
})()); 


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
//En JavaScript no tenim una forma explícita per indicar que una classe és abstracta. 
//Però si podem impedir que sigui instanciada i només heredada d'ella.

class HotelAbstracte {

    constructor(nom, plantes, superficie) {
        if (new.target === HotelAbstracte) {  //Impedim que la classe sigui instanciada i només es pugui heredar d'ella
            throw new Error('Això es una clase Abstracta, no es permet instanciarla directament.');
        }       
        this.nom = nom;
        this.plantes = plantes;
        this.superficie = superficie;
    }

}


function CrearHotel(nom, plantes, superficie) {
    return Object.create(HotelAbstracte.prototype, {
		"nom" : {value: nom},
		"plantes":{value: plantes},
		"superficie":{value: superficie}
	});
}


let ObjHotel1 = CrearHotel("Hotel Hilton", 10, "72.458 m²");
let ObjHotel2 = CrearHotel("Hotel Paris", 6, "33.834 m²");
let ObjHotel3 = CrearHotel("Hotel Ritz", 4, "12.476 m²");

console.log(ObjHotel1);
console.log(ObjHotel2);
<<<<<<< HEAD
console.log(ObjHotel3); 
=======
console.log(ObjHotel3); 



>>>>>>> aa8bfbb33dc4e4c10ca0df7af4671aa1aa2acca5
