function prendreSomnifere() {
    alert("TEST");
}
function verifierSomnifere() {
    alert(localStorage.getItem("il te faut un somnifère "));

    if (localStorage.getItem("somnifere") === "oui") {
        document.getElementById("somnifere").style.display = "block";
    }
}