console.log("je suis connecté");

fetch("http://localhost:3000/api/teddies") 
    .then(function (responce){
        responce.json().then(function(teddies) {
            let boxTeddies = document.getElementById("teddies-here")
            teddies.forEach(function (teddie) {
                let newTeddy = `<a class="link-box" href="./bear-link/bear1.html?id=${teddie._id}">
                                    <div class="box-article">
                                        <img src="${teddie.imageUrl}" alt="Ours en peluche"> </img>
                                        <div class="box-txt">
                                            <h2>${teddie.name}</h2>
                                            <div class="box-star">
                                                <i class="fas fa-star star-full"></i>
                                                <i class="fas fa-star star-full"></i>
                                                <i class="fas fa-star star-full"></i>
                                                <i class="fas fa-star star-full"></i>
                                                <i class="fas fa-star star-full"></i>
                                            </div>
                                            <p class="box-price">${teddie.price /100}€</p>
                                        </div>
                                    </div>
                                </a>`
                boxTeddies.innerHTML += newTeddy
            })

        })
    })
