let myApi = new API()

const querystring = window.location.search;
const urlParams = new URLSearchParams(querystring);
let id = urlParams.get("id")

myApi.getOneProduct(id).then(function(oneProduct){
    if(Object.keys(oneProduct).length !== 0){
        
        let myproduct = new DomManager(oneProduct)
        myproduct.insertInProduct()
    }
    else {
        window.location.href = "../index.html";
    }
})
