// Function qui permet de remove un article dans le panier

function removeItem(id){
    let myApi = new API()
    myApi.getOneProduct(id).then(function(oneProduct){
        let myCart = new Cart()
        myCart.remove(oneProduct)
        window.location.reload()
    })
}