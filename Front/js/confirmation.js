// On récupere les données du local storage pour les transmettre à la page

document.querySelector("#lastName").innerHTML = localStorage.getItem("lastName")
document.querySelector("#firstName").innerHTML = localStorage.getItem("firstName")
document.getElementById("numberOrder").innerHTML = localStorage.getItem("commandNumber")

