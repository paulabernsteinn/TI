let form = document.querySelector("form")
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")

const invalidEmail = document.querySelector("email")
const invalidPassword = document.querySelector("contraseña")

form.addEventListener ('submit',function(event){
    event.preventDefault();

    if(email.value == "" ){
        invalidEmail.innerText = "Por favor complete el campo email";
    }

    if(password.value == ""){
        invalidPassword.innerText = "no completaste el password o tiene menos de 3 numeros";
    } 

    if(!errors){
        this.submit()
    }
});