// Création d'un class API pour la rappeler plus facilement 

class API {
    constructor() {
        this.url = "http://localhost:3000/api/teddies/"
    }

    async getAllProducts() {
        let response = await fetch(this.url)
        return await response.json()
    }


    async getOneProduct(id) {
        let response = await fetch(this.url + id)
        return await response.json()
    }
}

//Création d'un class DomManager pour appeler les produit de l'API

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
                                    <form methode="post" action="fichier.php">
                                        <select class="color-menu" name="color">
                                            <option value="">Couleurs</option>
                                            <option value="red">Rouge</option>
                                            <option value="brown">Marron</option>
                                            <option value="white">Blanc</option>
                                        </select>
                                    </form>
                                    <h2>${this.oneProduct.name}</h2>
                                    
                                    <p class="box-price">${this.oneProduct.price / 100}€</p>
                                    <p class="box-info">"${this.oneProduct.description}"</p>
                                        <a href="#" class="btn-shop" id="add-cart">Ajouter au panier</a>
                                </div>`
        document.getElementById("add-cart").addEventListener("click", function () {
            let myCart = new Cart()
            myCart.add(myProdcut)
        })

    }

    insertInShopPage() {
        let container = document.getElementById("table-teddies")
        let template = `<tr class="line-object">
        <td class="description-object"><img src="${this.oneProduct.imageUrl}" alt="ours brun"></td>
        <td class="description-object">"${this.oneProduct.name}"</td>
        <td class="description-object">${this.oneProduct.price / 100}€</td>
        <td class="description-object"><button id="delete" ${this.oneProduct._id}><i class="fas fa-trash"></i></td></button>
        </tr>`
        
        container.innerHTML += template
        
        
        document.getElementById("delete").addEventListener("click", function () {
            let myCart = new Cart()
            myProdcut = this.oneProduct

            myProdcut.splice(this.oneProduct,1)
        })
        
    }
    
    
    
}
//Création du local storage pour le panier 
class Cart {
    constructor() {
        this.nameInStorage = "cart"
        this.content = []
        this.get()
    }

    get() {
        this.content = localStorage.getItem(this.nameInStorage)
        if (this.content === null) {
            this.content = []
        }
        else {
            this.content = JSON.parse(this.content)
        }
    }

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

    save() {
        localStorage.setItem(this.nameInStorage, JSON.stringify(this.content))
    }

    add(oneProduct) {
        this.content.push(oneProduct)
        localStorage.setItem(this.nameInStorage, JSON.stringify(this.content))
    }
}





