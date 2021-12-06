//On viens récuprer l'API pour l'utiliser

let myApi = new API();

// On crée une variable pour récuprer le bon produit dans la fenetre de recherche

const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
let id = urlParams.get("id");

// On dit que si on a le bon id cela affiche le produit sinon on retourne a la page index

myApi.getOneProduct(id).then(function(oneProduct){
    if(Object.keys(oneProduct).length !== 0){
        
        let myproduct = new DomManager(oneProduct);
        myproduct.insertInProduct();
    }
    else {
        window.location.href = "../index.html";
    }
});
