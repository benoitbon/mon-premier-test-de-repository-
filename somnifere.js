function prendreSomnifere() {
    localStorage.setItem("somnifere", "oui");
    alert("Tu as obtenu un somnifère !");
}
function verifierSomnifere() {
    alert(localStorage.getItem("il te faut un somnifère "));

    if (localStorage.getItem("somnifere") === "oui") {
        document.getElementById("somnifere").style.display = "block";
    }
}