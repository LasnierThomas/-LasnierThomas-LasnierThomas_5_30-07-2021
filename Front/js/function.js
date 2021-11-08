function removeItem(id){
    let myApi = new API()
    myApi.getOneProduct(id).then(function(oneProduct){
        let myCart = new Cart()
        myCart.remove(oneProduct)
        location.reload()
    })
}