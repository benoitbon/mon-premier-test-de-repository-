function prendreSomnifere() {
    localStorage.setItem("somnifere", "oui");
    alert("Tu as obtenu un somnifère !");
}

function verifierSomnifere() {
    if (localStorage.getItem("somnifere") === "oui") {
        document.getElementById("somnifere").style.display = "block";
    }
}