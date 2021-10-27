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

class DomManager{
    constructor(oneProduct){
        this.oneProduct = oneProduct
    }

    insertInIndex(){
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
                                    <p class="box-price">${this.oneProduct.price /100}€</p>
                                </div>
                            </div>
                        </a>`
        teddiesHere.innerHTML += teddies
    }
}