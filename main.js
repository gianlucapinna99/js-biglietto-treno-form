let km = prompt("Inserisci il numero di chilometri da percorrere:");
let eta = prompt("Inserisci l'età del passeggero:");

let prezzo = km * 0.21;

if (eta < 18) {
  prezzo = prezzo * 0.8;
} else if (eta >= 65) {
  prezzo = prezzo * 0.6;
}

console.log("Il prezzo del biglietto è: " + prezzo.toFixed(2) + "€");