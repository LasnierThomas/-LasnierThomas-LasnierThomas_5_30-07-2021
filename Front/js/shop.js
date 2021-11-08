let myCart = new Cart()
    myCart.get()

myCart.content.forEach(function(oneProduct) {
    let myProdcut = new DomManager(oneProduct)
    myProdcut.insertInShopPage()
})

