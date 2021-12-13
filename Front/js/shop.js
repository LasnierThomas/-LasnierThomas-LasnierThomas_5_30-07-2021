// On récupere le Cart pour l'utiliser

let myCart = new Cart();
myCart.content.forEach(function (oneProduct) {
    let myProduct = new DomManager(oneProduct);
    myProduct.insertInShopPage();
});
DomManager.insertInPricePage(myCart.totalPrice);

//Validation de la commande
document.getElementById("summit").addEventListener("click", function (event) {
    event.preventDefault();

    let form = document.getElementById("contact-form");

    let formContact = new FormData(form);

    // Creation des regexp pour le nom
    form.firstName.addEventListener("change", function () {
        validFirstName(this);
    });
    
    const validFirstName = function (inputFirstName) {
        let firstNameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
        let testFirstName = firstNameRegExp.test(inputFirstName.value)
        let small = inputFirstName.nextElementSibling;
    
        if (testFirstName) {
            small.innerHTML = "Nom valide"
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        }
        else {
            small.innerHTML = "Nom non valide "
            small.classList.remove('text-sucess');
            small.classList.add('text-danger');
        }
    }
        
    
    // Creation des regexp pour le prénom
    form.lastName.addEventListener("change", function () {
        validLastName(this);
    });
    
    const validLastName = function (inputLastName) {
        let lastNameRegExp = new RegExp('^[a-zA-Z-\s]+$', 'g');
        let testLastName = lastNameRegExp.test(inputLastName.value)
        let small = inputLastName.nextElementSibling;
    
        if (testLastName) {
            small.innerHTML = "Prénom valide "
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        }
        else {
            small.innerHTML = "Prénom non valide "
            small.classList.remove('text-sucess');
            small.classList.add('text-danger');
        }
    }
    
    // Creation des regexp pour ville
    form.address.addEventListener("change", function () {
        validAddress(this);
    });
    
    const validAddress = function (inputAddress) {
        let addressRegExp = new RegExp('([0-9]{2,5})+([ a-zA-Z0-9,-]+)', 'g');
        let testAddress = addressRegExp.test(inputAddress.value)
        let small = inputAddress.nextElementSibling;
    
        if (testAddress) {
            small.innerHTML = "Adresse valide"
            small.classList.remove('text-danger');
            small.classList.add('text-success');
        }
        else {
            small.innerHTML = "Adresse non valide"
            small.classList.remove('text-sucess');
            small.classList.add('text-danger');
        }
    }
    
        // Creation des regexp pour ville
        form.city.addEventListener("change", function () {
            validCity(this);
        });
    
        const validCity = function (inputCity) {
            let cityRegExp = new RegExp('([0-9]{2,5})+([ a-zA-Z0-9,-]+)', 'g');
            let testCity = cityRegExp.test(inputCity.value)
            let small = inputCity.nextElementSibling;
    
            if (testCity) {
                small.innerHTML = "Code postal et ville valide"
                small.classList.remove('text-danger');
                small.classList.add('text-success');
            }
            else {
                small.innerHTML = "Code postal et/ou ville non valide"
                small.classList.remove('text-sucess');
                small.classList.add('text-danger');
            }
        }
    
    
        // Creation des regexp pour l'email 
        form.email.addEventListener("change", function () {
            validEmail(this);
        });
    
        const validEmail = function (inputEmail) {
            let emailRegExp = new RegExp('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 'g');
            let testEmail = emailRegExp.test(inputEmail.value)
            let small = inputEmail.nextElementSibling;
    
            if (testEmail) {
                small.innerHTML = "Adresse email valide"
                small.classList.remove('text-danger');
                small.classList.add('text-success');
            }
            else {
                small.innerHTML = "Adresse email non valide"
                small.classList.remove('text-sucess');
                small.classList.add('text-danger');
            }
        }


    //on récupère les données du formulaire

    let lastName = formContact.get("lastName");
    let firstName = formContact.get("firstName");
    let city = formContact.get("city");
    let address = formContact.get("address");
    let email = formContact.get("email");

    //On formate les données pour l'API

    let contactObject = {
        lastName: lastName,
        firstName: firstName,
        city: city,
        address: address,
        email: email
    };

    // création variable qui permet d'ajouter chaque produit dans un tableau du panier

    let products = [];
    myCart.content.forEach(function (oneProduct) {
        products.push(oneProduct._id);
    });

    let myApi = new API();



    // On envois les données à l'API et on ajoute les données dans les local storage

    myApi.postCommand(contactObject, products).then(function (response) {
        
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("commandNumber", response.orderId);
        
    });
    if (validFirstName(form.firstName) && validLastName(form.lastName) && validAddress(form.address) && validCity(form.city) && validEmail(form.email)){
        window.location = "confirmation.html";
    }


       
    

});





