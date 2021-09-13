console.log("je suis connecté");

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id")
localStorage.setItem("id", id)




fetch("http://localhost:3000/api/teddies/" + id)
    .then(function (responce) {
        responce.json().then(function (teddie) {
            let boxTeddies = document.getElementById("teddies-page")
            boxTeddies.innerHTML = `<img src="${teddie.imageUrl}"></img>
                                    <div class="box-txt">
                                        <form methode="post" action="fichier.php">
                                            <select class="color-menu" name="color">
                                                <option value="">Couleurs</option>
                                                <option value="red">Rouge</option>
                                                <option value="brown">Marron</option>
                                                <option value="white">Blanc</option>
                                            </select>
                                        </form>
                                        <h2>${teddie.name}</h2>
                                        
                                        <p class="box-price">${teddie.price / 100}€</p>
                                        <p class="box-info">"${teddie.description}"</p>
                                            <a href="#" class="btn-shop" id="add-cart">Ajouter au panier</a>
                                    </div>`
            document.getElementById("add-cart").addEventListener("click", function () {
                console.log("Cet élément est bien ajouté au panier")
                addToCart(teddie)
            })
        })
    })


