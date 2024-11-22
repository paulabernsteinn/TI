let form = document.querySelector(".form_register")
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")

let invalidEmail = document.querySelector(".email")
let invalidPassword = document.querySelector(".contraseña")

form.addEventListener ("submit",function(event){
    event.preventDefault();
    let errors = false
    if(email.value === "" ){
        invalidEmail.innerText = "Por favor complete el campo email";
        invalidEmail.style.display= "Block";
        errors = true
    }else
    invalidEmail.style.display= "None";
    
    if(contraseña.value === ""){
        invalidPassword.innerText = "Por favor complete el campo Password";
        invalidPassword.style.display= "Block"
        errors = true

    }else
    invalidPassword.style.display= "None";


    if(!errors){
    this.submit()
    }
})