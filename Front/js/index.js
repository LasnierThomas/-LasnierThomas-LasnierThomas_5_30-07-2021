let myApi = new API()

myApi.getAllProducts().then(function(allProducts){
    console.log(allProducts)
    allProducts.forEach(function(oneProduct){
        let myProduct = new DomManager(oneProduct)
        myProduct.insertInIndex()
        console.log("une prodhuit est affiché: ", oneProduct)
    })
})


