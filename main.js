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
console.log(`Hai ${age} anni e vuoi viaggiare per ${km}`)

//SCONTISTICHE

const discountMinors = 20; //Sconto minorenni
const discountOlders = 40; //Sconto over 65









