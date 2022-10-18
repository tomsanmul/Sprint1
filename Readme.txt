Instruccions per a l'execució de cada part del mòdul 5.
-----------------------------------------------------------

Cada exercici està comentat amb '/*' d'inici i '*/' com a final.
S'ha descomentar cada Exercici, correlativament, i executar-lo d'un en un.
Un cop executat, s'ha de tornar a comentar amb les mateixes '/*'  '*/'. 
Exemple:

//Nivell 1
//Exercici 1
//Crea una funció que, en executar-la, escrigui una frase en un fitxer.
/*
function {....}

Executa funció;
*/



Per al Nivell 3, l'he hagut de DIVIDIR en dos parts:
3a -> PRIMERA PART: Per Desencriptar cada fitxer.
Encriptatfitxer64.txt -> fitxer64.txt   
EncriptatfitxerHex.txt -> fitxerHex.txt


3b -> SEGONA PART: Per Descodificar cada fitxer de nou a UTF8.
fitxer64.txt -> fitxerInicial.txt   
fitxerHex.txt -> fitxerInicial.txt


El motiu es per que que si l'executo del tirón tot, no escriu res al fitxerInicial.txt:
(Inclòs l'he fet amb async - await i promeses i tampoc m'ha surtit).  HEEEEEEEEELP!!!
                                