/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
    Questo richiederà un minimo di ricerca. */

//--STEPS--//

//INFO BASE

const ticketCost = 0.21; //Prezzo base €/km
console.log(`Il prezzo del biglietto è di ${ticketCost}€/km`)

//RICHIESTA DATI

const age = prompt("Qual'è la tua età?") //Richiesta dell'età
const km = prompt("Per quanti km vuoi viaggiare?") //Richiesta del percorrimento dei km
console.log(`Hai ${age} anni e vuoi viaggiare per ${km}km`)

//SCONTISTICHE

const discountMinors = 20; //Sconto minorenni
const discountOlders = 40; //Sconto over 65

if(age <= 17) {
    console.log(`In quanto Under 18, hai diritto allo sconto del 20%`);
} else if(age >= 65) {
    console.log(`In quanto Over 65, hai diritto allo sconto del 40%`);
}

//CALCOLO DELLE SCONTISTICHE

const sumDiscMinors = ((ticketCost * km) / 100) * discountMinors; //Calcolo discount Under 18
const sumDiscOlders = ((ticketCost * km) / 100) * discountOlders; //Calcolo discount Older 65

//CALCOLO DEI TOTALI PER PERSONA

const sumMinors = (ticketCost * km) - sumDiscMinors; //Calcolo tot Under 18
const sumOlders = (ticketCost * km) - sumDiscOlders; //Calcolo tot Older 65
const sumFullPrice = (ticketCost * km); //Calcolo tot no discount

if (age <= 17) {
    console.log(`Con lo sconto applicato, il totale da pagare è ${sumMinors.toFixed(2)}€`);
} else if ((age >= 18) && (age <64)) {
    console.log(`Il totale da pagare è di ${sumFullPrice.toFixed(2)}€`);
}  else {
    console.log(`Con lo sconto applicato, il totale da pagare è ${sumOlders.toFixed(2)}€`);
}