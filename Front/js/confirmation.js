let myApi = new API ()

let userName = document.querySelector("#lastName").innerHTML = localStorage.getItem("lastName") 
let userFirestName =  document.querySelector("#firstName").innerHTML = localStorage.getItem("firstName")

myApi.postCommand(contact).then (function(){
    userName + userFirestName
})


