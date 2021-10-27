/*

let cart = getCart()

let totalPrice = 0
cart.forEach(function (teddie) {
    addTeddyInHtml(teddie)
    totalPrice += teddie.price / 100
})

document.getElementById("total-price-product").innerText = totalPrice
document.getElementById("total-price").innerText = totalPrice + 5
function addTeddyInHtml(teddie) {
    let boxTeddies = document.getElementById("table-teddies")
    let newTeddie = `   <tr class="line-object">
                                    <td class="description-object"><img src="${teddie.imageUrl}" alt="ours brun"></td>
                                    <td class="description-object">"${teddie.name}"</td>
                                    <td class="description-object">${teddie.price / 100}€</td>
                                    <td class="description-object"><button id="delete"><i class="fas fa-trash"></i></td></button>
                                </tr>`
    boxTeddies.innerHTML += newTeddie
}


///Fonctione delete......///
function delTeddyInHTML(teddie) {
    let boxTeddies = document.getElementById("table-teddies")
    let newTeddie = `   <tr class="line-object">
                                    <td class="description-object"><img src="${teddie.imageUrl}" alt="ours brun"></td>
                                    <td class="description-object">"${teddie.name}"</td>
                                    <td class="description-object">${teddie.price / 100}€</td>
                                    <td class="description-object"><button id="delete"><i class="fas fa-trash"></i></td></button>
                                </tr>`
    boxTeddies.innerHTML -= newTeddie
    document.getElementById("delete").addEventListener("click", function () {
        console.log("l'objet ce supprime")
        delTeddie(teddie)
    })
}


///Formulaire.....///
let btnSummit = document.querySelector("#summit");
console.log(btnSummit);

btnSummit.addEventListener("click", function () {
    localStorage.setItem("nom", document.querySelector("#name").value)
    localStorage.setItem("prénom", document.querySelector("#prenom").value)
    localStorage.setItem("adresse", document.querySelector("#adresse").value)
    localStorage.setItem("cp", document.querySelector("#cp").value)
    localStorage.setItem("ville", document.querySelector("#city").value)

    document.querySelector("#theName").innerHTML = localStorage.getItem("nom");
    document.querySelector("#theFirstName").innerHTML = localStorage.getItem("prénom");

})
