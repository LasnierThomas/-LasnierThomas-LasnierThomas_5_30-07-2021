let myCart = new Cart()
myCart.get()

myCart.content.forEach(function(oneProduct){
    let myProduct = new DomManager(oneProduct)
    myProduct.insertInShopPage()
})

document.getElementById("summit").addEventListener("click", function (event) {
    event.preventDefault()

})
let form = document.getElementById("contact-form")
let formContact = new FormData(form)


//on récupère les données

let lastName = formContact.get("lastName")
let firstName = formContact.get("firstName")
let city = formContact.get("city")
let address = formContact.get("address")
let email = formContact.get("email")

//On formate les données pour l'API

let contactObject = {
    lastName: lastName,
    firstName: firstName,
    city: city,
    address: address,
    email: email
}

    let myApi = new API()
    let teddiesHere = document.getElementById("teddies-here")
    
    let btnSummitValidation = document.querySelector("#submit-validation")
    btnSummitValidation.addEventListener("click", function (){
        if(teddiesHere.length > 0){
            
            document.location = "confirmation.html"
        }
    })

    


//Envois des données dans le local storage

let btnSummit = document.querySelector("#summit");

btnSummit.addEventListener("click", function () {
    localStorage.setItem("lastName", document.querySelector("#lastName").value)
    localStorage.setItem("firstName", document.querySelector("#firstName").value)
    localStorage.setItem("address", document.querySelector("#address").value)
    localStorage.setItem("city", document.querySelector("#city").value)
    localStorage.setItem("email", document.querySelector("#email").value)

    document.querySelector("#lastName").innerHTML = localStorage.getItem("lastName");
    document.querySelector("#firstName").innerHTML = localStorage.getItem("firstName");
})