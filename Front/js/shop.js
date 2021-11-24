// On récupere le Cart pour l'utiliser

let myCart = new Cart()
myCart.content.forEach(function(oneProduct){
    let myProduct = new DomManager(oneProduct)
    myProduct.insertInShopPage()
})
DomManager.insertInPricePage(myCart.totalPrice)

//Envois des données dans le local storage
document.getElementById("summit").addEventListener("click", function (event) {
    event.preventDefault()  

let form = document.getElementById("contact-form")
let formContact = new FormData(form)


//on récupère les données du formulaire

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

// création variable qui permet d'ajouter chaque produit dans un tableau du panier

    let products = []
    myCart.content.forEach(function (oneProduct){
        products.push(oneProduct._id)
    })

    let myApi = new API()

// On ajoute les données dans les local storage

    myApi.postCommand(contactObject, products).then(function (response) {
        console.log(response)
        localStorage.setItem("lastName", lastName)
        localStorage.setItem("firstName", firstName)
        localStorage.setItem("commandNumber", response.orderId)
        window.location = "confirmation.html"
    })

})

    



