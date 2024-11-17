let form = document.querySelector("form")
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")
let invalidEmail = document.querySelector(".email")
let invalidContraseña = document.querySelector(".contraseña")

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    if (email.value === ""){
        alert("Por favor complete el campo Email")
        
    }

    if (contraseña.value === ""){
        alert("Por favor complete el campo Contraseña")
   
    }
    this.submit()
})