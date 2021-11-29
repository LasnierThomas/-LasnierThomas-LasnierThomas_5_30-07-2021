// Création d'un class API pour la rappeler plus facilement 

class API {
    constructor() {
        this.url = "http://localhost:3000/api/teddies/"
    }

// On récupere les produits grace au GET

    async getAllProducts() {
        let response = await fetch(this.url)
        return await response.json()
    }

// On récupere l'id des produits grace au GET

    async getOneProduct(id) {
        let response = await fetch(this.url + id)
        return await response.json()
    }

// on récupere le formulaire de contact et les produits vendu    

    async postCommand(contact, products) {
        let toSend = JSON.stringify({contact, products})
        let response = await fetch(this.url + "order", {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: toSend
        })
        return await response.json()
    }


}

//Création d'une class DomManager pour appeler les produit de l'API

class DomManager {
    constructor(oneProduct) {
        this.oneProduct = oneProduct

    }

    // Création du template pour tous les ours
    insertInIndex() {
        let teddiesHere = document.getElementById("teddies-here")
        let teddies = `<a class="link-box" href="./bear-link/bear.html?id=${this.oneProduct._id}">
                            <div class="box-article">
                                <img src="${this.oneProduct.imageUrl}" alt="Ours en peluche"> </img>
                                <div class="box-txt">
                                    <h2>${this.oneProduct.name}</h2>
                                    <div class="box-star">
                                        <i class="fas fa-star star-full"></i>
                                        <i class="fas fa-star star-full"></i>
                                        <i class="fas fa-star star-full"></i>
                                        <i class="fas fa-star star-full"></i>
                                        <i class="fas fa-star star-full"></i>
                                    </div>
                                    <p class="box-price">${this.oneProduct.price / 100}€</p>
                                </div>
                            </div>
                        </a>`
        // Inertion du code teddies et ajouté en fonction du nombre ciblé dans l'API
        teddiesHere.innerHTML += teddies
    }

    // Création du template pour un seul ours 

    insertInProduct() {
        let myProdcut = this.oneProduct
        let boxTeddie = document.getElementById("teddies-page")
        
        boxTeddie.innerHTML = `<img src="${this.oneProduct.imageUrl}"></img>
                                <div class="box-txt">
                                    <select id="color-teddie" class="color-menu" name="color">
                                       ${this.oneProduct.colors.map(function(color){
                                            return `<option value="${color}">${color}</option>`
                                       })}
                                    </select>
                                    <h2>${this.oneProduct.name}</h2>
                                    
                                    <p class="box-price">${this.oneProduct.price / 100}€</p>
                                    <p class="box-info">"${this.oneProduct.description}"</p>
                                        <a href="#" class="btn-shop" id="add-cart">Ajouter au panier</a>
                                </div>`

        document.getElementById("add-cart").addEventListener("click", function () {
            let myCart = new Cart()
            myProdcut.colors = document.getElementById("color-teddie").value
            myCart.add(myProdcut)
        })
    }


// Création du template pour la page Shop

    insertInShopPage() {


        let container = document.getElementById("table-teddies")
        let template = `<tr class="line-object">
                            <td class="description-object"><img src="${this.oneProduct.imageUrl}" alt="ours brun"></td>
                            <td class="description-object">"${this.oneProduct.name}"</td>
                            <td class="description-object">"${this.oneProduct.colors}"</td>
                            <td class="description-object">${this.oneProduct.price / 100}€</td>
                            <td class="description-object"><button onClick="removeItem('${this.oneProduct._id}')" ><i class="fas fa-trash"></i></td></button>
                        </tr>`

        container.innerHTML += template
    }
    

// Création de la funtion pour la partie prix    

    static insertInPricePage() {
        let myCart = new Cart()
        let totalPrice = myCart.totalPrice
        document.getElementById("total-price-product").innerText = totalPrice.toString()
        document.getElementById("total-price").innerText = (totalPrice + 5).toString()
    }
}

//Création de la class Cart
class Cart {
    constructor() {
        this.nameInStorage = "cart"
        this.content = []
        this.totalPrice = 0
        this.get()
    }

// Funtion GET qui permet de récuprer dans le local storage

    get() {
        this.content = localStorage.getItem(this.nameInStorage)
        if (this.content === null) {
            this.content = []
        } else {
            this.content = JSON.parse(this.content)
        }
        this.getTotalPrice()
    }

// Function remove qui permet de supprimer un objet dans le panier

    remove(oneProduct) {
        let indexToRemove = null
        this.content.forEach(function (oneItem, index) {
            if (oneProduct._id === oneItem._id) {
                indexToRemove = index
            }
        })
        if (indexToRemove !== null) {
            this.content.splice(indexToRemove, 1)
            this.save()
        }
    }

// Function qui permet de calculer le prix du panier

    getTotalPrice() {
        this.totalPrice = 0
        this.content.forEach((oneItem,) => {
            this.totalPrice += oneItem.price
        })
        this.totalPrice /= 100
    }

// Function qui sauvegarde le panier après chaque modification    

    save() {
        localStorage.setItem(this.nameInStorage, JSON.stringify(this.content))
    }

// Function qui permet d'ajouter un nouveau produit au local storage    

    add(oneProduct) {
        this.content.push(oneProduct)
        localStorage.setItem(this.nameInStorage, JSON.stringify(this.content))
        this.save()
    }


}





