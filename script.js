// script.js - Calcolo del prezzo del biglietto del treno

// Ascolto l'evento submit del form
document.getElementById('ticket-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita il ricaricamento della pagina

    // 1. Recupero i valori inseriti dall'utente
    const km = parseFloat(document.getElementById('kilometri').value);
    const sconto = document.getElementById('sconto').value;

    // 2. Definisco il prezzo al km
    const prezzoPerKm = 0.21;

    // 3. Calcolo il prezzo base (senza sconti)
    let prezzoFinale = km * prezzoPerKm;

    // 4. Applico lo sconto in base alla selezione dell'utente
    if (sconto === 'studente') {
        // Se lo sconto è studente, applico 20%
        prezzoFinale *= 0.8;
    } else if (sconto === 'over65') {
        // Se lo sconto è over65, applico 40%
        prezzoFinale *= 0.6;
    }
    // Se è "nessuno" non applico sconti

    // 5. Formatto il risultato con massimo 2 decimali
    const prezzoFormattato = prezzoFinale.toFixed(2);

    // 6. Stampo il risultato nella pagina
    document.getElementById('output').innerText = `Il prezzo del biglietto è € ${prezzoFormattato}`;
});
