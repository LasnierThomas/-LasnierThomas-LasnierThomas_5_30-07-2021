const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id")
sessionStorage.setItem("id", id)

fetch("http://localhost:3000/api/teddies/" + id)
    .then(function (responce) {
        responce.json().then(function (teddie) {
            let boxTeddies = document.getElementById("table-teddies")
            let newTeddie = `   <tr class="line-object">
                                    <td class="description-object"><img src="${teddie.imageUrl}" alt="ours brun"></td>
                                    <td class="description-object">"${teddie.name}"</td>
                                    <td class="description-object"><button id="bt-moin">-</button><span id="nb">1</span><button id="bt-plus">+</button></td>
                                    <td class="description-object">${teddie.price /100}€</td>
                                    <td class="description-object"><i class="fas fa-trash"></i></td>
                                </tr>`
            boxTeddies.innerHTML += newTeddie
        })
    })

let totalShop = JSON.parse(sessionStorage.getItem("cart"))
    if (totalShop === null){
        totalShop = []
    };