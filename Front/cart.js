function getCart() {
    let totalShop = JSON.parse(localStorage.getItem("cart"))
    if (totalShop === null) {
        totalShop = []
    }
    return totalShop
}


function addToCart(teddie) {
    let cart = getCart()
    cart.push(teddie)
    localStorage.setItem("cart", JSON.stringify(cart))
}

