console.log("je suis connecté");

fetch("http://localhost:3000/api/teddies")
    .then(function (responce) {
        responce.json().then(function (teddies) {
            let boxTeddies = document.getElementById("teddies-page")
            teddies.forEach(function (teddie) {
                let newTeddy = `<img src="${teddie.imageUrl}"></img>
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
                                            <a href="#" class="btn-shop">Ajouter au panier</a>
                                    </div>`
                boxTeddies.innerHTML = newTeddy
            })

        })
    })
