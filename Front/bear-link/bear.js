console.log("je suis connecté");

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
let id = urlParams.get("id")
sessionStorage.setItem("id", id)




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
            document.getElementById("add-cart").addEventListener("click", function(){
                console.log("Cet élément est bien ajouté au panier")
                sessionStorage.setItem("cart", id)
                console.log("Voici le contenu du teddy", sessionStorage.getItem("cart"))
    
            })
        })

               
    })

function Teddies ( name, price, id, picturePath){
    this.name = name;
    this.price = price;
    this.id = id;
    this.picturePath = picturePath;
}

let teddy1 = new Teddies ("Norbert", 29, "?id=5be9c8541c9d440000665243", "http://127.0.0.1:5501/Front/bear-link/bear1.html?id=5be9c8541c9d440000665243");
let teddy2 = new Teddies ("Arnold", 39, "?id=5beaa8bf1c9d440000a57d94", "http://127.0.0.1:5501/Front/bear-link/bear1.html?id=5beaa8bf1c9d440000a57d94");
let teddy3 = new Teddies ("Lenny and Carl", 59, "?id=5beaaa8f1c9d440000a57d95", "http://127.0.0.1:5501/Front/bear-link/bear1.html?id=5beaaa8f1c9d440000a57d95");
let teddy4 = new Teddies ("Gustav", 45, "?id=5beaabe91c9d440000a57d96", "http://127.0.0.1:5501/Front/bear-link/bear1.html?id=5beaabe91c9d440000a57d96");
let teddy5 = new Teddies ("Garfunkel", 55, "?id=5beaacd41c9d440000a57d97", "http://127.0.0.1:5501/Front/bear-link/bear1.html?id=5beaacd41c9d440000a57d97");   



