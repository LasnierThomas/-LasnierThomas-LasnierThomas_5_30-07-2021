//On viens récuprer l'API pour l'utiliser

let myApi = new API();

// On boucle pour afficher tous les produit de l'API

myApi.getAllProducts().then(function(allProducts){
    allProducts.forEach(function(oneProduct){
        let myProduct = new DomManager(oneProduct);
        myProduct.insertInIndex();
    });
});


