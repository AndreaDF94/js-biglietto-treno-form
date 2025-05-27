// script.js - versione migliorata con Bootstrap e commenti logici

document.getElementById("ticket-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const cognome = document.getElementById("cognome").value.trim();
    const km = parseFloat(document.getElementById("chilometri").value);
    const sconto = document.getElementById("sconto").value;

    const prezzoKm = 0.21;
    let prezzo = km * prezzoKm;

    if (sconto === "studente") {
        prezzo *= 0.8;
    } else if (sconto === "over65") {
        prezzo *= 0.6;
    }

    const prezzoFinale = prezzo.toFixed(2);

    const output = document.getElementById("output");
    output.innerHTML = `
        <div class="card border-success shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Biglietto del Treno</h5>
                <p class="card-text"><strong>Nome:</strong> ${nome}</p>
                <p class="card-text"><strong>Cognome:</strong> ${cognome}</p>
                <p class="card-text"><strong>Chilometri:</strong> ${km}</p>
                <p class="card-text"><strong>Sconto:</strong> ${sconto}</p>
                <hr>
                <h4 class="text-success">Prezzo: € ${prezzoFinale}</h4>
            </div>
        </div>
    `;
});
