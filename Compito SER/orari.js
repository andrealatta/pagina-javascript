function creaCard(linea, orario){
    let riga = document.getElementById("riga");
    let div = document.createElement("div");   
    let p1 = document.createElement("p");   
    let p2 = document.createElement("p");
    p1.innerHTML = `Linea: ${linea}`;
    p2.innerHTML = `Orario: ${orario}`;
    p1.classList.add("text-bg-primary", "p-2", "m-1");
    p2.classList.add("text-bg-secondary", "p-2", "m-1");
    div.classList.add("card", "m-2", "p-3"); 
    div.appendChild(p1);
    div.appendChild(p2);
    riga.appendChild(div);
}

function cerca(){
    let numeroFermata =  document.getElementById("input").value;
    if (!numeroFermata) {
        alert("Per favore inserisci un numero di fermata.");
        return;
    }

    let URL = "https://gpa.madbob.org/query.php?stop=" + numeroFermata;

    fetch(URL)
    .then(x => x.json())
    .then(y => {
        let riga = document.getElementById("riga");
        riga.innerHTML = ""; 
        y.forEach(passaggio => {
            creaCard(passaggio.line, passaggio.hour);
        });
    })
    .catch(error => {
        alert("Errore nella richiesta dei dati.");
    });
}
